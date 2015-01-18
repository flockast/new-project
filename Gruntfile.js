module.exports = function(grunt) {

	// Основыне конфиги плагинов
	grunt.initConfig({
		concat: {
			dist: {
				src: ['js/app/libs/*.js', 'js/app/*.js'],
				dest: 'js/app.js'
			}
		},
		uglify: {
			dist: {
				options: {
					banner: '/* Created by webvlassov | 2015 */\n'
				},
				files: {
					'js/app.min.js': ['js/app.js']
				}
			}
		},
		watch: {
			css: {
				files: 'scss/**/*.scss',
				tasks: ['compile-css'],
				options: {
					livereload: true,
				},
			},
			scripts: {
				files: ['js/**/*.js'],
				tasks: ['compile-js'],
				options: {
					spawn: false,
				},
			},
		},
		sass: {
			dist: {
				files: [{
					expand: true,
					cwd: 'scss/',
					src: ['*.scss'],
					dest: 'css/',
					ext: '.css'
				}]
			}
		},
		cssmin: {
			target: {
				files: [{
					expand: true,
					cwd: 'css/',
					src: ['*.css', '!*.min.css'],
					dest: 'css/',
					ext: '.min.css'
				}]
			}
		},
		jade: {

		}
	});

	// Подгрузка необходимых плагинов
	grunt.loadNpmTasks('grunt-contrib-uglify');
	grunt.loadNpmTasks('grunt-contrib-concat');
	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.loadNpmTasks('grunt-contrib-sass');
	grunt.loadNpmTasks('grunt-contrib-cssmin');

	// Регистрация команд гранта
	grunt.registerTask('compile-js', ['concat', 'uglify']);
	grunt.registerTask('watch-js', ['compile-js', 'watch']);

	grunt.registerTask('compile-css', ['sass', 'cssmin']);
	grunt.registerTask('watch-css', ['compile-css', 'watch']);
}