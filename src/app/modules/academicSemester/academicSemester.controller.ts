import { NextFunction, Request, Response } from 'express';
import httpStatus from 'http-status';
import { paginationFields } from '../../../constants/pagination';
import catchAsync from '../../../shared/catchAsync';
import pick from '../../../shared/pick';
import sendResponse from '../../../shared/sendResponse';
import { IAcademicSemester } from './academicSemester.interface';
import { AcademicSemesterService } from './academicSemester.services';

const createSemester = catchAsync(
  async (req: Request, res: Response, next: NextFunction) => {
    const { ...academicSemesterData } = req.body;
    const result = await AcademicSemesterService.createSemester(
      academicSemesterData
    );

    sendResponse(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: 'User created successfully',
      data: result,
    });
    next();
    /*  res.status(200).json({
      success: true,
      message: 'Academic semester created successfully',
      data: result,
    }); */
  }
);

const getAllSemester = catchAsync(
  async (req: Request, res: Response, next: NextFunction) => {
    /* const paginationOptions = {
      page: Number(req.query.page),
      limit: Number(req.query.limit),
      sortBy: req.query.sortBy,
      sortOrder: req.query.sortOrder,
    }; */

    const paginationOptions = pick(req.query, paginationFields);
    const result = await AcademicSemesterService.getAllSemester(
      paginationOptions
    );
    sendResponse<IAcademicSemester[]>(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: 'Semester retrived successfully',
      meta: result.meta,
      data: result.data,
    });
    next();
  }
);

export const AcademicSemesterController = {
  createSemester,
  getAllSemester,
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
