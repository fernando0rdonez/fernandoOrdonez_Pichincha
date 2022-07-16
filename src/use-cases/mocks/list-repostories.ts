import { ListRepositoriesMock } from '../interfaces/mocks'

const listRepository = (): ListRepositoriesMock => {
  return {
    repositories: [
      {
        id: 1,
        state: 604
      },
      {
        id: 2,
        state: 605
      },
      {
        id: 3,
        state: 606
      }
    ]
  }
}

export { listRepository }
