const express = require('express');
const router = express.Router();

const pool = require('../database');

router.get('/all', async (req, res) => {
const query = 
    `SELECT P.id AS "IDENTIFICADOR", P.pais AS "PAIS", P.poblacion AS "POBLACION", P.area AS "AREA", P.capital AS "CAPITAL", R.region AS "REGION"
     FROM Pais P, Region R
     WHERE P.Region_id = R.id
     ORDER BY "PAIS";`;
    const q = await pool.query(query);
    res.json(q);
});

router.post('/new', async (req, res) => {
    const {PAIS, POBLACION, AREA, CAPITAL, REGION} = req.body;
    const query = 
        `INSERT INTO Pais (pais, capital, poblacion, area, Region_id) 
         SELECT '${PAIS}','${CAPITAL}', ${POBLACION}, ${AREA}, id
         FROM Region
         WHERE region = '${REGION}';`;
    try {
        const q = await pool.query(query);
        console.log(query);
        console.log(q);
        res.json({text: 'Country created'});
        console.log("Country created");
    }
    catch (error) {
        res.status(500).send({ msg: error.message });
    }
});

router.put('/update/:id', async (req, res) => {
    const { id } = req.params;
    const {PAIS, POBLACION, AREA, CAPITAL, REGION} = req.body;
    const query = 
        `UPDATE Pais SET pais = '${PAIS}', capital = '${CAPITAL}', poblacion = ${POBLACION}, area = ${AREA}, Region_id = (SELECT id FROM Region WHERE region = '${REGION}')
         WHERE id = ${id};`;
    console.log(query);
    try {
        await pool.query(query);
        res.json({text: 'Country updated'});
        console.log("Country updated");
    } catch (error) {
        res.status(500).send({ msg: error.message });
    }
});

router.delete('/delete/:id', async (req, res) => {
    const { id } = req.params;
    const query = 
        `DELETE FROM Pais WHERE id = '${id}';`;
    console.log(query);
    await pool.query(query);
    res.json({text: 'Country deleted'});
    console.log("Country deleted");
});

module.exports = router;