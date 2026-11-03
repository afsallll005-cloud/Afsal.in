
import "./globals.css";

export const metadata = {
  metadataBase: new URL("https://afsalt.in"),

  title: "MHD Afsal — Full-Stack Software Developer & Web Designer",

  description:
    "Mohammed Afsal is a Full-Stack Software Developer and Web Designer from Malappuram, Kerala, India. Specializing in Next.js, React.js, Node.js, Express.js and MongoDB.",

  applicationName: "Mohammed Afsal Portfolio",

  authors: [
    {
      name: "Mohammed Afsal",
      url: "https://afsalt.in",
    },
  ],

  creator: "Mohammed Afsal",
  publisher: "Mohammed Afsal",

  keywords: [
    "Mohammed Afsal",
    "MHD Afsal",
    "Full Stack Developer",
    "MERN Stack Developer",
    "Web Developer Kerala",
    "Next.js Developer",
    "React Developer",
    "Node.js Developer",
    "Web Designer",
    "Malappuram Developer",
  ],

  alternates: {
    canonical: "/",
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },

  icons: {
    icon: [
      {
        url: "/favicon.ico",
      },
      {
        url: "/icon.png",
        type: "image/png",
      },
    ],
    apple: "/apple-icon.png",
  },

  openGraph: {
    title: "Mohammed Afsal — Full-Stack Software Developer",
    description:
      "Explore the portfolio of Mohammed Afsal, a Full-Stack Software Developer and Web Designer specializing in modern web applications.",
    url: "https://afsalt.in",
    siteName: "Mohammed Afsal",
    locale: "en_IN",
    type: "website",
  },

  twitter: {
    card: "summary",
    title: "Mohammed Afsal — Full-Stack Software Developer",
    description:
      "Full-Stack Software Developer & Web Designer. Explore my projects, skills and professional profile.",
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
        <link
          rel="preconnect"
          href="https://fonts.googleapis.com"
        />

        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />

        <link
          href="https://fonts.googleapis.com/css2?family=Instrument+Serif:ital@0;1&family=Plus+Jakarta+Sans:wght@400;500;600;700;800;900&display=swap"
          rel="stylesheet"
        />

        <link
          rel="preconnect"
          href="https://framerusercontent.com"
          crossOrigin="anonymous"
        />
      </head>

      <body>{children}</body>
    </html>
  );
}
