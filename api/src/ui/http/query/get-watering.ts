import { HTTPMethods } from 'fastify'

import WateringQueryHandler from '@application/query/handler/watering'
import WateringQueryMessage from '@application/query/message/watering'
import PlantRepository from '@infrastructure/persistence/plant-repository'

export default (pool: any) => ({
  method: 'GET' as HTTPMethods,
  url: '/watering/:instance',
  handler: async (request: any, _reply: any) => {
    const instance = request.params.instance

    const handler = new WateringQueryHandler(new PlantRepository(pool))
    const message = new WateringQueryMessage(instance)

    return handler.execute(message)
  }
})
