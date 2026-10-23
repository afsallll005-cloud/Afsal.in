/** @type {import('next').NextConfig} */
const nextConfig = {
  reactCompiler: true,
  eslint: {
    ignoreDuringBuilds: true,
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "framerusercontent.com",
      },
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
    ],
  },
  async rewrites() {
    return [
      {
        source: "/favicon.ico",
        destination: "/images/LogoWhite.png",
      },
      {
        source: "/logo.png",
        destination: "/images/logo.png",
      },
      {
        source: "/Mohammed_Afsal_CV.pdf",
        destination: "/images/MohammedAfsal_Fullstack_Developer.pdf",
      },
      {
        source: "/cv",
        destination: "/images/MohammedAfsal_Fullstack_Developer.pdf",
      },
      {
        source: "/resume",
        destination: "/images/MohammedAfsal_Fullstack_Developer.pdf",
      },
      {
        source: "/api/:path*",
        destination: "https://portfolio-nu-ten-27.vercel.app/api/:path*",
      },
    ];
  },
};

export default nextConfig;
