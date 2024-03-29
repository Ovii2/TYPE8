module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: ['airbnb-base', 'airbnb-typescript'],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: './tsconfig.json',
  },
  plugins: ['@typescript-eslint'],
  rules: {
    'comma-dangle': 'off',
    '@typescript-eslint/comma-dangle': [2],
    '@typescript-eslint/indent': [0],
    'linebreak-style': ['off', 'windows'],
    'no-console': 'off',
    'react/jsx-filename-extension': [0],
  },
};
