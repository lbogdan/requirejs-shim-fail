/*
 * This acts like a routing file. All it does is simply make it require the common config file
 * and loads the proper app script.
*/
require(['common'], function () {
    require(['app/wrapped']);
});