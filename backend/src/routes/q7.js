const express = require('express');
const router = express.Router();

const pool = require('../database');

router.get('/q7', async (req, res) => {
const query = 
    `(SELECT S1.PROFESIONAL, I.nombre AS "INVENTO"
    FROM Invento I, Profesional_invento PI,
        (SELECT P.nombre AS "PROFESIONAL", P.id AS "PROFESIONAL_ID"
         FROM Profesional P, Area A, Area_Profesional PA
         WHERE P.id = PA.Profesional_id AND A.id = PA.Area_id AND A.area = 'Óptica'
         ORDER BY PROFESIONAL) S1
    WHERE PI.Profesional_id = S1.PROFESIONAL_ID AND PI.Invento_id = I.id
    ORDER BY S1.PROFESIONAL)
    UNION
    (SELECT P.nombre AS "PROFESIONAL", I.nombre AS "INVENTO"
    FROM Profesional P, Invento I, Profesional_invento PI
    WHERE P.nombre = 'SMITH CLERK' AND P.id = PI.Profesional_id AND I.id = PI.Invento_id)
    ORDER BY PROFESIONAL;`;
    const q = await pool.query(query);
    console.log(q);
    res.json(q);
});

module.exports = router;