import express from 'express';
import validateRequest from '../../middleware/validateRequest';
import { AcademicSemesterController } from './academicSemester.controller';
//import { UserController } from './user.controller';
import { AcademicSemesterValidation } from './academicSemester.validation';

const router = express.Router();
router.post(
  '/create-semester',
  validateRequest(AcademicSemesterValidation.createAcademicSemesterZotSchema),
  AcademicSemesterController.createSemester
);

router.get('/', AcademicSemesterController.getAllSemester);

export const AcademicSemesterRoutes = router;
