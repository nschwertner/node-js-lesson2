var request = require('request');
request('http://medapptech.com', function (error, response, body) {
    console.log(body);
});
