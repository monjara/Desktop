/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  trailingSlash: true,
  assetPrefix: process.env.NODE_ENV === "production" ? "/Desktop" : "",
}

module.exports = nextConfig
