const express = require('express');
const v1Router = require('./v1/');

const router = express.Router();

router.get('/', (req, res) => {
  res.send('/');
});

router.use('/v1', v1Router);

module.exports = router;
