module.exports = {
    "env": {
        "browser": true,
        "es2021": true,
        "es6": true,
        "node": true
    },
    "extends": [
        "eslint:recommended",
        "plugin:react/recommended"
    ],
    "overrides": [
    ],
    "parserOptions": {
        "ecmaVersion": "latest",
        "sourceType": "module"
    },
    "plugins": [
        "react"
    ],
    "rules": {
        "semi": "off",
        "react/prop-types": 0,
        "react/display-name": 0,
    }
}
