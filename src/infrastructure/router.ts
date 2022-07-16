import { Express } from 'express'
import { mockRouter } from './routes/mocks'
import { organizationRouter } from './routes/organization'

const routes = function (server: Express) {
  server.use('/mock', mockRouter)
  server.use('/organization', organizationRouter)
}

export { routes }
