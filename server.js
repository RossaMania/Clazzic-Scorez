import mongoose from "mongoose";
import express from "express";
import cors from "cors";
import path from "path";
import * as dotenv from "dotenv"; // see https://github.com/motdotla/dotenv#how-do-i-use-dotenv-with-import

import { connection } from "./mongoose.js";
import Game from "./model/Game.js";
import gameRoutes from "./routes/games.js";
import scoreRoutes from "./routes/scores.js";

dotenv.config();

const app = express();
const port = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// Routes

app.use("/api", gameRoutes);
app.use("/api", scoreRoutes);

if (process.env.NODE_ENV === "production") {
  //*Set static folder up in production
  app.use(express.static("client/build"));

  app.get("*", (req, res) =>
    res.sendFile(path.resolve(__dirname, "client", "build", "index.html"))
  );
}

const startServer = async () => {
  try {
    // Database connection
    await connection;

    //Create and save the game entry in the MongoDB database

    const gameEntry = new Game({
      title: "Contra",

      releaseYear: "1987",

      availablePlatforms: ["PlayStation 4", "Nintendo Switch", "XBox"],
    });

    // Insert the article in our MongoDB database
    await gameEntry.save();

    // Find a single game
    const firstGame = await Game.findOne({});
    console.log(firstGame);

    //Start the server
    app.listen(port, () => {
      // perform a database connection when server starts

      console.log(`Server is running on port: ${port}`);
    });
  } catch (error) {
    console.error("Error starting the server:", error);
  }
};

startServer();
