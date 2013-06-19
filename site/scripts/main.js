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


// Main libs - Libraries and modules that will be needed on all pages of the site
define(['jquery', 'handlebars', 'domready'], function() {});


/*
If you'd like to load some core modules that interact with the page then you can
use an alternative style

define(function(require) {
    var $          = require('jquery');
    var Handlebars = require('handlebars');
    var domReady   = require('domready');

    var Navigation = require('modules/navigation');

    return function() {
        domReady(function() {
            new Navigation($('#container'));
        });
    }
});

// Create main.js
require(['core'], function(core) {
    core();
});

// index.html uses main isntead of core
require(['main']);
*/
