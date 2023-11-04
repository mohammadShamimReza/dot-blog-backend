import { User } from '@prisma/client';
import httpStatus from 'http-status';
import { JwtPayload, Secret } from 'jsonwebtoken';
import config from '../../../config';
import ApiError from '../../../errors/ApiError';
import { jwtHelpers } from '../../../helpers/jwtHelpers';
import prisma from '../../../shared/prisma';
import { IChangePassword } from './auth.interface';

const signUp = async (data: User) => {
  const result = await prisma.user.create({
    data
  });
  const { email, role, id, password } = result;
  const accessToken = jwtHelpers.createToken(
    { email, role, id },
    config.jwt.secret as Secret,
    config.jwt.expires_in as string
  );
  const refreshToken = jwtHelpers.createToken(
    { email, password, id },
    config.jwt.refresh_secret as Secret,
    config.jwt.refresh_expires_in as string
  );

  return {
    accessToken,
    refreshToken
  };
};

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const logIn = async (LoginData: { email: string; password: string }) => {
  const { email, password } = LoginData;

  const isUserExist = await prisma.user.findFirst({
    where: {
      email
    }
  });

  if (!isUserExist) {
    throw new ApiError(httpStatus.NOT_FOUND, 'user not found');
  }
  const { role, id } = isUserExist;

  const isUserExistWithPassword = await prisma.user.findFirst({
    where: {
      email,
      password
    }
  });

  if (!isUserExistWithPassword) {
    throw new ApiError(httpStatus.NOT_FOUND, 'password not matched');
  }

  const accessToken = jwtHelpers.createToken(
    { email, role, id },
    config.jwt.secret as Secret,
    config.jwt.expires_in as string
  );
  const refreshToken = jwtHelpers.createToken(
    { email, password, id },
    config.jwt.refresh_secret as Secret,
    config.jwt.refresh_expires_in as string
  );

  return {
    accessToken,
    refreshToken
  };
};

const changePassword = async (user: JwtPayload | null, payload: IChangePassword): Promise<void> => {
  const { oldPassword, newPassword } = payload;

  console.log(user, payload, 'from chenge password');

  // const isUserExist = await User.findOne({ id: user?.userId }).select('+password');

  // if (!isUserExist) {
  //   throw new ApiError(httpStatus.NOT_FOUND, 'User does not exist');
  // }

  // // checking old password
  // if (isUserExist.password && !(await User.isPasswordMatched(oldPassword, isUserExist.password))) {
  //   throw new ApiError(httpStatus.UNAUTHORIZED, 'Old Password is incorrect');
  // }

  // isUserExist.password = newPassword;
  // isUserExist.needsPasswordChange = false;

  // // updating using save()
  // isUserExist.save();
};

export const AuthService = {
  signUp,
  logIn,
  changePassword
};
