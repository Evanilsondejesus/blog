const express = require('express');

const router = express.Router();
const allService = require('../services/Service');

const Service = new allService();

router.use(express.json())


router.put('/:id', async (req, res) => {
const {id} = req.params
const {title, content, author} = req.body 

try {
    await Service.updatePublicacao({ title, content, id, author});
    res.status(201).send('publicação atualizada com sucesso');
  } catch (error) {
    res.status(500).send('Erro ao atualizar publicação');
  }



 
});
  




module.exports = router;