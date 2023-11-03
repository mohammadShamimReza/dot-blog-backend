import { z } from 'zod';

const blogValidationSchema = {
  title: z.string().refine((value) => value.trim() !== '', {
    message: 'Title is required'
  }),
  thumbnailImg: z.string().optional(),
  typeId: z.string().refine((value) => value.trim() !== '', {
    message: 'Type ID is required'
  }),
  content: z.string().refine((value) => value.trim() !== '', {
    message: 'Content is required'
  }),
  userId: z.string().refine((value) => value.trim() !== '', {
    message: 'User ID is required'
  })
};

const create = z.object({
  body: z.object(blogValidationSchema)
});

const update = z.object({
  body: z.object({
    title: z.string().optional(),
    thumbnailImg: z.string().optional(),
    typeId: z.string().optional(),
    content: z.string().optional(),
    userId: z.string().optional()
  })
});

export const BlogValidation = {
  create,
  update
};
