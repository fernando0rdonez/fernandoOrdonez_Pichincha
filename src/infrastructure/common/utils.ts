import axios from 'axios'
import { RepositoryMock } from '../../use-cases/interfaces/mocks'

const fetchMockRepository = async () :Promise<RepositoryMock[]> => {
  const response = await axios.get(`${process.env.HOST_URL}/mock`)
  const repositories = await response.data.repositories as RepositoryMock[]
  return repositories
}

export { fetchMockRepository }
