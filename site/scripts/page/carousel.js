require(['core'], function() {
    require(['jquery', 'modules/Carousel'], function($, Carousel) {
        new Carousel($('.carousel'));
    });
});
