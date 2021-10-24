import { FastifyInstance } from 'fastify'
import mariadb from 'mariadb'

import getPlants from './query/get-plants'
import getWatering from './query/get-watering'
import postPlant from './command/post-plant'
import triggerWatering from './command/trigger-watering'
import cancelWatering from './command/cancel-watering'

const pool = mariadb.createPool({
  initializationTimeout: Number(process.env.DATABASE_CONNECTION_TIMEOUT) || 10,
  connectionLimit: Number(process.env.DATABASE_CONNECTION_LIMIT) || 5,
  host: process.env.DATABASE_HOST,
  database: process.env.DATABASE_NAME,
  user: process.env.DATABASE_USER,
  password: process.env.DATABASE_PASSWORD,
})

export default async (app: FastifyInstance, _options: any) => {
  // Query
  app.route(getPlants(pool))
  app.route(getWatering(pool))

  // Command
  app.route(postPlant(pool))
  app.route(triggerWatering(pool))
  app.route(cancelWatering(pool))

  return app
}
