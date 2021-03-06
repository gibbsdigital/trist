// SHORTCODES
const Image = require("@11ty/eleventy-img");
const slugify = require("slugify");

/**
 * ELEVENTY IMAGE PLUGIN - Responsive image generator
 * Outputs multiple sizes, formats, levels of optimization.
 * @param src file path to the image
 * @param alt alt text for the image
 * @param sizes optional sizes list
 * @param className optional class name
 */
const eleventyImage = async function imageShortcode(
  src,
  alt,
  sizes,
  className
) {
  let srcPath = "./src" + src;
  let formats =
    process.env.ELEVENTY_ENV === "production"
      ? ["avif", "webp", "jpeg"]
      : ["jpeg"];

  let images = await Image(srcPath, {
    formats,
    widths: [320, 480, 640, 1024],
    urlPath: "/assets/images/",
    outputDir: "./dist/assets/images/",
  });
  let imageAttributes = {
    alt,
    sizes: sizes || "(min-width: 640px) 50vw, (min-width: 998px) 33.3vw, 100vw",
    class: className || "res-Img",
    loading: "lazy",
    decoding: "async",
  };
  return Image.generateHTML(images, imageAttributes, {
    whitespaceMode: "inline",
  });
};

/**
 * * Icon - SVG Icon shortcode
 * @param {name} name
 * @returns <svg> element icon with all the right attributes
 */
const icon = (name) => {
  return `<svg class="icon icon-${name}" role="img" aria-hidden="true" width="24" height="24">
                <use xlink:href="#icon-${name}"></use>
            </svg>`;
};

/**
 * * hAnchor - heading anchor link shortcode
 * @param {hTitle} Title of the heading for that section
 * @returns h2 followed by a:link. Inside the a:link is an aria-hiddin icon and sr-only text following.
 */
const hAnchor = (hTitle) => {
  const slug = slugify(hTitle, {
    lower: true,
    strict: true,
    remove: /["]/g,
  });
  return `<div class="heading-anchor-wrapper">
                <h2 id="${slug}">${hTitle}</h2>
                <a class="anchor-link" href="#${slug}">
                    <span class="anchor-icon" aria-hidden="true">&#128279;</span>
                    <span class="sr-only">Link to section titled ${hTitle}</span>
                </a>
            </div>`;
};

/* const math = (mathContent) => {
  return mathContent.replace(/\$\$(.+?)\$\$/g, (_, equation) => {
    const cleanEquation = equation.replace(/&lt;/g, "<").replace(/&gt;/g, ">");
    var html = katex.render(cleanEquation, {
      throwOnError: false,
    });
    return `${html}`;
  });
}; */

const year = () => {
  return `${new Date().getFullYear()}`;
};

const randomColor = () => {
  const randomColor = Math.floor(Math.random() * 16777215).toString(16);
  return `#${randomColor}`;
};

module.exports = {
  eleventyImage: eleventyImage,
  icon: icon,
  year: year,
  hAnchor,
  randomColor,
};

/* 
/**
 * * Eleventy Image
 * Perform build-time image transformations for both vector 
 * and raster images. Output multiple sizes, multiple formats, 
 * cache remote images locally. Uses Sharp image processor.
 * 
 *  Image(src, options) returns the generated images in a 
 * object, which is then passed to Image.generateHTML(images, imageAttributes)
 * 
 * @param src file path to the image
 * @param alt alt text for the image
 * @param sizes the sizes for the sizes attribute
 */

/* const eleventyImage =  async function imageShortcode(src, alt, sizes) {
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
