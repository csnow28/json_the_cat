const request = require('request');

const fetchBreed = function(breedName) {
  if (!breedName) {
    console.log("Please provide a breed name.");
  }
  const url = `https://api.thecatapi.com/v1/breeds/search?q=${breedName}`;
  request(url, (error, response, body) => {
    if (error) {
      console.log(`error: ${error}`);
      return;
    }
    const data = JSON.parse(body);
    if (data.length === 0) {
      console.log(`Breed: ${breedName} not found.`);
    }
    console.log(data);
    console.log(typeof data);
  });
};
const breedName = process.argv[2];
fetchBreed(breedName);