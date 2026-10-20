import "./globals.css";

export const metadata = {
  title: "MHD Afsal — Full-Stack Software Developer & Web Designer",
  description:
    "We create design and development that helps teams launch faster, look sharper, and grow smarter. Portfolio of Mohammed Afsal.",
  icons: {
    icon: [
      { url: "/images/logo.png" },
      { url: "/images/logo.png", type: "image/png" },
    ],
    shortcut: "/images/logo.png",
    apple: "/images/logo.png",
  },
  openGraph: {
    title: "FORMA STUDIO™ — Modern Design & Software Engineering",
    description:
      "We create design and development that helps teams launch faster, look sharper, and grow smarter.",
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
        <link rel="icon" href="/images/logo.png" type="image/png" sizes="any" />
        <link rel="shortcut icon" href="/images/logo.png" type="image/png" />
        <link rel="apple-touch-icon" href="/images/logo.png" />
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
