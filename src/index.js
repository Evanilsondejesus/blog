const express = require('express');
const routes = require('./controllers')

const cors = require('cors');
const app = express();
const port = 3000; 
 
app.use(cors());
app.use('/api', routes);


 

app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`);
});
