// Wait for core to load before requiring the modules for the nav HTML component
require(['core'], function() {
    require(['jquery', 'modules/Navigation'], function($, Navigation) {
        new Navigation($('#nav'));
    });
});
