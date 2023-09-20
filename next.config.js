/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  i18n: {
    /** https://nextjs.org/docs/advanced-features/i18n-routing#getting-started */
    locales: ['ko'],
    defaultLocale: 'ko',
  },
};

module.exports = nextConfig;
