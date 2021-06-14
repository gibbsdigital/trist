//const htmlmin = require('html-minifier')
//const CleanCSS = require("clean-css");
//const { minify } = require("terser");
//const uglify = require('uglify-js');
//const beautify = require('js-beautify');

/* 
function minifyCSS(code) {
    return new CleanCSS({}).minify(code).styles;
}


function minifyHTML(content, outputPath) { 
    if (process.env.ELEVENTY_ENV === 'production') {
        if (outputPath && outputPath.endsWith('.html')) {
            return htmlmin.minify(content, {
                useShortDoctype: true,
                removeComments: true,
                collapseWhitespace: true,
            });
        };
    }
    return content;
}


async function minifyJS(code, callback) {
    try {
        const minified = await minify(code);
        callback(null, minified.code);
    } catch (err) {
        console.error("Terser error: ", err);
        
        callback(null, code);
    }
} */


// Use beautify in development
// Options: https://github.com/beautify-web/js-beautify
// uglify
      // Options: https://github.com/mishoo/UglifyJS
/* const BEAUTIFY_OPTIONS = {
    extra_liners: [],
    indent_inner_html: true,
    indent_size: 2,
    max_preserve_newlines: 1
}
function uglifyJS(content) {
    if (process.env.ELEVENTY_ENV === 'production') {
      
      return uglify.minify(content).code
    } else {
      return beautify.js(content, BEAUTIFY_OPTIONS)
    }
  }
    


module.exports = {
    minifyCSS:  minifyCSS,
    minifyHTML: minifyHTML,
    minifyJS:   minifyJS,
    uglifyJS: uglifyJS
}
 */
/* module.exports = {
    Spinner,
    minifyCSS,
    minifyJS,
    minifyHTML,
    uglifyJS
} */



/* 
 cssmin: function(code) {
         return new CleanCSS({}).minify(code).styles;
     },
 htmlmin: function(content, outputPath) { 
        if (process.env.ELEVENTY_ENV === 'production') {
            if (outputPath && outputPath.endsWith('.html')) {
                return htmlmin.minify(content, {
                    useShortDoctype: true,
                    removeComments: true,
                    collapseWhitespace: true,
                });
            };
        }
        return content;
    },

    jsmin: async function(code, callback) {
        try {
            const minified = await minify(code);
            callback(null, minified.code);
        } catch (err) {
            console.error("Terser error: ", err);
            // Fail gracefully.
            callback(null, code);
        }
    },
   

htmlmin: function(content, outputPath) { 
        if (outputPath && outputPath.endsWith('.html')) {
            return htmlmin.minify(content, {
                useShortDoctype: true,
                removeComments: true,
                collapseWhitespace: true,
            });
        };
        return content;
    }

*/