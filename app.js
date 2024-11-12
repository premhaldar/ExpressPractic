import express from "express";
import cookieParser from "cookie-parser";
import cors from "cors";
import helmet from "helmet";
import hpp from "hpp";
import jsonwebtoken from "jsonwebtoken";
import mongoose from "mongoose";
import nodemailer from "nodemailer";
import * as path from "path";
import rateLimit from "express-rate-limit";

import router from "./routes/api.js"
import {MONGODB_CONNECTION,MAX_JSON_SIZE,URL_ENCODED,REQUEST_LIMIT_TIME,REQUEST_LIMIT_NUMBER,WEB_CACHE,PORT} from "./app/config/config.js";

const app = express();
app.use(express.json({limit:MAX_JSON_SIZE}));
app.use(express.urlencoded({extended:URL_ENCODED}));
app.use(cors());
app.use(hpp());
app.use(cookieParser());
app.use(helmet());

const Limit=rateLimit({
    windowMs:REQUEST_LIMIT_TIME,
    max:REQUEST_LIMIT_NUMBER,
});
app.use(Limit);

// web caching
app.set('etag',WEB_CACHE)

// mongodb Connection
/*ekhane mongo db connection korte hobe*/

// set API Routes
app.use("/api",router)

// set application storage
app.use(express.static('storage'));

// run express server
app.listen(PORT,()=>{
    console.log(`Server is running on port ${PORT}`)
})