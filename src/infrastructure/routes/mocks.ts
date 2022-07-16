import express, { Response } from 'express'
import useCases from '../../use-cases/mocks'

const router = express.Router()

router.get('/', (_, res: Response) => {
  const listMock = useCases.listRepository()
  res.json(listMock)
})

export { router as mockRouter }
