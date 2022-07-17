import { Status } from './repository'
export interface ResponseCaseUse {
  data : any,
  error : boolean
}

export interface QueryParamsTribe {
  status: Status,
  coverage: number,
  startDate: Date,
  endDate: Date
}
