import express from 'express';
import validateRequest from '../../middlewares/validateRequest';
import { ReviewsConroller } from './Reviews.controler';
import { ReviewsValidation } from './Reviews.validation';

const router = express.Router();

// router.get(
//   '/:id',
//   // auth(ENUM_USER_ROLE.ADMIN, ENUM_USER_ROLE.SUPER_ADMIN, ENUM_USER_ROLE.USER),
//   BlogController.getById
// );

// router.get(
//   '/',
//   // auth(ENUM_USER_ROLE.ADMIN, ENUM_USER_ROLE.SUPER_ADMIN),
//   BlogController.getAllFromDB
// );
router.post('/', validateRequest(ReviewsValidation.create), ReviewsConroller.createReviews);

router.patch(
  '/:id',
  // auth(ENUM_USER_ROLE.ADMIN, ENUM_USER_ROLE.USER, ENUM_USER_ROLE.SUPER_ADMIN),
  validateRequest(ReviewsValidation.update),
  ReviewsConroller.updateReviews
);
router.delete(
  '/:id',
  // auth(ENUM_USER_ROLE.ADMIN, ENUM_USER_ROLE.SUPER_ADMIN),
  ReviewsConroller.deleteReviews
);

export const reviewsRoutes = router;
