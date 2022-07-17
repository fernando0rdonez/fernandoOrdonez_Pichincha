import { Metrics } from './metric'

export type State = 'E' | 'D' | 'A'
type Status = 'A' | 'I'

export interface Repository {
  id_repository: string,
  name: string,
  status: Status,
  id_tribe: string,
  state: State,
  created_at: Date,
}

export interface RepositoryDB {
  id_repository: string,
  name: string,
  status: Status,
  id_tribe: string,
  state: State,
  created_at: Date,
  metric: Metrics
}

export interface RepositoryDTO {
  id?: string,
  name: string,
  tribe: string,
  organization: string,
  coverage:string,
  codeSmell:number,
  bugs:number,
  vulnerabilities:number,
  hotspots:number,
  verificationState:string,
  state:string
}
