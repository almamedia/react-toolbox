const path = require('path');
const gulp = require('gulp');
const babel = require('gulp-babel');
const postcss = require('gulp-postcss');

const paths = {
  js: {
    src: [
      './components/**/*.js',
      '!./components/**/*.spec.js',
      '!./components/**/__test__',
      '!./components/__mocks__/**/*.js'
    ],
  },
  css: {
    src: [
      './components/*.css',
      './components/**/*.css'
    ],
  },
  tsd: {
    src: './components/**/*.d.ts',
  },
  dest: './lib',
}

function js(cb) {
  gulp.src(paths.js.src)
    .pipe(babel())
    .pipe(gulp.dest(paths.dest));

  cb()
};

function css(cb) {
  const plugins = [
    require('postcss-import')({
      root: __dirname,
      path: [path.join(__dirname, './components')]
    }),
    require('postcss-mixins')(),
    require('postcss-each')(),
    require('postcss-apply')(),
    require('postcss-nesting')(),
    require('postcss-reporter')({ clearMessages: true })
  ];

  gulp.src([
      './components/*.css',
      './components/**/*.css'
    ])
    .pipe(postcss(plugins))
    .pipe(gulp.dest('./lib'));

  cb()
};

function tsd(cb) {
  gulp.src('./components/**/*.d.ts')
    .pipe(gulp.dest('./lib'));

  cb()
};

const build = gulp.series(js, css, tsd)

gulp.task('default', build)
