import mongoose from 'mongoose';

import express from 'express';

import cors from 'cors';

import Game from './model/Game.js';

const app = express();

import * as dotenv from 'dotenv' // see https://github.com/motdotla/dotenv#how-do-i-use-dotenv-with-import

dotenv.config()

const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

//app.use(require("./routes/record"));

// get driver connection
const Db = process.env.ATLAS_URI;
mongoose.connect(Db)
mongoose.connection.on("error", console.error.bind(console, "MongoDB connection error:"));

const gameEntry = new Game({

  title: 'Contra',

  releaseYear: '1987',

  availablePlatforms: ['PlayStation 4', 'Nintendo Switch', 'XBox']

});

// Insert the article in our MongoDB database
await gameEntry.save();

// Find a single game
const firstGame = await Game.findOne({});
console.log(firstGame);


app.listen(port, () => {
  // perform a database connection when server starts

  console.log(`Server is running on port: ${port}`);


});

