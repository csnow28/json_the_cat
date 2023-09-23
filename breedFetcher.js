const request = require('request');

const fetchBreed = function(breedName, callback) {
  url = `https://api.thecatapi.com/v1/breeds/search?q=${breedName}`;
  request (url, (error, response, body) => {
    const data = JSON.parse(body);
    breed = data[0];
    if (breed) {
      callback(error, breed["description"])
    } else {
      callback(`Breed: ${breedName} not found in databse.`)
    }
  });
};

module_exports = { fetchBreed }