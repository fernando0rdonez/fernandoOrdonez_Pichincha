import express, { Response } from 'express'
import { Repository } from '../../use-cases/interfaces/repository'
import useCases from '../../use-cases/mocks'
import { BadRequestError } from '../errors/bad-request-error'
import generateDTO from '../common/dto/'

const router = express.Router()

router.get('/', async (_, res: Response) => {
  const useCaseResponse = await useCases.listRepository()
  if (useCaseResponse.error) {
    throw new BadRequestError(useCaseResponse.data.message)
  }
  const repositories = useCaseResponse.data as Repository[]
  const response = generateDTO.mock.makeDTOMock(repositories)
  res.json(response)
})

export { router as mockRouter }
