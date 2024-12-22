import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
	experimental: {
		optimizePackageImports: ['@chakra-ui/react'],
	},
	images: {
		domains: ['rickandmortyapi.com'],
	},
};

export default nextConfig;
