import { Organization } from '../../infrastructure/db/models/organization'
import { ResponseCaseUse } from '../interfaces/common'

const list = async () :Promise<ResponseCaseUse> => {
  const organitations = await Organization.findAll({})

  return { data: organitations, error: false }
}

export { list }
