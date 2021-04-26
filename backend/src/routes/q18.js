const express = require('express');
const router = express.Router();

const pool = require('../database');

router.get('/q18', async (req, res) => {
const query = 
    `SELECT pais AS "PAIS", poblacion AS "POBLACION"
    FROM Pais P,
        (SELECT area AS "AREA_JAPON"
         FROM Pais
         WHERE pais = 'Japón') S1
    WHERE P.Region_id = 12 AND P.area >= S1.AREA_JAPON OR P.Region_id = 5 AND P.area >= S1.AREA_JAPON OR P.Region_id = 19 AND P.area >= S1.AREA_JAPON OR P.Region_id = 20 AND P.area >= S1.AREA_JAPON OR P.Region_id = 21 AND P.area >= S1.AREA_JAPON
    ORDER BY pais;`;
    const q = await pool.query(query);
    console.log(q);
    res.json(q);
});

module.exports = router;