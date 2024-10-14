/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      {
        // Parkner apk download qr redirect
        source: '/app-download',
        destination: 'https://github.com/Rawiesh/parkner-mobile-app/raw/main/assets/parkner.apk',
        basePath: false,
        permanent: false,
      },
      {
        // Mope payment example
        source: '/payment-example',
        destination: 'https://www.mope.sr/p/85ece88a-858a-4bb4-b036-3e1ce717689a',
        basePath: false,
        permanent: false,
      },
    ]
  },
};

export default nextConfig;
