
re('gulp'),
	sass = require('gulp-sass'),
	plumber = require('gulp-plumber');
 
gulp.task('sass', function() {
	gulp.src('_scss/*.scss')
			 .pipe(plumber())
			 .pipe(sass({
			 includePaths: ['_scss/includes/']
			 }))
			 .pipe(gulp.dest('css/'));
			 });
			  
			 gulp.task('default', function() {
			 gulp.run('sass');
			  
			 gulp.watch(['_scss/**/*.scss'],
						function(event) {
						gulp.run('sass');
						});
						});
