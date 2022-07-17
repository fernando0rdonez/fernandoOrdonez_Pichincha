import { faker } from '@faker-js/faker'
import { ListRepositoriesMock } from '../../../use-cases/interfaces/mocks'
import { Repository } from '../../../use-cases/interfaces/repository'

const makeDTOMock = (data: Repository[]): ListRepositoriesMock => {
  return {
    repositories: data.map(repository => {
      return {
        id: repository.id_repository,
        state: faker.datatype.number({
          min: 604,
          max: 606
        })
      }
    })
  }
}

export default { makeDTOMock }
