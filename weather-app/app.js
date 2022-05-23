const request = require('request');
const constants = require('./Constants')

console.log(constants);

request(`http://api.weatherstack.com/current?access_key=${constants.apiKey}&query=%27New%20York%27`,
    (error, response, body) => {
    console.log(error);
    console.log(response);
});


