const express = require('express');
const router = express.Router();

const pool = require('../database');

router.get('/q4', async (req, res) => {
const query = 
    `(SELECT S1.PROFESIONAL AS "PROFESIONAL_JEFE", S2.PROFESIONAL AS "PROFESIONAL_SUBALTERNO"
    FROM
        (SELECT nombre AS "PROFESIONAL", jefe AS "JEFE_DE_AREA"
         FROM Profesional
         WHERE jefe != ''
         ORDER BY nombre) S1,
        (SELECT P.nombre AS "PROFESIONAL", A.area AS "TRABAJA_EN_AREA"
         FROM Profesional P, Area A, Area_Profesional AP
         WHERE P.id = AP.Profesional_id AND A.id = AP.Area_id
         GROUP BY P.nombre, A.area
         ORDER BY P.nombre) S2
    WHERE S1.JEFE_DE_AREA = TRABAJA_EN_AREA
    GROUP BY S1.PROFESIONAL, S2.PROFESIONAL
    ORDER BY S1.PROFESIONAL)
    UNION
    (SELECT "KING PRESIDENT" AS "PROFESIONAL_JEFE", S1.PROFESIONAL AS "PROFESIONAL_SUBALTERNO"
    FROM
        (SELECT P.nombre AS "PROFESIONAL", A.area AS "TRABAJA_EN_AREA"
         FROM Profesional P, Area A, Area_Profesional AP
         WHERE P.id = AP.Profesional_id AND A.id = AP.Area_id
         GROUP BY P.nombre, A.area
         ORDER BY P.nombre) S1
    GROUP BY S1.PROFESIONAL)
    ORDER BY PROFESIONAL_JEFE;`;
    const q = await pool.query(query);
    console.log(q);
    res.json(q);
});

module.exports = router;