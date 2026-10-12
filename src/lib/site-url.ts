/** Live canonical host. Apex redirects to www, and Google will not follow that 308 for sitemaps. */
export const CANONICAL_SITE_URL = "https://www.aqstechnologies.com";

export function getSiteUrl() {
  const raw = process.env.NEXT_PUBLIC_SITE_URL?.trim().replace(/\/$/, "") ?? "";
  if (!raw || /localhost|127\.0\.0\.1/i.test(raw)) {
    return CANONICAL_SITE_URL;
  }
  if (/^https?:\/\/(www\.)?aqstechnologies\.com$/i.test(raw)) {
    return CANONICAL_SITE_URL;
  }
  return raw.replace(/^http:\/\//i, "https://");
}
