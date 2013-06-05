define(function(require) {
    // Ensure jQuery is required as it will likely be used in the carousel
    var $       = require('jquery');

    // jQuery plugins just augment the $.prototype and therefore
    // don't need to return anything. So these don't need to be assigned
    // to a variable
    require('plugins/jquery.pluginA');
    require('plugins/jquery.pluginB');

    // Define an object and then return it for instantiation later
    var Carousel = function(element) {
        element.append('Carousel module loaded!');
    };

    Carousel.prototype = {

    };

    return Carousel;
});
