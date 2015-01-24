module.exports = function(grunt) {

    grunt.initConfig({

        jasmine: {
            unit: {

                options: {
                    specs: 'tests/jasmine/spec/*.js',
                    template: 'tests/jasmine/SpecRunner.tpl',
                }
            }


        }
    });

    grunt.loadNpmTasks('grunt-contrib-jasmine');
};