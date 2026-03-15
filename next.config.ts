/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  // Resim optimizasyonu için dış kaynaklara izin veriyoruz
  images: {
      remotePatterns: [
          { protocol: "https", hostname: "**" },
      ],
  },
};

export default nextConfig;