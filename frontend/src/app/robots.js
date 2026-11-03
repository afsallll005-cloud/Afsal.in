
export default function robots() {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: ["/Admin", "/Admin/", "/Admin/*", "/api/"],
      },
    ],
    sitemap: "https://afsalt.in/sitemap.xml",
    host: "https://afsalt.in",
  };
}
