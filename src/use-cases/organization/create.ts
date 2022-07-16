import { createOrgDTO } from '../interfaces/organization'
import { ResponseCaseUse } from '../interfaces/common'
import { Organization } from '../../infrastructure/db/models/organization'

const create = async (organizationParams:createOrgDTO) : Promise<ResponseCaseUse> => {
  try {
    const org = await Organization.create(
      {
        name: organizationParams.name,
        status: organizationParams.status
      },
      { fields: ['name', 'status'] }
    )
    return { data: org, error: false }
  } catch (error) {
    return { data: { message: 'Error to create Organization' }, error: true }
  }
}

export { create }
