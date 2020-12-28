const request = require('request');

const geoCode = (address, callback) => {
    const geoURL = "https://api.mapbox.com/geocoding/v5/mapbox.places/" + encodeURIComponent(address) + ".json?limit=1&access_token=pk.eyJ1Ijoia2ppbmRhbDA4MDIiLCJhIjoiY2tqMWd0YWx6MDZkcDJ6cGl2dWxncjF2YiJ9.EWxn_NpV8eZCGBIO7HAV3w"

    request({ url: geoURL, json: true }, (error, { body }) => {
        if (error) {
            callback("Unable to connect to location services", undefined)
        } else if (body.features.length === 0) {
            console.log('location');
            callback("Unable to find location.", undefined)
        } else {
            const location = body.features[0].place_name;
            const latitude = body.features[0].center[1];
            const longitude = body.features[0].center[0];
            callback(undefined, {
                location, latitude, longitude
            })
        }
    })
}
module.exports = geoCode;