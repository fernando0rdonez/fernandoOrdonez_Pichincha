import express, { Request, Response } from 'express'
import useCases from '../../use-cases/organization'
import { createOrgDTO } from '../../use-cases/interfaces/organization'
import generateDTO from '../common/dto/'
import { success } from '../common/response'

const router = express.Router()

router.get('/', async (_, res: Response) => {
  const useCaseResponse = await useCases.list()
  const response = generateDTO.organization.listOrganizationDTO(useCaseResponse.data)
  success(res, response, 200)
})

router.post('/', async (req: Request, res: Response) => {
  const params = req.body as createOrgDTO
  const useCaseResponse = await useCases.create(params)
  const response = generateDTO.organization.organizationDTO(useCaseResponse.data)

  success(res, response, 201)
})

router.put('/:id', async (req: Request, res: Response) => {
  const params = req.body as createOrgDTO
  const idOrganization = req.params.id
  const useCaseResponse = await useCases.update(idOrganization, params)
  success(res, useCaseResponse, 200)
})

router.delete('/:id', async (req: Request, res: Response) => {
  const idOrganization = req.params.id
  const useCaseResponse = await useCases.destroy(idOrganization)
  success(res, useCaseResponse, 200)
})

export { router as organizationRouter }
