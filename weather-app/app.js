const request = require('request');
const constants = require('./Constants')

console.log(constants);

const weatherTemp = request(`http://api.weatherstack.com/current?access_key=${constants.apiKey}&query=%27New%20York%27`,
    (error, response, body) => {
    if(error) {
        console.log("Error while connecting to server");
    } else if (response.success === false) {
        console.log("Unable to find location");
    } else {
        const data = JSON.parse(response.body);
        console.log(`It is currently ${data.current.temperature} degrees out. There is `)
    }
    // console.log("Response is ", response.body);
    // const data = JSON.parse("line no 11" , response.body);
    // console.log(data);

});

request({url : 'https://api.mapbox.com/geocoding/v5/mapbox.places/Los%20Angeles.json?access_token=pk.eyJ1Ijoia3VuYWxjaGhldHJpMTQiLCJhIjoiY2wzajI1d2M5MWloejNrcGdhODVpZ2lreiJ9.jDyOp9NgQqJkUm6O2ormzg',
    json: true },(error, response) => {
    if(error) {
        console.log("Error while connecting");
    } else{
        const data = response.body;
        const lat = data.features[0].center[0];
        const long = data.features[0].center[0];
        console.log("the Lat is ",lat , "  and long is ", long);
    }
    })


