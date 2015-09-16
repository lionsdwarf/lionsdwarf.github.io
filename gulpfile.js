var gulp = require('gulp');
var watch = require('gulp-watch');
var sass = require('gulp-sass');
var sourcemaps = require('gulp-sourcemaps');
var autoprefixer = require('gulp-autoprefixer');
var concat = require('gulp-concat');
var stripDebug = require('gulp-strip-debug');
var uglify = require('gulp-uglify');
var plumber = require('gulp-plumber');
var ghPages = require('gulp-gh-pages');

// Get and render all .style files
gulp.task('stylesheets', function () {
  gulp.src([
    './scss/general/general.scss',
    './scss/slides/*.scss'
    ])
    .pipe(plumber())
    .pipe(sourcemaps.init({ loadMaps: true }))
    .pipe(sass({ linenos: true }))
    .pipe(autoprefixer("last 2 versions", "> 5%", "ie 10", "ie 9"))
    .pipe(concat('style.css'))
    .pipe(sourcemaps.write())
    .pipe(gulp.dest('./scss'));
});

// build minified javascripts
gulp.task('javascripts', function() {
  gulp.src([
    './js/libraries/*.js',
    './js/libraries/skrollr_master/src/skrollr.js',
    './js/general/*.js',
    './js/slides/*.js',
  ])
    .pipe(sourcemaps.init())
    .pipe(concat('application.min.js'))
    .pipe(sourcemaps.write())
    .pipe(gulp.dest('./js'));
});

// watch files for changes
gulp.task('watch', function() {
    gulp.watch([
      './scss/general/general.scss',
      './scss/slides/*.scss'], 
      ['stylesheets']);
    gulp.watch([
      './js/general/*.js',
      './js/slides/*.js',], 
      ['javascripts']);
});

gulp.task('build', ['stylesheets', 'javascripts'], function() {});

gulp.task('default', ['stylesheets', 'javascripts', 'watch']);

gulp.task('deploy', function() {
  return gulp.src('./dist/**/*')
    .pipe(ghPages());
});
