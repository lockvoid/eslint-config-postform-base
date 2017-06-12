module.exports = {
  parser: 'babel-eslint',

  plugins: [
    'import',
  ],

  rules: {
    'eol-last': 'error',
    'global-require': 'off',

    'no-constant-condition': ['error', {
      checkLoops: false,
    }],

    'max-len': ['error', 140, 2, {
      ignoreStrings: true,
      ignoreTemplateLiterals: true,
      ignoreTrailingComments: true,
      ignoreUrls: true,
    }],

    'no-unused-vars': ['error', {
      vars: 'all',
      varsIgnorePattern: '_([0-9]+)?$',
      args: 'after-used',
      argsIgnorePattern: '_([0-9]+)?$',
    }],
  },
};
