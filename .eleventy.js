require('dotenv').config()

const pluginRss = require('@11ty/eleventy-plugin-rss');
const pluginSyntaxHighlight = require('@11ty/eleventy-plugin-syntaxhighlight');
const markdownIt = require("markdown-it");
const markdownItAttrs = require('markdown-it-attrs');
const filters = require('./utils/filters.js');
const transforms = require('./utils/transforms.js');
const shortcodes = require('./utils/shortcodes.js');

const IS_PRODUCTION = process.env.ELEVENTY_ENV === 'production'




// ELEVENTY CONFIG
module.exports = function (eleventyConfig) {

   

    // PLUGINS
    eleventyConfig.addPlugin( pluginRss );
    eleventyConfig.addPlugin( pluginSyntaxHighlight );



    // FILTERS
    eleventyConfig.addFilter("dateFriendly", filters.dateFriendly );
    eleventyConfig.addFilter("dateYMD", filters.dateYMD );
    eleventyConfig.addFilter("dateISO", filters.dateISO );
    eleventyConfig.addFilter("readTime", filters.readTime );
    eleventyConfig.addFilter("excludePost", filters.excludePost );
    eleventyConfig.addFilter("slice", filters.slice );


    
    // TRANSFORMS
    eleventyConfig.addTransform('minifyHTML', transforms.minifyHTML );
   


    // SHORTCODES
    eleventyConfig.addShortcode("year", shortcodes.year );
    eleventyConfig.addNunjucksAsyncShortcode("image", shortcodes.eleventyImage );
    eleventyConfig.addShortcode("randomColor", shortcodes.randomColor );




    // COLLECTIONS
    eleventyConfig.addCollection("posts", (collection) => {
        return collection
            .getFilteredByGlob("./src/posts/*.md")
            .filter((p) => !(p.data.draft && IS_PRODUCTION));
    });


    eleventyConfig.addCollection("featuredPosts", (collection) => {
        return collection
            .getFilteredByGlob("./src/posts/*.md")
            .filter((p) => p.data.featured);
    });

    
    eleventyConfig.addCollection("projects", (collection) => {
        return collection
            .getFilteredByGlob("./src/projects/*.md")
            .sort((a, b) =>
                Number(a.data.displayOrder) > Number(b.data.displayOrder)
                    ? 1
                    : -1
            );
    });

    
    eleventyConfig.addCollection("featuredProjects", (collection) => {
        return collection
            .getFilteredByGlob("./src/projects/*.md")
            .sort((a, b) =>
                Number(a.data.displayOrder) > Number(b.data.displayOrder)
                    ? 1
                    : -1
            )
            .filter((p) => p.data.featured);
    });
     

    eleventyConfig.addCollection("tagList", filters.getTagList );
   



    /* MARKDOWN IT  - https://markdown-it.github.io/markdown-it/  */
    const markdownLib = markdownIt({
        html: true,
        breaks: true,
        linkify: true
    }).use(markdownItAttrs);
    eleventyConfig.setLibrary('md', markdownLib);




    // PASSTHROUGH FILE COPY
    eleventyConfig.addPassthroughCopy("./src/assets/images/favicons");
    eleventyConfig.addPassthroughCopy("./src/assets/images/posts/")
    eleventyConfig.addPassthroughCopy("./src/assets/fonts");
    


    // WATCH TARGET
    eleventyConfig.addWatchTarget('./src/assets');



    // RETURN THE BASE CONFIG OBJECT
    return {
        markdownTemplateEngine: "njk",
        dataTemplateEngine: "njk",
        htmlTemplateEngine: "njk",

        dir: {
            input: "src",
            output: "dist",
        },
    };

}; // END ELEVENTY CONFIG
