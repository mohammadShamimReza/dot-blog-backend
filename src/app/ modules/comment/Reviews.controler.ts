import { Reviews } from '@prisma/client';
import { Request, Response } from 'express';
import httpStatus from 'http-status';
import catchAsync from '../../../shared/catchAsync';
import sendResponse from '../../../shared/sendResponse';
import { ReviewsService } from './Reviews.service';

const createReviews = catchAsync(async (req: Request, res: Response) => {
  const payload = req.body;

  const result = await ReviewsService.createReviews(payload);
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'like created successfully',
    data: result
  });
});

// const getAllFromDB = catchAsync(async (req: Request, res: Response) => {
//   const filters = pick(req.query, userFilterableFields);
//   const paginationOptions = pick(req.query, paginationFields);

//   const result = await ReviewsService.getAllFromDb(filters, paginationOptions);
//   sendResponse(res, {
//     statusCode: httpStatus.OK,
//     success: true,
//     message: 'Reviews fetched successfully',
//     data: result
//   });
// });

// const getById = catchAsync(async (req: Request, res: Response) => {
//   const { id } = req.params;
//   const result = await ReviewsService.getById(id);
//   sendResponse(res, {
//     statusCode: httpStatus.OK,
//     success: true,
//     message: 'Reviews fetched successfully',
//     data: result
//   });
// });

const updateReviews = catchAsync(async (req: Request, res: Response) => {
  const id = req.params.id;
  const payload = req.body;
  const result = await ReviewsService.updateReviews(id, payload);

  sendResponse<Reviews>(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Reviews update successfully',
    data: result
  });
});

const deleteReviews = catchAsync(async (req: Request, res: Response) => {
  const id = req.params.id;
  const result = await ReviewsService.deleteReviews(id);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Reviews delete successfully',
    data: result
  });
});

export const ReviewsConroller = {
  createReviews,
  // getAllFromDB,
  // getById,
  updateReviews,
  deleteReviews
};
