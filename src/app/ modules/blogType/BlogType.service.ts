import { BlogType } from '@prisma/client';
import prisma from '../../../shared/prisma';

const createBlogType = async (payload: BlogType): Promise<BlogType> => {
  const result = await prisma.blogType.create({ data: payload });
  return result;
};

const getAllFromDb = async (): Promise<BlogType[]> => {
  const result = await prisma.blogType.findMany({});

  return result;
};

// const getById = async (id: string): Promise<Blog | null> => {
//   const result = await prisma.blog.findUnique({
//     where: {
//       id
//     },
//     include: {
//       // blogs: {
//       //   include: {
//       //     // comments: true
//       //   }
//       // }
//     }
//   });
//   return result;
// };

// const updateBlog = async (id: string, payload: Partial<Blog>): Promise<Blog> => {
//   const result = await prisma.blog.update({
//     where: {
//       id
//     },
//     data: payload
//   });
//   return result;
// };

const deleteBlogType = async (id: string): Promise<BlogType> => {
  const result = await prisma.blogType.delete({
    where: {
      id
    },
    include: {
      _count: true
    }
  });
  return result;
};

export const BlogTypeService = {
  createBlogType,
  getAllFromDb,
  // getById,
  // updateBlog,
  deleteBlogType
};
