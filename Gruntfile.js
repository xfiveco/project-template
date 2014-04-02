module.exports = function(grunt) {

  require('time-grunt')(grunt);

  require('jit-grunt')(grunt,  {
    includereplace: 'grunt-include-replace',
    useminPrepare: 'grunt-usemin',
    validation: 'grunt-html-validation'
  });

  // Project configuration.
  grunt.initConfig({

    pkg: grunt.file.readJSON('package.json'),

    // HTML Includes
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

    useminPrepare: {
      html: 'dist/*.html',
      options: {
        dest: 'dist',
        root: 'src',
        flow: {
          steps: {'js': ['concat'] },
          post: {}
        }
      }
    },

    usemin: {
      html: 'dist/*.html'
    },

    clean: {
      src: [".tmp"]
    },

    jsbeautifier: {
      options : {
        html: {
          indentSize: 2
        },
        js: {
          indentSize: 2
        }
      },

      html: {
        src: 'dist/*.html',
      },

      js: {
        src: 'dist/js/main.js'
      }
    },

    validation: {
      src: ['dist/*.html'],
      options: {
        reset: true
      }
    },

    // CSS
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

    cssbeautifier: {
      files: ['dist/css/*.css']
    },

    // JS
    copy: {
      files: {
        cwd: 'src/js/',
        src: 'main.js',
        dest: 'dist/js/',
        expand: true
      }
    },

    jshint: {
      options: {
        jshintrc: true,
        force: true
      },
      dist: {
        src: ['dist/js/main.js'],
      }
    },

    // Watch
    watch: {
      sass: {
        files: ['src/scss/*.scss'],
        tasks: ['sass', 'cssbeautifier'],
        options: {
          livereload: true
        }
      },

      html: {
        files: ['src/*.html', 'src/includes/*.html'],
        tasks: [
          'includereplace',
          'useminPrepare',
          'concat',
          'usemin',
          'jsbeautifier:html',
          'clean'
        ],
        options: {
          livereload: true
        }
      },

      js: {
        files: 'src/js/*.js',
        tasks: ['copy', 'jsbeautifier:js', 'jshint'],
        options: {
          livereload: true
        }
      }
    }

  });

  grunt.registerTask('default', [
    // HTML
    'includereplace',
    'useminPrepare',
    'concat',
    'usemin',
    'jsbeautifier:html',
    'clean',

    // CSS
    'sass',
    'cssbeautifier',

    // JS
    'copy',
    'jsbeautifier:js',

    // Checks
    'validation',
    'jshint'
  ]);

};
