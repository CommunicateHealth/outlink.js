
module.exports = function(grunt) {

  'use strict';

  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),

    // JSHint - Error check javascript
    jshint: {
      dist: {
        options: {
          curly: true,
          eqeqeq: true,
          eqnull: true,
          browser: true
        },
        files: {
          src: ['Gruntfile.js', 'outlink.js']
        }
      }
    },

    // Connect - start local webserver
    connect: {
      server: {
        options: {
          port: 4000,
          base: '.',
          hostname: '127.0.0.1',
          keepalive: true
        }
      }
    },

    // Update - find new versions of Grunt dependencies
    devUpdate: {
      main: {
        options: {
          updateType: 'prompt',
          reportUpdated: false,
          semver: false,
          packages: {
            devDependencies: true,
            dependencies: false
          },
          packageJson: null
        }
      }
    }

  });

  require('load-grunt-tasks')(grunt);
  require('time-grunt')(grunt);

  // grunt - runs js, then serve tasks (see below)
  grunt.registerTask('default', ['connect']);

  // grunt js - Error checks, concatenation, minify JS
  grunt.registerTask('js', ['jshint']);

  // grunt update - Find new versions of Grunt libraries
  grunt.registerTask('update', ['devUpdate']);

};
