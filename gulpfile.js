var gulp = require('gulp');
var jshint = require('gulp-jshint');
var exec = require('child_process').exec;

gulp.task('jshint', function () {
    gulp.src('front/web/static/js/**/*.js')
        .pipe(jshint())
        .pipe(jshint.reporter('default'));
})

gulp.task('run', ['jshint'], function (cb) {
    exec('node back/server.js', function (err, stdout, stderr) {
        console.log(stdout);
        console.log(stderr);
        cb(err);
    });
});

gulp.task('default', ['jshint', 'run']);