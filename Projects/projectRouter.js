const express = require('express');

const router = express.Router();

const db = require('../data/helpers/projectModel.js');

router.get('/', (req, res) => {
  db
    .get()
    .then(project => {
      res.json(project)
      res.status(200);
    })
    .catch(error => {
      res.status(500).json(error)
    });
})

module.exports = router;