const { DateTime } = require("luxon");

module.exports = function(eleventyConfig) {

  // CSS passthrough
  eleventyConfig.addPassthroughCopy("css");

  // Posts collection
  eleventyConfig.addCollection("posts", function(collectionApi) {
    return collectionApi.getFilteredByTag("posts");
  });

  // Date filter
  eleventyConfig.addFilter("date", function(date, format) {
    return DateTime.fromJSDate(date, { zone: "utc" }).toFormat(format || "dd MMM yyyy");
  });

  // Limit filter
  eleventyConfig.addFilter("limit", function(arr, limit) {
    return arr.slice(0, limit);
  });

  // Reading time filter (rough estimate)
  eleventyConfig.addFilter("readingTime", function(content) {
    const text = content.replace(/<[^>]+>/g, "");
    const words = text.split(/\s+/).length;
    const minutes = Math.ceil(words / 200);
    return `${minutes} min`;
  });

  return {
    dir: {
      input: ".",
      includes: "_includes",
      data: "_data",
      output: "_site"
    },
    templateFormats: ["njk", "md", "html"],
    markdownTemplateEngine: "njk",
    htmlTemplateEngine: "njk"
  };
};