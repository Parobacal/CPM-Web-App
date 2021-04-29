const express = require('express');
const router = express.Router();

const pool = require('../database');

router.get('/q18', async (req, res) => {
const query = 
    `SELECT P.pais AS "PAIS", P.poblacion AS "POBLACION"
    FROM Pais P,
        (SELECT area AS "AREA_JAPON"
         FROM Pais
         WHERE pais = 'Japón') S1,
         (SELECT id AS "ISLA_ID"
          FROM (
          SELECT id FROM Pais
          UNION ALL
          SELECT Pais_id FROM Frontera
          ) tbl
          GROUP BY id
          HAVING count(*) = 1
          ORDER BY id) S2
    WHERE P.id = S2.ISLA_ID AND P.area >= S1.AREA_JAPON
    ORDER BY pais;`;
    const q = await pool.query(query);
    console.log(q);
    res.json(q);
});

module.exports = router;