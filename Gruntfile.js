module.exports = function(grunt) {

	// Основыне конфиги плагинов
	grunt.initConfig({
		concat: {
			dist: {
				src: ['assets/js/libs/*.js', '!assets/js/*.concat.js'],
				dest: 'assets/js/app.concat.js'
			}
		},
		uglify: {
			dist: {
				options: {
					banner: '/* Created by webvlassov | 2015 */\n'
				},
				files: {
					'assets/js/app.min.js': ['assets/js/app.concat.js']
				}
			}
		},
		watch: {
			css: {
				files: 'assets/scss/**/*.scss',
				tasks: ['sass'],
				options: {
					livereload: true,
				},
			}
		},
		sass: {
			dist: {
				files: [{
					expand: true,
					cwd: 'assets/scss/',
					src: ['*.scss'],
					dest: 'assets/css',
					ext: '.css'
				}]
			}
		},
		cssmin: {
			target: {
				files: [{
					expand: true,
					cwd: 'assets/css/',
					src: ['*.css', '!*.min.css'],
					dest: 'css/',
					ext: '.min.css'
				}]
			}
		}
	});

	// Подгрузка необходимых плагинов
	grunt.loadNpmTasks('grunt-contrib-uglify');
	grunt.loadNpmTasks('grunt-contrib-concat');
	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.loadNpmTasks('grunt-contrib-sass');
	grunt.loadNpmTasks('grunt-contrib-cssmin');

	// Регистрация команд гранта

	grunt.registerTask('endjs', ['concat', 'uglify']);
	
}