import globals from 'globals'
import eslintJs from '@eslint/js'
import eslintTs from 'typescript-eslint'
import stylistic from '@stylistic/eslint-plugin'
import {stylisticCustomizedBaseRules, stylisticCustomizedJsxRules} from './rules/stylistic.js'

export default [
    {files: ['**/*.{js,mjs,cjs,ts,jsx,tsx}']},
    {languageOptions: {parserOptions: {ecmaFeatures: {jsx: true}}}},
    {languageOptions: {globals: {...globals.browser, ...globals.node}}},
    eslintJs.configs.recommended,
    ...eslintTs.configs.recommended,
    stylistic.configs.customize({
        semi: false,
        jsx: true,
        arrowParens: true,
        quoteProps: 'as-needed',
    }),
    {
        rules: {
            ...stylisticCustomizedBaseRules,
            ...stylisticCustomizedJsxRules,

            'one-var': ['error', 'never'],
            curly: 'error',
            '@typescript-eslint/no-unused-vars': 'off', // Covered by TypeScript
        },
    },
]
