const off = 0;
const warn = 1;
const error = 2;

module.exports = {
  root: true,
  globals: {
    '$Diff': true,
    __PATH_PREFIX__: true,
  },
  env: {
    es6: true,
    node: true,
    browser: true,
  },
  parser: '@typescript-eslint/parser',
  parserOptions: {
    project: 'tsconfig.json',
    ecmaVersion: 6,
    sourceType: 'module',
    tsconfigRootDir: '.',
    ecmaFeatures: {
      jsx: true,
    },
    jsx: true,
    useJSXTextNode: true,
  },
  extends: [
    'airbnb-typescript',
    'plugin:import/typescript',
    'plugin:import/warnings',
    'plugin:import/errors',
    'plugin:@typescript-eslint/recommended',
    'plugin:react/recommended',
    'plugin:jsx-a11y/recommended',
    'eslint:recommended',
  ],
  plugins: [
    '@typescript-eslint',
    'react',
    'react-hooks',
    'jsx-a11y',
    'import',
  ],
  settings: {
    react: {
      version: 'detect',
    },
    'import/resolver': {
      typescript: {},
    }
  },
  rules: {
    //- react
    'react/jsx-filename-extension': [error, { extensions: ['.tsx'] }],
    'react/jsx-no-target-blank': error,
    'react/jsx-one-expression-per-line': error,
    'react/no-typos': error,
    'react/no-unescaped-entities': off,
    'react/react-in-jsx-scope': off,
    'react/jsx-wrap-multilines': off,
    'react/jsx-curly-brace-presence': [error, { props: 'never', children: 'ignore' }],
    //- react hooks
    'react-hooks/exhaustive-deps': error,
    'react-hooks/rules-of-hooks': error,
    //- jsx a11y
    'jsx-a11y/anchor-is-valid': error,
    'jsx-a11y/click-events-have-key-events': error,
    'jsx-a11y/label-has-associated-control': [error, { assert: 'htmlFor' }],
    'jsx-a11y/no-onchange': off,
    'jsx-a11y/mouse-events-have-key-events': off,
    //- typescript
    '@typescript-eslint/array-type': [error, 'array-simple'],
    '@typescript-eslint/camelcase': [error, { properties: 'never', ignoreDestructuring: true }],
    '@typescript-eslint/explicit-function-return-type': off,
    '@typescript-eslint/indent': off,
    '@typescript-eslint/no-explicit-any': off,
    '@typescript-eslint/no-non-null-assertion': error,
    '@typescript-eslint/no-object-literal-type-assertion': warn,
    '@typescript-eslint/no-use-before-define': error,
    '@typescript-eslint/member-ordering': [
      error,
      {
        default: [
          'public-static-field',
          'private-static-field',
          'public-instance-field',
          'private-instance-field',
          'public-constructor',
          'private-constructor',
          'public-instance-method',
          'private-instance-method',
        ],
      },
    ],
    '@typescript-eslint/no-unused-vars': [
      error,
      { ignoreRestSiblings: true },
    ],
    '@typescript-eslint/no-parameter-properties': [warn, { allows: ['readonly'] }],
    //- import
    'import/extensions': off,
    'import/newline-after-import': [error, { count: 1 }],
    'import/no-cycle': [error, { maxDepth: Infinity }],
    'import/no-deprecated': warn,
    'import/no-duplicates': error,
    'import/no-unresolved': warn,
    'import/order': [
      error,
      {
        groups: [
          'builtin',
          'external',
          'internal',
          ['parent', 'sibling', 'index'],
        ],
        'newlines-between': 'always',
      },
    ],
    'import/prefer-default-export': off,
    // eslint rules
    'comma-dangle': [
      error,
      {
        arrays: 'always-multiline',
        objects: 'always-multiline',
        imports: 'always-multiline',
        exports: 'always-multiline',
        functions: 'only-multiline',
      },
    ],
    curly: [error, 'all'],
    eqeqeq: [error, 'always', { null: 'ignore' }],
    'eol-last': [error, 'always'],
    'function-paren-newline': off,
    'getter-return': error,
    'global-require': off,
    indent: off,
    'jsx-quotes': [error, 'prefer-double'],
    'max-len': [error, { code: 150 }],
    'newline-after-var': warn,
    'newline-per-chained-call': error,
    'newline-before-return': error,
    'no-console': off,
    'no-else-return': error,
    'no-empty': [error, { allowEmptyCatch: true }],
    'no-empty-pattern': off,
    'no-multi-spaces': error,
    'no-multiple-empty-lines': [error, { max: 1, maxEOF: 1 }],
    'no-implicit-coercion': error,
    'no-shadow': off,
    'no-trailing-spaces': error,
    'no-undef': error,
    'no-underscore-dangle': off,
    'no-unused-vars': [
      error, {
        args: 'after-used',
        ignoreRestSiblings: false,
        varsIgnorePattern: '^_',
      },
    ],
    'no-var': error,
    'no-warning-comments': [
      warn,
      {
        terms: [
          'TODO',
          'FIXME',
          'XXX',
        ],
        location: 'anywhere',
      },
    ],
    'object-curly-newline': [error, { consistent: true }],
    'object-curly-spacing': [error, "always"],
    'prefer-spread': off,
    'prefer-const': error,
    quotes: [error, 'single', { allowTemplateLiterals: true }],
    semi: off,
  },
  overrides: [{
    files: ['src/html.tsx'],
    rules: {
      'react/no-danger': off,
      'react/prefer-stateless-function': off,
    },
  }, {
    files: [
      '**/__specs__/*',
      '**/__tests__/*',
      '**/*.spec.ts',
      '**/*.spec.tsx',
      '**/*.test.ts',
      '**/*.test.tsx',
    ],
    rules: {
      '@typescript-eslint/no-unused-vars': error,
      'import/namespace': off,
      'import/no-extraneous-dependencies': off,
      'max-len': off,
      'newline-after-var': warn,
      'no-multi-spaces': off,
      'no-unused-vars': error,
    }
  }],
};
