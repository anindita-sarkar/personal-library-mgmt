var genre = require('../models/server.models.genre');

module.exports = {
    configure: function (app) {
        app.get('/api/genre/', function (req, res) {
            genre.get(res);
        });

        app.post('/api/genre/', function (req, res) {
            genre.create(req.body, res);
        });

        app.put('/api/genre/:id/', function (req, res) {
            genre.update(req.params.id, req.body, res);
        });

        app.delete('/api/genre/:id/', function (req, res) {
            genre.delete(req.params.id, res);
        });
    }
};