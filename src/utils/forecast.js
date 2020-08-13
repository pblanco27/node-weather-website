const request = require('request')

forecast = (lat, lng, callback) => {
    const url = `http://api.weatherstack.com/current?access_key=2cdb4ba1ad836f610d1aa9e2e2b03a11&query=${lng},${lat}`
    const json = true

    request({ url, json }, (error, response) => {
        if (error) {
            callback('There was an error.', undefined)
        } else if (response.body.error) {
            callback(response.body.error.info, undefined)
        } else {
            const current = response.body.current
            callback(undefined, `${current.weather_descriptions[0]}. This is currently ${current.temperature} degrees out. It feels like ${current.feelslike} degrees out`)
        }
    })
}

module.exports = forecast