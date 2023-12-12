const mongoose = require('mongoose');
const bcryptjs = require('bcryptjs');

const Esquema = mongoose.Schema;
const EsquemaUsuario = new Esquema ({
    nombre: String,
    email: String,
    contrasenha: String,
});

const Usuario = mongoose.model('Usuario', EsquemaUsuario);
module.exports = Usuario;

module.exports.crearUsuario = (nuevoUsuario, callback) => {
    bcryptjs.genSalt(10, (err, salt) => {
        bcryptjs.hash(nuevoUsuario.contrasenha, salt, (error, hash) => {
            // Almacenar la constraseña encriptada
            const nuevoRecursousuario = nuevoUsuario;
            nuevoRecursousuario.contrasenha = hash;
            nuevoRecursousuario.save()
            .then((callback)); 
        });
    });
};

module.exports.obtenerUsuarioPorEmail = (email, callback) => {
    const consulta= {email};
    Usuario.findOne(consulta)
    .then(callback);
};

module.exports.comparaContrasenha = (contrasenhaCandidato, hash, callback) => {
    bcryptjs.compare(contrasenhaCandidato, hash, (err, coincide) => {
        if (err) throw err;
        callback(null, coincide);
    });
};