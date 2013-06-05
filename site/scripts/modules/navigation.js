define(function(require) {
    // Ensure jQuery is required as it will likely be used in the navigation
    var $ = require('jquery');

    // Define an object and then return it for instantiation later
    var Navigation = function(element) {
        element.append('Nav module loaded!');
    };

    Navigation.prototype = {

    };

    return Navigation;
});
