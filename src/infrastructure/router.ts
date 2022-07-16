import { Express } from 'express'
import { NotFoundError } from './errors/not-found-error'
import { mockRouter } from './routes/mocks'
import { organizationRouter } from './routes/organization'

const routes = function (server: Express) {
  server.use('/mock', mockRouter)
  server.use('/organization', organizationRouter)
  server.all('*', () => {
    throw new NotFoundError()
  })
}

export { routes }
