import express from 'express';
import validateRequest from '../../middlewares/validateRequest';
import { BlogController } from './Blog.controller';
import { BlogValidation } from './Blog.validation';

const router = express.Router();

router.get(
  '/:id',
  // auth(ENUM_USER_ROLE.ADMIN, ENUM_USER_ROLE.SUPER_ADMIN, ENUM_USER_ROLE.USER),
  BlogController.getById
);

router.get(
  '/',
  // auth(ENUM_USER_ROLE.ADMIN, ENUM_USER_ROLE.SUPER_ADMIN),
  BlogController.getAllFromDB
);
router.post('/', validateRequest(BlogValidation.create), BlogController.createBlog);

router.patch(
  '/:id',
  // auth(ENUM_USER_ROLE.ADMIN, ENUM_USER_ROLE.USER, ENUM_USER_ROLE.SUPER_ADMIN),
  validateRequest(BlogValidation.update),
  BlogController.updateBlog
);
router.delete(
  '/:id',
  // auth(ENUM_USER_ROLE.ADMIN, ENUM_USER_ROLE.SUPER_ADMIN),
  BlogController.deleteBlog
);

export const blogRoutes = router;
