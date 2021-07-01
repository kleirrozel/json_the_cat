const { fetchBreedDescription } = require('./breedFetcher');
const breed = process.argv[2]; // 2.  Allow the user to specify the breed name using command-line arguments

const callback = function(error, desc) {
  if (error) {
    console.log('Error fetch details:', error); // Will fetch the error in the breedFetcher file and log it
  } else {
    console.log(desc); // Will fetch the desc in breedFetcher and log it
  }
};

fetchBreedDescription(breed, callback); // Function that will be used in breedFetcher