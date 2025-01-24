const path = require('path')

module.exports = {
	extends: ['airbnb-base', 'plugin:prettier/recommended'],
	overrides: [
		{
			files: ['**/*.ts', '**/*.tsx'],
			plugins: ['@typescript-eslint', 'react', 'unused-imports', 'tailwindcss', 'simple-import-sort'],
			extends: ['plugin:tailwindcss/recommended', 'airbnb-typescript', 'plugin:prettier/recommended'],
			parserOptions: {
				tsconfigRootDir: __dirname,
				project: path.join(__dirname, 'tsconfig.json'),
			},
			rules: {
				'prettier/prettier': 'warn',
				'import/extensions': [
					'error',
					'ignorePackages',
					{
						js: 'never',
						jsx: 'never',
						ts: 'never',
						tsx: 'never',
						'': 'never',
					},
				],
				'react/destructuring-assignment': 'off',
				'react/require-default-props': 'off',
				'react/jsx-props-no-spreading': 'off',
				'@typescript-eslint/comma-dangle': 'off',
				'@typescript-eslint/consistent-type-imports': 'error',
				'import/prefer-default-export': 'off',
				'tailwindcss/classnames-order': [
					'warn',
					{
						officialSorting: true,
					},
				],
				'simple-import-sort/imports': 'error',
				'simple-import-sort/exports': 'error',
				'@typescript-eslint/no-unused-vars': 'off',
				'unused-imports/no-unused-imports': 'error',
				'unused-imports/no-unused-vars': ['error', { argsIgnorePattern: '^_' }],
			},
		},
		{
			files: ['**/*.astro'],
			plugins: ['@typescript-eslint', 'react', 'unused-imports', 'tailwindcss', 'simple-import-sort'],
			extends: ['plugin:tailwindcss/recommended', 'airbnb-typescript', 'plugin:prettier/recommended'],
			parser: 'astro-eslint-parser',
			parserOptions: {
				tsconfigRootDir: __dirname,
				parser: '@typescript-eslint/parser',
				project: path.join(__dirname, 'tsconfig.json'),
				extraFileExtensions: ['.astro'],
			},
			rules: {
				'import/extensions': [
					'error',
					'ignorePackages',
					{
						js: 'never',
						jsx: 'never',
						ts: 'never',
						tsx: 'never',
						'': 'never',
					},
				],
				'import/no-unresolved': [
					'error',
					{
						ignore: ['@/*'],
					},
				],
				'react/jsx-filename-extension': [1, { extensions: ['.astro'] }],
				'react/destructuring-assignment': 'off',
				'react/require-default-props': 'off',
				'react/jsx-props-no-spreading': 'off',
				'@typescript-eslint/comma-dangle': 'off',
				'@typescript-eslint/consistent-type-imports': 'error',
				'import/prefer-default-export': 'off',
				'tailwindcss/classnames-order': [
					'warn',
					{
						officialSorting: true,
					},
				],
				'simple-import-sort/imports': 'error',
				'simple-import-sort/exports': 'error',
				'@typescript-eslint/no-unused-vars': 'off',
				'unused-imports/no-unused-imports': 'error',
				'unused-imports/no-unused-vars': ['error', { argsIgnorePattern: '^_' }],
			},
			globals: {
				Astro: 'readonly',
			},
		},
	],
}
