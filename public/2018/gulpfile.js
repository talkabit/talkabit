/*
 == ------------------------------------------------------------------- ==
 == @@ Settings
 == ------------------------------------------------------------------- ==
 */

var input_scss_file  = 'assets/css/2018.scss';
var output_css_file  = 'assets/css/2018.css';
var watch_extensions = ['html', 'js'];

/*
 == ------------------------------------------------------------------- ==
 == @@ Required Packages
 == ------------------------------------------------------------------- ==
 */

var gulp    = require('gulp');
var sass    = require('gulp-sass');
var rename  = require('gulp-rename');
var reload  = require('gulp-livereload');
var replace = require('gulp-replace');

/*
 == ------------------------------------------------------------------- ==
 == @@ Init
 == ------------------------------------------------------------------- ==
 */

gulp.task('default', function() {

  reload.listen();

  gulp.watch('**/*.scss', function(file) {
    gulp.src(file.path)
      .pipe(replace(' ', ' '))
      .pipe(gulp.dest(function(file) {
        return file.base;
      })).on('end', function() {
      gulp.src(input_scss_file)                             // grab this file
        .pipe(sass().on('error', sass.logError))            // compile it
        .pipe(rename(get_file_name(output_css_file)))       // set the name (default = same name)
        .pipe(gulp.dest( get_file_path(output_css_file)))   // set the path
        .pipe(reload());                                    // reload the browser
    });
  });

  gulp.watch('**/*.+(' + watch_extensions.join('|') + ')', function(files) {
    reload.changed(files);
  });

});

/*
 == ------------------------------------------------------------------- ==
 == @@ Helpers
 == ------------------------------------------------------------------- ==
 */

function get_file_path(path) {
  return path.substring(0, path.lastIndexOf('/'));
}

function get_file_name(path) {
  return path.substring(path.lastIndexOf('/') + 1, path.length);
}
