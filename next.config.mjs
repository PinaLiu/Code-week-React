const isProd = process.env.NODE_ENV === "production";

const nextConfig = {
  reactStrictMode: true,
  images: {
    unoptimized: true,
    //remotePatterns: [{ hostname: "th.bing.com" }], deprecato
  },
  //per  deploy su github pages
  basePath: isProd ? "/Code-week-React" : "",
  assetPrefix: isProd ? "/Code-week-React" : "",
};

export default nextConfig;
