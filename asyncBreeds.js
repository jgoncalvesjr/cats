// asyncBreeds.js
const fs = require('fs');

const breedDetailsFromFile = function(breed, whenDone) {
  // console.log('breedDetailsFromFile: Calling readFile...');
  fs.readFile(`./data/${breed}.txt`, 'utf8', (error, data) => {
    // console.log("In readFile's Callback: it has the data.");
    // Data must be passed to callback, instead of being directly returned
    if (!error) {
      whenDone(data);
    } else {
      whenDone(undefined);
    }
  });
};

// console.log become a function

// const printCatBreed = breed => {
// console.log('Return Value: ', breed);
// }

// function now has two arguments: breed string and callback function

// breedDetailsFromFile('Bombay', printCatBreed);
// breedDetailsFromFile('Balinese', printCatBreed);

module.exports = breedDetailsFromFile;