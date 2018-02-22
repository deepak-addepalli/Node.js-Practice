const request = require('request');

var getWeather = (lat,lng,callback) => {
  request({
    url: `https://api.darksky.net/forecast/afafc23d5a5e72389b124771db63f849/${lat},${lng}`,
    json: true
  }, (error, response, body) => {
    if(!error && response.statusCode === 200){
      callback(undefined, {
        Temperature: body.currently.temperature,
        apparentTemperature: body.currently.apparentTemperature
      });
    }
    else {
      callback('Unable to fetch data from forecast.io');
    }
  });
};

module.exports = {
  getWeather
}
