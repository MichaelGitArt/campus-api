const fastify = require('fastify')
const ping = require('ping')
const cors = require('@fastify/cors')

const app = fastify()

app.register(cors, {
  origin: ['http://localhost:3000', 'https://campus-prostir.netlify.app'],
  methods: ['GET'],
  allowedHeaders: ['Content-Type', 'Authorization', 'Accept', 'Access-Control-Allow-Credentials'],
})

app.get('/', (request, reply) => {
  return {
    data: 'Hello World!',
  }
})

app.get('/check-electricity', async(request, reply) => {
  const address = '176.37.90.242'
  const pingResult = await ping.promise.probe(address)

  return {
    alive: pingResult.alive,
  }
})

const PORT = process.env.PORT || 3000
app.listen({
  port: PORT,
}, (err, address) => {
  console.warn(`Server listening on ${address}`)
  console.warn('Port: ', PORT)
  if (err) {
    fastify.log.error(err)
    process.exit(1)
  }
})
