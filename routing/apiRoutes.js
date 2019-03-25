
const express = require('express');
const routes = express.Router();
const friends = require('../app/data/friends');

routes.get('/friends', function(req, res) {
    // res.send(express.json(friends));
    console.log('Getting the friends data');
    res.json(friends);
});

routes.post('/friends', function(req, res) {
    //DONE: Add logic to append a new friend to the frineds list
    //TODO: Add logic to match friends  
    let friendMatch = '';
    let friendPhoto = '';
    let matchDiff = 55; //the greates diff

    console.log('Posting to friends');
    console.log(req.body);

    // Add logic to find friend match here
    friends.forEach(function(friends) {
        let matchScores = [];
        let totalDiff = 55;

        for(let i = 0; i < friends.scores.length; i++) {
            matchScores.push(Math.abs(parseInt(req.body.scores[i]) - parseInt(friends.scores[i])));
        }

        function sum(total, num) {
            return total + num;
        }

        totalDiff = matchScores.reduce(sum, 0);

        if(totalDiff < matchDiff) {
            matchDiff = totalDiff;
            friendMatch = friends.name;
            friendPhoto = friends.photo;
        }
    });

    console.log(matchDiff + ' ' + friendMatch + ' ' + friendPhoto);

    friends.push(req.body);// push new user data to records. do this after finding the match

    res.json({             // send match object response
        name: friendMatch,
        photo: friendPhoto
    });
});

module.exports = routes;