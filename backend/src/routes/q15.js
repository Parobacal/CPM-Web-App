const express = require('express');
const router = express.Router();

const pool = require('../database');

router.get('/q15', async (req, res) => {
const query = 
    `SELECT pais AS "PAIS", poblacion AS "POBLACION"
    FROM Pais P, 
        (SELECT SUM(poblacion) AS "POBLACION_CENTROAMERICANA"
         FROM Pais
         WHERE Region_id = 9) S1
    WHERE poblacion > S1.POBLACION_CENTROAMERICANA
    ORDER BY pais;`;
    const q = await pool.query(query);
    console.log(q);
    res.json(q);
});

module.exports = router;