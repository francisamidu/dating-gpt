/** @type {import('next').NextConfig} */
module.exports = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "**",
      },
    ],
  },
  publicRuntimeConfig: {
    OPENAI_API_KEY: process.env.NEXT_PUBLIC_OPENAI_API_KEY,

  },
  reactStrictMode: true,
}
