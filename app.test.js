const request = require('supertest')
const app = require('./app')

test('GET / retourne un message', async () => {
  const res = await request(app).get('/')
  expect(res.status).toBe(200)
  expect(res.body.message).toBe('Hello DevOps!')
})