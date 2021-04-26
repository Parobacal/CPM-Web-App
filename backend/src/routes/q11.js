const express = require('express');
const router = express.Router();

const pool = require('../database');

router.get('/q11', async (req, res) => {
const query = 
    `SELECT P.pais AS "PAIS", P.area AS "AREA"
    FROM Pais P,
        (SELECT Pais_id AS "PAIS_ID", COUNT(*) AS "FRONTERAS"
         FROM Frontera
         GROUP BY Pais_id
         ORDER BY Pais_id) S1
    WHERE P.id = S1.PAIS_ID AND S1.FRONTERAS > 7
    ORDER BY AREA DESC;`;
    const q = await pool.query(query);
    console.log(q);
    res.json(q);
});

module.exports = router;