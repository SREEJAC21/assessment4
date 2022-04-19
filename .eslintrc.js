const eslint = {
    extended: ['airbnb', 'plugin:jest/recommended','prettier','plugin:prettier/recommended'],
    plugin: ['jest', 'prettier'],
    parser: 'babel-eslint',
    rules: {
        'prettier/prettier': 'error',
        'react/jsx-filename-extension':0,
        'no-console': ['warn',{allow: ['warn','error', 'info']}],
        'no-unused-vars':['error',{vars: 'all',args: 'after-used', ignoreRestsibling: true}]
    },
    env: {
        'jest/globals': true,
    },
};
module.exports = eslint;