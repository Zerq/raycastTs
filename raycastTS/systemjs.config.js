(function (global) {
    System.config({
        paths: {
            'npm:': 'node_modules/'
        },
        map: {
            "core-js":"node_modules/core-js",
            app: 'app',
        },
        map: {
            test: 'test',
        },
        packages: {
            app: {
                main: './main.js',
                defaultExtension: 'js'
            },
            "core-js": { defaultExtension: "js" },
            test: {
                main: './main.js',
                defaultExtension: 'js'
            },
            rxjs: {
                defaultExtension: 'js'
            }
        }
    });
})(this);
