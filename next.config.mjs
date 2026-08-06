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
        destination: '/printing',
        permanent: true,
      },
    ]
  },

}

export default nextConfig
