// TRANSFORMS
const htmlmin = require('html-minifier');

module.exports = {

    minifyHTML: function (content, outputPath) { 
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
   /*  minifyHTML: function(content, outputPath) { 
        if (outputPath && outputPath.endsWith('.html')) {
            return htmlmin.minify(content, {
                useShortDoctype: true,
                removeComments: true,
                collapseWhitespace: true,
            });
        };
        return content;
    } */
};
