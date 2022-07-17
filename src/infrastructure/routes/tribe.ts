import express, { Request, Response } from 'express'
import useCases from '../../use-cases/tribe'
import { success } from '../common/response'
import { BadRequestError } from '../errors/bad-request-error'
import generateDTO from '../common/dto/'
import { RepositoryDB, Status } from '../../use-cases/interfaces/repository'
import { Orgranization } from '../../use-cases/interfaces/organization'
import { Tribe } from '../../use-cases/interfaces/tribe'
import { query } from 'express-validator'
import { requestValidate } from '../middleware/request-validate'
import { QueryParamsTribe } from '../../use-cases/interfaces/common'
import moment from 'moment'
import { fetchMockRepository } from '../common/utils'
import { RepositoryMock } from '../../use-cases/interfaces/mocks'
const router = express.Router()

router.get('/:id', [
  query('status').isLength({ min: 1, max: 1 }).withMessage('status must be a string with length 1').optional(),
  query('coverage').isFloat().optional(),
  query('startDate').isISO8601().toDate().withMessage('startDate must be a valid date in ISO 8601 format (YYYY-MM-DD)').optional(),
  query('endDate').isISO8601().toDate().withMessage('startDate must be a valid date in ISO 8601 format (YYYY-MM-DD)').optional()
], requestValidate, async (req: Request, res: Response) => {
  const { id } = req.params
  const queryParams = {} as QueryParamsTribe
  console.log(req.query)

  queryParams.status = req.query.status as Status || 'E'
  queryParams.coverage = Number(req.query.coverage) || 70
  queryParams.startDate = req.query.startDate ? moment(req.query.startDate as string).toDate() : moment(moment().format('YYYY') + '-01-01').toDate()
  queryParams.endDate = req.query.endDate ? moment(req.query.endDate as string).toDate() : moment().toDate()

  const useCaseResponse = await useCases.listTibreRepositories(id, queryParams)

  if (useCaseResponse.error) {
    throw new BadRequestError(useCaseResponse.data.message)
  }

  const repositories = useCaseResponse.data.repositories as RepositoryDB[]
  const organiation = useCaseResponse.data.organization as Orgranization
  const tribe = useCaseResponse.data as Tribe
  // TODO Pedir y enviar datos de MOCK
  const listMockRepositories = await fetchMockRepository() as RepositoryMock[]
  const response = generateDTO.repository.ListRepositoriesFromTribeDTO(repositories, organiation, tribe, listMockRepositories)

  success(res, response, 200)
})

export { router as tribeRouter }
