/** @type {import('next').NextConfig} */
export default {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        hostname: process.env.NEXT_PUBLIC_BACKEND_HOST,
        port: process.env.NEXT_PUBLIC_BACKEND_PORT,
      },
    ],
  },
};
