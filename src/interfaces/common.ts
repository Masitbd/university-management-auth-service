import { IGenericErrorMessages } from './error'

export type IGenericErrorResponse = {
  statusCode: number
  message: string
  errorMessages: IGenericErrorMessages[]
  /* errorMessages: {
    path: string
    messages: string
  }[] */
}
