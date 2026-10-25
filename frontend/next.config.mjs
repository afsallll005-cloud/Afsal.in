import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Ensure LogoWhite.png is set as favicon.ico and icon.png
try {
  const logoPath = path.join(__dirname, "public", "images", "LogoWhite.png");
  if (fs.existsSync(logoPath)) {
    const logoData = fs.readFileSync(logoPath);
    const targets = [
      path.join(__dirname, "src", "app", "favicon.ico"),
      path.join(__dirname, "src", "app", "icon.png"),
      path.join(__dirname, "src", "app", "apple-icon.png"),
      path.join(__dirname, "public", "favicon.ico"),
    ];
    for (const target of targets) {
      if (!fs.existsSync(target) || fs.readFileSync(target).length !== logoData.length) {
        fs.writeFileSync(target, logoData);
      }
    }
  }
} catch (e) {
  // ignore in restricted environments
}

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
