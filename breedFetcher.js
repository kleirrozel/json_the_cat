const request = require('request');
const args = process.argv.slice(2);
const breed = args[0];

// 1. Access the first entry in the data array and print out the description for the user.
// 2.  Allow the user to specify the breed name using command-line arguments

request(`https://api.thecatapi.com/v1/breeds/search?q=${breed}`, (error, response, body) => {
  if (error) {
    console.log(`ERROR: ${error}`); // Should print 'Error: REASON'
    process.exit();
  }
  if (response && response.statusCode !== 200) {
    console.log(`ERROR: ${response && response.statusCode}`); // Edge Case 3.2 Handle request errors and print the error details to the screen.
    process.exit();
  }

  const data = JSON.parse(body);
  // console.log(typeof body);
  
  if (data.length === 0) {
    console.log(`Oops. I'm not a cat!`); // Edge Case 3.1 Breed Not Found.
    process.exit();
  } else {
    console.log(data[0].description);
    // console.log(typeof data);
    process.exit();
  }
});