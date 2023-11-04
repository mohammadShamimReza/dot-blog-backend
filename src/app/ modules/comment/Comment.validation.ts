import { z } from 'zod';

const blogValidationSchema = {
  title: z.string().refine((value) => value.trim() !== '', {
    message: 'Title is required'
  })
};

const create = z.object({
  body: z.object(blogValidationSchema)
});

const update = z.object({
  body: z.object({
    title: z.string().optional()
  })
});

export const BlogTypeValidation = {
  create,
  update
};
