/** @type {import('next').NextConfig} */
export default {
	reactStrictMode: true,
	images: {
		remotePatterns: [
			{
				protocol: 'https',
				hostname: '*repository-images.githubusercontent.com*'
			},

			{
        protocol: 'https',
        hostname: '*raw.githubusercontent.com*',
      },

      {
        protocol: 'https',
        hostname: '*user-images.githubusercontent.com*',
      },

      {
        protocol: 'https',
        hostname: '*avatars.githubusercontent.com*',
      },
		]
	}
};
