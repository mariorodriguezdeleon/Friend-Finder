const express = require('express');
const path = require('path');

const routes = express.Router();

routes.get('/', function(req, res) {
    res.sendFile(path.join(__dirname, '../public/home.html'));
})

routes.get('/home', function(req, res) {
    res.sendFile(path.join(__dirname, '../public/home.html'));
})

routes.get('/survey', function(req, res) {
    res.sendFile(path.join(__dirname, '../public/survey.html'));
})

routes.get('/:param', function(req, res) {
    res.status(404).send('Something Went Wrong. Can\'t find what you requested');
})

module.exports = routes;