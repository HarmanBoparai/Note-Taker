const fs = require('fs');
const util = require('util');
const uniqueId = () =>
  Math.floor((1 + Math.random()) * 0x10000)
    .toString(16)
    .substring(1);

// Promise version of fs.readFile
const readFromFile = util.promisify(fs.readFile);

/**
* Function to write data to the JSON file given a destination and some content
 */
const writeToFile = (destination, content) =>
  fs.writeFile(destination, JSON.stringify(content, null, 4), (err) =>
    err ? console.error(err) : console.info(`\nData written to ${destination}`)
  );

  /**
  * Function to read data from a given a file and append some content
  */
  
  const readAndAppend = (content, file) => {
    fs.readFile(file, 'utf8', (err, data) => {
      if (err) {
        console.error(err);
      } else {
        const parsedData = JSON.parse(data);
        parsedData.push(content);
        writeToFile(file, parsedData);
      }
    });
  };

  const deleteItem = (delId, file) => {
    fs.readFile(file, 'utf8', (err, data) => {
      if (err) {
        console.error(err);
      } else {
        const parsedData = JSON.parse(data);
        const newData = parsedData.filter(note => note.id !== delId);
        writeToFile(file, newData);
    }
  });
  }
  
  module.exports = { readFromFile, writeToFile, readAndAppend,uniqueId, deleteItem };
  