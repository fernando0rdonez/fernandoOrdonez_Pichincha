import { Express } from 'express'
import { NotFoundError } from './errors/not-found-error'
import { mockRouter } from './routes/mocks'
import { organizationRouter } from './routes/organization'
import { tribeRouter } from './routes/tribe'

const routes = function (server: Express) {
  server.use('/mock', mockRouter)
  server.use('/organization', organizationRouter)
  server.use('/tribe', tribeRouter)
  server.all('*', () => {
    throw new NotFoundError()
  })
}

export { routes }
