var gulp = require('gulp');
var sass = require('gulp-sass');
var sequence = require('run-sequence');


gulp.task('build', function(callback){
	sequence('sass', 'comp1', callback);
});


gulp.task('sass', function(){
	return gulp.src('resources/sass/*')
		.pipe( sass() )
		.pipe( gulp.dest('public/build/css'))
})

gulp.task('comp1', function(){
	return gulp.src('resources/react/component_1/index.html')
		.pipe( gulp.dest('public/build/react/'))
});