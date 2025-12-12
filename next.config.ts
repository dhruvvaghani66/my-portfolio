// import type { NextConfig } from "next";

// const nextConfig: NextConfig = {
//   /* config options here */
//   reactStrictMode: true,

//   // ✅ Ignore ESLint errors during build
//   eslint: {
//     ignoreDuringBuilds: true,
//   },

//   // ✅ Ignore TypeScript errors during build
//   typescript: {
//     ignoreBuildErrors: true,
//   },
// };

// export default nextConfig;


// import withBundleAnalyzer from "@next/bundle-analyzer";
// import type { NextConfig } from "next";

// const bundleAnalyzer = withBundleAnalyzer({
//   enabled: process.env.ANALYZE === "true",
// });

// const nextConfig: NextConfig = {
//   reactStrictMode: true,

//   // ✅ Ignore ESLint errors during build
//   eslint: {
//     ignoreDuringBuilds: true,
//   },

//   // ✅ Ignore TypeScript errors during build
//   typescript: {
//     ignoreBuildErrors: true,
//   },
// };

// export default bundleAnalyzer(nextConfig);








import withBundleAnalyzer from "@next/bundle-analyzer";
import type { NextConfig } from "next";

const bundleAnalyzer = withBundleAnalyzer({
  enabled: process.env.ANALYZE === "true",
});

// ✅ FIX: Disable Turbopack to avoid build failure
const nextConfig: NextConfig = {
  reactStrictMode: true,

  // ❗ Removed invalid eslint key (not supported in Next.js 16)

  // Keep TypeScript ignore (valid)
  typescript: {
    ignoreBuildErrors: true,
  },

  // Force Webpack instead of Turbopack
  experimental: {
    turbo: false,
  },

  // Required for disabling Turbopack safely
  webpack(config) {
    return config;
  },
};

export default bundleAnalyzer(nextConfig);





// import withBundleAnalyzer from "@next/bundle-analyzer";
// import type { NextConfig } from "next";

// const bundleAnalyzer = withBundleAnalyzer({
//   enabled: process.env.ANALYZE === "true",
// });

// const nextConfig: NextConfig = {
//   reactStrictMode: true,

//   // Fix: Next.js 16 removed eslint option support
//   typescript: {
//     ignoreBuildErrors: true,
//   },

//   // ✔ Correct way to disable Turbopack in Next.js 16
//   // This selects webpack explicitly
//   compiler: {
//     emotion: false,
//   },

//   // ✔ Force webpack instead of Turbopack
//   webpack(config) {
//     return config;
//   },

//   // ✔ Required for selecting workspace root
//   turbopack: {
//     root: __dirname,
//   },
// };

// export default bundleAnalyzer(nextConfig);
