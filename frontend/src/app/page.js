import Home from "./Home/page";

const BASE_URL = "https://afsalt.in";

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebSite",
      "@id": `${BASE_URL}/#website`,
      "url": BASE_URL,
      "name": "Mohammed Afsal Portfolio",
      "description":
        "Portfolio of Mohammed Afsal — Full-Stack Software Developer & Web Designer based in Malappuram, Kerala, India.",
      "publisher": {
        "@id": `${BASE_URL}/#person`,
      },
      "inLanguage": "en-IN",
    },
    {
      "@type": "WebPage",
      "@id": `${BASE_URL}/#webpage`,
      "url": BASE_URL,
      "name": "Mohammed Afsal — Full-Stack Software Developer & Web Designer",
      "isPartOf": {
        "@id": `${BASE_URL}/#website`,
      },
      "about": {
        "@id": `${BASE_URL}/#person`,
      },
      "description":
        "Explore the portfolio of Mohammed Afsal, a Full-Stack Software Developer & Web Designer specializing in Next.js, React.js, Node.js, Express.js and MongoDB.",
      "inLanguage": "en-IN",
    },
    {
      "@type": "Person",
      "@id": `${BASE_URL}/#person`,
      "name": "Mohammed Afsal",
      "alternateName": "Afsal",
      "jobTitle": "Full-Stack Software Developer & Web Designer",
      "url": BASE_URL,
      "image": `${BASE_URL}/images/afsal-profile.jpg`,
      "sameAs": [
        "https://www.linkedin.com/in/mohammed-afsal-8a52b23aa/",
        "https://github.com/afsallll005-cloud",
      ],
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "Malappuram",
        "addressRegion": "Kerala",
        "addressCountry": "IN",
      },
      "knowsAbout": [
        "Full-Stack Web Development",
        "Next.js",
        "React.js",
        "JavaScript",
        "Node.js",
        "Express.js",
        "MongoDB",
        "PostgreSQL",
        "REST API Development",
        "Database Architecture",
        "TailwindCSS",
        "Web Design",
      ],
    },
    {
      "@type": "FAQPage",
      "@id": `${BASE_URL}/#faq`,
      "mainEntity": [
        {
          "@type": "Question",
          "name": "What tech stack do you specialize in?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text":
              "I specialize in the modern JavaScript and TypeScript ecosystem — primarily Next.js 15, React 19, Node.js, Express, MongoDB, PostgreSQL, and TailwindCSS. From frontend interactivity to robust backend APIs, I build complete, production-grade web applications.",
          },
        },
        {
          "@type": "Question",
          "name": "Do I get full ownership of the source code?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text":
              "Yes, 100%. Upon project completion, all intellectual property, source code, and assets are transferred to your GitHub repository with clear documentation, environment templates, and modular code architecture.",
          },
        },
        {
          "@type": "Question",
          "name": "How long does a typical software or web app project take?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text":
              "A high-impact landing page or portfolio typically takes 1 to 2 weeks. Comprehensive full-stack web applications, custom e-commerce stores, and SaaS dashboards generally span 3 to 6 weeks with weekly milestone demos.",
          },
        },
        {
          "@type": "Question",
          "name": "Can you integrate custom APIs, payment gateways, and authentication?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text":
              "Yes. I frequently integrate payment solutions (Stripe, Razorpay, PayPal), secure authentication (JWT, OAuth, NextAuth), external cloud services (AWS S3, Cloudinary), and third-party webhook automation.",
          },
        },
        {
          "@type": "Question",
          "name": "Do you offer post-launch support and maintenance?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text":
              "Yes. I offer ongoing retainer and ad-hoc maintenance packages covering security updates, server monitoring, database indexing, new feature development, and performance optimization.",
          },
        },
      ],
    },
  ],
};

export default function RootPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Home />
    </>
  );
}
