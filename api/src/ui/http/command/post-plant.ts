import { HTTPMethods } from 'fastify'

import CreatePlantCommandHandler from '@application/command/handler/create-plant'
import CreatePlantCommandMessage from '@application/command/message/create-plant'
import PlantRepository from '@infrastructure/persistence/plant-repository'

export default (pool: any) => ({
  method: 'POST' as HTTPMethods,
  url: '/plants',
  handler: async (request: any, reply: any) => {
    const plant = request.body
    const handler = new CreatePlantCommandHandler(new PlantRepository(pool))
    const message = new CreatePlantCommandMessage(plant)
    handler.execute(message)

    reply.statusCode = 204
  }
})
