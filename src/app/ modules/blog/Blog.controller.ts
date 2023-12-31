import { Blog } from '@prisma/client';
import { Request, Response } from 'express';
import httpStatus from 'http-status';
import { paginationFields } from '../../../constants/pagination';
import catchAsync from '../../../shared/catchAsync';
import pick from '../../../shared/pick';
import sendResponse from '../../../shared/sendResponse';
import { userFilterableFields } from './Blog.constants';
import { BlogService } from './Blog.service';

const createBlog = catchAsync(async (req: Request, res: Response) => {
  const payload = req.body;

  const result = await BlogService.createBlog(payload);
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Blog created successfully',
    data: result
  });
});

const getAllFromDB = catchAsync(async (req: Request, res: Response) => {
  const filters = pick(req.query, userFilterableFields);
  const paginationOptions = pick(req.query, paginationFields);


  const result = await BlogService.getAllFromDb(filters, paginationOptions);
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Blog fetched successfully',
    data: result
  });
});

const getById = catchAsync(async (req: Request, res: Response) => {
  const { id } = req.params;
  const result = await BlogService.getById(id);
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Blog fetched successfully',
    data: result
  });
});

const updateBlog = catchAsync(async (req: Request, res: Response) => {
  const id = req.params.id;
  const payload = req.body;
  const result = await BlogService.updateBlog(id, payload);

  sendResponse<Blog>(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Blog update successfully',
    data: result
  });
});
const deleteBlog = catchAsync(async (req: Request, res: Response) => {
  const id = req.params.id;
  const result = await BlogService.deleteBlog(id);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Blog delete successfully',
    data: result
  });
});

export const BlogController = {
  createBlog,
  getAllFromDB,
  getById,
  updateBlog,
  deleteBlog
};
