import { createOrgDTO } from '../interfaces/organization'
import { ResponseCaseUse } from '../interfaces/common'
import { Organization } from '../../infrastructure/db/models/organization'

const create = async (organizationParams:createOrgDTO) : Promise<ResponseCaseUse> => {
  const org = await Organization.create(
    {
      name: organizationParams.name,
      status: organizationParams.status
    },
    { fields: ['name', 'status'] }
  )
  return { data: org, error: false }
}

export { create }
