import { RepositoryMock } from '../../../use-cases/interfaces/mocks'
import { Orgranization } from '../../../use-cases/interfaces/organization'
import { RepositoryDB, RepositoryDTO } from '../../../use-cases/interfaces/repository'
import { Tribe } from '../../../use-cases/interfaces/tribe'

const nameState = {
  E: 'Habilitado',
  D: 'Desabilitado',
  A: 'Archivado'
}

const ListRepositoriesFromTribeDTO = (repositories: RepositoryDB[], organization : Orgranization, tribe: Tribe, mockRepostories: RepositoryMock[]): RepositoryDTO[] => {
  const listRepositories = repositories.map(repository => {
    return {
      id: repository.id_repository,
      name: repository.name,
      tribe: tribe.name,
      organization: organization.name,
      coverage: repository.metric.coverage + '%',
      codeSmell: repository.metric.code_smell,
      bugs: repository.metric.bugs,
      vulnerabilities: repository.metric.vulnerabilities,
      hotspots: repository.metric.hotspots,
      verificationState: getVerificationState(repository.id_repository, mockRepostories),
      state: largeNameOfState(repository.state)
    }
  })
  return listRepositories
}

const largeNameOfState = (state: string): string => {
  switch (state) {
    case 'E':
      return nameState.E
    case 'D':
      return nameState.D
    case 'A':
      return nameState.A
    default:
      return nameState.E
  }
}

const getVerificationState = (idRepostory: string, repositoriesWithState:RepositoryMock[]): string => {
  const repositoryMock = repositoriesWithState.find(repository => repository.id === idRepostory)
  if (repositoryMock?.state === 604) return 'Verificado'

  if (repositoryMock?.state === 605) return 'En espera'

  if (repositoryMock?.state === 606) return 'Aprobado'

  return 'Desconocido'
}

export default { ListRepositoriesFromTribeDTO }
