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
            // Included in customize: @stylistic/jsx-closing-bracket-location
            // Included in customize: @stylistic/jsx-closing-tag-location
            '@stylistic/jsx-curly-brace-presence': ['error', {
                props: 'never',
                children: 'never',
                propElementValues: 'always',
            }],
            '@stylistic/jsx-curly-newline': ['error', {
                multiline: 'consistent',
                singleline: 'forbid',
            }],
            // Included in customize: @stylistic/jsx-curly-spacing
            '@stylistic/object-curly-spacing': ['error', 'never'],
            '@stylistic/jsx-equals-spacing': ['error', 'never'],
            // Included in customize: @stylistic/jsx-first-prop-new-line
            // Included in customize: @stylistic/jsx-function-call-newline
            '@stylistic/jsx-indent': ['error',
                4,
                {
                    checkAttributes: true,
                    indentLogicalExpressions: true,
                },
            ],
            // Included in customize: @stylistic/jsx-indent-props
            // Included in customize: @stylistic/jsx-max-props-per-line
            // Ignored: @stylistic/jsx-newline
            // Included in customize: @stylistic/jsx-one-expression-per-line
            '@stylistic/jsx-pascal-case': 'error',
            '@stylistic/jsx-props-no-multi-spaces': 'error',
            // Included in customize: @stylistic/jsx-quotes
            '@stylistic/jsx-self-closing-comp': 'error',
            '@stylistic/jsx-sort-props': ['error', {
                callbacksLast: true,
                shorthandFirst: true,
                noSortAlphabetically: true,
                reservedFirst: true,
            }],
            // Included in customize: @stylistic/jsx-tag-spacing
            // Included in customize: @stylistic/jsx-wrap-multilines
            // Included in customize: @stylistic/key-spacing
            // Included in customize: @stylistic/keyword-spacing
            // Ignored: @stylistic/line-comment-position
            '@stylistic/linebreak-style': [
                process.platform === 'win32' ? 'off' : 'error',
                'unix',
            ],
            // Ignored: @stylistic/lines-around-comment
            '@stylistic/lines-between-class-members': ['error', {
                enforce: [
                    {
                        blankLine: 'always',
                        prev: '*',
                        next: 'method',
                    },
                    {
                        blankLine: 'always',
                        prev: 'method',
                        next: 'field',
                    },
                    {
                        blankLine: 'never',
                        prev: 'field',
                        next: 'field',
                    },
                ],
            }],

            '@typescript-eslint/no-unused-vars': 'off', // Covered by TypeScript
        },
    },
]
