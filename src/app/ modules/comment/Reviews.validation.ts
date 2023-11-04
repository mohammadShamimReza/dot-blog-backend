import { z } from 'zod';

const create = z.object({
  body: z.object({
    userId: z.string().refine((value) => value.trim() !== '', {
      message: 'Title is required'
    }),
    blogId: z.string().refine((value) => value.trim() !== '', {
      message: 'Title is required'
    }),
    text: z.string().refine((value) => value.trim() !== '', {
      message: 'text is required'
    })
  })
});

const update = z.object({
  body: z.object({
    text: z.string().refine((value) => value.trim() !== '', {
      message: 'text is required'
    })
  })
});

export const ReviewsValidation = {
  create,
  update
};
