import mongoose from 'mongoose';

const { Schema, model } = mongoose;

const scoreSchema = new Schema({

  name: String,

  score: String

});

const Score = model('Score', scoreSchema);

export default Score