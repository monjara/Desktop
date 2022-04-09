/** @type {import('next').NextConfig} */
const urlPrefix = process.env.NODE_ENV === "production" ? "/Desktop" : ""
const nextConfig = {
  reactStrictMode: true,
  trailingSlash: true,
  assetPrefix: urlPrefix,
  basePath: urlPrefix,
}

module.exports = nextConfig
