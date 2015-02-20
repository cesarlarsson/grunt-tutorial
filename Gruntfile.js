module.exports = function(grunt){

	// grunt.registerTask('speak',function(){

	// 	console.log("i am speaking");
	// });

	// grunt.registerTask('fuck',function(){

	// 	console.log("i am speaking");
	// });

	// 	grunt.registerTask('default',['fuck','speak']);

		grunt.initConfig({
			concat: {
				options: {
				  separator: ';',
				},
				js:{
			      src: ['js/add.js', 'js/1.js'],
			      dest: 'dist/js/built.js',
					},
				css:{
			      src: ['css/1.css', 'css/2.css'],
			      dest: 'dist/css/super.css',
					},
			},
			uglify: {
				options: {
					mangle: false
				},
				my_target: {
					files: {
						'dist/js/compress/built.js': ['dist/js/built.js']
					}
				}
			},
			watch:{
				js:{
					files:['js/**/*.js'],
					tasks:['concat','uglify'],
				},
				css:{
					files:['css/**/*.css'],
					tasks:['concat:css'],
				}
			}

		});

		grunt.loadNpmTasks('grunt-contrib-concat');
		grunt.loadNpmTasks('grunt-contrib-watch');
		grunt.loadNpmTasks('grunt-contrib-uglify');

		grunt.registerTask('default', ['concat','uglify','watch']);
}