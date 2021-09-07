var connection = require('./db')

class TestService {

    getData() {
        return new Promise((resovle, reject) => {
            connection.query('SELECT * FROM t', function (error, results, fields) {
                if (error) reject(error);
                resovle(JSON.stringify(results));
            });
        });
    };

    addData(params) {
        return new Promise((resovle, reject) => {
            connection.query('INSERT INTO t(id, name) VALUES(?, ?)', params, function (error, results, fields) {
                if (error) {
                    reject(error);
                    return;
                }
                if (results && 1 == results.affectedRows) {
                    resovle(true);
                } else {
                    resovle(false);
                }

            });
        });
    }

    update(params) {
        return new Promise((resovle, reject) => {
            connection.query('UPDATE t SET id=? WHERE id=?', params, function (error, results, fields) {
                if (error) {
                    reject(error);
                    return;
                }
                if (results && 1 == results.affectedRows) {
                    resovle(true);
                } else {
                    resovle(false);
                }
            });
        });
    }
}

module.exports = TestService