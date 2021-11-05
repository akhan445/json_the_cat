const request = require('request');

const type = process.argv.slice(2)[0];

request('https://api.thecatapi.com/v1/breeds/search?q=' + type, function(error, _response, body) {
  
  if (error) {
    return console.log(error);
  }
  const data = JSON.parse(body);
  if (!data.length) {
    return console.log("Breed not found.");
  }
  //Breed found and no error
  console.log(data[0].description);
  
});