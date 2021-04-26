const express = require('express');
const router = express.Router();

const pool = require('../database');

router.get('/q17', async (req, res) => {
const query = 
    `SELECT nombre AS "INVENTO"
    FROM Invento I,
        (SELECT INV.anio AS "ANIO"
         FROM Inventor I, Invento INV, Inventor_invento II
         WHERE I.id = II.Inventor_id AND INV.id = II.Invento_id AND I.nombre = 'BENZ'
         ORDER BY ANIO) S1
    WHERE I.anio = S1.ANIO
    ORDER BY INVENTO;`;
    const q = await pool.query(query);
    console.log(q);
    res.json(q);
});

module.exports = router;