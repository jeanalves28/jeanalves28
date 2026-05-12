import js from '@eslint/js';
import stylistic from '@stylistic/eslint-plugin';
import { defineConfig } from 'eslint/config';
import tseslint from 'typescript-eslint';

export default defineConfig(
  {
    ignores: [
      'next/',
      '.next/',
      'build/',
      '.build/',
      '**/*.d.ts',
      '**/*.config.{ts,mjs,js}',
      '**/*.test.{ts,tsx}',
    ],
  },
  js.configs.recommended,
  tseslint.configs.strictTypeChecked,
  tseslint.configs.stylisticTypeChecked,
  {
    plugins: {
      '@stylistic': stylistic,
    },
    languageOptions: {
      parserOptions: {
        projectService: true,
      },
    },
    rules: {
      '@stylistic/arrow-spacing': 'error',
      '@stylistic/comma-spacing': 'error',
      '@stylistic/comma-dangle': [
        'error',
        {
          objects: 'always-multiline',
          arrays: 'always-multiline',
          functions: 'always-multiline',
          imports: 'always-multiline',
          exports: 'always-multiline',
        },
      ],
      '@stylistic/jsx-quotes': 'error',
      '@stylistic/key-spacing': 'error',
      '@stylistic/keyword-spacing': 'error',
      '@stylistic/indent': ['error', 'tab'],
      '@stylistic/semi': 'error',
      '@stylistic/quotes': ['error', 'single'],
      '@stylistic/space-infix-ops': 'error',
      '@stylistic/multiline-ternary': ['error', 'always-multiline'],
      '@stylistic/object-curly-spacing': ['error', 'always'],
      '@stylistic/dot-location': ['error', 'property'],
      '@stylistic/no-multi-spaces': 'error',
      '@stylistic/no-multiple-empty-lines': ['error', { max: 1, maxEOF: 0 }],
      '@stylistic/no-mixed-operators': 'error',
      '@stylistic/no-mixed-spaces-and-tabs': 'error',
      '@stylistic/nonblock-statement-body-position': 'error',
      '@stylistic/no-whitespace-before-property': 'error',
      '@stylistic/no-trailing-spaces': 'error',
      '@stylistic/newline-per-chained-call': [
        'error',
        { ignoreChainWithDepth: 1 },
      ],
      '@stylistic/type-generic-spacing': 'error',
      '@stylistic/type-named-tuple-spacing': 'error',
      '@stylistic/indent-binary-ops': ['error', 'tab'],
      '@stylistic/max-len': [
        'error',
        {
          code: 80,
          tabWidth: 2,
          ignoreStrings: true,
          ignoreTemplateLiterals: true,
          ignoreRegExpLiterals: true,
          ignoreComments: true,
        },
      ],
      '@stylistic/lines-between-class-members': ['error', 'always'],
      '@stylistic/padding-line-between-statements': [
        'error',
        {
          blankLine: 'always',
          prev: '*',
          next: [
            'class',
            'function',
            'block',
            'export',
            'switch',
            'case',
            'default',
            'try',
            'if',
            'return',
            'expression',
            'multiline-const',
            'multiline-var',
            'multiline-let',
          ],
        },

        {
          blankLine: 'always',
          prev: ['multiline-const', 'multiline-var', 'multiline-let'],
          next: '*',
        },

        {
          blankLine: 'always',
          prev: 'directive',
          next: '*',
        },
      ],
      curly: ['error', 'multi-line'],
      'prefer-const': 'error',
      'no-empty-function': 'off',
      'no-underscore-dangle': ['error', { allowAfterThis: true }],
      'class-methods-use-this': 'off',
      'max-classes-per-file': 'error',
      'capitalized-comments': 'error',
      'no-constructor-return': 'error',
      '@typescript-eslint/no-unused-vars': [
        'warn',
        { argsIgnorePattern: '^_' },
      ],
      '@typescript-eslint/consistent-type-definitions': 'error',
      '@typescript-eslint/consistent-type-imports': [
        'error',
        {
          fixStyle: 'inline-type-imports',
        },
      ],
      '@typescript-eslint/array-type': ['error', { default: 'generic' }],
      '@typescript-eslint/no-extraneous-class': [
        'error',
        {
          allowStaticOnly: true,
        },
      ],
      '@typescript-eslint/no-confusing-void-expression': [
        'error',
        { ignoreVoidReturningFunctions: true },
      ],
      '@typescript-eslint/no-mixed-spaces-and-tabs': 'off',
      '@typescript-eslint/no-var-requires': 'off',
      '@typescript-eslint/no-tabs': 'off',
      '@typescript-eslint/no-unsafe-assignment': 'off',
      '@typescript-eslint/prefer-nullish-coalescing': 'error',
      '@typescript-eslint/prefer-function-type': 'error',
      '@typescript-eslint/no-empty-function': 'error',
      '@typescript-eslint/class-methods-use-this': 'error',
      '@typescript-eslint/restrict-template-expressions': [
        'error',
        { allowNumber: true },
      ],
      '@typescript-eslint/explicit-member-accessibility': [
        'error',
        {
          accessibility: 'explicit',
          overrides: {
            accessors: 'off',
            properties: 'off',
            constructors: 'no-public',
          },
        },
      ],
      '@typescript-eslint/no-namespace': [
        'error',
        {
          allowDeclarations: true,
        },
      ],
      '@typescript-eslint/naming-convention': [
        'error',
        {
          selector: 'default',
          format: ['camelCase'],
        },

        {
          selector: 'variable',
          format: ['camelCase'],
        },

        {
          selector: 'variable',
          modifiers: ['const'],
          format: ['camelCase', 'UPPER_CASE'],
        },

        {
          selector: 'memberLike',
          format: ['camelCase'],
        },

        {
          selector: 'classProperty',
          format: ['camelCase'],
        },

        {
          selector: 'classProperty',
          modifiers: ['private'],
          format: ['camelCase'],
          leadingUnderscore: 'require',
        },

        {
          selector: 'property',
          format: ['camelCase'],
        },

        {
          selector: 'property',
          format: null,
          modifiers: ['requiresQuotes'],
        },

        {
          selector: 'import',
          format: ['camelCase', 'PascalCase'],
        },

        {
          selector: 'function',
          format: ['camelCase', 'PascalCase'],
        },

        {
          selector: 'parameter',
          format: ['camelCase'],
          leadingUnderscore: 'allow',
        },

        {
          selector: 'typeLike',
          format: ['PascalCase'],
        },
      ],
      '@typescript-eslint/member-ordering': [
        'error',
        {
          default: [
            'public-static-field',
            'protected-static-field',
            'private-static-field',
            'public-static-method',
            'protected-static-method',
            'private-static-method',
            'public-instance-field',
            'protected-instance-field',
            'private-instance-field',
            'constructor',
            'public-instance-method',
            'protected-instance-method',
            'private-instance-method',
          ],
        },
      ],
    },
  },
  {
    files: ['**/*.{js,mjs}'],
    extends: [tseslint.configs.disableTypeChecked],
  },
);
