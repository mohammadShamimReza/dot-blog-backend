import express from 'express';
import validateRequest from '../../middlewares/validateRequest';
import { AuthController } from './Auth.controller';
import { AuthValidation } from './Auth.validation';

const router = express.Router();

router.post(
  '/signup',
  validateRequest(AuthValidation.create),
  AuthController.signUp,
);
router.post(
  '/login',
  validateRequest(AuthValidation.login),
  AuthController.logIn,
);
router.post(
  '/change-password',
  validateRequest(AuthValidation.changePasswordZodSchema),
  // auth(
  //   ENUM_USER_ROLE.SUPER_ADMIN,
  //   ENUM_USER_ROLE.ADMIN,
  //   ENUM_USER_ROLE.FACULTY,
  //   ENUM_USER_ROLE.STUDENT
  // ),
  AuthController.changePassword
);

export const authRoutes = router;
