var connection = require('../../config/server.config.db');

function Books() {
    this.get = function (res) {
        connection.acquire(function (err, con) {
            con.query('select * from plm_books', function (err, result) {
                con.release();
                res.send(result);
            });
        });
    };

    this.create = function (book, res) {
        connection.acquire(function (err, con) {
            con.query('insert into plm_books set ?', book, function (err, result) {
                con.release();
                if (err) {
                    res.send({
                        status: 1,
                        message: 'Book creation failed'
                    });
                } else {
                    res.send({
                        status: 0,
                        message: 'Book created successfully'
                    });
                }
            });
        });
    };

    this.update = function (id, book, res) {
        connection.acquire(function (err, con) {
            con.query('update plm_books set ? where id = ?', [book, id], function (err, result) {
                con.release();
                if (err) {
                    res.send({
                        status: 1,
                        message: 'Book update failed'
                    });
                } else {
                    res.send({
                        status: 0,
                        message: 'Book updated successfully'
                    });
                }
            });
        });
    };

    this.delete = function (id, res) {
        connection.acquire(function (err, con) {
            con.query('delete from plm_books where id = ?', [id], function (err, result) {
                con.release();
                if (err) {
                    res.send({
                        status: 1,
                        message: 'Failed to delete'
                    });
                } else {
                    res.send({
                        status: 0,
                        message: 'Deleted successfully'
                    });
                }
            });
        });
    };
}
module.exports = new Books();