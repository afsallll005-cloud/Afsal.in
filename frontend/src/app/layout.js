import fs from "node:fs";
import path from "node:path";
import "./globals.css";

// Ensure LogoWhite.png is set as favicon.ico and icon.png
try {
  const logoPath = path.join(process.cwd(), "public", "images", "LogoWhite.png");
  if (fs.existsSync(logoPath)) {
    const logoData = fs.readFileSync(logoPath);
    const targets = [
      path.join(process.cwd(), "src", "app", "favicon.ico"),
      path.join(process.cwd(), "src", "app", "icon.png"),
      path.join(process.cwd(), "src", "app", "apple-icon.png"),
      path.join(process.cwd(), "public", "favicon.ico"),
    ];
    for (const target of targets) {
      if (!fs.existsSync(target) || fs.readFileSync(target).length !== logoData.length) {
        fs.writeFileSync(target, logoData);
      }
    }
  }
} catch {
  // ignore in edge/client environments
}

export const metadata = {
  title: "MHD Afsal — Full-Stack Software Developer & Web Designer",
  description:
    "I create design and development that helps teams launch faster, look sharper, and grow smarter. Portfolio of Mohammed Afsal.",
  icons: {
    icon: [
      { url: "/images/LogoWhite.png?v=2" },
      { url: "/images/LogoWhite.png?v=2", type: "image/png" },
      { url: "/favicon.ico?v=2" },
    ],
    shortcut: "/images/LogoWhite.png?v=2",
    apple: "/images/LogoWhite.png?v=2",
  },
  openGraph: {
    title: "Mohammed Afsal — Full-Stack Software Developer & Web Designer",
    description:
      "I create design and development that helps teams launch faster, look sharper, and grow smarter.",
    type: "website",
  },
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/images/LogoWhite.png?v=2" type="image/png" sizes="any" />
        <link rel="shortcut icon" href="/images/LogoWhite.png?v=2" type="image/png" />
        <link rel="apple-touch-icon" href="/images/LogoWhite.png?v=2" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Instrument+Serif:ital@0;1&family=Plus+Jakarta+Sans:wght@400;500;600;700;800;900&display=swap"
          rel="stylesheet"
        />
        <link rel="preconnect" href="https://framerusercontent.com" crossOrigin="anonymous" />
      </head>
      <body>{children}</body>
    </html>
  );
}
