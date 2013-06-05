({
    appDir: 'site',
    baseUrl: 'scripts',
    mainConfigFile: 'site/scripts/require-config.js',
    dir: 'site-dist',
    removeCombined: true,
    optimize: 'uglify',
    optimizeCSS: true,

    modules: [
        {
            name: 'core'
        },
        {
            name: 'modules/carousel',
            exclude: ['jquery']
        },
        {
            name: 'modules/navigation',
            exclude: ['jquery']
        }
    ],
})
