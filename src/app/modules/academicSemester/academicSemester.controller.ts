import { NextFunction, Request, Response } from 'express';
import httpStatus from 'http-status';
import catchAsync from '../../../shared/catchAsync';
import sendResponse from '../../../shared/sendResponse';
import { AcademicSemesterService } from './academicSemester.services';

const createSemester = catchAsync(
  async (req: Request, res: Response, next: NextFunction) => {
    const { ...academicSemesterData } = req.body;
    const result = await AcademicSemesterService.createSemester(
      academicSemesterData
    );
    next();

    sendResponse(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: 'User created successfully',
      data: result,
    });

    /*  res.status(200).json({
      success: true,
      message: 'Academic semester created successfully',
      data: result,
    }); */
  }
);

export const AcademicSemesterController = {
  createSemester,
};

// const createUser = async (req: Request, res: Response, next: NextFunction) => {
/* const createSemester: RequestHandler = async (req, res, next) => {
  try {
    const { ...academicSemesterData } = req.body;
    const result = await AcademicSemesterService.createSemester(
      academicSemesterData
    );
    res.status(200).json({
      success: true,
      message: 'Academic semester created successfully',
      data: result,
    });
  } catch (err) {
    // res.status(400).json({
    // error: err,
    /*  success: false,
      message: 'Fail to create user ', */
// })

//  next(err);
// }
// };

// export const AcademicSemesterController = {
// createSemester,
// ;
