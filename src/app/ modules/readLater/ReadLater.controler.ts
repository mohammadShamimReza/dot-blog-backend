import { Request, Response } from 'express';
import httpStatus from 'http-status';
import catchAsync from '../../../shared/catchAsync';
import sendResponse from '../../../shared/sendResponse';
import { ReadLaterService } from './ReadLater.service';

const createReadLater = catchAsync(async (req: Request, res: Response) => {
  const payload = req.body;
  console.log(payload);

  const result = await ReadLaterService.createReadLater(payload);
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'ReadLater created successfully',
    data: result
  });
});

// const getAllFromDB = catchAsync(async (req: Request, res: Response) => {
//   const filters = pick(req.query, userFilterableFields);
//   const paginationOptions = pick(req.query, paginationFields);

//   const result = await BlogService.getAllFromDb(filters, paginationOptions);
//   sendResponse(res, {
//     statusCode: httpStatus.OK,
//     success: true,
//     message: 'Blog fetched successfully',
//     data: result
//   });
// });

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

const deleteReadLater = catchAsync(async (req: Request, res: Response) => {
  const id = req.params.id;
  const result = await ReadLaterService.deleteReadLater(id);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'ReadLater delete successfully',
    data: result
  });
});

export const ReadLaterController = {
  createReadLater,
  // getAllFromDB,
  // getById,
  // updateBlog,
  deleteReadLater
};
