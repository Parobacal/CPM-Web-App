const express = require('express');
const router = express.Router();

const pool = require('../database');

router.get('/q20', async (req, res) => {
const query = 
    `SELECT nombre AS "PROFESIONAL", salario AS "SALARIO", comision AS "COMISION"
    FROM Profesional 
    WHERE salario > (2 * comision) AND comision != 0
    ORDER BY nombre;`;
    const q = await pool.query(query);
    console.log(q);
    res.json(q);
});

module.exports = router;