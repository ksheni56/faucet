module.exports = {
  parser: 'babel-eslint',
  parserOptions: {
    ecmaVersion: 7,
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true,
      experimentalObjectRestSpread: true,
    },
  },
  env: {
    node: true,
    browser: true,
    jest: true,
  },
  extends: 'airbnb',
  rules: {
    'no-restricted-syntax': 0,
    'global-require': 0,
    'no-param-reassign': 0,
    'consistent-return': 0,
    'arrow-parens': ['error', 'as-needed'],
    'camelcase': 0,
    'comma-dangle': ['ignore', {
      'arrays': 'ignore',
      'objects': 'ignore',
      'imports': 'ignore',
      'exports': 'ignore',
      'functions': 'ignore'
    }],
    'import/no-extraneous-dependencies': 0,
    'indent': ['error', 4, { 'SwitchCase': 1 }],
    'no-mixed-operators': 0,
    'react/jsx-filename-extension': [1, { extensions: ['.js'] }],
    'react/jsx-indent': ['error', 4],
    'react/jsx-indent-props': ['error', 4]
  },
};
