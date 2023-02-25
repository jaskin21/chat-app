import express from 'express';
import path from 'path';
import 'dotenv/config'; // add

import __dirname  from './dirname.js';
import cookieParser  from 'cookie-parser';
import cors  from 'cors';
import logger  from 'morgan';
import connectDb from './config/connectDb.js'; //add

import usersRouter  from './routes/users.js';
import authRouter from './routes/authRoutes.js';//add
import bearerTokenMiddleware from './middleware/bearerTokenMiddleware.js';//add

//db connection code
connectDb(process.env.DB_CONNECTION, process.env.DB_NAME);//add

const app = express();

app.use(logger('dev'));
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));
app.use(bearerTokenMiddleware);//add

app.use('/users', usersRouter);//add
app.use('/auth', authRouter);//add

app.use(function (req, res, next) {
  res.status(404).json({message: "We couldn't find what you were looking for 😞"})
})

app.use(function (err, req, res, next) {
  console.error(err.stack)
  res.status(500).json(err)
})

export default app;
