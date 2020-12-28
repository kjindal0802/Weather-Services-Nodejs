const request = require('request');

const foreCast = (latitude, longitude, callback) => {
    const weatherURL = "http://api.weatherstack.com/current?access_key=dbbcb7d3318788f4e56ad909613ee4b3&query=" +
        encodeURIComponent(latitude) + "," + encodeURIComponent(longitude)

    request({ url: weatherURL, json: true }, (error, { body }) => {
        if (error) {
            callback("Unable to connect to weather services.", undefined)
        } else if (body.error) {
            callback(body.error.info, undefined)
        } else {
            const place = body.location.name;
            const temperature = body.current.temperature;
            const weather_description = body.current.weather_descriptions[0];
            callback(undefined, { place, weather_description })
        }
    })
}

module.exports = foreCast;