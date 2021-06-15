---
title: Starting an Eleventy Project
description: "A step by step guide to starting an Eleventy project."
image: "/assets/images/intro.png"
imageAlt: "image of a computer monitor and tablet"
date: 2021-06-12
tags: 
- Eleventy
- Tutorial
---

# Starting an Eleventy Project

1. Create a new project on GitHub. This example is named *trist* after my personal 11ty site.

2. On your computer, create a project directory(folder) named *trist* with command `mkdir trist`. Then change into the directory with command `cd trist`. 

3. Clone the Git repository *trist* by running `git clone https://github.com/gibbsdigital/trist` from the current directory to initialize the repository. (The alternative is to initialize the folder manually first with `git init` then pushing the changes to GitHub).

4. Create a .gitignore file with the following starter content:

```
# Misc
*.log
npm-debug.*
*.scssc
*.swp
.DS_Store
Thumbs.db
.sass-cache
.env
.cache

# Node modules and output
node_modules
dist
```

5. Initialize the directory with `npm init` (or `npm init -y` for less questions) to create a **package.json** config file for the project.

6. Create a .env file in the root to store config variables such as secret keys and such.

7. In the root, create a **src** folder to hold all the source code for the project.

8. Add the all important **.eleventy.js** config file, which is the main config for the entire project. Inside add the following few base settings:

```js

// ELEVENTY CONFIG
module.exports = function (eleventyConfig) {

    // PLUGINS

    // FILTERS

    // TRANSFORMS

    // SHORTCODES

    // COLLECTIONS

    // MARKDOWN

    // PASSTHROUGH FILE COPY
    
    // WATCH TARGET

    // RETURN THE BASE CONFIG
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
```

This sets Nunjucks as the templating language, **src** as the input folder, and **dist** as the output folder.

9. Add a folder called **utils** to the root of the project. This is to house all the filters, shortcodes, and transforms which are then registered in the .eleventy.js config file. 

    Inside the utils folder goes files filter.js, transforms.js, and shortcodes.js.

So far the root directory should look like this:

```
src/
utils/
.eleventy.js
.env
.gitignore
package.json
README.MD
```

10. Now Install eleventy and the base packages and tools for an 11ty project: 

        `npm install --save-dev @11ty/eleventy cross-env dotenv npm-run-all`

11. Now inside the **src** folder, create the following default folders:

- src/_data
- src/_includes,
- src/_includes/layouts
- src/_includes/partials
- src/assets

12. Next inside the **src** folder also create an **index.njk** file with the following at the top:

```
---
title: Home page
layout: layouts/base.njk
description: Page description goes here.
---

<h1>Hello 11ty</h1>
```

13. Now inside **src/_includes/layouts** create file **base.njk** the base layout template file. Inside include you base layout code:

```html
<!DOCTYPE html>
<html class="no-js" lang="en" data-theme="light">
    <head>
        <meta charset="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>Page Title</title>
    </head>

    <body>
        {{ content | safe }}
    </body>
</html>
```

14. Now run the following command then navigate to **http://localhost:8080** to see your work.

        `npx eleventy --serve`

15. Now Install additional packages for the project:

    - In addition to these already installed base packages and tools for an 11ty project: 

        `npm install --save-dev @11ty/eleventy cross-env dotenv npm-run-all`

    -  for blogging/writing, install packages for markdown, rss, syntax highlighting:

        `npm install --save-dev markdown-it markdown-it-attrs @11ty/eleventy-plugin-rss @11ty/eleventy-plugin-syntaxhighlight`

    - for small amounts of css, js, and html inline, you can minify this code with the following simple packages:

        `npm install --save-dev clean-css terser html-minifier`

    - for Sass, Css and Postcss, including *autoprefixer* and *cssnano* minification:

        `npm install --save-dev sass postcss postcss-cli autoprefixer cssnano`

    - For JavaScript with Parcel bundling and minification:

        `npm install --save-dev parcel@next @babel/core @babel/preset-env`

    - For image support I use:

        `npm install --save-dev @11ty/eleventy-img`
        
        or

        `npm install --save-dev imagemin-cli`

16. Now in **package.json** add the relevant **npm scripts** to run tasks such as bundling, minification, post processing, starting the dev server, or building your project for production and so on:

```json
"scripts": {
    "build": "run-s clean prod:*",
    "clean": "rm -rf dist",
    "prod:css": "run-s build:sass build:postcss",
    "prod:eleventy": "cross-env ELEVENTY_ENV=production eleventy",
    "build:sass": "sass src/assets/sass/main.scss dist/assets/css/main.css",
    "watch:sass": "sass --watch --style=expanded src/assets/sass:dist/assets/css",
    "build:postcss": "postcss dist/assets/css/main.css --no-map -r",
    "autoprefixer": "postcss dist/assets/css/main.css -u autoprefixer -r",
    "build:images": "imagemin src/assets/images/**/* --out-dir=dist/assets/images",
    "build:icons": "imagemin src/assets/images/icons/* --out-dir=dist/assets/images/icons --plugin=svgo",
    "build:svg": "imagemin foo.png --plugin=pngquant > foo-optimized.png",
    "start": "npm run dev",
    "dev": "npm-run-all clean --parallel dev:*",
    "dev:sass": "sass --watch --style=expanded src/assets/sass:dist/assets/css",
    "dev:eleventy": "cross-env ELEVENTY_ENV=development eleventy --serve"
  },
```

17. (Optional)  Add a **postcss.config.js** config file for Postcss to use *autoprefixer* and *cssnano*. Add the following:

```js
module.exports = {
    plugins: [
        require('autoprefixer'),
        require('cssnano')({
            preset: 'default',
        }),
    ],
};
```

18. (Optional) Add a **.babelrc** config file for JavaScript to use *Babel*. Inside add:

```
{
	"presets": ["@babel/preset-env"]
}
```

19. For *autoprefixer* you must specify the browsers you are targeting. You can do this in the **package.json** file by adding a "browserslist" property like so:

```json
"devDependencies": {
    ...
    "autoprefixer": "^10.2.6",
    "postcss": "^8.3.0",
    "postcss-cli": "^8.3.1",
    ...
  },
  "browserslist": [
    "defaults"
  ],
  ...
```

20. Set up folders for assets based on needs.

- src/assets/fonts
- src/assets/images
- src/assets/js
- src/assets/sass

21. Set up Sass file structure. Inside **src/assets/sass** add:

```
sass/
|
|- base/
|  |- _mixins
|  |- _variables.scss
|  |- _fonts.scss
|  |- _reset.scss
|  |- _base.scss
|
|- vendors/
|  |- _prism-atom-dark.scss
|
|- components/
|  |- _header.scss
|  |- _footer.scss
|  |- _navigation.scss
|  |- _pagination.scss
|  |- _button.scss
|  |- _card.scss
|  |- _post-list.scss
|  |- _post.scss
|  |- _themetoggle.scss
|
|- main.scss
```

Inside **main.scss** add 

```scss
// BASE - global scope partials
@import 'base/variables';
@import 'base/mixins';
@import 'base/fonts';
@import 'base/reset';
@import 'base/base';

// VENDORS - third party partials
@import 'vendors/prism-atom-dark';

// COMPONENTS - local scope partials
@import 'components/header';
@import 'components/footer';
@import 'components/navigation';
@import 'components/pagination';
@import 'components/button';
@import 'components/card';
@import 'components/form';
@import 'components/tags';
@import 'components/social-icons';
@import 'components/post-list';
@import 'components/post';
@import 'components/project-list';
@import 'components/themetoggle';
```

22. Set up **JS** file structure. Inside **src/assets/js** add files:

- index.js
- themeToggle.js
- contactForm.js

    and inside the main file **index.js** import the other files:

    ```js
    import "./themeToggle";
    import "./contactForm";
    ```

23. Inside **src/assets/fonts** add your fonts:

```
barlow-v5-latin-500.woff
barlow-v5-latin-500.woff2
barlow-v5-latin-700.woff
barlow-v5-latin-700.woff2
```

24. Add image folders and files. Inside **src/assets/images** add folders:

- images/favicons/
- images/icons/

    then add the image files.

25. Now add folders to house the sites content:

- src/posts
- src/projects
- src/art

    and inside these goes the content in the form of markdown files:

    -src/posts/blog-post-title.md

26. Next goes the **meta data** for the site. Inside the **src/_data/** folder, create file **site.json** or **meta.json**. Inside put meta info for the site:

```json
{
    "name": "Gibbs Digital",
    "title": "Gibbs Digital",
    "description": "Personal Site for front-end Web Developer Tristan Gibbs",
    "url": "http://localhost:8080",
    "feedUrl": "http://localhost:8080/feed.xml",
    "repo": "https://github.com/gibbsdigital/gibbs-digital",
    "image": "/assets/images/monitor-and-tablet.svg",
    "imageAlt": "image of a computer monitor and tablet",
    "author": {
        "name": "Tristan Gibbs",
        "about": "Tristan Gibbs is a Web Developer and Designer who lives in California, USA. His specialty is writing inclusive, performant, websites using semantic HTML, modern CSS, and the JAMstack.",
        "email": "tristan@gibbs.digital",
        "image": "/_includes/assets/images/me-original.jpg",
        "social": {
            "twitter": {
                "name": "gibbs_digital",
                "url": "https://twitter.com/gibbs_digital"
            },
            "github": {
                "name": "gibbsdigital",
                "url": "https://github.com/gibbsdigital"
            },
            "linkedin": {
                "name": "tristanmgibbs",
                "url": "https://www.linkedin.com/in/tristanmgibbs/"
            },
            "codepen": {
                "name": "gibbs_digital",
                "url": "https://codepen.io/gibbs_digital"
            },
            "devto": {
                "name": "gibbs_digital",
                "url": "https://dev.to/gibbs_digital"
            }
        }

    }
}
```

27. Then goes the site navigation structure for the site. Inside the **src/_data/** folder, create file **navigation.json**, which lays out the navigation. Inside put the relevant structure:

```json
{
    "items": [
        {
            "text": "Home",
            "url": "/"
        },
        {
            "text": "About",
            "url": "/about/"
        },
        {
            "text": "Projects",
            "url": "/projects/"
        },
        {
            "text": "Blog",
            "url": "/blog/"
        },
        {
            "text": "Contact",
            "url": "/contact/"
        }
    ]
}
```

28. Next, inside the root, add the filters, shortcodes, and utils to the **utils/** folder so we can register them in **.eleventy.js** config file.

29. Now to add the site's config into **eleventy.js**.

30. Add links and meta tags to **base.njk** 

```html
<head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <title>{{ title or site.title }} | {{ site.title }}</title>
    <link rel="stylesheet" href="/assets/css/main.css">
    <link rel="preload" href="/assets/fonts/barlow-v5-latin-500.woff2" as="font" type="font/woff2" crossorigin>
    <link rel="preload" href="/assets/fonts/barlow-v5-latin-700.woff2" as="font" type="font/woff2" crossorigin> -->
    <link href="/assets/images/favicons/favicon.ico" rel="icon" type="image/x-icon"/>
    <link rel="apple-touch-icon" sizes="180x180" href="/assets/images/favicons/apple-touch-icon.png">
    <link rel="icon" type="image/png" sizes="32x32" href="/assets/images/favicons/favicon-32x32.png">
    <link rel="icon" type="image/png" sizes="16x16" href="/assets/images/favicons/favicon-16x16.png">
    <link type="application/atom+xml" rel="alternate" href="{{ site.feedUrl }}" title="{{ site.title }}">
    <link rel="canonical" href="{{ site.url + page.url }}" />
    {% include "partials/head-meta.njk" %}
</head>
```

31. In 'src/_includes/partials' folder create files:

- site-header.njk
- site-footer.njk
- site-nav.njk

    and include them into **base.njk** (site-nav.njk goes inside site-header.njk)

```html
<body>
    <a href="#main" class="sr-skip-link">skip to main content</a>
    {% include "partials/site-header.njk" %}
    <main class="main" id="main" tabindex="-1">
        {{ content | safe }}
    </main>
    {% include "partials/site-footer.njk" %}
</body>
```

32. 

11. Next inside the **src** folder also create the following top level files based on your project needs and structure:
- index.njk 
- about.njk 
- blog.njk 
- projects.njk
- contact.njk

rss.njk, tags.njk, 404.njk

15. In 'src/_includes/layouts' folder create files:
base.njk, page.njk, post.njk, 

16. In 'src/_includes/partials' folder create files:
site-header.njk, site-footer.njk, post-list.njk, project-list.njk,
social-icons.njk, pagination-nav.njk, head-meta.njk, tag-list.njk, ect.



10.

11. Now for the most important config file: Add a **.eleventy.js** file, which is the main config for the entire project. Inside add the following:

```js
require('dotenv').config()
const pluginRss = require('@11ty/eleventy-plugin-rss');
const pluginSyntaxHighlight = require('@11ty/eleventy-plugin-syntaxhighlight');
const markdownIt = require("markdown-it");
const markdownItAttrs = require('markdown-it-attrs');

// ELEVENTY CONFIG
module.exports = function (eleventyConfig) {

    // PLUGINS
    eleventyConfig.addPlugin( pluginRss );
    eleventyConfig.addPlugin( pluginSyntaxHighlight );

    // FILTERS

    // TRANSFORMS

    // SHORTCODES

    // COLLECTIONS

    // MARKDOWN
    const markdownLib = markdownIt({
        html: true,
        breaks: true,
        linkify: true
    }).use(markdownItAttrs);
    eleventyConfig.setLibrary('md', markdownLib);

    // PASSTHROUGH FILE COPY
    
    // WATCH TARGET

    // RETURN THE BASE CONFIG
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
```

12. 

13. 