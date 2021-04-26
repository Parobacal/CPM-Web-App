const express = require('express');
const router = express.Router();

const pool = require('../database');

router.get('/q14', async (req, res) => {
const query = 
    `SELECT E.nombre AS "ENCUESTA", COUNT(*) AS "TOTAL_DE_PAISES"
    FROM Encuesta E,
        (SELECT S1.ENCUESTA_ID, RP.Pais_id AS "PAIS_ID"
         FROM Respuesta_pais RP,
             (SELECT Encuesta_id AS "ENCUESTA_ID", id AS "PREGUNTA_ID"
              FROM Pregunta
              GROUP BY Encuesta_id, id
              ORDER BY Encuesta_id, id) S1
         WHERE RP.Pregunta_id = S1.PREGUNTA_ID
         GROUP BY S1.ENCUESTA_ID, PAIS_ID
         ORDER BY S1.ENCUESTA_ID, PAIS_ID) S1
    WHERE E.id = S1.ENCUESTA_ID
    GROUP BY ENCUESTA
    ORDER BY TOTAL_DE_PAISES DESC;`;
    const q = await pool.query(query);
    console.log(q);
    res.json(q);
});

module.exports = router;