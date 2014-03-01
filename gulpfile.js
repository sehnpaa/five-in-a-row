var gulp = require('gulp');
var gulputil = require('gulp-util');
var qunit = require('gulp-qunit');
var jshint = require('gulp-jshint');

var paths = {
  scripts: ['app.js', 'test/test.js'],
  testRunner: './test/index.html'
};


gulp.task('default', ['lint', 'test', 'watch']);

gulp.task('lint', function() {
      gulp.src(paths.scripts)
          .pipe(jshint())
          .pipe(jshint.reporter('default'));
});

gulp.task('test', function () {
	return gulp.src(paths.testRunner)
		.pipe(qunit());
});

gulp.task('watch', function () {
	gulp.watch(paths.scripts, ['lint', 'test']);
});

