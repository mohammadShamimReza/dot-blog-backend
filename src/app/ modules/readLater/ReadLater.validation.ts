import { z } from 'zod';

const create = z.object({
  body: z.object({
    userId: z.string().refine((value) => value.trim() !== '', {
      message: 'Title is required'
    }),
    blogId: z.string().refine((value) => value.trim() !== '', {
      message: 'Title is required'
    })
  })
});

export const ReadLaterValidation = {
  create
};
