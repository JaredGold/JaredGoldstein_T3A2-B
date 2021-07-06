import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';

const app = express();

app.use(express.json({ limit: "30mb", extended: true }));
app.use(express.urlencoded({ limit: "30mb", extended: true }));
app.use(cors());

const CONNECTION_URL = "mongodb+srv://jegoldstein94:<password>@cluster0.0xaoc.mongodb.net/myFirstDatabase?retryWrites=true&w=majority"