require("dotenv").config();

const pluginRss = require("@11ty/eleventy-plugin-rss");
const pluginSyntaxHighlight = require("@11ty/eleventy-plugin-syntaxhighlight");
const markdownIt = require("markdown-it");
const markdownItAttrs = require("markdown-it-attrs");
/* const markdownItTexmath = require("markdown-it-texmath"); */
const filters = require("./utils/filters.js");
const transforms = require("./utils/transforms.js");
const shortcodes = require("./utils/shortcodes.js");

const IS_PRODUCTION = process.env.ELEVENTY_ENV === "production";

// ELEVENTY CONFIG
module.exports = function (eleventyConfig) {
  // PLUGINS
  eleventyConfig.addPlugin(pluginRss);
  eleventyConfig.addPlugin(pluginSyntaxHighlight);

  /* MARKDOWN-IT 
  https://www.11ty.dev/docs/languages/markdown/
  https://github.com/markdown-it/markdown-it#init-with-presets-and-options
  https://github.com/goessner/markdown-it-texmath  */
  const markdownLib = markdownIt({
    html: true,
    breaks: true,
    linkify: true,
  }).use(markdownItAttrs);
  /* .use(markdownItTexmath, {
      engine: require("katex"),
      delimiters: "dollars",
      katexOptions: { macros: { "\\RR": "\\mathbb{R}" } },
    }); */
  eleventyConfig.setLibrary("md", markdownLib);

  /* const markdownLib = markdownIt({
    html: true,
    breaks: true,
    linkify: true,
  })
    .use(markdownItAttrs)
    .use(markdownItTexmath, {
      engine: require("katex"),
      delimiters: "dollars",
       delimiters: [
        { left: "$$", right: "$$", display: true },
        { left: "\\(", right: "\\)", display: true },
      ], */
  /* katexOptions: { macros: { "\\RR": "\\mathbb{R}" } }, 
    });
    eleventyConfig.setLibrary("md", markdownLib);
const str = "Euler\'s identity $e^{i\\pi}+1=0$ is a beautiful formula in $\\RR^2$.";
md.render(str); */

  // FILTERS
  eleventyConfig.addFilter();
  eleventyConfig.addFilter("dateFriendly", filters.dateFriendly);
  eleventyConfig.addFilter("dateYMD", filters.dateYMD);
  eleventyConfig.addFilter("dateISO", filters.dateISO);
  eleventyConfig.addFilter("readTime", filters.readTime);
  eleventyConfig.addFilter("excludePost", filters.excludePost);
  eleventyConfig.addFilter("slice", filters.slice);
  eleventyConfig.addFilter("limit", filters.limit);
  eleventyConfig.addFilter("randomItem", (arr) => {
    arr.sort(() => {
      return 0.5 - Math.random();
    });
    return arr.slice(0, 1);
  });

  // TRANSFORMS
  eleventyConfig.addTransform("minifyHTML", transforms.minifyHTML);

  // SHORTCODES
  eleventyConfig.addShortcode("year", shortcodes.year);
  eleventyConfig.addNunjucksAsyncShortcode("image", shortcodes.eleventyImage);
  eleventyConfig.addShortcode("randomColor", shortcodes.randomColor);
  eleventyConfig.addShortcode("hAnchor", shortcodes.hAnchor);
  /* eleventyConfig.addShortcode("math", (mathContent) => {
    return md.render(mathContent);
    
  }); */

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

  eleventyConfig.addCollection("randomizedPosts", function (collection) {
    return (
      collection
        // Change to the name of your tag
        .getFilteredByTag("post")
        .sort(() => {
          return 0.5 - Math.random();
        })
        // Optional limit, remove if unwanted
        .slice(0, 3)
    );
  });

  eleventyConfig.addCollection("projects", (collection) => {
    return collection
      .getFilteredByGlob("./src/projects/*.md")
      .sort((a, b) =>
        Number(a.data.displayOrder) > Number(b.data.displayOrder) ? 1 : -1
      );
  });

  eleventyConfig.addCollection("featuredProjects", (collection) => {
    return collection
      .getFilteredByGlob("./src/projects/*.md")
      .sort((a, b) =>
        Number(a.data.displayOrder) > Number(b.data.displayOrder) ? 1 : -1
      )
      .filter((p) => p.data.featured);
  });

  eleventyConfig.addCollection("tagList", filters.getTagList);

  // PASSTHROUGH FILE COPY
  eleventyConfig.addPassthroughCopy("./src/assets/images/favicons");
  eleventyConfig.addPassthroughCopy("./src/assets/images/posts/");
  eleventyConfig.addPassthroughCopy("./src/assets/fonts");
  /* eleventyConfig.addPassthroughCopy('./src/site.webmanifest') */
  eleventyConfig.addPassthroughCopy("./src/robots.txt");

  // WATCH TARGET
  eleventyConfig.addWatchTarget("./src/assets");

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
