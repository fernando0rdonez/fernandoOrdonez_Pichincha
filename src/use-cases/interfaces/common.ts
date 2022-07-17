import { State } from './repository'
export interface ResponseCaseUse {
  data : any,
  error : boolean
}

export interface QueryParamsTribe {
  state: State,
  coverage: number,
  startDate: Date,
  endDate: Date
}
