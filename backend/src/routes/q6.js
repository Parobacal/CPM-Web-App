const express = require('express');
const router = express.Router();

const pool = require('../database');

router.get('/q6', async (req, res) => {
const query = 
    `SELECT S1.PAIS, COUNT(*) AS "RESPUESTAS_CORRECTAS"
    FROM 
        (SELECT S1.PAIS, S1.RESPUESTA_ID
        FROM
            (SELECT P.pais AS "PAIS", RP.Pregunta_id AS "PREGUNTA_ID", RP.Respuesta_id AS "RESPUESTA_ID"
             FROM Pais P, Respuesta_pais RP
             WHERE P.id = RP.Pais_id
             ORDER BY PAIS) S1,
            (SELECT Pregunta_id "PREGUNTA_ID", Respuesta_id AS "RESPUESTA_ID"
             FROM Respuesta_correcta
             ORDER BY Respuesta_id) S2
        WHERE S1.PREGUNTA_ID = S2.PREGUNTA_ID AND S1.RESPUESTA_ID = S2.RESPUESTA_ID
        ORDER BY S1.PAIS) S1
    GROUP BY S1.PAIS
    ORDER BY RESPUESTAS_CORRECTAS DESC;`;
    const q = await pool.query(query);
    console.log(q);
    res.json(q);
});

module.exports = router;