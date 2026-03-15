/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  // Resim optimizasyonu için dış kaynaklara izin veriyoruz
  images: {
    unoptimized: true, // Required for static export (output: 'export')
    remotePatterns: [
      { protocol: "https", hostname: "**" },
    ],
  },
};

export default nextConfig;