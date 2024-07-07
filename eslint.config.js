import globals from "globals";
import eslintJs from "@eslint/js";
import eslintTs from "typescript-eslint";
import stylistic from '@stylistic/eslint-plugin'

export default [
  {files: ["**/*.{js,mjs,cjs,ts,jsx,tsx}"]},
  { languageOptions: { parserOptions: { ecmaFeatures: { jsx: true } } } },
  {languageOptions: { globals: {...globals.browser, ...globals.node} }},
  eslintJs.configs.recommended,
  ...eslintTs.configs.recommended,
    stylistic.configs.customize({
    indent: 4,
    quotes: 'single',
    semi: false,
    jsx: true,
    arrowParens: true,
    braceStyle: 'stroustrup',
    // ...
  }),
  // ...you other config items
];