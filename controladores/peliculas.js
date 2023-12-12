const EsquemaPelicula = require('../modelos/Pelicula');
const Calificacion = require('../modelos/Calificacion');
const passport = require('passport')

module.exports.controller = (app) => {
    // Agregar una pelicula 
    app.post('/peliculas', (req, res) => {
        const nuevaPelicula = new EsquemaPelicula({
            nombre: req.body.nombre,
            sinopsis: req.body.sinopsis,
            anhopub: req.body.anhopub,
            genero: req.body.genero,
        });

        nuevaPelicula.save()
        .then((error, pelicula) => {
            if (error) {
                console.log(error);
            }
            res.send(pelicula);
        });
    });

    // Obtener todas las peliculas
    app.get('/peliculas', passport.authenticate('jwt', { session: false }), (req, res) => {
        EsquemaPelicula.find({}, 'nombre sinopsis anhopub genero')
        .then((error, peliculas) => {
            if (error) { 
                console.log(error);
                res.send(error);
            } else {
                res.send({peliculas});
            }
        });
    });

    // Obtener una pelicula
    app.get('/api/peliculas/:id', (req, res) => {
        EsquemaPelicula.findById(req.params.id, 'nombre sinopsis anhopub genero')
        .then((error, pelicula) => {
            if (error) {
                console.error(error);
            } else {
                res.send(pelicula);
            }
        });
    })

    // Calififcar una pelicula
    app.post('/peliculas/calif/:id', (req, res) => {
        const calificacion = new Rating({
            pelicula_id: req.params.id,
            user_id: req.body.user_id,
            calif: requ.body.calif,
        });

        calificacion.save(function (error, calif) {
            if (error) {
                console.log(error);
            }
            res.send({
                pelicula_id: calificacion.pelicula_id,
                user_id: calificacion.user_id,
                calif: calificacion.calif,
            });
        });
    });

    // Eliminar una película por su id
    app.delete('/peliculas/:id', (req, res) => {
        EsquemaPelicula.deleteOne({_id: req.params.id})
        .then((error, pelicula) => {
            if(error) {
                console.error(error);
                res.send(error);
            } else {
                res.end({estado: eliminado});
            }
        });
    });

    // Borrar todas las películas
    app.delete('/peliculas', (req, res) => {
        EsquemaPelicula.deleteMany({})
        .then((error) => {
            if(error) {
                console.error(error);
                res.send(error);
            } else {
                res.end({estado: eliminado});
            }
        });
    });
};
