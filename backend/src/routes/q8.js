const express = require('express');
const router = express.Router();

const pool = require('../database');

router.get('/q8', async (req, res) => {
const query = 
    `SELECT SUBSTR(pais,1,1) AS "LETRA_INICIAL_PAIS", SUM(area) AS "AREA_TOTAL"
    FROM Pais p
    GROUP BY LETRA_INICIAL_PAIS
    ORDER BY LETRA_INICIAL_PAIS;`;
    const q = await pool.query(query);
    console.log(q);
    res.json(q);
});

module.exports = router;