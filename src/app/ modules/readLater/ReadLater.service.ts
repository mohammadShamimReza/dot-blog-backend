import { ReadLater } from '@prisma/client';
import prisma from '../../../shared/prisma';

const createReadLater = async (payload: ReadLater): Promise<ReadLater> => {
  const result = await prisma.readLater.create({ data: payload });
  return result;
};

// const getAllFromDb = async (
//   filters: IUserFilters,
//   paginationOptions: IPaginationOptions
// ): Promise<IGenericResponse<Blog[]>> => {
//   const { limit, page, skip } = paginationHelpers.calculatePagination(paginationOptions);
//   const { searchTerm, ...filterData } = filters;

//   const andConditions = [];

//   if (searchTerm) {
//     andConditions.push({
//       OR: userSearchableFields.map((field) => ({
//         [field]: {
//           contains: searchTerm,
//           mode: 'insensitive'
//         }
//       }))
//     });
//   }

//   if (Object.keys(filterData).length > 0) {
//     andConditions.push({
//       AND: Object.keys(filterData).map((key) => {
//         return {
//           [key]: {
//             // eslint-disable-next-line @typescript-eslint/no-explicit-any
//             equals: (filterData as any)[key]
//           }
//         };
//       })
//     });
//   }

//   const whereConditions: Prisma.BlogWhereInput =
//     andConditions.length > 0 ? { AND: andConditions } : {};

//   const result = await prisma.blog.findMany({
//     include: {
//       // blogs: true,
//       // comments: true,
//       // ReadLaterdBlogs: true
//     },
//     where: whereConditions,
//     skip,
//     take: limit,
//     orderBy:
//       paginationOptions.sortBy && paginationOptions.sortOrder
//         ? { [paginationOptions.sortBy]: paginationOptions.sortOrder }
//         : {
//             createdAt: 'desc'
//           }
//   });
//   const total = await prisma.blog.count({
//     where: whereConditions
//   });
//   return {
//     meta: {
//       page,
//       limit,
//       total
//     },
//     data: result
//   };
// };

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

const deleteReadLater = async (id: string): Promise<ReadLater> => {
  const result = await prisma.readLater.delete({
    where: {
      id
    }
  });
  return result;
};

export const ReadLaterService = {
  createReadLater,
  // getAllFromDb,
  // getById,
  // updateBlog,
  deleteReadLater
};
