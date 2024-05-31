const express = require('express');
const router = express.Router(); 
const allService = require('../services/Service');
const Service = new allService();
router.use(express.json())
 



router.get('/', async (req, res) => {
   
  try {
    const publicacao = await Service.listaPublicacao();
     
    if (publicacao) {
        return res.json(publicacao);
    } else {
        return res.status(404).json({ message: 'Publicação não encontrada' });
    }
} catch (error) {
    console.error('Erro ao buscar a publicação:', error);
    return res.status(500).send('Erro ao buscar a publicação.');
}





});

module.exports = router;