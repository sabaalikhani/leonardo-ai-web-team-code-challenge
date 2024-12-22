import { CodegenConfig } from '@graphql-codegen/cli';

const config: CodegenConfig = {
	schema: 'https://rickandmortyapi.com/graphql',
	documents: ['./src/**/*.tsx', './src/**/*.ts'],
	generates: {
		'./generated/': {
			preset: 'client',
			plugins: [
				'typescript',
				'typescript-operations',
				{
					add: {
						content: '// @ts-nocheck',
					},
				},
			],
		},
	},
};

export default config;
