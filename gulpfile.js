'use strict';

let gulp = require('gulp');
let mocha = require('gulp-mocha');
let runSequence = require('run-sequence');
let istanbul = require('gulp-babel-istanbul');

let jsFiles = [
  './lib/**.js',
];

gulp.on('stop', () => {
  process.nextTick(() => {
    process.exit(0);
  });
});

gulp.task('preIstanbul', () => {
  return gulp.src(jsFiles)
    .pipe(istanbul())
    .pipe(istanbul.hookRequire());
});

gulp.task('mochaAndIstanbul', () => {
  return gulp.src('./test/test.js', {
    read: false
  })
    .pipe(mocha({
      reporter: 'spec',
      compilers: 'js:babel-core/register'
    }))
    .pipe(istanbul.writeReports())
    .pipe(istanbul.enforceThresholds({thresholds: {global: 0}}))
    .on('error', error => {
      console.log(error);
      process.exit(0);
    });
});

gulp.task('default', callback => {
  runSequence(
    'preIstanbul',
    'mochaAndIstanbul',
    callback);
});
