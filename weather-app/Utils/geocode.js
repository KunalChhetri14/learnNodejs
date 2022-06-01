const request = require("request");
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

module.exports = {geocode}
