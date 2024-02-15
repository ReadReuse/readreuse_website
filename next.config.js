/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  basePath: "",
  compiler: {
    // Enables the styled-components SWC transform
    styledComponents: true,
  },
  async headers() {
    return [
      {
        source: "/(.*)",
        headers: [
          {
            key: "X-Frame-Options",
            value: "DENY",
          },
          // Add any other custom headers you may need
        ],
      },
    ];
  },
  async redirects() {
    return [
      {
        source: "/old-url",
        destination: "/new-url",
        permanent: true, // 301 redirect
      },
      // Add any other redirects as needed
    ];
  },
  async rewrites() {
    return [
      {
        source: "/sitemap.xml",
        destination: "/api/sitemap", // Use a dynamic route or serverless function for generating sitemap
      },
      // Add other rewrites as needed
    ];
  },
  async robotsTxt() {
    return {
      // Configure the robots.txt file
      UserAgent: "*",
      Disallow: "/admin",
      Sitemap: "https://readreuse.in/sitemap.xml",
    };
  },
  async seo() {
    return {
      // Configure additional SEO-related settings
      title: "Readreuse - Study Smarter, Not Harder",
      description:
        "Transform your study routine with Readreuse, your ultimate study companion. Discover bite-sized study notes and last year's question papers for smarter studying.",
      openGraph: {
        title: "Readreuse - Study Smarter, Not Harder",
        description:
          "Transform your study routine with Readreuse, your ultimate study companion. Discover bite-sized study notes and last year's question papers for smarter studying.",
        // images: [
        //   {
        //     url: 'https://yourdomain.com/og-image.jpg',
        //     width: 1200,
        //     height: 630,
        //     alt: 'Readreuse - Study Smarter, Not Harder',
        //   },
        // ],
        site_name: "Readreuse",
      },
    };
  },
};

module.exports = nextConfig;
