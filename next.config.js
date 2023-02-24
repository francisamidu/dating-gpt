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
  async redirects() {
    return [
      {
        source: '/github',
        destination: 'https://www.github.com/francisamidu/dating-gpt',
        permanent: false
      }
    ];
  },
  reactStrictMode: true,
}
