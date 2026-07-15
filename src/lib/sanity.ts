import { sanityClient } from "sanity:client";

// True when real Sanity credentials are configured. When they're absent
// (e.g. local dev without a .env), we skip network fetches and return
// fallback data so the app still renders instead of crashing at build time.
export const sanityEnabled = Boolean(
  import.meta.env.PUBLIC_SANITY_STUDIO_PROJECT_ID,
);

/**
 * Fetch from Sanity, returning `fallback` when Sanity is disabled or the
 * request fails. Lets pages render without live CMS content in dev.
 */
export async function safeFetch<T>(
  query: string,
  fallback: T,
  params?: Record<string, unknown>,
): Promise<T> {
  if (!sanityEnabled) return fallback;
  try {
    return await sanityClient.fetch<T>(query, params);
  } catch (err) {
    console.warn("[sanity] fetch failed, using fallback:", err);
    return fallback;
  }
}

export { sanityClient };
