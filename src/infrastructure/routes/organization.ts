import express, { Request, Response } from 'express'
import useCases from '../../use-cases/organization'
import { createOrgDTO } from '../../use-cases/interfaces/organization'
import generateDTO from '../common/dto/'
import { success } from '../common/response'

const router = express.Router()

router.get('/', async (_, res: Response) => {
  const resp = await useCases.list()
  res.json(resp)
})

router.post('/', async (req: Request, res: Response) => {
  const params = req.body as createOrgDTO

  const useCaseResponse = await useCases.create(params)
  const response = generateDTO.organizationDTO(useCaseResponse.data)
  success(res, response, 201)
})

export { router as organizationRouter }
