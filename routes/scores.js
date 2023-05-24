import express from 'express';

import Score from '../model/Score.js';

const gameRoutes = express.Router();

gameRoutes.route('/scores').get(function (req, res){
  Score.find({}).then(s => {   // <-- Update to your call of choice.
      res.json(s);
  });
});

export default gameRoutes;
