const request = require('request');
const constants = require('./Constants')

console.log(constants);

// const weatherTemp = request(`http://api.weatherstack.com/current?access_key=${constants.apiKey}&query=%27New%20York%27`,
//     (error, response, body) => {
//     if(error) {
//         console.log("Error while connecting to server");
//     } else if (response.success === false) {
//         console.log("Unable to find location");
//     } else {
//         const data = JSON.parse(response.body);
//         console.log(`It is currently ${data.current.temperature} degrees out. There is `)
//     }
//     // console.log("Response is ", response.body);
//     // const data = JSON.parse("line no 11" , response.body);
//     // console.log(data);
//
// });

const geocode = (address, callback) => {
    request({url : `https://api.mapbox.com/geocoding/v5/mapbox.places/${address}.json?access_token=pk.eyJ1Ijoia3VuYWxjaGhldHJpMTQiLCJhIjoiY2wzajI1d2M5MWloejNrcGdhODVpZ2lreiJ9.jDyOp9NgQqJkUm6O2ormzg`,
        json: true },(error, response) => {
        if(error) {
            // console.log("Error while connecting");
            callback("Error while connecting", undefined);
        } else if(response.body.features.length === 0) {
            callback('Unable to find location', undefined);
        } else {
            const data = response.body;
            const lat = data.features[0].center[0];
            const long = data.features[0].center[0];
            callback(undefined,{lat: lat, long: long});
            // console.log("the Lat is ",lat , "  and long is ", long);
        }
    })
}

geocode('Los%20Angeles', (error, data) => {
    // console.log("the data from callback is ", data);
    if(data) {
        console.log("the callback value is ", data);
    }
    if(error) {
        console.log("The error is ",error);
    }
})


