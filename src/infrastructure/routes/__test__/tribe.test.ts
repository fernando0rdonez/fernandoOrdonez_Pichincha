import request from 'supertest'
import { server } from '../../server'
const tribe = '779719214333952001'
let coverage = 70
const startDate = '2019-01-01'
const endDate = '2022-12-31'
const state = 'E'
const queryParams = `?coverage=${coverage}&startDate=${startDate}&endDate=${endDate}&state=${state}`

describe('GET /tribe', () => {
  it('SCENERY 1: Get repository metric by tribe with correct values', async () => {
    const response = await request(server).get(`/tribe/${tribe}`).expect(200)

    expect(Array.isArray(response.body)).toBe(true)
    expect(response.body[0].id).toBeDefined()
    expect(response.body[0].name).toBeDefined()
    expect(response.body[0].organization).toBeDefined()

    const coverage = Number(response.body[0].coverage.replace('%', ''))
    expect(coverage).toBeGreaterThanOrEqual(70)

    expect(response.body[0].bugs).toBeDefined()
    expect(response.body[0].vulnerabilities).toBeDefined()
    expect(response.body[0].hotspots).toBeDefined()
    expect(response.body[0].verificationState).toBeDefined()
    expect(response.body[0].state).toBe('Habilitado')
  })

  it('SCENERY 2: if tribe not exist should return status 400 ', async () => {
    const response = await request(server).get(`/tribe/${tribe}8`).expect(400)
    expect(response.body.message).toBe('The Tribe is not registered')
  })
})

describe('GET /tribe with query params', () => {
  it('SCENERY 3: should return a Array and correct fields', async () => {
    const response = await request(server).get(`/tribe/${tribe}${queryParams}`).expect(200)

    expect(Array.isArray(response.body)).toBe(true)
    expect(response.body[0].id).toBeDefined()
    expect(response.body[0].name).toBeDefined()
    expect(response.body[0].organization).toBeDefined()

    const coverageResponse = Number(response.body[0].coverage.replace('%', ''))
    expect(coverageResponse).toBeGreaterThanOrEqual(coverage)

    expect(response.body[0].bugs).toBeDefined()
    expect(response.body[0].vulnerabilities).toBeDefined()
    expect(response.body[0].hotspots).toBeDefined()
    expect(response.body[0].verificationState).toBeDefined()
    expect(response.body[0].state).toBeDefined()
  })

  it('SCENERY 4: If the tribe has no coverage required then return status 400', async () => {
    coverage = 90
    const queryParams = `?coverage=${coverage}&startDate=${startDate}&endDate=${endDate}&state=${state}`
    const response = await request(server).get(`/tribe/${tribe}${queryParams}`).expect(400)
    expect(response.body.message).toBe('The Tribe does not have repositories with the necessary coverage')
  })
})
