const EsquemaPelicula = require('../modelos/Pelicula');

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
    app.get('/peliculas', (req, res) => {
        EsquemaPelicula.find({}, 'nombre sinopsis anhopub genero')
        .then((error, peliculas) => {
            if (error) { 
                console.log(error);
                res.send(error);
            } else {
                res.send(peliculas);
            }
        });
    });
};
