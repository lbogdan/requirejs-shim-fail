/*
 * This is the common files, dependencies and modules used throughout the whole app
 * for example, the login module. 
*/
requirejs.config({
    paths: {
        jquery: 'vendor/jquery/jquery',
    },
    // disable requirejs timeout
    waitSeconds: 0,
    // shims are to make sure jQuery plugins that are not made to work with requireJS gets loaded properly.
    shim: {
        'vendor/magnific-popup/magnific-popup': ['jquery'],
        'vendor/magnific-popup/magnific-popup-wrapped': ['jquery'],
    }
});

require([
    // modules used in every page goes here. For this POC, we're going to have a dummy module.
    'modules/dummy'
], function () {});
