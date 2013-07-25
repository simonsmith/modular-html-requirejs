({
    appDir: 'site',
    baseUrl: 'scripts',
    mainConfigFile: 'site/scripts/main.js',
    dir: 'site-dist',
    removeCombined: true,
    findNestedDependencies: true,
    optimize: 'uglify2',
    optimizeCSS: true,

    modules: [
        {
            name: 'main'
        },
        {
            name: 'page/carousel',
            exclude: ['main']
        },
        {
            name: 'page/nav',
            exclude: ['main']
        }
    ],
})
