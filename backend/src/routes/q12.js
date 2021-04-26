const express = require('express');
const router = express.Router();

const pool = require('../database');

router.get('/q12', async (req, res) => {
const query = 
    `SELECT nombre AS "INVENTO"
    FROM Invento
    WHERE CHAR_LENGTH(nombre) = 4 AND SUBSTR(nombre,1,1) = 'L'
    ORDER BY nombre;`;
    const q = await pool.query(query);
    console.log(q);
    res.json(q);
});

module.exports = router;