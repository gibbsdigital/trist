/**
 * ASSET HASH FOR CSS AND JS FILES
 * 
 * Adds hash numberS to the end of css and js files in the dist/ folder. 
 * Also adds the hash numbers to "src/_data/version.json" file to be used in base.njk like so: 
 * 
 * {% set cssHash = version.css || "" %}
 * <link rel="stylesheet" href="/assets/css/main{{ cssHash }}.css">
 * 
 * {% set jsHash = version.js || '' %}
 * <script src="/assets/js/main{{ jsHash }}.js"></script>
 * 
 * Inspired from eleventy-parcel starter
 *  https://github.com/mbarker84/eleventy-parcel
 */
const fs = require('fs')
const util = require('util')
const md5 = require('md5')

const readFile = util.promisify(fs.readFile)
const writeFile = util.promisify(fs.writeFile)

let cssHash
let jsHash


const readCssFile = () => {
  return readFile('dist/assets/css/main.css', (err, data) => {
    if (err) console.log(err)
  })
}

const readJsFile = () => {
  return readFile('dist/assets/js/main.js', (err, data) => {
    if (err) console.log(err)
  })
}


readCssFile()
    .then((data) => {
      cssHash = md5(data).slice(0, 16)
      console.log('Hashes:')
      console.log(cssHash)
    })
.then(() => {
    readJsFile()
      .then((data) => {
          jsHash = md5(data).slice(0, 16)
          console.log(jsHash)
      })
      .then(() => {
          const versionObject = {
              css: cssHash,
              js: jsHash
          }
          writeFile('src/_data/version.json', JSON.stringify(versionObject), (err) => {
              if (err) throw err 
              console.log('The file has been saved!');
          })
            console.log('Files: ')
            console.log(`${JSON.stringify(versionObject)} > src/_data/version.json`)
      })
      .then(() => {
        
          fs.rename('dist/assets/css/main.css', `dist/assets/css/main${cssHash}.css`, function(err) {
            if ( err ) return console.log('ERROR: ' + err)
            console.log(`dist/assets/css/main.css > dist/assets/css/main${cssHash}.css`)
          })

          fs.rename('dist/assets/js/main.js', `dist/assets/js/main${jsHash}.js`, function(err) {
            if ( err ) return console.log('ERROR: ' + err)
            console.log(`dist/assets/js/main.js > dist/assets/js/main${jsHash}.js`)
          })

      })
})

