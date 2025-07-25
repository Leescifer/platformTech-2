import express from 'express';
import cors from 'cors';
import authRouter from './src/routes/auth.route.js';
import dotenv from 'dotenv';

dotenv.config();

const app = express();

app.use(cors({
    origin: process.env.CLIENT_URL || 'http://localhost:5173',
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    allowedHeaders: ['Content-Type', 'Authorization'],
    credentials: true,
    optionsSuccessStatus: 200,
}));
app.use(express.json());

app.use('/api/auth', authRouter);

export default app;
