const express = require('express');
const router = express.Router();

const pool = require('../database');

router.get('/q10', async (req, res) => {
const query = 
    `SELECT S1.INVENTOR
    FROM Inventor_invento II, Invento I,
        (SELECT nombre AS "INVENTOR", id AS "INVENTOR_ID"
         FROM Inventor
         WHERE nombre != 'Bell, Tainter' AND nombre != 'Bionet, Simon' AND SUBSTR(nombre,1,1) = 'B' AND RIGHT(nombre,1) = 'r' OR nombre != 'Bell, Tainter' AND nombre != 'Bionet, Simon' AND SUBSTR(nombre,1,1) = 'B' AND RIGHT(nombre,1) = 'n'
         ORDER BY INVENTOR_ID) S1
    WHERE II.Inventor_id = S1.INVENTOR_ID AND II.Invento_id = I.id AND I.anio > 1799 AND I.anio < 1900 
    GROUP BY S1.INVENTOR
    ORDER BY S1.INVENTOR;`;
    const q = await pool.query(query);
    console.log(q);
    res.json(q);
});

module.exports = router;