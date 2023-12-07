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
};
