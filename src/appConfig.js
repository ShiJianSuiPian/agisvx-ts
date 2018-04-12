module.exports.entryPoints = {
    //
    "typescript/main": './src/typescript/main.ts',

    "typescript/en": "./src/typescript/en.ts",

    "es6/main": "./src/es6/main.js",
    "typescript/map": "./src/typescript/map.ts",
    "typescript/test": "./src/typescript/test.ts"
};

module.exports.mainPages = [
    {
        template: "./src/views/index.html",
        filename: "gisindex.html",
        title: "tests,hi",
        chunks: ["typescript/main"]
    },
    {
        template: "./src/views/index.html",
        filename: "qshindex.html",
        title: "testshuohuohouo.i",
        chunks: ["typescript/en"]
    },
    {
        template: "./src/views/index.html",
        filename: "es6index.html",
        title: "buovuoo.i",
        chunks: ["es6/main"]
    }
];