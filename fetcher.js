// Implement a node app called fetcher.js.

// It should take two command line arguments:

//     a URL
//     a local file path

// It should download the resource at the URL to the local path on your machine. Upon completion, it should print out a message like Downloaded and saved 1235 bytes to ./index.html.


// Install and use the request library to make the HTTP request (We know this library is deprecated but it is still ok to use for our purposes.)
// Use Node's fs (file system) module to write the file
// Use the callback based approach we've been learning so far
// Do not use the pipe function
// Do not use synchronous functions (see warning above)


const fs = require('fs');
const http = require('http');
const args = process.argv.slice(2);

const content = 'Some content!';

fs.writeFile('/Users/joe/test.txt', content, err => {
  if (err) {
    console.error(err);
    return;
  };
  //file written successfully
});
