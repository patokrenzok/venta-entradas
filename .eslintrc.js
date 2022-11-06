module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true,
    amd: true,
  },
  extends: ['eslint:recommended', 'plugin:react/recommended', 'prettier'],
  ignorePatterns: ['node_modules/', 'public/', 'vendor/'],
  overrides: [],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  plugins: ['react'],
  rules: {
    indent: ['error', 2],
    'linebreak-style': ['error', 'unix'],
    quotes: ['error', 'single'],
    semi: ['error', 'never'],
    'react/react-in-jsx-scope': 'off',
    'react/prop-types': 'off',
    'react/no-unescaped-entities': 'off',
  },
  settings: {
    react: {
      version: 'detect',
    },
  },
}
