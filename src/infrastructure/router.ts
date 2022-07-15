import { Express } from 'express'
import { mockRouter } from './routes/mocks'

const routes = function (server: Express) {
  server.use('/mock', mockRouter)
}

export { routes }
