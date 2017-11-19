var gulp = require('gulp');
var sass = require('gulp-sass');
var sequence = require('run-sequence');


gulp.task('build', function(callback){
	sequence('sass', 'comp1', callback);
});


gulp.task('sass', function(){
	return gulp.src('resources/sass/main.scss')
		.pipe( sass() )
		.pipe( gulp.dest('public/build/react/css'))
})

gulp.task('comp1', function(){
	return gulp.src('resources/react/dungeon_run_test/index.html')
		.pipe( gulp.dest('public/build/react/'))
});