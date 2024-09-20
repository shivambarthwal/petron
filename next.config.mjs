/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        domains: ["v2media.s3.amazonaws.com","c10.patreonusercontent.com","images.unsplash.com","./coding.png"],
        formats: ["image/avif", "image/webp"],
      },
    
};

export default nextConfig;
