import * as path from 'path'
import axios from 'axios'
import { createObjectCsvWriter } from 'csv-writer'
import { RepositoryMock } from '../../use-cases/interfaces/mocks'
import { RepositoryDTO } from '../../use-cases/interfaces/repository'
import moment from 'moment'

const fetchMockRepository = async () :Promise<RepositoryMock[]> => {
  const response = await axios.get(`${process.env.HOST_URL}/mock`)
  const repositories = await response.data.repositories as RepositoryMock[]
  return repositories
}
const generateCsv = async (repositories: RepositoryDTO[]) => {
  const pathFile = path.join(__dirname, 'files', `Repositories  ${moment().format('llll')}.csv`)
  return new Promise((resolve, reject) => {
    const csvWriterInstance = createObjectCsvWriter({
      path: pathFile,
      header: [
        { id: 'id', title: 'ID' },
        { id: 'name', title: 'NAME' },
        { id: 'tribe', title: 'TRIBE' },
        { id: 'organization', title: 'ORGANIZATION' },
        { id: 'coverage', title: 'COVERAGE' },
        { id: 'codeSmell', title: 'CODE SMELL' },
        { id: 'bugs', title: 'BUGS' },
        { id: 'vulnerabilities', title: 'VULNERABILITIES' },
        { id: 'hotspots', title: 'HOTSPOTS' },
        { id: 'verificationState', title: 'VERIFICATION STATE' },
        { id: 'state', title: 'STATE' }]
    })
    csvWriterInstance.writeRecords(repositories).then(() => {
      resolve(pathFile)
    }).catch(err => {
      reject(err)
    })
    return 'csv'
  })
}

export { fetchMockRepository, generateCsv }
