export default function robots() {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: ["/Admin", "/Admin/*", "/api/*"],
    },
    sitemap: "https://afsalt.in/sitemap.xml",
  };
}
