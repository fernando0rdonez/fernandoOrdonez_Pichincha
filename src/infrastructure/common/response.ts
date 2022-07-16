import { Response } from 'express'

export const success = (res: Response, body: any, status: 200 | 201) => {
  res.status(status || 200).send(body)
}
