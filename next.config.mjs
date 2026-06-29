/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // Hide the floating dev-only build/route indicators so local demos look clean.
  devIndicators: {
    appIsrStatus: false,
    buildActivity: false,
  },
  images: {
    // Real, context-matching exterior-cleaning photography is served from these
    // CDNs. URLs (with alt text) are centralized in src/lib/images.ts.
    remotePatterns: [
      { protocol: "https", hostname: "images.unsplash.com" },
      { protocol: "https", hostname: "images.pexels.com" },
    ],
  },
};

export default nextConfig;
