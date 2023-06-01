import express, { Application, Request, Response } from 'express'
import cors from 'cors'
import usersRouter from './app/modules/users/users.route'

const app: Application = express()

app.use(cors())

//parser
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

// Application routes

app.use('/api/v1/users/', usersRouter)

app.get('/', async (req: Request, res: Response) => {
  /* await usersServices.createUser({
    id: '999',
    password: '1234',
    role: 'admin',
  }) */

  res.send('Hello World!')
})

export default app

// AM0421
