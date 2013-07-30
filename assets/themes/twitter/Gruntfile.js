module.exports = function(grunt) {
    // ����
    grunt.initConfig({
        pkg : grunt.file.readJSON('package.json'),

        concat : {
            index : {
                src: [
                    'static/js/modernizr.js',
                    'static/js/forsigner.js'
                ],
                dest: 'dest/fs.js'
            },
            preview : {
                src: [
                    'static/css/bootstrap-2.3.2.css',
                    'static/css/style.css'
                ],
                dest: 'dest/fs.css'
            }
        },

        uglify : {
            options : {
                banner : '/*! <%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd") %> */\n'
            },
            foo: {
                src: 'dest/fs.js',
                dest: 'dest/fs.min.js'
            }
        },
        cssmin: {
            options : {
                banner : '/*! <%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd") %> */\n'
            },
            preview : {
                src: 'dest/fs.css',
                dest: 'dest/fs.min.css'
            }
        }

    });
    // ����concat��uglify��watch���
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-cssmin');
	//grunt.loadNpmTasks('grunt-css');
    // ע������
    grunt.registerTask('default', ['concat', 'uglify', 'cssmin']);
}; 
