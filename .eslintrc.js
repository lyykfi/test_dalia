module.exports =  {
  parser:  '@typescript-eslint/parser',
  extends:  [
    "eslint:recommended",
    "plugin:@typescript-eslint/eslint-recommended",
    'plugin:@typescript-eslint/recommended',
    "plugin:react/recommended"
  ],
 parserOptions:  {
    ecmaVersion:  2018,
    sourceType:  'module', 
  },
  rules: {
    "@typescript-eslint/no-explicit-any": 0,
    "react/prop-types": [2, { ignore: ['children'] }],
    "@typescript-eslint/interface-name-prefix": 0,
    "@typescript-eslint/explicit-function-return-type": 0,
    "react/prop-types": 0
  },
};