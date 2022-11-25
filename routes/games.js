import express from 'express';

import Game from '../model/Game.js';

const gameRoutes = express.Router();

gameRoutes.route('/games').get(function (req, res){
  Game.find({}).then(g => {   // <-- Update to your call of choice.
      res.json(g);
  });
});

export default gameRoutes;
