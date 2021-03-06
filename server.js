import express from 'express';
import cors from 'cors';
import mongoose from 'mongoose'
import helloController from "./controllers/hello-controller.js";
import userController from "./controllers/user-controller.js";
import tuitsController from "./controllers/tuits-controller.js";
//var mongoose = require('mongoose');
//mongoose.connect('mongodb://localhost:27017/webdev');
// mongoose.connect('mongodb://0.0.0.0:27017/webdev');
const CONNECTION_STRING = "mongodb+srv://drowe:30627393Husky@cluster0.kpqzr.mongodb.net/myFirstDatabase?retryWrites=true&w=majority"
 || 'mongodb://localhost:27017/webdev'
mongoose.connect(CONNECTION_STRING);

const app = express();
app.use(express.json());
app.use(cors());
helloController(app);
userController(app);
tuitsController(app);
app.listen(process.env.PORT || 4000);
