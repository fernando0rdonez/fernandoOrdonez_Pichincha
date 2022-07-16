import { ResponseCaseUse } from '../interfaces/common'
import { Organization } from '../../infrastructure/db/models/organization'

const destroy = async (id: string) : Promise<ResponseCaseUse> => {
  const organization = await Organization.findByPk(id)

  if (!organization) {
    // TODO: throw error no content 204
    return { data: null, error: true }
  }
  organization.destroy()

  return { data: { message: 'successful removal' }, error: false }
}

export { destroy }
