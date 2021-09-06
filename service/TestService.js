var connection = require('./db')

class TestService {

    getData(cb) {
        var data = ''
        connection.query('SELECT * FROM t', function (error, results, fields) {
            if (error) throw error;
            data = JSON.stringify(results);
            console.log(data);
            cb(data);
        });
    };

    addData(params, cb){
        var data = '';
        connection.query('INSERT INTO t(id) VALUES(?)', params, function (error, results, fields) {
            if (error) throw error;
            data = JSON.stringify(results);
            console.log(data);
            cb(data);
        });
    }

    update(params, cb) {
        var data = '';
        connection.query('UPDATE t SET id=? WHERE id=?', params, function (error, results, fields) {
            if (error) throw error;
            data = JSON.stringify(results);
            console.log(data);
            cb(data);
        });
    }
}

module.exports = TestService