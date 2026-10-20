import fs from "fs";
import path from "path";

export async function GET() {
  const sourcePath =
    "C:\\Users\\hp\\.gemini\\antigravity-ide\\brain\\d25dfd8a-07d5-437a-86cd-2d9b57d091bd\\forma_hero_bust_1792474803215.jpg";
  const publicDest = path.join(process.cwd(), "public", "images", "forma-hero.jpg");

  try {
    if (fs.existsSync(sourcePath)) {
      if (!fs.existsSync(publicDest)) {
        fs.copyFileSync(sourcePath, publicDest);
      }
      const fileBuffer = fs.readFileSync(sourcePath);
      return new Response(fileBuffer, {
        headers: {
          "Content-Type": "image/jpeg",
          "Cache-Control": "public, max-age=31536000, immutable",
        },
      });
    }
  } catch (err) {
    console.error("Error reading forma hero image:", err);
  }

  return new Response("Not found", { status: 404 });
}
