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

}