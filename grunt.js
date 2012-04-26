/*global module:false*/
module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    pkg: '<json:package.json>',
    meta: {
      banner: '/*! <%= pkg.title || pkg.name %> - v<%= pkg.version %>'
    },
    min: {
      dist: {
        src: ['cookieparser.js'],
        dest: '<%= pkg.name %>.min.js'
      }
    }
  });

  // Default task.
  grunt.registerTask('default', 'min');

};
