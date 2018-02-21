var gulp = require('gulp');
var sass = require('gulp-sass');
var uglify = require('gulp-uglify');
var livereload = require('gulp-livereload');
var browserSync = require('browser-sync').create();

// watcher tasks
gulp.task('watch', ['browserSync', 'sass'], function(){
    gulp.watch('public/scss/**/*.scss', ['sass']); 
    // Other watchers
  })
gulp.task('browserSync', function() {
    browserSync.init({
      server: {
        baseDir: 'public'
      },
    })
})
// sass conversion
gulp.task('sass', function() {
  return gulp.src('public/scss/**/*.scss')
  .pipe(sass())
  .pipe(gulp.dest('public/css'))
  .pipe(browserSync.reload({
    stream: true
  }))
  //Other conversions
});