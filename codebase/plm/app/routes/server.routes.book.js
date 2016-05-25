var book = require('../models/server.models.book');

module.exports = {
    configure: function (app) {
        app.get('/api/book/', function (req, res) {
            book.getAll(res);
        });
        app.get('/api/book/:id', function (req, res) {
            book.get(req.params.id, res);
        });
        app.post('/api/book/', function (req, res) {
            book.create(req.body, res);
        });

        app.put('/api/book/:id/', function (req, res) {
            book.update(req.params.id, req.body, res);
        });

        app.delete('/api/book/:id/', function (req, res) {
            book.delete(req.params.id, res);
        });
    }
};