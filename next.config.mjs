/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "s4.anilist.co",
        port: "",
        pathname: "/file/**",
      },
    ],
  },
  experimental: {
		serverComponentsExternalPackages: ["@node-rs/argon2"]
	},
  basePath: '/metel777/ani-teka-v2/'
}

export default nextConfig
