/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: { domains: ['s.abcnews.com', 'ichef.bbci.co.uk', 'static.independent.co.uk', 'preview.redd.it', 'external-preview.redd.it', 'e3.365dm.com', 'video-images.vice.com'] },
  experimental: {
    images: {
      remotePatterns: [
        {
          protocol: 'https',
          hostname: '**',
        },
      ],
    },
  },
}

module.exports = nextConfig
