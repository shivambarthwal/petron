/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        domains: ["v2media.s3.amazonaws.com"],
        formats: ["image/avif", "image/webp"],
      },
    
};

export default nextConfig;
