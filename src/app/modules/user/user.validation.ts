import { z } from 'zod'
// request validation
// body is object type
// data also object means object inside object

const createUserZotSchema = z.object({
  body: z.object({
    role: z.string({
      required_error: 'role is require',
    }),
    password: z.string().optional(),
  }),
})

//await createUserZotSchema.parseAsync(req)

export const UserValidation = {
  createUserZotSchema,
}
