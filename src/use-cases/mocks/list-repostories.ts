import { Repository } from '../../infrastructure/db/models/repository'
import { ResponseCaseUse } from '../interfaces/common'

const listRepository = async (): Promise<ResponseCaseUse> => {
  const repostories = await Repository.findAll()

  return { data: repostories, error: false }
}

export { listRepository }
