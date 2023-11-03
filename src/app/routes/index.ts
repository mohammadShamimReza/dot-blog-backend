import express from 'express';
import { blogRoutes } from '../ modules/blog/Blog.routes';
import { blogTypeRoutes } from '../ modules/blogType/BlogType.routes';
import { userRoutes } from '../ modules/user/User.routes';

const router = express.Router();

const moduleRoutes = [
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
  }
];

moduleRoutes.forEach((route) => {
  router.use(route.path, route.routes);
});

export default router;
