import cookieParser from 'cookie-parser';
import express, { Application, NextFunction, Request, Response } from 'express';
import httpStatus from 'http-status';
import globalExceptionHandler from './app/middlewares/globalExceptionHandler';
import routes from './app/routes';

const app: Application = express();

app.use((req: Request, res: Response, next: NextFunction) => {
  res.header(
    'Access-Control-Allow-Origin',
    'https://dot-blog-frontend.vercel.app/'
    // 'https://dot-travel-frontend.vercel.app',
  ); // Replace with your frontend origin.
  res.header('Access-Control-Allow-Credentials', 'true');
  res.header('Access-Control-Allow-Methods', 'GET, POST, PUT,PATCH, DELETE');
  res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization');
  next();
});



app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cookieParser());

app.use('/api/v1', routes);


app.use(globalExceptionHandler);

app.use((req, res, next) => {
  res.status(httpStatus.NOT_FOUND).json({
    success: false,
    message: 'API not found',
    errorMessages: [
      {
        path: '',
        message: 'API not found'
      }
    ]
  });
});

export default app;
