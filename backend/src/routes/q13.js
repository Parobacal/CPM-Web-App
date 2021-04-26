const express = require('express');
const router = express.Router();

const pool = require('../database');

router.get('/q13', async (req, res) => {
const query = 
    `SELECT nombre AS "PROFESIONAL", salario AS "SALARIO", comision AS "COMISION", (salario+comision) AS "TOTAL_SALARIO"
    FROM Profesional 
    WHERE comision > ((25/100) * salario)
    ORDER BY nombre;`;
    const q = await pool.query(query);
    console.log(q);
    res.json(q);
});

module.exports = router;