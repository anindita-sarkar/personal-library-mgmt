var connection = require('../../config/server.config.db');

function Genre() {
    this.getAll = function (res) {
        connection.acquire(function (err, con) {
            con.query('select * from plm_genre', function (err, result) {
                con.release();
                res.send(result);
            });
        });
    };
    this.get = function (id, res) {
        connection.acquire(function (err, con) {
            con.query('select * from plm_genre where id = ?', [id], function (err, result) {
                con.release();
                res.send(result[0]);
            });
        });
    };
    this.create = function (genre, res) {
        connection.acquire(function (err, con) {

            con.query('insert into plm_genre (ID, NAME) VALUES(?, ?)', [0, genre.Name], function (err, result) {
                con.release();
                if (err) {
                    res.send({
                        status: 1,
                        message: err
                    });
                } else {
                    res.send({
                        status: 0,
                        message: 'Genre created successfully'
                    });
                }
            });
        });
    };

    this.update = function (id, genre, res) {
        connection.acquire(function (err, con) {
            con.query('update plm_genre set ? where id = ?', [genre, id], function (err, result) {
                con.release();
                if (err) {
                    res.send({
                        status: 1,
                        message: 'Genre update failed'
                    });
                } else {
                    res.send({
                        status: 0,
                        message: 'Genre updated successfully'
                    });
                }
            });
        });
    };

    this.delete = function (id, res) {
        connection.acquire(function (err, con) {
            con.query('delete from plm_genre where id = ?', [id], function (err, result) {
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
module.exports = new Genre();