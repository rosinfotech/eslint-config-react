module.exports = {
    "rules": {
        "react-hooks/exhaustive-deps": 1,
        "react-hooks/rules-of-hooks": 2,
        "react/jsx-tag-spacing": [
            1,
            {
                "closingSlash": "never",
                "beforeSelfClosing": "always",
                "afterOpening": "never",
                "beforeClosing": "allow"
            }
        ],
        "react/jsx-curly-newline": [
            1,
            {
                "multiline": "consistent",
                "singleline": "consistent"
            }
        ],
        "react/jsx-wrap-multilines": [
            1,
            {
                "declaration": "parens-new-line",
                "assignment": "parens-new-line",
                "return": "parens-new-line",
                "arrow": "parens-new-line",
                "condition": "parens-new-line",
                "logical": "parens-new-line",
                "prop": "parens-new-line"
            }
        ],
        "react/jsx-max-props-per-line": [
            1,
            {
                "maximum": 1,
                "when": "multiline"
            }
        ],
        "react/jsx-first-prop-new-line": [
            1,
            "multiline"
        ],
        "react/jsx-indent-props": [
            1,
            "first"
        ],
        "react/jsx-sort-default-props": 1,
        "react/jsx-sort-props": [
            1,
            {
                "callbacksLast": true,
                "shorthandLast": true,
                "shorthandFirst": false,
                "ignoreCase": false,
                "noSortAlphabetically": false,
                "reservedFirst": true
            }
        ],
        "react/jsx-closing-bracket-location": [
            1,
            "tag-aligned"
        ],
        "react/jsx-closing-tag-location": 1,
        "react/jsx-curly-spacing": [
            1,
            {
                "when": "always",
                "children": true
            }
        ]
    }    
}