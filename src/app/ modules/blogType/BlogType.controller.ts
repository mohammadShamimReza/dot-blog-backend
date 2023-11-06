import { Request, Response } from 'express';
import httpStatus from 'http-status';
import catchAsync from '../../../shared/catchAsync';
import sendResponse from '../../../shared/sendResponse';
import { BlogTypeService } from './BlogType.service';

const createBlogType = catchAsync(async (req: Request, res: Response) => {
  const payload = req.body;

  const result = await BlogTypeService.createBlogType(payload);
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Blog Type created successfully',
    data: result
  });
});

const getAllFromDB = catchAsync(async (req: Request, res: Response) => {
  const result = await BlogTypeService.getAllFromDb();
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Blog fetched successfully',
    data: result
  });
});

// const getById = catchAsync(async (req: Request, res: Response) => {
//   const { id } = req.params;
//   const result = await BlogService.getById(id);
//   sendResponse(res, {
//     statusCode: httpStatus.OK,
//     success: true,
//     message: 'Blog fetched successfully',
//     data: result
//   });
// });

// const updateBlog = catchAsync(async (req: Request, res: Response) => {
//   const id = req.params.id;
//   const payload = req.body;
//   const result = await BlogService.updateBlog(id, payload);

//   sendResponse<Blog>(res, {
//     statusCode: httpStatus.OK,
//     success: true,
//     message: 'Blog update successfully',
//     data: result
//   });
// });
const deleteBlogType = catchAsync(async (req: Request, res: Response) => {
  const id = req.params.id;
  const result = await BlogTypeService.deleteBlogType(id);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Blog type delete successfully',
    data: result
  });
});

export const BlogTypeController = {
  createBlogType,
  getAllFromDB,
  // getById,
  // updateBlog,
  deleteBlogType
};
