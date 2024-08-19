module.exports = {
  root: true,
  env: {
    es6: true,
    node: true,
<<<<<<< HEAD
    browser: true,
=======
    browser: true, // Add browser environment
>>>>>>> 30b08d0e0e84c47b5b27a5b30d47eb97b8444662
  },
  extends: [
    "eslint:recommended",
    "plugin:import/errors",
    "plugin:import/warnings",
    "plugin:import/typescript",
    "google",
    "plugin:@typescript-eslint/recommended",
<<<<<<< HEAD
    "next/core-web-vitals",
=======
    "next/core-web-vitals", // Add Next.js core web vitals
>>>>>>> 30b08d0e0e84c47b5b27a5b30d47eb97b8444662
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
<<<<<<< HEAD
    "react",
    "react-hooks",
=======
    "react", // Add React plugin
    "react-hooks", // Add React hooks plugin
>>>>>>> 30b08d0e0e84c47b5b27a5b30d47eb97b8444662
  ],
  rules: {
    "quotes": ["error", "double"],
    "import/no-unresolved": 0,
    "indent": ["error", 2],
<<<<<<< HEAD
    "react/react-in-jsx-scope": "off",
    "react-hooks/rules-of-hooks": "error",
    "react-hooks/exhaustive-deps": "warn",
=======
    "react/react-in-jsx-scope": "off", // Disable the rule requiring React to be in scope for JSX
    "react-hooks/rules-of-hooks": "error", // Ensure hooks are used correctly
    "react-hooks/exhaustive-deps": "warn", // Warn about missing dependencies in hooks
>>>>>>> 30b08d0e0e84c47b5b27a5b30d47eb97b8444662
  },
};
