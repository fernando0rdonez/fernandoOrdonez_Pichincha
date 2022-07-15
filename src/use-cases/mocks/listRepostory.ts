interface Repository{
  id: number
  state: number
}
interface ListRepositories {
  repositories: Repository[]
}

const listRepository = (): ListRepositories => {
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
