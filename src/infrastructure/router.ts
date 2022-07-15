import { Express } from 'express'

const routes = function (server: Express) {
  server.use('/mock', (req, res) => {
    res.send('Hello World!')
  })
}

export { routes }
