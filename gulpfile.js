const gulp = require('gulp');

const pug = require('gulp-pug');
const webpack = require('webpack-stream');

const dartSass = require('sass');
const gulpSass = require('gulp-sass');
const sass = gulpSass(dartSass);

const fileSystem = require('fs');
const browserSync = require('browser-sync');

gulp.task('build', callBack => {
  fileSystem.rmSync('./build', {
    recursive: true,
    force: true
  });

  gulp.src('./src/pug/*.pug')
    .pipe(pug({
      pretty: true
    }))
    .pipe(gulp.dest('./build'));

  gulp.src('./src/scripts/*.js')
    .pipe(webpack({
      mode: 'development',
      entry: './src/scripts/main.js'
    }))
    .pipe(gulp.dest('./build/scripts'));

  gulp.src('./src/sass/**/*.sass')
    .pipe(sass())
    .pipe(gulp.dest('./build/styles'));

  gulp.src('./src/fonts/*')
    .pipe(gulp.dest('./build/fonts'));

  gulp.src('./src/images/*')
    .pipe(gulp.dest('./build/images'));

  callBack();
});

gulp.task('watch', () => {
  fileSystem.rmSync('./build', {
    recursive: true,
    force: true
  });

  browserSync.create();
  browserSync.init({
    open: false,
    server: './build'
  });

  gulp.watch('./src/pug/**/*.pug', { ignoreInitial: false }, () => {
    return gulp.src('./src/pug/*.pug')
      .pipe(pug({
        pretty: true
      }))
      .pipe(gulp.dest('./build'))
      .pipe(browserSync.stream());
  });

  gulp.watch('./src/scripts/*.js', { ignoreInitial: false }, () => {
    return gulp.src('./src/scripts/*.js')
      .pipe(webpack({
        mode: 'development',
        entry: './src/scripts/main.js'
      }))
      .pipe(gulp.dest('./build/scripts'))
      .pipe(browserSync.stream());
  });

  gulp.watch('./src/sass/**/*.sass', { ignoreInitial: false }, () => {
    return gulp.src('./src/sass/**/*.sass')
      .pipe(sass().on('error', sass.logError))
      .pipe(gulp.dest('./build/styles'))
      .pipe(browserSync.stream());
  });

  gulp.watch('./src/fonts/*', { ignoreInitial: false }, () => {
    return gulp.src('./src/fonts/*')
      .pipe(gulp.dest('./build/fonts'));
  });

  gulp.watch('./src/images/*', { ignoreInitial: false }, () => {
    return gulp.src('./src/images/*')
      .pipe(gulp.dest('./build/images'));
  });
});
