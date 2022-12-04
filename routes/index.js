const express = require('express');
const config = require('../config')
const router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.json({message: 'alive', config});
});

module.exports = router;
