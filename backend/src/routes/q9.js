const express = require('express');
const router = express.Router();

const pool = require('../database');

router.get('/q9', async (req, res) => {
const query = 
    `(SELECT I.nombre AS "INVENTOR", INV.nombre AS "INVENTO"
    FROM Inventor I, Invento INV, Inventor_invento II,
        (SELECT S1.INVENTOR_INICIAL AS "INVENTOR_INICIAL_BE", S1.INVENTOR_ID
         FROM
             (SELECT SUBSTR(nombre,1,2) AS "INVENTOR_INICIAL", id "INVENTOR_ID"
              FROM Inventor
              ORDER BY INVENTOR_INICIAL) S1
         WHERE S1.INVENTOR_INICIAL = 'BE'
         ORDER BY S1.INVENTOR_ID) S1
    WHERE II.Inventor_id = S1.INVENTOR_ID AND II.Inventor_id = I.id AND II.Invento_id = INV.id AND I.nombre != 'Bell, Tainter'
    GROUP BY INVENTOR, INVENTO
    ORDER BY INVENTOR)
    UNION
    (SELECT SUBSTR(I.nombre,1,4) AS "INVENTOR", INV.nombre AS "INVENTO"
    FROM Inventor I, Invento INV, Inventor_invento II
    WHERE II.Inventor_id = I.id AND II.Invento_id = INV.id AND I.nombre = 'Bell, Tainter')
    ORDER BY INVENTOR;`;
    const q = await pool.query(query);
    console.log(q);
    res.json(q);
});

module.exports = router;