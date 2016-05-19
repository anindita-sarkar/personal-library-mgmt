var book = require('../models/server.models.book');

module.exports = {
    configure: function (app) {
        app.get('/book/', function (req, res) {
            book.get(res);
        });

        app.post('/book/', function (req, res) {
            book.create(req.body, res);
        });

        app.put('/book/:id/', function (req, res) {
            book.update(req.params.id, req.body, res);
        });

        app.delete('/book/:id/', function (req, res) {
            book.delete(req.params.id, res);
        });
    }
};