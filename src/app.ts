import express, { Application } from 'express'
import cors from 'cors'

import globalErrorHandler from './app/middleware/globalErrorHandler'
import { UserRoutes } from './app/modules/users/user.route'

const app: Application = express()

app.use(cors())

//parser
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

// Application routes

app.use('/api/v1/users/', UserRoutes)

//Testing
//app.get('/', async (req: Request, res: Response, next: NextFunction) => {
/* await usersServices.createUser({
    id: '999',
    password: '1234',
    role: 'admin',SS
  }) */
/* next('ora baba error')

  res.send('Hello World!')
 */
// throw new ApiError(400, 'ora bana')
// global error handling
// })

//Testing
// app.get('/', async (req: Request, res: Response, next: NextFunction) => {
// throw new Error('Testing Error logger')
// })

app.use(globalErrorHandler)

export default app

// AM0421
