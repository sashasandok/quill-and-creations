import js from '@eslint/js'
import ts from '@typescript-eslint/eslint-plugin'
import tsParser from '@typescript-eslint/parser'
import prettier from 'eslint-plugin-prettier'
import globals from 'globals'
import tseslint from 'typescript-eslint'
import { defineConfig } from 'eslint/config'

export default defineConfig([
  { files: ['**/*.{js,mjs,cjs,ts,mts,cts}'], plugins: { js }, extends: ['js/recommended'] },
  { files: ['**/*.{js,mjs,cjs,ts,mts,cts}'], languageOptions: { globals: globals.browser } },
  tseslint.configs.recommended,
  {
    languageOptions: {
      parser: tsParser,
      globals: {
        process: 'readonly',
        console: 'readonly',
      },
    },
  },
  {
    rules: {
      // Enforce the use of single quotes for strings
      quotes: ['error', 'single'],
      // Enforce semicolons at the end of statements
      semi: ['error', 'never'],
      // Enforce consistent line breaks (LF for Unix)
      'linebreak-style': ['error', 'unix'],
      // Require the use of === and !== (no implicit type conversions)
      eqeqeq: ['error', 'always'],
      // Enforce a maximum line length (usually 80 or 100 characters)
      'max-len': ['error', { code: 100 }],
      // Enable Prettier as a lint rule
      'prettier/prettier': [
        'error',
        {
          singleQuote: true,
          semi: false,
          tabWidth: 2,
        },
      ],
    },
  },
  {
    plugins: {
      '@typescript-eslint': ts,
      prettier: prettier,
    },
  },
])
