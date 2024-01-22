/** @type {import('next').NextConfig} */
const nextConfig = {
  redirects: async () => {
    return [
      {
        source: "/:page(slow|newsletter|fast)/:path*",
        destination: "https://v2.awarm.space/:page/:path*",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
