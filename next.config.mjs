/** @type {import('next').NextConfig} */
const nextConfig = {
  async exportPathMap(defaultPathMap) {
    const pathMap = { ...defaultPathMap }
    delete pathMap["/character/[characterId]"]
    return pathMap
  },
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
    serverComponentsExternalPackages: ["@node-rs/argon2"],
  },
  basePath: "/metel777/ani-teka-v2/",
}

export default nextConfig
