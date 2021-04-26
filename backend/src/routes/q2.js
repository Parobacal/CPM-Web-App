const express = require('express');
const router = express.Router();

const pool = require('../database');

router.get('/q2', async (req, res) => {
const query = 
    `(SELECT P.pais AS "PAIS", S1.TOTAL_RESPUESTAS AS "TOTAL_RESPUESTAS"
    FROM Pais P,
        (SELECT Pais_id AS "PAIS_ID", COUNT(*) AS "TOTAL_RESPUESTAS" 
        FROM Respuesta_pais
        GROUP BY Pais_id
        ORDER BY Pais_id) S1
    WHERE P.id = S1.PAIS_ID)
    UNION
    (SELECT P.pais AS "PAIS", 0 AS "TOTAL_RESPUESTAS"
    FROM Pais P,
        (SELECT id AS "PAIS_ID"
        FROM (
            SELECT id 
            FROM Pais
            UNION ALL
            SELECT Pais_id
            FROM Respuesta_pais
        ) S1
        GROUP BY id
        HAVING COUNT(*) = 1
        ORDER BY id) S1
    WHERE P.id = S1.PAIS_ID
    ORDER BY P.pais)
    ORDER BY PAIS;`;
    const q = await pool.query(query);
    console.log(q);
    res.json(q);
});

module.exports = router;