import { ErrorRequestHandler } from 'express'
import config from '../../config'
import ApiError from '../../errors/ApiErrors'
import handleValidationError from '../../errors/handleValidationErrors'
import { IGenericErrorMessages } from '../../interfaces/error'
import { erroLogger } from '../../shared/logger'

const globalErrorHandler: ErrorRequestHandler = (
  error,
  req,
  res,
  next
  /* error,
  req: Request,
  res: Response,
  next: NextFunction */
) => {
  // eslint-disable-next-line no-unused-expressions
  config.env === 'development'
    ? console.log('rokkkkkkkkkket', error)
    : erroLogger.error('gleobal error handler', error)

  let statusCode = 500
  let message = 'Something went wrong!!'
  let errorMessages: IGenericErrorMessages[] = []

  if (error?.name === 'ValidationError') {
    const simplifiedError = handleValidationError(error)
    statusCode = simplifiedError.statusCode
    message = simplifiedError.message
    errorMessages = simplifiedError.errorMessages
  } else if (error instanceof ApiError) {
    statusCode = error?.statusCode
    message = error.message
    errorMessages = error?.message
      ? [
          {
            path: '',
            message: error?.message,
          },
        ]
      : []
  } else if (error instanceof Error) {
    message = error?.message
    errorMessages = error?.message
      ? [
          {
            path: '',
            message: error?.message,
          },
        ]
      : []
  }

  res.status(statusCode).json({
    success: false,
    message,
    errorMessages,
    stack: config.env !== 'production' ? error?.stack : undefined,
  })

  next()
}

export default globalErrorHandler

//path:
//message:
