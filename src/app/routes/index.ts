import express from 'express';
import { authRoutes } from '../ modules/auth/Auth.routes';
import { blogRoutes } from '../ modules/blog/Blog.routes';
import { blogTypeRoutes } from '../ modules/blogType/BlogType.routes';
import { reviewsRoutes } from '../ modules/comment/Reviews.routes';
import { likeRoutes } from '../ modules/like/Like.routes';
import { ReadLaterRoutes } from '../ modules/readLater/ReadLater.routes';
import { userRoutes } from '../ modules/user/User.routes';

const router = express.Router();

const moduleRoutes = [
  {
    path: '/auth',
    routes: authRoutes
  },
  {
    path: '/user',
    routes: userRoutes
  },
  {
    path: '/blog',
    routes: blogRoutes
  },
  {
    path: '/blog-type',
    routes: blogTypeRoutes
  },
  {
    path: '/like',
    routes: likeRoutes
  },
  {
    path: '/reviews',
    routes: reviewsRoutes
  },
  {
    path: '/read-later',
    routes: ReadLaterRoutes
  }
];

moduleRoutes.forEach((route) => {
  router.use(route.path, route.routes);
});

export default router;
