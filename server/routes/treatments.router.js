const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();
const {rejectUnauthenticated} = require('../modules/authentication-middleware')

/**
 * GET route template
 */
router.get('/:category', rejectUnauthenticated, (req, res) => {
    console.log('req.body in treatmentsRouter get: ', req.params.category);
    
  const queryText = `
    SELECT * FROM events
    WHERE category=$1;        
  `
  pool.query(queryText, [req.params.category])
    .then(response => {
        console.log('response on tx get: ', response);
        res.send(response.rows);
    }).catch(err=> {
        console.log('Error on tx get: ', err);
        res.sendStatus(500);
    })
});

/**
 * POST route template
 */
router.post('/:id', rejectUnauthenticated, (req, res) => {
    console.log('req.body in post: ', req.body);
    
  // POST route code here
  const queryText = `
    INSERT INTO runs_events ("runs_id", "events_id")
    VALUES($1, $2);
  `
  const values = [req.body, req.params.id]
  pool.query(queryText, values)
});

module.exports = router;