const yargs = require('yargs');
const axios = require('axios');
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

var encodedAddress = encodeURIComponent(argv.address);
var geocodeUrl = `https://maps.googleapis.com/maps/api/geocode/json?address=${encodedAddress}`;

axios.get(geocodeUrl).then((response) => {
  console.log(response.data);
}).catch((err) => {
  console.log(err);
});
