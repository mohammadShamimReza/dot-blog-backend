import express from 'express';
import validateRequest from '../../middlewares/validateRequest';
import { LikeController } from './Like.controler';
import { LikeValidation } from './Like.validation';

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
router.post('/', validateRequest(LikeValidation.create), LikeController.createLike);

// router.patch(
//   '/:id',
//   // auth(ENUM_USER_ROLE.ADMIN, ENUM_USER_ROLE.USER, ENUM_USER_ROLE.SUPER_ADMIN),
//   validateRequest(BlogTypeValidation.update),
//   BlogTypeController.updateBlogType
// );
router.delete(
  '/:id',
  // auth(ENUM_USER_ROLE.ADMIN, ENUM_USER_ROLE.SUPER_ADMIN),
  LikeController.deleteLike
);

export const likeRoutes = router;
