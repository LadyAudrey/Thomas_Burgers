// Sets the base path when running in production, needed for GitHub Pages
// Should be removed when deploying to a custom domain
const basePath = process.env.NODE_ENV === "production" ? "/thomas_burgers" : "";

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  images: {
    loader: "custom",
    loaderFile: "./loaderFile.ts",
  },
  basePath,
};

module.exports = nextConfig;
