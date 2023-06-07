import { z } from 'zod';
import {
  academicSemesterCodes,
  AcademicSemesterMonth,
  academicSemesterTitles,
} from './academicSemester.constant';
// request validation
// body is object type
// data also object means object inside object

const createAcademicSemesterZotSchema = z.object({
  body: z.object({
    title: z.enum([...academicSemesterTitles] as [string, ...string[]], {
      required_error: 'Title is required',
    }),
    year: z.number({ required_error: 'Year is required' }),

    code: z.enum([...academicSemesterCodes] as [string, ...string[]]),

    startMonth: z.enum([...AcademicSemesterMonth] as [string, ...string[]], {
      required_error: 'Start month is required',
    }),

    endMonth: z.enum([...AcademicSemesterMonth] as [string, ...string[]], {
      required_error: 'Start month is required',
    }),
  }),
});
//await createUserZotSchema.parseAsync(req)

export const AcademicSemesterValidation = {
  createAcademicSemesterZotSchema,
};
