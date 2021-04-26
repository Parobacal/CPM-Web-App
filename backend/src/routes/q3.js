const express = require('express');
const router = express.Router();

const pool = require('../database');

router.get('/q3', async (req, res) => {
const query = 
    `SELECT P.pais AS "PAIS", P.area AS "AREA"
    FROM Pais P,
        (SELECT id AS "PAIS_ID"
        FROM
        (SELECT id
        FROM (
            SELECT id 
            FROM Pais
            UNION ALL
            SELECT Pais_id
            FROM Invento
        ) S1
        GROUP BY id
        HAVING COUNT(*) = 1
        UNION ALL
        SELECT Pais_id
        FROM Frontera) S1
        GROUP BY id
        HAVING COUNT(*) = 1
        ORDER BY id) S1
    WHERE P.id = S1.PAIS_ID
    ORDER BY P.area DESC;`;
    const q = await pool.query(query);
    console.log(q);
    res.json(q);
});

module.exports = router;