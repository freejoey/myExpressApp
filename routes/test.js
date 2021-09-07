var url = require('url');
var express = require('express');
var router = express.Router();
var TestService = require('../service/TestService');
const e = require('express');
const { error } = require('console');
var testService = new TestService();

router.get('/get', function (req, res) {
    console.log(req.query)
    testService.getData()
        .then((data) => { res.send(data) })
        .catch((error) => {
            console.log(error);
            res.send({});
        });
});

router.get('/add', function (req, res) {
    console.log(req.query)
    params = url.parse(req.url, true).query;
    testService.addData([params.id, params.name])
        .then((suc) => res.send({ 'suc': suc }))
        .catch((error) => {
            console.log(error);
            res.send({ "suc": false });
        });
});

router.get('/update', function (req, res) {
    console.log(req.query)

    params = url.parse(req.url, true).query;
    console.log(params);
    testService.update([params.new_id, params.id])
    .then((suc)=> res.send({'suc': suc}))
    .catch((error)=>{
        console.log(error);
        res.send({"suc": false});
    });
});
module.exports = router;