const mongoose = require('mongoose');
const Esquema = mongoose.Schema;
const EsquemaPelicula = new Esquema({
    nombre: String,
    sinopsis: String,
    anhopub: Number,
    genero: String,
});

const Pelicula = mongoose.model('Pelicula', EsquemaPelicula);
module.exports = Pelicula;
