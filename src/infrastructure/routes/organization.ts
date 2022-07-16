import express, { Request, Response } from 'express'
import { body } from 'express-validator'

import useCases from '../../use-cases/organization'
import { createOrgDTO } from '../../use-cases/interfaces/organization'
import generateDTO from '../common/dto/'
import { success } from '../common/response'
import { requestValidate } from '../middleware/request-validate'
import { BadRequestError } from '../errors/bad-request-error'

const router = express.Router()

router.get('/', async (_, res: Response) => {
  const useCaseResponse = await useCases.list()
  const response = generateDTO.organization.listOrganizationDTO(useCaseResponse.data)
  success(res, response, 200)
})

router.post('/', [
  body('name').notEmpty().withMessage('name is required'),
  body('status').notEmpty().withMessage('status is required')
], requestValidate, async (req: Request, res: Response) => {
  const params = req.body as createOrgDTO
  const useCaseResponse = await useCases.create(params)
  const response = generateDTO.organization.organizationDTO(useCaseResponse.data)

  success(res, response, 201)
})

router.put('/:id', [
  body('name').notEmpty().withMessage('name is required'),
  body('status').notEmpty().withMessage('status is required')
], requestValidate, async (req: Request, res: Response) => {
  const params = req.body as createOrgDTO
  const idOrganization = req.params.id
  const useCaseResponse = await useCases.update(idOrganization, params)
  if (useCaseResponse.error) {
    throw new BadRequestError(useCaseResponse.data.message)
  }
  const response = generateDTO.organization.organizationDTO(useCaseResponse.data)
  success(res, response, 200)
})

router.delete('/:id', async (req: Request, res: Response) => {
  const idOrganization = req.params.id
  const useCaseResponse = await useCases.destroy(idOrganization)
  if (useCaseResponse.error) {
    throw new BadRequestError(useCaseResponse.data.message)
  }
  success(res, useCaseResponse.data, 200)
})

export { router as organizationRouter }
