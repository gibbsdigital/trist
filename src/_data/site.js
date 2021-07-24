// SITE META DATA
require('dotenv').config()

const ENV = process.env.ELEVENTY_ENV;
const siteName = "trist.dev";
const siteTitle = "trist.dev";
const siteDescription = "Personal Site for front-end Web Developer Tristan Gibbs";
const siteImage = "/assets/images/posts/keyboard.jpg";
const siteImageAlt = "computer monitor and tablet";
const siteUrl = ENV === 'production' ? "https://trist.dev" : "http://localhost:8080";
const siteFeedUrl = siteUrl + "/feed.xml";
const siteRepo = "https://github.com/gibbsdigital/trist";

module.exports = {
    ENV: ENV,
    IS_PRODUCTION: ENV === 'production' ? true : false,
    name: siteName,
    title: siteTitle,
    description: siteDescription,
    image: siteImage,
    imageAlt: siteImageAlt,
    url: siteUrl,
    feedUrl: siteFeedUrl,
    repo: siteRepo,
    date: new Date()
};