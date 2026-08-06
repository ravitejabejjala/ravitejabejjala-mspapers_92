/** @type {import('next').NextConfig} */
const nextConfig = {
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
  async redirects() {
    return [
      {
        source: '/printing-services-hyderabad',
        destination: '/services',
        permanent: true,
      },
    ]
  },

}

export default nextConfig
