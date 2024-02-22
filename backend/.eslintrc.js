module.exports = {
    "env": {
        "browser": true,
        "es2021": true,
        "node": true, // Set the node environment to true
        "es6": true   // Set the ECMAScript 6 environment to true
    },
    "extends": "eslint:recommended",
    "overrides": [
        {
            "env": {
                "node": true
            },
            "files": [
                ".eslintrc.{js,cjs}"
            ],
            "parserOptions": {
                "sourceType": "script"
            }
        }
    ],
    "parserOptions": {
        "ecmaVersion": "latest",
        "sourceType": "module"
    },
    "rules": {
        "node/no-missing-require": "off", 
    }
}
