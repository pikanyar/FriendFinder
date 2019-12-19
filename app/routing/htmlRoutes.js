let path = require('path');

//when the user hits the URL survey that show them Survey.html
module.exports = function (app) {
    app.get('/survey', function (req, res) {
        res.sendFile(path.join(__dirname + '/../app/public/survey.html'));
    });
    // if you are using the app and if we haven't already defined the URL they go to any URL other than survey we send them to the home page
    app.use(function (req, res) {
        res.sendFile(path.join(__dirname + '/../app/public/home.html'));
    });
}