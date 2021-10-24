import { HTTPMethods } from 'fastify'
import PlantsQueryHandler from '@application/query/handler/plants'
import PlantsQueryMessage from '@application/query/message/plants'
import PlantRepository from '@infrastructure/persistence/plant-repository'

export default (pool: any) => ({
  method: 'GET' as HTTPMethods,
  url: '/plants',
  handler: async (_request: any, _reply: any) => {
    const handler = new PlantsQueryHandler(new PlantRepository(pool))
    const message = new PlantsQueryMessage()

    return handler.execute(message)
  }
})
