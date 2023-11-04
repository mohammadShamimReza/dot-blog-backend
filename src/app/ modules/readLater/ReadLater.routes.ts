import express from 'express';
import validateRequest from '../../middlewares/validateRequest';
import { ReadLaterController } from './ReadLater.controler';
import { ReadLaterValidation } from './ReadLater.validation';

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
router.post('/', validateRequest(ReadLaterValidation.create), ReadLaterController.createReadLater);

// router.patch(
//   '/:id',
//   // auth(ENUM_USER_ROLE.ADMIN, ENUM_USER_ROLE.USER, ENUM_USER_ROLE.SUPER_ADMIN),
//   validateRequest(BlogTypeValidation.update),
//   BlogTypeController.updateBlogType
// );
router.delete(
  '/:id',
  // auth(ENUM_USER_ROLE.ADMIN, ENUM_USER_ROLE.SUPER_ADMIN),
  ReadLaterController.deleteReadLater
);

export const ReadLaterRoutes = router;
