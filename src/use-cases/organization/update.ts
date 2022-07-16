import { createOrgDTO } from '../interfaces/organization'
import { ResponseCaseUse } from '../interfaces/common'
import { Organization } from '../../infrastructure/db/models/organization'

const update = async (id: string, organizationParams:createOrgDTO) : Promise<ResponseCaseUse> => {
  const organization = await Organization.findByPk(id)

  if (!organization) {
    return { data: { message: 'Origanization not found' }, error: true }
  }
  organization.update({
    name: organizationParams.name,
    status: organizationParams.status
  })
  await organization.save()

  return { data: organization, error: false }
}

export { update }
