import dotenv from 'dotenv'
import fastify from 'fastify'

import routes from '@ui/http/'

dotenv.config()

const app = fastify({ logger: true })

app
  .register(routes, { prefix: '/api'})
  .ready()

app.listen({ port: 80, host: '0.0.0.0' }, (err, address) => {
  if (err) {
    console.error(err)
    process.exit(1)
  }

  console.log(`Server listening at ${address}`)
})
