const request = require('request');

const apiKey = 'YOUR_API_KEY';
const zipCodeUrl = 'https://www.zipcodeapi.com/rest/';

const distance = {
    find: function (req, res, next) {
        request(zipCodeUrl + apiKey + '/distance.json/' + 
            req.params.zipcode1 + '/' + req.params.zipcode2 + '/km', 
            function (error, response, body) {
                if (!error && response.statusCode == 200) {
                    response = JSON.parse(body);
                    res.send(response);
                } else {
                    console.log(response.statusCode + response.body);
                    res.send({distance: -1});
                }
            });
    }
}

module.exports = distance;