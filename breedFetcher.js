const request = require('request');

const fetchBreedDescription = function(breedName, callback) {
  
  request('https://api.thecatapi.com/v1/breeds/search?q=' + breedName, function(error, _response, body) {
    
    if (error) {
      return callback(error, null);
    } else { // No error
      const data = JSON.parse(body);
      // No breed found
      if (!data.length) {
        return callback("Breed not found.", null);
      }
      //Breed found and no error
      return callback(null, data[0].description);
    }
    
  });
};

module.exports = { fetchBreedDescription };