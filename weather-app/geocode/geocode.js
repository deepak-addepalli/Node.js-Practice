const request = require('request');

var geocodeAddress = (address, callback) => {
  var encodedAddress = encodeURIComponent(address);

  request({
    url: `https://maps.googleapis.com/maps/api/geocode/json?address=${encodedAddress}`,
    json: true
  }, (error, response,body) => {
    if(error){
      callback('Unable to connect to google services');
    }
    else if(body.status === 'ZERO_RESULTS'){
      callback('Unable to find that address');
    }
    else if(body.status==='OK'){
      callback(undefined,{
        Address: body.results[0].formatted_address,
        Longitude: body.results[0].geometry.location.lng,
        Latitude: body.results[0].geometry.location.lat
      });
    }
  });
};

module.exports = {
  geocodeAddress
}
