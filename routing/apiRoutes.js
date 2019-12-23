let friendsList = require('../data/friends.js');
let new_list = friendsList;

module.exports = function (app) {
    // build a get function whenever user go to the url /api/survey go ahead and display 
    // survey data in JSON format
    app.get('/api/survey', function (req, res) {
        res.json(friendsList);
    });

    app.post('/api/survey', function (req, res) {
        console.log(req.body)
        new_list.push(req.body);

        // Call the method that Compares each person and their scores.
        new_list.forEach((friend, index) => {
            console.log(friend.totalScore ? friend.totalScore : "No score yet")
        })
        res.json(new_list);

    });

    // Need to add a GET method to return a specific friend
    // In Star Wars exercise, this is the equivalent of the /api/characters/:character endpoint
    app.get('/api/survey/:survey', function (req, res) {
        var friend = req.body;

        return res.json(friend);
    });

};