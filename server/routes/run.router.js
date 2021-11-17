const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();
const {rejectUnauthenticated} = require('../modules/authentication-middleware');

/**
 * GET route template
 */
router.get('/:id', rejectUnauthenticated, (req, res) => {
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
router.post('/begin', rejectUnauthenticated, (req, res) => {
    console.log('POST req.body is: ', req.body);
    
  const queryText = `
  INSERT INTO runs ("user_id")
  VALUES ($1)
  RETURNING "id";
  `
  pool.query(queryText, [req.body.id])
    .then(response => {
        res.send(response)
    }).catch(err => {
        console.log('Error on begin post: ', err);
        res.sendStatus(500)
    })
});

router.delete('/:id', rejectUnauthenticated, (req, res) => {
    const queryText = `
    DELETE FROM runs
    WHERE id=$1;
    `
    pool.query(queryText, [req.params.id])
        .then(response => {
            res.sendStatus(204)
        }).catch(err => {
            console.log('Error on delete: ', err);
            res.sendStatus(500);
        })
})

router.get('/currentRun', (req, res) => {
    const queryText = `
    SELECT * FROM currentRun
    ORDER BY currentRun DESC
    LIMIT 1;
    `
    pool.query(queryText)
        .then(response => {
            res.send(response.rows)
        }).catch(err => {
            console.log('Error on get currentRun: ', err);
            res.sendStatus(500)
        })
})

router.put('/currentRun', (req, res) => {
    const queryText = `
    UPDATE currentRun
    SET "currentRun" = $1;
    `
    pool.query(queryText, [req.body])
        .then(response => {
            res.sendStatus(200)
        }).catch(err => {
            console.log('error on currentRun put: ', err);
            res.sendStatus(500)
        })
})
module.exports = router;