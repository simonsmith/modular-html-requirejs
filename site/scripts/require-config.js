require.config({
    baseUrl: 'scripts',
    paths: {
        jquery:     'components/jquery/jquery',
        domready:   'components/requirejs-domready/domReady',
        handlebars: 'components/handlebars/handlebars'
    },
    shim: {
        handlebars: {
            exports: 'Handlebars'
        },
        'jquery.pluginA.js': ['jquery'],
        'jquery.pluginB.js': ['jquery']
    },
    urlArgs: "bust=" +  (new Date()).getTime()
});
