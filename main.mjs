import fastify from 'fastify'
import ping from 'ping'
import cors from '@fastify/cors'

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

console.log('http://localhost:3001/check-electricity')
app.listen({
  port: 3001,
})
