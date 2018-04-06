const express = require('express');

const router = express.Router();

const db = require('../data/helpers/actionModel.js');

router.get('/', (req, res) => {
  db
    .get()
    .then(actions => {
      res.json(actions)
      res.status(200);
    })
    .catch(error => {
      res.status(500).json(error)
    });
})

module.exports = router;