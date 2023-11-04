import { Reviews } from '@prisma/client';
import prisma from '../../../shared/prisma';

const createReviews = async (payload: Reviews): Promise<Reviews> => {
  const result = await prisma.reviews.create({ data: payload });
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
//       // Reviewss: true,
//       // likedBlogs: true
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
//       //     // Reviewss: true
//       //   }
//       // }
//     }
//   });
//   return result;
// };

const updateReviews = async (id: string, payload: Partial<Reviews>): Promise<Reviews> => {
  const result = await prisma.reviews.update({
    where: {
      id
    },
    data: payload
  });
  return result;
};

const deleteReviews = async (id: string): Promise<Reviews> => {
  const result = await prisma.reviews.delete({
    where: {
      id
    }
  });
  return result;
};

export const ReviewsService = {
  createReviews,
  // getAllFromDb,
  // getById,
  updateReviews,
  deleteReviews
};
