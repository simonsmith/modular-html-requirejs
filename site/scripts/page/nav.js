// Wait for main to load before requiring the modules for the nav HTML component
require(['main'], function() {
    require(['jquery', 'modules/Navigation'], function($, Navigation) {
        new Navigation($('#nav'));
    });
});
