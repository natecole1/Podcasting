/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "lovely-flamingo-139.convex.cloud",
      },
      {
        protocol: "https",
        hostname: "adorable-civet-122.convex.cloud",
      },
      {
        protocol: "https",
        hostname: "assets.pippa.io",
      },
      {
        protocol: "https",
        hostname: "media.redcircle.com",
      },
      {
        protocol: "https",
        hostname: "image.simplecastcdn.com",
      },
      {
        protocol: "https",
        hostname: "megaphone.imgix.net",
      },
      {
        protocol: "https",
        hostname: "www.omnycontent.com",
      },
      {
        protocol: "https",
        hostname: "d3t3ozftmdmh3i.cloudfront.net",
      },
      {
        protocol: "https",
        hostname: "f.prxu.org",
      },
      {
        protocol: "http",
        hostname: "ichef.bbci.co.uk",
      },
      {
        protocol: "https",
        hostname: "static.libsyn.com",
      },
      {
        protocol: "https",
        hostname: "media.npr.org",
      },
      {
        protocol: "https",
        hostname: "audioboom.com",
      },
      {
        protocol: "https",
        hostname: "media.rss.com",
      },
      {
        protocol: "https",
        hostname: "data-1.podcastai.com",
      },
    ],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
  },
};

export default nextConfig;
