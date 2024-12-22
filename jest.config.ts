import type { Config } from 'jest';
import nextJest from 'next/jest.js';

const createJestConfig = nextJest({
	dir: './',
});

const config: Config = {
	coverageProvider: 'v8',
	testEnvironment: 'jsdom',
	moduleNameMapper: {
		'^@/(.*)$': ['<rootDir>/src/$1', '<rootDir>/$1'],
	},
	setupFilesAfterEnv: ['<rootDir>/jest.setup.ts', '<rootDir>/test-utils.tsx'],
};

export default createJestConfig(config);
