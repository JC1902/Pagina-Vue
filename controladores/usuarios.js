const Usuario = require('../modelos/Usuario');

const passportJWT = require('passport-jwt');
const jwt = require('jsonwebtoken');

const ExtractJwt = passportJWT.ExtractJwt;
const jwtOptions = {};
jwtOptions.jswtFromRequest = ExtractJwt.fromAuthHeaderWithScheme('jwt');
jwtOptions.secretOrKey = 'estoeslaclavesecreta';

module.exports.controller = (app) => {
    // Registrar a un usuario
    app.post('/usuarios/registro', (req, res) => {
        const nombre = req.body.nombre;
        const email = req.body.email;
        const contrasenha = req.body.contrasenha;
        const nuevoUsuario = new Usuario({
            nombre,
            email,
            contrasenha,
        });
        
        Usuario.crearUsuario(nuevoUsuario, (error, usuario) => {
            if (error) {
                console.error(error);
                res.status(422).json({
                    mensaje: 'Algo salio mal. Por favor inténtelo de nuevo más adelante',
                });
            } else {
                res.send({ usuario });
            }
        });
    });

    // Iniciar sesion
    app.post('/usuarios/login', (req, res) => {
        if (req.body.email && req.body.password) {
            const email = req.body.email;
            const contrasenha = req.body.contrasenha;
            Usuario.obtenerUsuarioPorEmail(email, (err, usuario) => {
                if (!usuario) {
                    res.status(404).json({ mensaje: 'El usuario no existe' });
                } else {
                    Usuario.compararContrasenha(contrasenha, usuario.contrasenha, (error, coincide) => {
                        if (error) throw error;
                        if (coincide) {
                            const payload = { id: usuario.id };
                            const token = jwt.sign(payload, jwtOptions.secretOrKey);
                            res.json({ mensaje: 'Ok', token });
                        } else {
                            res.status(401).json({ mensaje: 'La contraseña es incorrecta' });
                        }
                    });
                }
            });
        }
    });
};