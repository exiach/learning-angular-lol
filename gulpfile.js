var gulp = require('gulp'),
    connect = require('gulp-connect');

// Running local server
gulp.task('connect', function() {
    connect.server({
        name: 'Learning AngularJs',
        root: './src',
        port: 1989,
        livereload: true
    });
});

gulp.task('default', ['connect']);