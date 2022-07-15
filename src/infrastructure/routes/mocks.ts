import express, { Response } from 'express'
import { list } from '../../use-cases/mocks'

const router = express.Router()

router.get('/', (_, res: Response) => {
  const listMock = list()
  res.json(listMock)
})

export { router as mockRouter }
