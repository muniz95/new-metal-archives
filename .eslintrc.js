module.exports = {
  root: true,
  env: {
    node: true
  },
  extends: [
    'plugin:vue/essential',
    '@vue/standard'
  ],
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    "vue/multi-word-component-names": ["error", {
      "ignores": [
        'Rules', 'Reviews', 'Reports', 'login', 'Home', 'Help', 'faq', 'fai',
        'Unassigned', 'Assigned', 'Resolved', 'News', 'Ranks', 'Membership',
        'Database', 'Question'
      ]
    }],
  },
  parserOptions: {
    parser: 'babel-eslint'
  },
  overrides: [
    {
      files: [
        '**/__tests__/*.{j,t}s?(x)'
      ],
      env: {
        mocha: true
      }
    }
  ]
}
