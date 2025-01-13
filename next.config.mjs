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
     
    ],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384]
  },
};

export default nextConfig;
