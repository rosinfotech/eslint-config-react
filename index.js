module.exports = {
    "rules": {
        "react-hooks/exhaustive-deps": 1,
        "react-hooks/rules-of-hooks": 2,
        "react/jsx-closing-bracket-location": [
            1,
            "tag-aligned"
        ],
        "react/jsx-closing-tag-location": 1,
        "react/jsx-curly-newline": [
            1,
            {
                "multiline": "consistent",
                "singleline": "consistent"
            }
        ],
        "react/jsx-curly-spacing": [
            1,
            "always"
        ],
        "react/jsx-first-prop-new-line": [
            1,
            "multiline"
        ],
        "react/jsx-indent-props": [
            1,
            "first"
        ],
        "react/jsx-max-props-per-line": [
            1,
            {
                "maximum": 1,
                "when": "multiline"
            }
        ],
        "react/jsx-sort-default-props": 1,
        "react/jsx-sort-props": [
            1,
            {
                "callbacksLast": true,
                "ignoreCase": false,
                "noSortAlphabetically": false,
                "reservedFirst": true,
                "shorthandFirst": false,
                "shorthandLast": true
            }
        ],
        "react/jsx-tag-spacing": [
            1,
            {
                "afterOpening": "never",
                "beforeClosing": "allow",
                "beforeSelfClosing": "always",
                "closingSlash": "never"
            }
        ],
        "react/jsx-uses-react": 1,
        "react/jsx-uses-vars": 1,
        "react/jsx-wrap-multilines": [
            1,
            {
                "arrow": "parens-new-line",
                "assignment": "parens-new-line",
                "condition": "parens-new-line",
                "declaration": "parens-new-line",
                "logical": "parens-new-line",
                "prop": "parens-new-line",
                "return": "parens-new-line"
            }
        ],
        "react/prop-types": [
            1,
            {
                "skipUndeclared": true
            }
        ]
    }
};
