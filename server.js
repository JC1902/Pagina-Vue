const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const cors = require('cors');
const morgan = require('morgan');
const fs = require('fs');

const app = express();
const router = express.Router();
app.use(morgan('combined'));
app.use(bodyParser.json());
app.use(cors());

// conexión a mongodb
mongoose.connect('mongodb://localhost/calif_peliculas_ad2023').then( () => {
    console.log('Conexion con la base de datos realizada');
})
.catch(err => {
    console.error('Error iniciando Aplicacion: ', err.stack);
    process.exit(1);
});

fs.readdirSync('controladores').forEach(function (arch) {
    if (arch.slice(-3) == '.js') {
        const route = require('./controladores/' + arch);
        route.controller(app);
    }
});

router.get('/', function(req, res) {
    res.json({ mensaje: 'API Inicializada' });
});

const puerto = process.env.API_PORT || 8081;
app.use('/', router);
app.listen(puerto, function() {
    console.log(`api corriendo en el puerto ${puerto}`);
});
