const yargs = require('yargs');
const geocode  = require('./geocode/geocode.js');
const weather = require('./weather/weather.js');
const argv = yargs
.options({
  a: {
    demand: true,
    alias: 'address',
    describe: 'Address to fetch weather',
    string: true
  }
})
.help()
.alias('help','h')
.argv;

geocode.geocodeAddress(argv.a, (errorMessage, results) => {
  if(errorMessage){
    console.log(errorMessage);
  }
  else{
    console.log(results.Address);
    weather.getWeather(results.Latitude,results.Longitude, (errorMessage,weatherResult) => {
      if(errorMessage){
        console.log(errorMessage);
      }
      else{
        console.log(`It's curremtly ${weatherResult.Temperature}. It feels like ${weatherResult.apparentTemperature}`);
      }
    });
  }
});
