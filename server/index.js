import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import dotenv from 'dotenv';
dotenv.config();

// express et up
const app = express();
app.use(express.json({ limit: "30mb", extended: true }));
app.use(express.urlencoded({ limit: "30mb", extended: true }));
app.use(cors());

// hosted port set up - server hosted port OR port 500
const PORT = process.env.PORT || 5000;

// mongo server variables
const USERNAME = process.env.USERNAME;
const PASSWORD = process.env.PASSWORD;
const PROJECT = process.env.PROJECT;
const CONNECTION_URL = `mongodb+srv://${USERNAME}:${PASSWORD}@cluster0.0xaoc.mongodb.net/${PROJECT}?retryWrites=true&w=majority`

// mongoose set up
mongoose.connect(CONNECTION_URL, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => app.listen(PORT, () => console.log(`Server running on port: ${PORT}`)))
  .catch((err) => console.log(err.message));

mongoose.set('useFindAndModify', false);