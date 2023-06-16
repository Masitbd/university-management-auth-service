import express, { Application, NextFunction, Request, Response } from 'express';
import cors from 'cors';

import globalErrorHandler from './app/middleware/globalErrorHandler';
import routes from './app/routes';
import httpStatus from 'http-status';

const app: Application = express();

app.use(cors());

//parser
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/api/v1/', routes);

// Application routes

/* app.use('/api/v1/users/', UserRoutes);
app.use('/api/v1/academic-semester/', AcademicSemesterRoutes);
 */
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

app.use(globalErrorHandler);

// handle not found

app.use((req: Request, res: Response, next: NextFunction) => {
  res.status(httpStatus.NOT_FOUND).json({
    success: false,
    message: 'Not Found',
    errorMessage: [
      {
        path: req.originalUrl,
        message: 'Api not found',
      },
    ],
  });
  next();
});

export default app;

// AM0421
