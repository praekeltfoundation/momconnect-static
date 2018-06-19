'use strict';

var gulp              =   require('gulp'),
    sourcemaps        =   require('gulp-sourcemaps'),
    sass              =   require('gulp-sass'),
    cleanCSSMinify    =   require('gulp-clean-css'),
    rename            =   require('gulp-rename'),
    minify            =   require('gulp-minify'),
    notify            =   require('gulp-notify');
    var paths = {
      cssPaths: {
        src: './static/css/*.scss',
        dest: './static/dest/'
      }
    };

gulp.task('default', function () {
  return gulp.src(paths.cssPaths.src)
    .pipe(sourcemaps.init())
    .pipe(sass().on('error', sass.logError))
    .pipe(cleanCSSMinify())
    .pipe(rename({
      basename: 'main',
      suffix: '.min'
    }))
    .pipe(sourcemaps.write('/maps'))
    .pipe(gulp.dest(paths.cssPaths.dest));
});
