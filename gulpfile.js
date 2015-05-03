var browserify = require('browserify');
var gulp = require('gulp');
var source = require('vinyl-source-stream');
var reactify = require('reactify');

var path = {
	MAIN: './app/main.js',
	DEST: './app',
	OUT: 'bundle.js'
}

gulp.task('browserify', function() {
  var b = browserify();
  b.transform(reactify);
  b.add(path.MAIN);
  return b.bundle()
    .pipe(source(path.OUT))
    .pipe(gulp.dest(path.DEST));
});
