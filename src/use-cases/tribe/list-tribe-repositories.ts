import { Repository } from '../../infrastructure/db/models/repository'
import { Metrics } from '../../infrastructure/db/models/metrics'
import { Op } from 'sequelize-cockroachdb'
import { ResponseCaseUse } from '../interfaces/common'
import { Tribe } from '../../infrastructure/db/models/tribe'
import { Organization } from '../../infrastructure/db/models/organization'

const listTibreRepositories = async (id: string, queryParams:any): Promise<ResponseCaseUse> => {
  const tribe = await Tribe.findByPk(id)
  console.log(queryParams)

  if (!tribe) {
    return { data: { message: 'The Tribe is not registered' }, error: true }
  }

  const response = await Tribe.findOne({
    where: { id_tribe: id },
    include: [{
      model: Repository,
      where: { id_tribe: id, state: queryParams.status, created_at: { [Op.between]: [queryParams.startDate, queryParams.endDate] } },
      include: [{
        model: Metrics,
        where: { coverage: { [Op.gt]: queryParams.coverage } }

      }]
    },
    {
      model: Organization
    }]
  })

  if (!response) {
    return { data: { message: 'La Tribu no tiene repositorios que cumplan con la cobertura necesaria' }, error: true }
  }
  return { data: response, error: false }
}

export { listTibreRepositories }
