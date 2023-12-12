const mongoose = require('mongoose');
const Esquema = mongoose.Schema;
const EsquemaCalificacion = new Esquema ({
    pelicula_id: String,
    user_id: String,
    calif: Number,
});

const Calificacion = mongoose.model('Calificacion', EsquemaCalificacion);
module.exports = Calificacion;
