const request = require('request');

const fetchBreedDescription = function(breed, callback) {
  request(`https://api.thecatapi.com/v1/breeds/search?q=${breed}`, (error, response, body) => { 
    // 1. Access the first entry in the data array and print out the description for the user.
    // 2.  Allow the user to specify the breed name using command-line arguments
    if (error) {
      error = `${error}`; // Should print 'Error: REASON'
      callback(error);
    }
    if (response && response.statusCode !== 200) {
      error = `${response && response.statusCode}`; // Edge Case 3.2 Handle request errors and print the error details to the screen.
      callback(error);
    }
  
    const data = JSON.parse(body);
    // console.log(typeof body);
    
    if (data.length === 0) {
      error = `Oops. I'm not a cat!`; // Edge Case 3.1 Breed Not Found.
      callback(error);
    } else {
      desc = data[0].description;
      callback(null, desc);
      // console.log(typeof data);
    }
  });
};

module.exports = { fetchBreedDescription };