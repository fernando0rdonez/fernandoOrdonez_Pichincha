import { Repository } from '../../infrastructure/db/models/repository'
import { Metrics } from '../../infrastructure/db/models/metrics'
import { Op } from 'sequelize-cockroachdb'
import { QueryParamsTribe, ResponseCaseUse } from '../interfaces/common'
import { Tribe } from '../../infrastructure/db/models/tribe'
import { Organization } from '../../infrastructure/db/models/organization'

const listTibreRepositories = async (id: string, queryParams:QueryParamsTribe): Promise<ResponseCaseUse> => {
  const tribe = await Tribe.findByPk(id)

  if (!tribe) {
    return { data: { message: 'The Tribe is not registered' }, error: true }
  }
  const response = await Tribe.findOne({
    where: { id_tribe: id },
    include: [{
      model: Repository,
      where: { id_tribe: id, state: queryParams.state, created_at: { [Op.between]: [queryParams.startDate, queryParams.endDate] } },
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
    return { data: { message: 'The Tribe does not have repositories with the necessary coverage' }, error: true }
  }
  return { data: response, error: false }
}

export { listTibreRepositories }
