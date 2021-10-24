import { HTTPMethods } from 'fastify'

import TriggerWateringCommandHandler from '@application/command/handler/trigger-watering'
import TriggerWateringCommandMessage from '@application/command/message/trigger-watering'
import PlantRepository from '@infrastructure/persistence/plant-repository'

export default (pool: any) => ({
  method: 'POST' as HTTPMethods,
  url: '/plants/:id/trigger-watering',
  handler: async (request: any, reply: any) => {
    const plantId = request.params.id
    const handler = new TriggerWateringCommandHandler(new PlantRepository(pool))
    const message = new TriggerWateringCommandMessage(plantId)
    handler.execute(message)

    reply.statusCode = 204
  }
})
