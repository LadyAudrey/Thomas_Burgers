/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  images: {
    loader: "custom",
    loaderFile: "./loaderFile.ts",
  },
};

module.exports = nextConfig;
