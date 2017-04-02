module.exports = {
    "parser": "babel-eslint",
    "env": {
        "browser": true,
        "es6": true,
        "node": true
    },
    "extends": ["eslint:recommended", "plugin:react/recommended"],
    "parserOptions": {
        "sourceType": "module",
        "ecmaFeatures": {
            "jsx": true,
        },
        "ecmaVersion": 6,
    },
    "plugins": ["react"]
};
