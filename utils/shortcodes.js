// SHORTCODES
const Image = require("@11ty/eleventy-img");



/**
 * * Eleventy Image
 * Perform build-time image transformations for both vector 
 * and raster images. Output multiple sizes, multiple formats, 
 * cache remote images locally. Uses Sharp image processor.
 * @param src file path to the image
 * @param alt alt text for the image
 * @param sizes the sizes for the sizes attribute
 */
const eleventyImage =  async function imageShortcode(src, alt, sizes) {
    let srcPath = "./src" + src;

    // Image(src, options) returns the generated images in a 
    // 'meta-data' object, which is then passed to Image.generateHTML()
    let images = await Image(srcPath, {
        widths: [320, 640, 1024],
        formats: ["avif", "webp", "jpeg"],
        urlPath: "/assets/images/",
        outputDir: "./dist/assets/images/"
    });
    let imageAttributes = {
        alt,
        sizes: sizes || "(min-width: 450px) 33.3vw, 100vw",
        loading: "lazy",
        decoding: "async",
    };
    return Image.generateHTML(images, imageAttributes, {
        whitespaceMode: "inline"
    });
};



const icon = (name) => {
    return `<svg class="icon icon-${name}" role="img" aria-hidden="true" width="24" height="24">
                <use xlink:href="#icon-${name}"></use>
            </svg>`
};



const year = () => {
    return `${new Date().getFullYear()}`
};




module.exports = {
    eleventyImage: eleventyImage,
    icon: icon,
    year: year
}



/* 
const eleventyImage =  async function imageShortcode(src, alt, sizes) {
    let options = {
        widths: [320, 640, 1024],
        formats: ["jpeg"],
        urlPath: "/assets/images/",
        outputDir: "./dist/assets/images/"
    };
    let metadata = await Image(src, options);
    let lowsrc = metadata.jpeg[0]
    let imageAttributes = {
        alt,
        sizes: sizes || "(min-width: 450px) 33.3vw, 100vw",
        loading: "lazy",
        decoding: "async",
        width: lowsrc.width,
        height: lowsrc.height
    };
    return Image.generateHTML(metadata, imageAttributes);
};
Image() meta output sample:
jpeg: [
    {
      format: 'jpeg',
      width: 7857,
      height: 7462,
      filename: '7fc15c7-7857.jpeg',
      outputPath: 'img/7fc15c7-7857.jpeg',
      url: '/img/7fc15c7-7857.jpeg',
      sourceType: 'image/jpeg',
      srcset: '/img/7fc15c7-7857.jpeg 7857w',
      size: 6245602
    }
  ]
 */
