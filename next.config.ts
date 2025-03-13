import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
	logging: {
		fetches: {
			fullUrl: true
		}
	},
	images: {
		remotePatterns: [
			{
				hostname: 'pbs.twimg.com'
			}
		]
	}
};

export default nextConfig;
