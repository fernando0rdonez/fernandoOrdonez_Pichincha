import request from 'supertest'
import { server } from '../../server'
import { faker } from '@faker-js/faker'

let idOrganization: string
describe('POST /organization', () => {
  it('after create an organization return 201  with correct format', async () => {
    const response = await request(server)
      .post('/organization')
      .send({
        name: faker.company.companyName(),
        status: faker.datatype.number({
          min: 150,
          max: 200
        })
      }).expect(201).expect((res) => {
        idOrganization = res.body.id
      })
    expect(response.body.id).toBeDefined()
    expect(response.body.name).toBeDefined()
  })
})

describe('PUT /organization', () => {
  it('after update an organization return 200  with updated values', async () => {
    const newName = faker.company.companyName()
    const newStatus = faker.datatype.number({
      min: 150,
      max: 200
    })
    const response = await request(server)
      .put(`/organization/${idOrganization}`)
      .send({
        name: newName,
        status: newStatus
      }).expect(200)
    expect(response.body.id).toBe(idOrganization)
    expect(response.body.name).toBe(newName)
    expect(response.body.status).toBe(newStatus)
  })
})

describe('GET /organization', () => {
  it('should return status 200', async () => {
    return request(server).get('/organization').expect(200)
  })

  it('should return a Array', async () => {
    const response = await request(server).get('/organization').expect(200)
    expect(Array.isArray(response.body)).toBe(true)
  })

  it('check format', async () => {
    const response = await request(server).get('/organization').expect(200)
    expect(response.body[0].id).toBeDefined()
    expect(response.body[0].name).toBeDefined()
    expect(response.body[0].status).toBeDefined()
  })
})

describe('DELETE /organization', () => {
  it('Delete item succesful', async () => {
    return request(server)
      .delete(`/organization/${idOrganization}`)
      .expect(200)
  })
})
