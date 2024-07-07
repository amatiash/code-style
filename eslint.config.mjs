import globals from "globals";
import eslintJs from "@eslint/js";
import eslintTs from "typescript-eslint";

export default [
  {files: ["**/*.{js,mjs,cjs,ts}"]},
  {languageOptions: { globals: {...globals.browser, ...globals.node} }},
  eslintJs.configs.recommended,
  ...eslintTs.configs.recommended,
];