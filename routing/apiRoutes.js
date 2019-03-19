
const express = require('express');
const routes = express.Router();
const friends = require('../app/data/friends');

routes.get('/friends', function(req, res) {
    // res.send(express.json(friends));
    console.log('Getting the friends data');
    res.json(friends);
});

routes.post('/friends', function(req, res) {
    //TODO: Add logic to append a new friend to the frineds list
    //TODO: Add logic to match friends

    console.log('Posting to friends');
    console.log(req.body);

    friends.push(req.body);

    res.send('Posted to Friends');
});

module.exports = routes;