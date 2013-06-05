({
    appDir: 'site',
    baseUrl: 'scripts',
    mainConfigFile: 'site/scripts/require-config.js',
    dir: 'site-dist',
    removeCombined: true,
    optimize: 'uglify2',
    optimizeCSS: true,

    modules: [
        {
            name: 'core'
        },
        {
            name: 'page/carousel',
            include: ['modules/Carousel'],
            exclude: ['core']
        },
        {
            name: 'page/nav',
            include: ['modules/Navigation'],
            exclude: ['core']
        }
    ],
})
