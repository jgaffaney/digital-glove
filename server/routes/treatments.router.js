const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();
const {rejectUnauthenticated} = require('../modules/authentication-middleware')

/**
 * GET route template
 */
router.get('/', rejectUnauthenticated, (req, res) => {
  const queryText = `
    SELECT * FROM events
    WHERE category=$1;        
  `
  pool.query(queryText, [req.body])
    .then(response => {
        console.log('response on tx get: ', response);
        
    }).catch(err=> {
        console.log('Error on tx get: ', err);
        res.sendStatus(500);
    })
});

/**
 * POST route template
 */
router.post('/', (req, res) => {
  // POST route code here
});

module.exports = router;