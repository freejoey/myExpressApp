var url = require('url');
var express = require('express');
var router = express.Router();
var TestService = require('../service/TestService')
var testService = new TestService();

router.get('/get', function(req, res) {
    console.log(req.query)
    testService.getData(function cb(data) {
        res.send(data);    
    });
});

router.get('/add', function(req, res) {
    console.log(req.query)

    params = url.parse(req.url, true).query;
    console.log(params);
    testService.addData([params.id], function cb(data) {
        res.send(data);    
    });
});

router.get('/update', function(req, res) {
    console.log(req.query)

    params = url.parse(req.url, true).query;
    console.log(params);
    testService.update([params.new_id, params.id], function cb(data) {
        res.send(data);    
    });
});
module.exports = router;