const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const wappinit = require('./wp');

const app = express();
const port = 3333;

app.use(cors());
app.use(bodyParser.json());

//wappinit();

app.post('/api/iniciarWhatsapp', (req, res) => {
  wappinit();
  res.send({ message: 'Iniciando WhatsApp...' });
});


app.listen(port, () => {
  console.log(`Servidor Express iniciado en el puerto ${port}`);
});
