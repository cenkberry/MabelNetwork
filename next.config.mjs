/** @type {import('next').NextConfig} */

import createNextIntlPlugin from 'next-intl/plugin';
 
const withNextIntl = createNextIntlPlugin();
 
const nextConfig = {
  sassOptions: {
    includePaths: ["./src/"],
    prependData: `@import "styles/vars/_vars.scss";`,
  },
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/,
      use: ['@svgr/webpack'],
    });
    return config;
  }
};
 
export default withNextIntl(nextConfig);

