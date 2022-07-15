import express from 'express'
import cors from 'cors'
import helmet from 'helmet'

import { routes } from './router'

const app = express()

app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(cors())
app.use(helmet())

routes(app)

export { app as server }
