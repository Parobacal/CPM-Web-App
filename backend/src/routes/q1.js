const express = require('express');
const router = express.Router();

const pool = require('../database');

router.get('/q1', async (req, res) => {
const query = `SELECT P.nombre AS "PROFESIONAL", S1.TOTAL AS "TOTAL_INVENTOS"
                FROM Profesional P,
                    (SELECT Profesional_id AS "PROFESIONAL_ID", COUNT(*) AS "TOTAL"
                    FROM Profesional_invento
                    GROUP BY Profesional_id) S1
                WHERE S1.PROFESIONAL_ID = P.id
                ORDER BY TOTAL DESC;`;
    const q = await pool.query(query);
    console.log(q);
    res.json(q);
});

module.exports = router;