module.exports = {
  root: true,
  env: {
    es6: true,
    node: true,
    browser: true,
  },
  extends: [
    "eslint:recommended",
    "plugin:import/errors",
    "plugin:import/warnings",
    "plugin:import/typescript",
    "google",
    "plugin:@typescript-eslint/recommended",
    "next/core-web-vitals",
  ],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    project: ["./tsconfig.functions.json"], // Path to tsconfig.functions.json
    sourceType: "module",
  },
  ignorePatterns: [
    'functions/*.js',
    'functions/src/*.js',
    'functions/src/types/*.d.ts',
    "/lib/**/*",
    "/generated/**/*",
    '.next/**/*',
    'build/**/*',
  ],
  plugins: [
    "@typescript-eslint",
    "import",
    "react",
    "react-hooks",
  ],
  rules: {
    "quotes": ["error", "double"],
    "import/no-unresolved": 0,
    "indent": ["error", 2],
    "react/react-in-jsx-scope": "off",
    "react-hooks/rules-of-hooks": "error",
    "react-hooks/exhaustive-deps": "warn",
    "require-jsdoc": "off", // Disable JSDoc comments requirement
    "@typescript-eslint/explicit-module-boundary-types": "off", // Optionally, disable type requirement for functions
  },
};
