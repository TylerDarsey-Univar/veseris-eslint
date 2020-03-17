module.exports = {
    "env": {
        "browser": true,
        "es6": true
    },
    "extends": "eslint:recommended",
    "globals": {
        "Atomics": "readonly",
        "SharedArrayBuffer": "readonly"
    },
    "parserOptions": {
        "ecmaVersion": 2018,
        "sourceType": "module"
    },
    "plugins": [
        "eslint-plugin-html",
    ],
    "rules": {

        "max-len": [
            "warn",
            {
                "code": 80,
                "tabWidth": 4,
                "ignoreUrls": true
            }
        ],
        "semi": [
            "error"
        ],
        "id-length": [
            "error",
            { 
                "min": 2,
                "exceptions": ["$", "i"]
            }
        ],
        "camelcase": ["warn"],
        "new-cap": ["warn"],
        "no-undef": ["off"],
        "linebreak-style": [
            "error",
            "windows"
        ],

        "indent": [
            "error",
            4
        ],
        "space-infix-ops": ["warn"],
        "block-spacing": ["warn"],
        "comma-spacing": ["warn"],
        "computed-property-spacing": ["warn"],
        "func-call-spacing": ["warn"],
        "key-spacing": ["warn"],
        "no-trailing-spaces": ["warn"],
        "space-before-blocks": [
            "error",
            "always"
        ],
        "keyword-spacing": [
            "error",
            {
                "before": true,
                "after": true
            }
        ],
        "key-spacing": [
            "error",
            {
                "beforeColon": false,
                "afterColon": true
            }
        ],
        "quotes": [
            "warn",
            "double"
        ],
        "semi": [
            "error",
            "always"
        ],

        "function-paren-newline": [
            "error",
            "multiline"
        ],
        "eqeqeq": [
            "warn"
        ],
        
        "comma-style": ["warn"],
        "comma-dangle": ["warn"],

        "no-array-constructor": ["warn"],
        //"func-style": ["warn"],
        "no-loop-func": ["warn"],
        "no-new-func": ["warn"],
        "no-param-reassign": ["warn"],
        "dot-notation": ["warn"],
        "no-restricted-properties": ["warn"],

        "one-var": ["warn", "never"],
        "no-multi-assign": ["warn"],
        "operator-linebreak": ["warn", "before"],
        "no-unused-vars": ["warn"],
        "no-case-declarations": ["warn"],
        "no-mixed-operators": ["warn"],
        "no-unneeded-ternary": ["warn"],
        "nonblock-statement-body-position": ["warn"],
        "brace-style": ["warn"],
        "no-else-return": ["warn"],
        "spaced-comment": ["warn"],
        "newline-per-chained-call": [
            "warn", {
                "ignoreChainWithDepth": 3
            }
        ],
        "no-whitespace-before-property": ["warn"],
        "padded-blocks": ["warn", "never"],
        "no-multiple-empty-lines": ["warn"],
        "space-in-parens": ["warn"],
        "array-bracket-spacing": ["warn"],
        "object-curly-spacing": ["warn"],
        "radix": ["warn"],
        "no-new-wrappers": ["warn"]
    }
};