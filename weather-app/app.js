const request = require('request');
const constants = require('./Constants')

console.log(constants);

const weatherTemp = request(`http://api.weatherstack.com/current?access_key=${constants.apiKey}&query=%27New%20York%27`,
    (error, response, body) => {
    if(error) {
        console.log(error);
    }
    const data = JSON.parse(response.body)
    console.log(data);
    console.log(`It is currently ${data.current.temperature} degrees out. There is `)
});

request('https://api.mapbox.com/geocoding/v5/mapbox.places/Los%20Angeles.json?access_token=pk.eyJ1Ijoia3VuYWxjaGhldHJpMTQiLCJhIjoiY2wzajI1d2M5MWloejNrcGdhODVpZ2lreiJ9.jDyOp9NgQqJkUm6O2ormzg',
    (error, response, body) => {
    console.log("the response is ", response)
    })


