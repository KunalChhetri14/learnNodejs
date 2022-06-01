const request = require('request');
const constants = require('../Constants')

const forecast = (lat, long, callback) => {
    console.log("inside")
    const url = `http://api.weatherstack.com/forecast?access_key=${constants.apiKey}&query=${lat},${long}`;
    console.log(url);
    request({url: url, json: true}, (error, response) => {
        if(error) {
            callback('Internet connection Error', undefined);
        } else if (!response.body.success) {
            callback(undefined, response.body.error.info);
        } else {
            console.log(response.body);
            // callback(response);
        }
    })
}

module.exports = {forecast};
