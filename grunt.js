module.exports = function(grunt) {
	grunt.initConfig({
		pkg: '<json:package.json>',
		min: {
			dist: {
				src: ['cookieparser.js'],
				dest: '<%= pkg.name %>.min.js'
			}
		}
	});
	grunt.registerTask('default', 'min');
};