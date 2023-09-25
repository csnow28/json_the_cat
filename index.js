const { fetchBreedDescription } = require('./breedFetcher');

const breedName = process.argv[2];

fetchBreedDescription(breedName, (error, desc) => {
  console.log(breedName)
  if (error) {
    console.log(`Error found: ${error}`)
  } else {
    console.log(desc);
  }
});