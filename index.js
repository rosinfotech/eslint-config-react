import reactPlugin from 'eslint-plugin-react';
import reactHooksPlugin from 'eslint-plugin-react-hooks';
import reactRefreshPlugin from 'eslint-plugin-react-refresh';
import sortReactDependencyArraysPlugin from 'eslint-plugin-sort-react-dependency-arrays';


export default {
    extends: [reactPlugin.configs.flat.recommended],

    plugins: {
        'react'                       : reactPlugin,
        'react-hooks'                 : reactHooksPlugin,
        'react-refresh'               : reactRefreshPlugin,
        'sort-react-dependency-arrays': sortReactDependencyArraysPlugin,
    },

    disabledRules: {
        'react/jsx-sort-props'    : 'off',
        'react/react-in-jsx-scope': 'off',
    },

    rules: {
        ...reactHooksPlugin.configs.recommended.rules,

        'react-refresh/only-export-components': ['warn', { allowConstantExport: true }],

        'sort-react-dependency-arrays/sort': 'error',

        'react/jsx-closing-tag-location': 'warn',
        'react/jsx-curly-newline'       : [
            'warn',
            {
                multiline : 'consistent',
                singleline: 'consistent',
            },
        ],
        'react/jsx-max-props-per-line': [
            'warn',
            {
                maximum: 1,
                when   : 'multiline',
            },
        ],
        'react/jsx-tag-spacing': [
            'warn',
            {
                afterOpening     : 'never',
                beforeClosing    : 'allow',
                beforeSelfClosing: 'always',
                closingSlash     : 'never',
            },
        ],
        'react/jsx-uses-react'     : 'warn',
        'react/jsx-uses-vars'      : 'warn',
        'react/jsx-wrap-multilines': [
            'warn',
            {
                arrow      : 'parens-new-line',
                assignment : 'parens-new-line',
                condition  : 'parens-new-line',
                declaration: 'parens-new-line',
                logical    : 'parens-new-line',
                prop       : 'parens-new-line',
                return     : 'parens-new-line',
            },
        ],
    },

    settings: {
        react: {
            version: 'detect',
        },
    },
};
