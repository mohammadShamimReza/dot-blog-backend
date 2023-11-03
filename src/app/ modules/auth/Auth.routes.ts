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

export const authRoutes = router;
