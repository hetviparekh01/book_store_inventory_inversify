// server.ts
import 'reflect-metadata';
import express from 'express';
import { InversifyExpressServer } from 'inversify-express-utils';
import mongoose from 'mongoose';
import container from './config/inversify.config';
import './controllers/signupcontroller';
import './controllers/loginController';
import dotenv from'dotenv'

dotenv.config();



const url=process.env.URL as string


const server = new InversifyExpressServer(container);
server.setConfig(app=>{
  app.use(express.json());
});

const app = server.build();



const PORT = process.env.PORT || 3000;
app.listen(PORT, async() => {
  try {
    await mongoose.connect(url)
    console.log("database connected!!");
    console.log(`Server is running on port ${PORT}`);
  } catch (error) {
    console.error('Failed to connect to database:', error);
  }
});
