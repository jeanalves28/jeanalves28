/** @type {import('next').NextConfig} */
export default {
	reactStrictMode: true,
	images: {
		remotePatterns: [
			{
				protocol: 'https',
				hostname: 'repository-images.githubusercontent.com*'
			}
		]
	}
};
