const { fetchBreedDescription } = require('../breedFetcher');
const { assert } = require('chai');

describe('fetchBreedDescription', () => {
  it('returns a string description for a valid breed, via callback', (done) => {
    fetchBreedDescription('Siberian', (error, desc) => {
      
      assert.equal(error, null); // we expect no error for this scenario

      const expectedDesc = "The Siberians dog like temperament and affection makes the ideal lap cat and will live quite happily indoors. Very agile and powerful, the Siberian cat can easily leap and reach high places, including the tops of refrigerators and even doors.";

      assert.equal(expectedDesc, desc.trim()); // compare returned description

      done();
    });
  });
  
  it('returns the error details if breed is non-existent, via callback', (done) => {
    fetchBreedDescription('Lion', (error, desc) => {
      // we expect an error for this scenario
      assert.equal(error, `Oops. I'm not a cat!`);
      done();
    });
  });
});

// To Do: Add another test (it) here which should test the scenario where an invalid/non-existent breed is passed in.
// To Do: ESLint our test file as well!