import { HTTPMethods } from 'fastify'

import CancelWateringCommandHandler from '@application/command/handler/cancel-watering'
import CancelWateringCommandMessage from '@application/command/message/cancel-watering'
import PlantRepository from '@infrastructure/persistence/plant-repository'

export default (pool: any) => ({
  method: 'POST' as HTTPMethods,
  url: '/plants/:id/cancel-watering',
  handler: async (request: any, reply: any) => {
    const plantId = request.params.id
    const handler = new CancelWateringCommandHandler(new PlantRepository(pool))
    const message = new CancelWateringCommandMessage(plantId)
    handler.execute(message)

    reply.statusCode = 204
  }
})
