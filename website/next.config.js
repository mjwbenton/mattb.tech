const withExportImages = require("next-export-optimize-images");

module.exports = withExportImages({
  output: "export",
  reactStrictMode: true,
});
