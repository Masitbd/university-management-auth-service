import express from 'express';
import { AcademicSemesterRoutes } from '../modules/academicSemester/academicSemester.route';
import { UserRoutes } from '../modules/user/user.route';

const router = express.Router();

const moduleRoutes = [
  {
    path: '/users',
    route: UserRoutes,
  },
  {
    path: '/academic-semester',
    route: AcademicSemesterRoutes,
  },
];
/* router.use('/users', UserRoutes);
router.use('/academic-semester', AcademicSemesterRoutes); 
*/

moduleRoutes.forEach(route => router.use(route.path, route.route));

export default router;
