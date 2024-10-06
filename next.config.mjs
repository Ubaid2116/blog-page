/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
      remotePatterns: [
        {
          protocol: "https",
          hostname: "cdn.sanity.io",
          pathname: "/**", // This allows any path under the specified hostname
        },
      ],
    },
  };
  
  export default nextConfig;
  
