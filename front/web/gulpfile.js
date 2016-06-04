var gulp = require('gulp');
var jshint = require('gulp-jshint');

gulp.task('jshint', function(){
    return gulp.src('static/js/**/*.js')
    .pipe(jshint())
    .pipe(jshint.reporter('default'));
})

gulp.task('default', ['jshint']);