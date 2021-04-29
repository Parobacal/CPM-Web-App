const express = require('express');
const router = express.Router();

const pool = require('../database');

router.get('/q19', async (req, res) => {
const query = 
    `(SELECT S1.PAIS, P.pais AS "FRONTERA_CON"
    FROM Pais P,
        (SELECT P.pais AS "PAIS", S1.FRONTERA_ID
         FROM Pais P,
              (SELECT Pais_id AS "PAIS_ID", Pais_Frontera_id AS "FRONTERA_ID"
              FROM Frontera
              ORDER BY Pais_id) S1
         WHERE P.id = S1.PAIS_ID
         ORDER BY PAIS) S1
    WHERE P.id = S1.FRONTERA_ID
    ORDER BY PAIS)
    UNION
    (SELECT P.pais AS "PAIS", '' AS "FRONTERA_CON"
    FROM Pais P,
        (SELECT id AS "ISLA_ID"
         FROM (
         SELECT id FROM Pais
         UNION ALL
         SELECT Pais_id FROM Frontera
         ) tbl
         GROUP BY id
         HAVING count(*) = 1
         ORDER BY id) S1
    WHERE P.id = S1.ISLA_ID
    ORDER BY PAIS)
    ORDER BY PAIS;`;
    const q = await pool.query(query);
    console.log(q);
    res.json(q);
});

module.exports = router;