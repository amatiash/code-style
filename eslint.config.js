import globals from 'globals'
import eslintJs from '@eslint/js'
import eslintTs from 'typescript-eslint'
import stylistic from '@stylistic/eslint-plugin'

export default [
    { files: ['**/*.{js,mjs,cjs,ts,jsx,tsx}'] },
    { languageOptions: { parserOptions: { ecmaFeatures: { jsx: true } } } },
    { languageOptions: { globals: { ...globals.browser, ...globals.node } } },
    eslintJs.configs.recommended,
    ...eslintTs.configs.recommended,
    stylistic.configs.customize({
        indent: 4,
        quotes: 'single',
        semi: false,
        jsx: true,
        arrowParens: true,
        braceStyle: 'stroustrup',
        quoteProps: 'as-needed',
    }),
    {
        rules: {
            '@stylistic/array-bracket-newline': 'off',
            '@stylistic/array-element-newline': ['error', 'consistent'],
            '@stylistic/function-call-argument-newline': ['error', 'consistent'],
            '@stylistic/function-call-spacing': ['error', 'never'],
            '@stylistic/function-paren-newline': ['error', 'multiline'],
            '@stylistic/generator-star-spacing': ['error', 'both'],
            '@stylistic/implicit-arrow-linebreak': 'off',
            '@stylistic/jsx-child-element-spacing': 'error',
            '@stylistic/jsx-closing-bracket-location': ['error', {
                nonEmpty: 'tag-aligned',
                selfClosing: false,
            }],

            '@typescript-eslint/no-unused-vars': 'off', // Covered by TypeScript
        },
    },
]
