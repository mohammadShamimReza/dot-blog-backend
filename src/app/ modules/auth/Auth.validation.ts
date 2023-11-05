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

const login = z.object({
  body: z.object({
    email: z.string({
      required_error: 'Email is required',
    }),
    password: z.string({
      required_error: 'password is required',
    }),
  }),
});

const changePasswordZodSchema = z.object({
  body: z.object({
    oldPassword: z.string({
      required_error: 'Old password  is required'
    }),
    newPassword: z.string({
      required_error: 'New password  is required'
    })
  })
});

export const AuthValidation = {
  create,
  login,
  changePasswordZodSchema
};
