const request = require('request');
const constants = require('./Constants')
const geocode = require('./Utils/geocode');
const forecast = require('./Utils/forecast');

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


geocode.geocode('Los%20Angeles', (error, data) => {
    // console.log("the data from callback is ", data);
    if(data) {
        console.log("the callback value is ", data);
    }
    if(error) {
        console.log(error);
    }
})

forecast.forecast(-118.242766, -118.242766, (error, data) => {
    if(error) {
        console.log("Error is ",error);
    } else {
        console.log("The avg temperature is ", data);
    }

})


