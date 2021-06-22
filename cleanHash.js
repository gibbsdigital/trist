// Replaces hash numbers in "src/_data/version.json" file 
// with empty strings for development
const fs = require('fs');

const versionObject = {
  css: '',
  js: ''
}

fs.writeFile('src/_data/version.json', JSON.stringify(versionObject), (err) => {
    if (err) return console.log(err);
    console.log(`${JSON.stringify(versionObject)} > src/_data/version.json`);
});
