const express = require('express');
const app = express();
const port = 3000;

// app.get('/', (req, res) => {
//     res.send('Dia de la hamburgesa, 2 por 1');
// });

app.get('/', (req, res) => {
    let productos = [{
        id: 1,
        nombre: 'Hamburguesa',
        precio: 100
    }, {
        id: 2,
        nombre: 'Papas',
        precio: 50
    }, {
        id: 3,
        nombre: 'Gaseosa',
        precio: 30
    }]
    
    let respuesta = '';
productos.forEach(producto => {
    respuesta += `<tr><td>${producto.nombre}</td><td>$${producto.precio}</td></tr>`;
});

res.send(`<table style="border: 1px solid black;"><thead><tr><th>Nombre</th><th>Precio</th></tr></thead><tbody>${respuesta}</tbody></table>`);
});

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
});