const express = require('express');
const fs = require('fs');
const path = require('path');

const router = express.Router();

// Ler todos os arquivos na pasta atual exceto este arquivo
fs.readdirSync(__dirname).forEach(file => {
  if (file !== 'index.js' && file.endsWith('.js')) {
    const route = require(`./${file}`);
    const routeName = `/${path.basename(file, '.js')}`;
    router.use(routeName, route);
  }
});

module.exports = router;
