import { z } from 'zod';

const create = z.object({
  body: z.object({
    name: z.string({
      required_error: ' name id is required'
    }),
    designation: z.string({
      required_error: 'designation id is required'
    }),
    experience: z.string({
      required_error: 'experience id is required'
    }),
    email: z.string({
      required_error: 'Email is required'
    }),
    password: z.string({
      required_error: 'password is required'
    }),
    role: z.string({
      required_error: 'role is required'
    }),
    phone: z.string({
      required_error: 'phone is required'
    })
  })
});

const update = z.object({
  body: z.object({
    name: z.string().optional(),
    designation: z.string().optional(),

    experience: z.string().optional(),
    email: z.string().optional(),
    password: z.string().optional(),
    phone: z.string().optional(),
    role: z.string().optional(),
    contactNo: z.string().optional(),
    address: z.string().optional(),
    linkedIn: z.string().optional(),
    github: z.string().optional(),
    profileImg: z.string().optional()
  })
});

export const UserValidation = {
  create,
  update,
};
