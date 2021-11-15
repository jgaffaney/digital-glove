const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();

/**
 * GET route template
 */
router.get('/:id', (req, res) => {
    const id =req.params.id
    
  // GET route code here
  const queryText = `
    SELECT * from runs
    WHERE "user_id" = $1; 
  `
  pool.query(queryText, [id])
    .then(response => {
        res.send(response.rows)
    }).catch(err => {
        res.sendStatus(500);
    })
});

/**
 * POST route template
 */
router.post('/begin', (req, res) => {
    console.log('POST req.body is: ', req.body);
    
  const queryText = `
  INSERT INTO runs ("user_id")
  VALUES ($1);
  `
  pool.query(queryText, [req.body.id])
    .then(response => {
        res.sendStatus(201)
    }).catch(err => {
        console.log('Error on begin post: ', err);
        res.sendStatus(500)
    })
});

module.exports = router;