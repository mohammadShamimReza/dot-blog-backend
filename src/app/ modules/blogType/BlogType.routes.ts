import express from 'express';
import validateRequest from '../../middlewares/validateRequest';
import { BlogTypeController } from './BlogType.controller';
import { BlogTypeValidation } from './BlogType.validation';

const router = express.Router();

// router.get(
//   '/:id',
//   // auth(ENUM_USER_ROLE.ADMIN, ENUM_USER_ROLE.SUPER_ADMIN, ENUM_USER_ROLE.USER),
//   BlogController.getById
// );

router.get(
  '/',
  // auth(ENUM_USER_ROLE.ADMIN, ENUM_USER_ROLE.SUPER_ADMIN),
  BlogTypeController.getAllFromDB
);
router.post('/', validateRequest(BlogTypeValidation.create), BlogTypeController.createBlogType);

// router.patch(
//   '/:id',
//   // auth(ENUM_USER_ROLE.ADMIN, ENUM_USER_ROLE.USER, ENUM_USER_ROLE.SUPER_ADMIN),
//   validateRequest(BlogTypeValidation.update),
//   BlogTypeController.updateBlogType
// );
router.delete(
  '/:id',
  // auth(ENUM_USER_ROLE.ADMIN, ENUM_USER_ROLE.SUPER_ADMIN),
  BlogTypeController.deleteBlogType
);

export const blogTypeRoutes = router;
