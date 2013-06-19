({
    appDir: 'site',
    baseUrl: 'scripts',
    mainConfigFile: 'site/scripts/main.js',
    dir: 'site-dist',
    removeCombined: true,
    optimize: 'uglify2',
    optimizeCSS: true,

    modules: [
        {
            name: 'main'
        },
        {
            name: 'page/carousel',
            include: ['modules/Carousel'],
            exclude: ['main']
        },
        {
            name: 'page/nav',
            include: ['modules/Navigation'],
            exclude: ['main']
        }
    ],
})
