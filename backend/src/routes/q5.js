const express = require('express');
const router = express.Router();

const pool = require('../database');

router.get('/q5', async (req, res) => {
const query = 
    `SELECT S1.PROFESIONAL, S2.AREA, S1.SALARIO, S2.SALARIO_PROMEDIO
    FROM
        (SELECT P.nombre AS "PROFESIONAL", A.area AS "TRABAJA_EN_AREA", P.salario AS "SALARIO"
         FROM Profesional P, Area A, Area_Profesional AP
         WHERE P.id = AP.Profesional_id AND A.id = AP.Area_id
         GROUP BY P.nombre, A.area, P.salario
         ORDER BY A.area) S1,
        (SELECT S1.AREA AS "AREA", ROUND((S1.SALARIO_TOTAL/S2.CANTIDAD),2) AS "SALARIO_PROMEDIO"
         FROM
             (SELECT A.area AS "AREA", SUM(P.salario) AS "SALARIO_TOTAL"
              FROM Profesional P, Area A, Area_Profesional AP
              WHERE P.id = AP.Profesional_id AND A.id = AP.Area_id
              GROUP BY A.area
              ORDER BY A.area) S1,
            (SELECT A.area AS "AREA", COUNT(*) AS "CANTIDAD"
             FROM Profesional P, Area A, Area_Profesional AP
             WHERE P.id = AP.Profesional_id AND A.id = AP.Area_id
             GROUP BY A.area
             ORDER BY A.area) S2
        WHERE S1.AREA = S2.AREA
        ORDER BY S1.AREA) S2
    WHERE S1.TRABAJA_EN_AREA = S2.AREA AND S1.SALARIO > SALARIO_PROMEDIO
    ORDER BY S1.PROFESIONAL;`;
    const q = await pool.query(query);
    console.log(q);
    res.json(q);
});

module.exports = router;