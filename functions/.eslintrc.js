module.exports = {
  root: true,
  env: {
    es6: true,
    node: true,
    browser: true, // Add browser environment
  },
  extends: [
    "eslint:recommended",
    "plugin:import/errors",
    "plugin:import/warnings",
    "plugin:import/typescript",
    "google",
    "plugin:@typescript-eslint/recommended",
    "next/core-web-vitals", // Add Next.js core web vitals
  ],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    project: ["tsconfig.json", "tsconfig.dev.json"],
    sourceType: "module",
  },
  ignorePatterns: [
    "/lib/**/*",
    "/generated/**/*",
  ],
  plugins: [
    "@typescript-eslint",
    "import",
    "react", // Add React plugin
    "react-hooks", // Add React hooks plugin
  ],
  rules: {
    "quotes": ["error", "double"],
    "import/no-unresolved": 0,
    "indent": ["error", 2],
    "react/react-in-jsx-scope": "off", // Disable the rule requiring React to be in scope for JSX
    "react-hooks/rules-of-hooks": "error", // Ensure hooks are used correctly
    "react-hooks/exhaustive-deps": "warn", // Warn about missing dependencies in hooks
  },
};
