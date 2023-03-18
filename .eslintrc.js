// const react = require('eslint-plugin-react');
// module.exports = {
//   // files: ['**/*.{js,jsx,mjs,cjs,ts,tsx}'],
//   // plugins: {
//   //   react,
//   // },
//   extends: ['universe', 'plugin:react/recommended'],
// };

const react = require('eslint-plugin-react');
const globals = require('globals');

module.exports = [
  {
    files: ['**/*.{js,jsx,mjs,cjs,ts,tsx}'],
    plugins: {
      react,
    },
    extends: ['eslint:recommended', , 'plugin:react/recommended', 'prettier'],
    languageOptions: {
      parserOptions: {
        ecmaFeatures: {
          jsx: true,
        },
      },
      globals: {
        ...globals.browser,
      },
    },
    rules: {
      // ... any rules you want
      'react/jsx-uses-react': 'error',
      'react/jsx-uses-vars': 'error',
    },
    // ... others are omitted for brevity
  },
];
