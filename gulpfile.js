var gulp = require('gulp'),
    shell = require('gulp-shell'),
    browserify = require('browserify'),
    uglify = require('gulp-uglify'),
    source = require('vinyl-source-stream'),
    buffer = require('vinyl-buffer'),
    glob = require('glob');

gulp.task('browserify', function (cb) {
  glob('./app/**/*.js', {}, function (err, files) {
    var b = browserify();
    files.forEach(function (file) {
      b.add(file);
    });
    b.bundle()
      .pipe(source('output.js'))
      .pipe(buffer())
      .pipe(uglify())
      .pipe(gulp.dest('./dist'));
    cb();
  }); 
});


gulp.task('start', function() {
  return gulp.src('app')
    .pipe(shell('npm start'))
});


gulp.task('default', [], function() {
    gulp.start('start');
});