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

    // Paths
    xh: {
      src: 'src',
      dist: 'dist'
    },

    // HTML Includes
    includereplace: {
      dist: {
        files: [{
          expand: true,
          cwd: '<%= xh.src %>',
          src: ['*.html'],
          dest: '<%= xh.dist %>',
          ext: '.html'
        }]
      }
    },

    useminPrepare: {
      html: '<%= xh.dist %>/*.html',
      options: {
        dest: '<%= xh.dist %>',
        root: '<%= xh.src %>',
        flow: {
          steps: {'js': ['concat'] },
          post: {}
        }
      }
    },

    usemin: {
      html: '<%= xh.dist %>/*.html'
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
        src: '<%= xh.dist %>/*.html'
      },

      js: {
        src: '<%= xh.dist %>/js/main.js'
      }
    },

    validation: {
      src: ['<%= xh.dist %>/*.html'],
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
          '<%= xh.dist %>/css/main.css': '<%= xh.src %>/scss/main.scss'
        }
      }
    },

    cssbeautifier: {
      files: ['<%= xh.dist %>/css/*.css'],
    },

    // JS
    copy: {
      files: {
        cwd: '<%= xh.src %>/js/',
        src: 'main.js',
        dest: '<%= xh.dist %>/js/',
        expand: true
      }
    },

    jshint: {
      options: {
        jshintrc: true,
        force: true
      },
      dist: {
        src: ['<%= xh.dist %>/js/main.js'],
      }
    },

    // Replacements in main.css and main.js
    replace: {
      css: {
        options: {
          patterns: [
            {
              match: 'timestamp',
              replacement: '<%= grunt.template.today() %>'
            },
            // Make CSS comments nicer
            {
              match: /=== \*\//g,
              replacement: '=== */\n'
            }
          ]
        },
        files: [{
          expand: true,
          flatten: true,
          src: ['<%= xh.dist %>/css/main.css'],
          dest: '<%= xh.dist %>/css/'
        }]
      },

      js: {
        options: {
          patterns: [
            {
              match: 'timestamp',
              replacement: '<%= grunt.template.today() %>'
            }
          ]
        },
        files: [{
          expand: true,
          flatten: true,
          src: ['<%= xh.dist %>/js/main.js'],
          dest: '<%= xh.dist %>/js/'
        }]
      }
    },

    // Watch
    watch: {
      scss: {
        files: ['<%= xh.src %>/scss/*.scss'],
        tasks: ['sass', 'cssbeautifier', 'replace:css'],
        options: {
          livereload: true
        }
      },

      html: {
        files: ['<%= xh.src %>/*.html', '<%= xh.src %>/includes/*.html'],
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
        files: '<%= xh.src %>/js/*.js',
        tasks: ['copy', 'jsbeautifier:js', 'replace:js', 'jshint'],
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

    // Replacements
    'replace',

    // Checks
    'validation',
    'jshint',

  ]);

};
