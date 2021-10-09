import dotenv from 'dotenv'
import fastify from 'fastify'
import axios from 'axios'

dotenv.config()
const server = fastify()

interface WateringParams {
  instance: string
}

interface SensorsWaterAmount {
  [key: string]: number
}

interface CollectionAlert {
  id: number
  evalData: AlertEvalData
}

interface AlertEvalData {
  evalMatches: AlertEvalMatch[]
}

interface AlertEvalMatch {
  tags: AlertEvalMatchTags
}

interface AlertEvalMatchTags {
  instance?: string
  sensor?: string
}

interface Alert {
  EvalData: AlertEvalData
  Settings: AlertSettings
}

interface AlertSettings {
  alertRuleTags: AlertRuleTags
}

interface AlertRuleTags {
  watering?: string
}

server.get<{ Params: WateringParams }>('/api/watering/:instance', async (request, _reply) => {
  const instance = request.params.instance
  const alertsUrl = process.env.ALERT_BASE_URL ?? ''
  const params = { state: 'alerting', dashboardTag: `instance-${instance}` }
  const headers = { Authorization: process.env.ALERT_AUTH_TOKEN ?? '' }
  const response = await axios.get(alertsUrl, { params, headers })
  const alerts: CollectionAlert[] = response.data
  const sensorsConfig: SensorsWaterAmount = {}

  for (const collectionAlert of alerts) {
    const alertUrl = `${process.env.ALERT_BASE_URL}/${collectionAlert.id}`
    const response = await axios.get(alertUrl, { headers });
    const alert: Alert = response.data
    const sensor = alert.EvalData?.evalMatches[0]?.tags.sensor
    const watering = alert.Settings.alertRuleTags.watering

    if (undefined === sensor || undefined === watering || Number.isNaN(watering)) {
      continue
    }

    sensorsConfig[sensor] = Number(watering)
  }

  return sensorsConfig
})

server.listen({ port: 80, host: '0.0.0.0' }, (err, address) => {
  if (err) {
    console.error(err)
    process.exit(1)
  }

  console.log(`Server listening at ${address}`)
})
