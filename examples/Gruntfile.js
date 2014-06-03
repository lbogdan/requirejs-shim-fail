module.exports = function(grunt) {

    /*
    |--------------------------------------------------------------------------
    | Config
    |--------------------------------------------------------------------------
    */
    var globalConfig = {
        src: 'source',
        dest: 'build',
    };

    grunt.initConfig({
        
        /*
        |--------------------------------------------------------------------------
        | Copy stuff
        |--------------------------------------------------------------------------
        */
        copy: {
            html: {
                files: [{
                    expand: true,
                    cwd: '<%= globalConfig.src %>',
                    src: ['**/*.html'],
                    dest: '<%= globalConfig.dest %>'
                }]
            },
            js: {
                files: [{
                    expand: true,
                    cwd: '<%= globalConfig.src %>/js',
                    src: ['**/*.js'],
                    dest: '<%= globalConfig.dest %>/js'
                }]
            },
        },

        /*
        |--------------------------------------------------------------------------
        | RequireJS Optimizer
        |--------------------------------------------------------------------------
        | When you add a new page with a new javascript, add it in modules!
        | Please respect the other devs and keep things in alphabetical order!!
        */
        requirejs: {
            compile: {
                options: {
                    appDir: '<%= globalConfig.src %>/js',
                    baseUrl: './',
                    dir: '<%= globalConfig.dest %>/js',
                    mainConfigFile: '<%= globalConfig.dest %>/js/common.js',
                    skipDirOptimize: true,
                    removeCombined: true,
                    preserveLicenseComments: false,
                    modules: [

                        // All the common fies should go in this bracket.
                        // It's most likely jquery plugins that gets used through all 
                        // the site, like modals and dropdowns. 
                        {
                            name: 'common',
                            include: [
                                'jquery',
                                'modules/dummy',
                            ]
                        }, 
                        // Specific page goes here.
                        {
                            name: 'shim-only',
                            include: ['app/shim-only'],
                            exclude: ['common']
                        },
                        {
                            name: 'wrapped',
                            include: ['app/wrapped'],
                            exclude: ['common']
                        }
                    ]
                }
            }
        },

        globalConfig: globalConfig,
    });
    
    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.loadNpmTasks('grunt-contrib-requirejs');

    grunt.registerTask('build', ['copy', 'requirejs']);
    grunt.registerTask('default', ['build']);

};
