const express = require('express');
const router = express.Router();

const pool = require('../database');

router.get('/q16', async (req, res) => {
const query = 
    `(SELECT P.nombre AS "PROFESIONAL", S1.JEFE_PROFESIONAL, S1.JEFE_AREA AS "AREA", 'KING PRESIDENT' AS "JEFE_GENERAL"
    FROM Profesional P, Area A, Area_Profesional AP,
        (SELECT P.nombre AS "JEFE_PROFESIONAL", P.id AS "JEFE_PROFESIONAL_ID", P.jefe AS "JEFE_AREA", A.id AS "JEFE_AREA_ID"
         FROM Profesional P, Area A
         WHERE P.jefe = A.area AND jefe != 'Biología' AND jefe != '' AND jefe != 'TODAS'
         ORDER BY nombre) S1
    WHERE P.id = AP.Profesional_id AND AP.Area_id = S1.JEFE_AREA_ID AND P.nombre != 'KING PRESIDENT'
    GROUP BY P.nombre, S1.JEFE_PROFESIONAL, S1.JEFE_AREA
    ORDER BY S1.JEFE_AREA)
    UNION
    (SELECT P.nombre AS "PROFESIONAL", '' AS "JEFE_PROFESIONAL", A.area AS "AREA", 'KING PRESIDENT' AS "JEFE_GENERAL"
    FROM Profesional P, Area A, Area_Profesional AP
    WHERE P.id = AP.Profesional_id AND A.id = AP.Area_id AND A.area = 'Medicina' OR P.id = AP.Profesional_id AND A.id = AP.Area_id AND A.area = 'Electrónica')
    ORDER BY AREA;`;
    const q = await pool.query(query);
    console.log(q);
    res.json(q);
});

module.exports = router;