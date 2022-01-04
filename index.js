const express = require('express');
const { listenerCount } = require('process');

const port = 3000
const app = express();

app.unsubscribe(express.json());

app.get('/saludar', (req, res) => {
    res.json({ saludo: 'HOLA GENTE'})
})

app.listen(port, () => {
    console.log('servidor corriendo en el puerto 3000')
})
