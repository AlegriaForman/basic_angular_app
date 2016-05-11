const gulp = require('gulp');
const webpack = require('webpack-stream');
const eslint = require('gulp-eslint');

var paths = ['**/*.js', '!build/**', '!node_modules/**', '!test_and_integration/**'];

gulp.task('webpack:dev', () => {
  gulp.src('app/js/entry.js')
    .pipe(webpack({
      devtool: 'source-map',
      output: {
        filename: 'bundle.js'
      }
    }))
    .pipe(gulp.dest('./build'));
});

gulp.task('static:dev', () => {
  gulp.src(['app/**/*.html', 'app/**/*.css'])
    .pipe(gulp.dest('./build'));
});

gulp.task('protractor:test', () => {
  gulp.src('test_and_integration/config.js');
});

gulp.task('lint:nontest', () => {
  return gulp.src(paths)
    .pipe(eslint())
    .pipe(eslint.format());
});

gulp.task('lint:client', () => {
  gulp.src('app/**/**.js')
    .pipe(eslint())
    .pipe(eslint.format());
});

gulp.task('lint:server', () => {
  gulp.src('**.js')
    .pipe(eslint())
    .pipe(eslint.format());
});

gulp.task('build:dev', ['webpack:dev', 'static:dev', 'protractor:test']);
gulp.task('default', ['build:dev']);
gulp.task('lint', ['lint:nontest', 'lint:client', 'lint:server']);
