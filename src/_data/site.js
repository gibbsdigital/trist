// SITE META DATA
require('dotenv').config()

const env = process.env.ELEVENTY_ENV;
const siteName = "trist.dev";
const siteTitle = "trist.dev";
const siteDescription = "Personal Site for front-end Web Developer Tristan Gibbs";
const siteImage = "/assets/images/monitor-and-tablet.svg";
const siteImageAlt = "computer monitor and tablet";
const siteUrl = env === 'production' ? "https://trist.dev" : "http://localhost:8080";
const siteFeedUrl = siteUrl + "/feed.xml";
const siteRepo = "https://github.com/gibbsdigital/trist";

module.exports = {
    env: env,
    name: siteName,
    title: siteTitle,
    description: siteDescription,
    image: siteImage,
    imageAlt: siteImageAlt,
    url: siteUrl,
    feedUrl: siteFeedUrl,
    repo: siteRepo
};