// body-parser alows us to recieve our information back in JSON form
let bodyParser = require('body-parser');
let express = require('express');
let path = require('path');

let app = express();

//This port will take whatever port is defined by the deployement site like Heroku or 8080
let PORT = process.env.PORT || 2020



// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())

/*app.use(function (req, res) {
    res.setHeader('Content-Type', 'text/plain')
    res.write('you posted:\n')
    res.end(JSON.stringify(req.body, null, 2))
})*/
//include the  HTML routes files in our server
require('./routing/apiRoutes.js')(app);
require('./routing/htmlRoutes.js')(app);

//the server had started running whenever we press our file js
app.listen(PORT, function () {
    console.log("App listening on PORT: " + PORT)
});