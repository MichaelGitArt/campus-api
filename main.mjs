import fastify from 'fastify'
import ping from 'ping'

const app = fastify()

app.get('/', async(request, reply) => {
  const address = '176.37.90.242'
  const pingResult = await ping.promise.probe(address)

  return {
    alive: pingResult.alive,
  }
})

console.log('http://localhost:3001')
app.listen({
  port: 3001,
})
