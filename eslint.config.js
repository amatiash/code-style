import globals from 'globals'
import eslintJs from '@eslint/js'
import eslintTs from 'typescript-eslint'
import stylistic from '@stylistic/eslint-plugin'

export default [
    {files: ['**/*.{js,mjs,cjs,ts,jsx,tsx}']},
    {languageOptions: {parserOptions: {ecmaFeatures: {jsx: true}}}},
    {languageOptions: {globals: {...globals.browser, ...globals.node}}},
    eslintJs.configs.recommended,
    ...eslintTs.configs.recommended,
    stylistic.configs.customize({
        indent: 4,
        quotes: 'single',
        semi: false,
        jsx: true,
        arrowParens: true,
        quoteProps: 'as-needed',
    }),
    {
        rules: {
            '@stylistic/array-bracket-newline': 'off',
            // Included in customize: @stylistic/array-bracket-spacing
            '@stylistic/array-element-newline': ['error', 'consistent'],
            // Included in customize: @stylistic/arrow-parens
            // Included in customize: @stylistic/arrow-spacing
            // Included in customize: @stylistic/block-spacing
            '@stylistic/brace-style': ['error', 'stroustrup', {allowSingleLine: false}],
            // Included in customize: @stylistic/comma-dangle
            // Included in customize: @stylistic/comma-spacing
            // Included in customize: @stylistic/comma-style
            // Included in customize: @stylistic/computed-property-spacing
            // Included in customize: @stylistic/dot-location
            // Included in customize: @stylistic/eol-last
            '@stylistic/function-call-argument-newline': ['error', 'consistent'],
            '@stylistic/function-call-spacing': ['error', 'never'],
            '@stylistic/function-paren-newline': ['error', 'multiline'],
            '@stylistic/generator-star-spacing': ['error', 'both'],
            '@stylistic/implicit-arrow-linebreak': 'off',
            // Included in customize: @stylistic/indent
            // Included in customize: @stylistic/indent-binary-ops
            '@stylistic/jsx-child-element-spacing': 'error',
            '@stylistic/jsx-closing-bracket-location': ['error', {
                nonEmpty: 'tag-aligned',
                selfClosing: false,
            }],
            // Included in customize: @stylistic/jsx-closing-tag-location
            '@stylistic/jsx-curly-brace-presence': ['error', {
                props: 'never',
                children: 'never',
                propElementValues: 'always',
            }],
            '@stylistic/jsx-curly-newline': ['error',
                {
                    multiline: 'consistent',
                    singleline: 'forbid',
                },
            ],
            // Included in customize: @stylistic/jsx-curly-spacing
            '@stylistic/object-curly-spacing': ['error', 'never'],
            '@stylistic/jsx-equals-spacing': ['error', 'never'],
            // Included in customize: @stylistic/jsx-first-prop-new-line
            // Included in customize: @stylistic/jsx-function-call-newline

            '@typescript-eslint/no-unused-vars': 'off', // Covered by TypeScript
        },
    },
]
