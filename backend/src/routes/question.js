const express = require('express');
const router = express.Router();

const pool = require('../database');

router.get('/all', async (req, res) => {
const query = 
    `SELECT P.id AS "IDENTIFICADOR", P.pregunta AS "PREGUNTA", E.nombre AS "ENCUESTA"
     FROM Pregunta P, Encuesta E
     WHERE P.Encuesta_id = E.id
     ORDER BY "IDENTIFICADOR";`;
    const q = await pool.query(query);
    res.json(q);
});

router.post('/new', async (req, res) => {
    const {PREGUNTA, ENCUESTA} = req.body;
    const query = 
        `INSERT INTO Pregunta (pregunta, Encuesta_id) 
         SELECT '${PREGUNTA}', id
         FROM Encuesta
         WHERE nombre = '${ENCUESTA}';`;
        const q = await pool.query(query);
        console.log(query);
        console.log(q);
        res.json({text: 'Question created'});
        console.log("Question created");
});

router.put('/update/:id', async (req, res) => {
    const { id } = req.params;
    const {PREGUNTA, ENCUESTA} = req.body;
    const query = 
        `UPDATE Pregunta SET pregunta = '${PREGUNTA}', Encuesta_id = (SELECT id FROM Encuesta WHERE nombre = '${ENCUESTA}')
         WHERE id = ${id};`;
    console.log(query);
    try {
        await pool.query(query);
        res.json({text: 'Question updated'});
        console.log("Question updated");
    } catch (error) {
        res.status(500).send({ msg: error.message });
    }
});

router.delete('/delete/:id', async (req, res) => {
    const { id } = req.params;
    const query = 
        `DELETE FROM Pregunta WHERE id = '${id}';`;
    console.log(query);
    await pool.query(query);
    res.json({text: 'Question deleted'});
    console.log("Question deleted");
});

module.exports = router;