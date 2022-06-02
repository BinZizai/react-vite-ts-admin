module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true
  },
  globals: {
    JSX: 'readonly',
    React: 'readonly',
    NodeJS: 'readonly'
  },
  extends: ['plugin:react/recommended', 'plugin:@typescript-eslint/recommended', 'plugin:prettier/recommended'],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true
    },
    ecmaVersion: 12,
    sourceType: 'module'
  },
  plugins: ['react', 'prettier', 'react-hooks'],
  rules: {
    'prettier/prettier': 'off',
    'no-console': 0,
    'no-use-before-define': 0,
    'space-before-function-paren': 0,
    'react/display-name': 0,
    '@typescript-eslint/no-unused-vars': 0,
    '@typescript-eslint/no-explicit-any': 0,
    '@typescript-eslint/no-namespace': 0,
    '@typescript-eslint/prefer-namespace-keyword': 0
  }
};
