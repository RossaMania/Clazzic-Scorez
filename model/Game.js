import mongoose from 'mongoose';

const { Schema, model } = mongoose;

const gameSchema = new Schema({

  title: String,

  releaseYear: String,

  availablePlatforms: [String],

  createdAt: Date,

  updatedAt: Date

});

const Game = model('Game', gameSchema);

export default Game