import { RequestHandler } from 'express';
import { AcademicSemesterService } from './academicSemester.services';

// const createUser = async (req: Request, res: Response, next: NextFunction) => {
const createSemester: RequestHandler = async (req, res, next) => {
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

    next(err);
  }
};

export const AcademicSemesterController = {
  createSemester,
};
