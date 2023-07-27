import mongoose from 'mongoose';

import * as dotenv from 'dotenv' // see https://github.com/motdotla/dotenv#how-do-i-use-dotenv-with-import

dotenv.config()

// get driver connection
const Db = process.env.ATLAS_URI;
mongoose.connect(Db)
mongoose.connection.on("error", console.error.bind(console, "MongoDB connection error:"));

export const connection = mongoose.connection;
