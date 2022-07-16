import express from 'express'
import cors from 'cors'
import helmet from 'helmet'

import { routes } from './router'
import { errorHandler } from './middleware/error-handler'

const app = express()

app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(cors())
app.use(helmet())

routes(app)
app.use(errorHandler)

export { app as server }
