import request from 'supertest'
import { server } from '../../server'

describe('GET /mock', () => {
  it('should return status 200', async () => {
    return request(server).get('/mock').expect(200)
  })

  it('should return a Array', async () => {
    const response = await request(server).get('/mock').expect(200)
    expect(Array.isArray(response.body.repositories)).toBe(true)
  })

  it('check format', async () => {
    const response = await request(server).get('/mock').expect(200)
    expect(response.body.repositories[0].id).toBeDefined()
    expect(response.body.repositories[0].state).toBeDefined()
  })
})
