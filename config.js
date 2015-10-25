System.config({
    defaultJSExtensions: true,
    paths: {
        "*": "*.js",
        "system-npm/*": "node_modules/system-npm/*.js"
    },
    map: {
        "npm": "system-npm/npm",
        "npm-extension": "system-npm/npm-extension"
    }
});
