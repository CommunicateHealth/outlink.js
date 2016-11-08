
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

  // grunt - runs jshint
  grunt.registerTask('default', ['jshint']);

  // grunt update - Find new versions of Grunt libraries
  grunt.registerTask('update', ['devUpdate']);

};
