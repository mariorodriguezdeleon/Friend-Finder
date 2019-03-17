const express = require('express');
const routes = express.Router();

const friends = require('../app/data/friends');

routes.get('/friends', function(req, res) {
    // res.send(express.json(friends));
    console.log('Getting the friends data');
    res.send(friends);
});

routes.post('/friends/:name/:photoURL/:ans1', function(req, res) {
    //TODO: Add logic to append a new friend to the frineds list
    console.log('Posting to friends');

    let name = req.params.name;
    let photoURL = req.params.photoURL;
    let ans1 = req.params.ans1;

    friends.push(
        {
            name: name,
            photo: photoURL,
            scores: ans1
        }
    );
})

module.exports = routes;