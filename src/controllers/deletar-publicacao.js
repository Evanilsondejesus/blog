const express = require('express');
const router = express.Router();
const allService = require('../services/Service');
const Service = new allService();



router.delete('/:id', async (req, res) => {
const id = req.params.id;
 
try {
    const publicacao = await Service.deletePublicacao(id);
    return res.send(publicacao);
 
} catch (error) {
    console.error('Erro ao buscar a publicação:', error);
    return res.status(500).send('Erro ao buscar a publicação.');
}

});
    




module.exports = router;