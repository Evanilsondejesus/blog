
const express = require('express');
const router = express.Router();
const allService = require('../services/Service');
const Service = new allService();

 
router.use(express.json())
 
router.post('/', async (req, res) => {
const { title, content, author } = req.body;

  try {
          let result = await Service.novaPublicacao({ title, content, author});
    res.status(201).send(result);
  } catch (error) {
    res.status(500).send('Erro ao salvar a mensagem.');
  }
});


 




module.exports = router;
