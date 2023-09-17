// Include necessary modules
const gulp = require('gulp');
const stylus = require('gulp-stylus');
const autoprefixer = require('gulp-autoprefixer');
const jeet = require('jeet');
const browserSync = require('browser-sync').create();

/**
 * Initialize BrowserSync
 *
 * @return void
 */
function browserSyncInit() {
  browserSync.init({
    proxy: "127.0.0.1:5500"
  });
}

/**
 * Compile Stylus files, apply autoprefixer, and reload the browser
 * 
 * @return void
 */
function compileStylus() {
  return gulp.src('./src/styles/*.styl')
    .pipe(stylus({
      use: [jeet()]
    }))
    .pipe(autoprefixer({
        overrideBrowserslist: ['> 1%', 'last 2 versions', 'Firefox ESR'],
        cascade: true,
        add: true,
        remove: true,
        supports: true,
        flexbox: "no-2009",
        ignoreUnknownVersions: true
      }))      
    .pipe(gulp.dest('./dist/styles'))
    .pipe(browserSync.stream());
}

// Default Gulp task
exports.default = function() {
  // Initialize BrowserSync
  browserSyncInit();

  // Watch for changes in Stylus files
  gulp.watch('./src/styles/*.styl', compileStylus);

  // Watch for changes in .css and .html files and reload the browser
  gulp.watch('./dist/styles/*.css').on('change', browserSync.reload);
  gulp.watch('./**/*.html').on('change', browserSync.reload);
}
