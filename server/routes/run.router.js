const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();

/**
 * GET route template
 */
router.get('/', (req, res) => {
  // GET route code here
});

/**
 * POST route template
 */
router.post('/begin', (req, res) => {
  const queryText = `
  INSERT INTO runs ('user_id')
  VALUES ($1)
  `
  pool.query(queryText, [req.body])
    .then(response => {
        res.sendStatus(201)
    }).catch(err => {
        console.log('Error on begin post: ', err);
        res.sendStatus(500)
    })
});

module.exports = router;