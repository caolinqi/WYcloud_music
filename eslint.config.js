import globals from "globals";
import pluginJs from "@eslint/js";
import pluginVue, { rules } from "eslint-plugin-vue";

export default [
  { files: ["**/*.{js,mjs,cjs,vue}"] },
  { languageOptions: { globals: globals.browser } },
  pluginJs.configs.recommended,
  ...pluginVue.configs["flat/essential"],
  rules,
  {
    quotes: ["error", "double"],
    "import/no-extraneous-dependencies": "off",
    "vue/multi-word-component-names": "off",
  },
  settings,
  {
    "import/resolver": {
      alias: {
        map: [["@", "./src"]],
        extensions: [".js", ".jsx", ".ts", ".tsx", ".json"],
      },
    },
  },
];
