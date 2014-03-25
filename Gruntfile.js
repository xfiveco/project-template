module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({

    pkg: grunt.file.readJSON('package.json'),

    includereplace: {
      dist: {
        files: [{
          expand: true,
          cwd: 'src',
          src: ['*.html'],
          dest: 'dist',
          ext: '.html'
        }]
      }
    },

    sass: {
      dist: {
        options: {
          style: 'expanded',
          loadPath: 'src/bower_components/'
        },
        files: {
          'dist/css/main.css': 'src/scss/main.scss'
        }
      }
    },

    requirejs: {
      dist: {
        options: {
          name: 'main',
          baseUrl: 'src/js/',
          mainConfigFile: 'src/js/main.js',
          out: 'dist/js/main.js'
        }
      }
    },

    useminPrepare: {
      html: 'dist/*.html',
      options: {
        dest: 'dist',
        root: 'src'
      }
    },

    usemin: {
      html: 'dist/*.html'
    },

    copy: {
      files: {
        cwd: 'src/js/',
        src: 'main.js',
        dest: 'dist/js/',
        expand: true
      }
    },

    clean: {
      src: [".tmp"]
    },

    jsbeautifier: {
      dist: {
        src: ['dist/*.html', 'dist/js/main.js'],
        options : {
          html: {
            indentSize: 2
          },
          js: {
            indentSize: 2
          }
        }
      }
    },

    cssbeautifier: {
      files: ['dist/css/*.css']
    },

    validation: {
      src: ['dist/*.html'],
      options: {
        reset: true
      }
    },

    jshint: {
      src: ['dist/js/main.js'],
      options: {
        jshintrc: true
      }
    },

    watch: {
      sass: {
        files: 'src/scss/*.scss',
        tasks: 'sass',
        options: {
          livereload: true
        }
      },

      includereplace: {
        files: 'src/*.html',
        tasks: 'includereplace',
        options: {
          livereload: true
        }
      }
    }

  });

  grunt.loadNpmTasks('grunt-include-replace');
  grunt.loadNpmTasks('grunt-contrib-sass');
  grunt.loadNpmTasks('grunt-usemin');
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.loadNpmTasks('grunt-jsbeautifier');
  grunt.loadNpmTasks('grunt-cssbeautifier');
  grunt.loadNpmTasks('grunt-html-validation');
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-contrib-watch');

  grunt.registerTask('default', [
    'includereplace',
    'sass',
    'useminPrepare',
    'concat',
    'uglify',
    'usemin',
    'copy',
    'jsbeautifier',
    'cssbeautifier',
    'validation',
    'jshint',
    'clean'
  ]);
};
