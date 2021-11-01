module.exports = {
  root: true,
  parser: "@typescript-eslint/parser",
  env: {
    browser: true,
    node: true
  },
  parserOptions: {
    ecmaVersion: 2021,
    sourceType: "module",
    ecmaFeatures: {
      jsx: true
    },
    project: "./tsconfig.json"
  },
  plugins: ["prefer-arrow-functions", "sort-destructure-keys"],
  extends: [
    "eslint:recommended",
    "plugin:@typescript-eslint/eslint-recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:import/recommended",
    "plugin:import/typescript",
    "plugin:prettier/recommended",
    "prettier",
    "plugin:react/recommended",
    "plugin:react-hooks/recommended"
  ],
  settings: {
    "import/resolver": {
      typescript: {}
    },
    react: {
      version: "detect"
    }
  },
  rules: {
    complexity: ["error", {max: 5}],
    "max-depth": ["error", {max: 2}],
    "max-lines": [
      "error",
      {max: 800, skipBlankLines: true, skipComments: true}
    ],
    "max-statements": "error",
    "no-implicit-coercion": "error",
    "@typescript-eslint/consistent-type-definitions": ["error", "type"],
    "@typescript-eslint/consistent-type-imports": "error",
    "@typescript-eslint/ban-ts-comment": ["error", {"ts-expect-error": false}],
    "@typescript-eslint/explicit-module-boundary-types": "off",
    "@typescript-eslint/member-ordering": [
      "error",
      {default: {order: "alphabetically"}}
    ],
    "@typescript-eslint/naming-convention": [
      "error",
      {selector: "default", format: ["camelCase"]},
      {
        // This should be just "objectLiteralMethod", but there is a bug that is
        // not detecting functions specified using shorthand notation
        selector: ["objectLiteralMethod", "objectLiteralProperty"],
        format: ["camelCase", "PascalCase","snake_case"]
      },
      {
        selector: "parameter",
        format: ["camelCase", "PascalCase"],
        leadingUnderscore: "allow"
      },
      {selector: "typeLike", format: ["PascalCase"]},
      {selector: "typeParameter", format: ["PascalCase"], prefix: ["T"]},
      {selector: "typeProperty", format: ["camelCase", "snake_case"]},
      {
        selector: "variable",
        types: ["function"],
        format: ["camelCase", "PascalCase"]
      },
    ],
    "@typescript-eslint/no-empty-function": "warn",
    "@typescript-eslint/no-unused-vars": ["warn", {ignoreRestSiblings: true}],
    // this rule is reporting an error with styled-components package
    "import/default": "off",
    "import/exports-last": "error",
    "import/extensions": ["error", "never"],
    "import/first": "error",
    "import/group-exports": "error",
    "import/no-anonymous-default-export": "error",
    "import/newline-after-import": "error",
    "import/order": [
      "error",
      {
        "newlines-between": "always-and-inside-groups",
        pathGroups: [
          {group: "external", pattern: "styled-components"},
          {group: "parent", pattern: "@/**"}
        ]
      }
    ],
    "object-shorthand": ["error", "properties"],
    "prefer-arrow-functions/prefer-arrow-functions": [
      "error",
      {
        returnStyle: "implicit",
        singleReturnOnly: false
      }
    ],
    "react/boolean-prop-naming": [
      "error",
      {rule: "^(are|is|can|has|have|hide|show)[A-Z]([A-Za-z0-9]?)+"}
    ],
    "react/jsx-curly-brace-presence": ["error", "never"],
    "react/display-name": "off",
    "react/jsx-boolean-value": "error",
    "react/jsx-max-depth": ["error", {max: 4}],
    "react/jsx-sort-props": ["error", {ignoreCase: true}],
    "react/prop-types": "off",
    "react/react-in-jsx-scope": "off",
    "sort-destructure-keys/sort-destructure-keys": [
      "error",
      {caseSensitive: false}
    ]
  },
  ignorePatterns: [".eslintrc.js"]
};
