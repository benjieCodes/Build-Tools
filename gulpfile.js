'use strict';

const gulp = require('gulp'); // it is common js because this doesn't support "import gulp from ..."
const sass = require('gulp-sass');

gulp.task('default', function () {
  console.log('this is the default task');
});

gulp.task('pizza', function () {
  console.log('this is from pizza');
});

gulp.task('sassy', function () {
  gulp
    .src('./main.scss')
    .pipe(sass())
    .pipe(gulp.dest('./css/'))
  ;
});

gulp.task('all', ['default', 'pizza']);
