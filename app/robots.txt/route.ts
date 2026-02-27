//app/robots.txt/route.ts
import { NextResponse } from "next/server";

export async function GET() {
  const robotsTxt = `User-agent: *
Disallow: /api/
Allow: /
Sitemap: https://sterlingandbourne.com/sitemap.xml`;

  return new NextResponse(robotsTxt, {
    headers: {
      "Content-Type": "text/plain",
    },
  });
}
