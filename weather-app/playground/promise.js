const request = require('request');
var geocodeAddress = (address) => {
  return new Promise((resolve, reject) => {
    var encodedAddress = encodeURIComponent(address);
    request({
      url: `https://maps.googleapis.com/maps/api/geocode/json?address=${encodedAddress}`,
      json: true
    }, (error, response,body) => {
      if(error){
        reject('Unable to connect to google services');
      }
      else if(body.status === 'ZERO_RESULTS'){
        reject('Unable to find that address');
      }
      else if(body.status==='OK'){
        resolve({
          Address: body.results[0].formatted_address,
          Longitude: body.results[0].geometry.location.lng,
          Latitude: body.results[0].geometry.location.lat
        });
      }
    });
  });
};

// Can pass only one parameter, so in practice an object is used, which can have multiple values. It is used when the given request can be resolved, if not Reject is used.

geocodeAddress('530024').then((location) => {
  console.log(JSON.stringify(location,undefined,2));
}, (errorMessage) => {
  console.log(errorMessage);
});


// The parameters for then() would be the same which we pass in resolve() and reject() respectively. 1st parameter for then is for resolve(), 2nd for reject()
// We could only either resolve() or reject() a promise, but we can not do both. If we give both in same promise, only the first thing functions. If we wanna use both in smae promise, use them in if/else blocks.
// catch() is used for reject() case, where if there is any error then it is used to log that error.
