/** @type {import('next').NextConfig} */
const nextConfig = {
  env: {
    BUILD_ID: Date.now().toString(),
  },
}

module.exports = nextConfig 