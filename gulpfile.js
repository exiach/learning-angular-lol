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

gulp.task('html', function () {
    gulp.src('./src/**/*.html')
        .pipe(connect.reload());
});

gulp.task('css', function () {
    gulp.src('./src/**/*.css')
        .pipe(connect.reload());
});

gulp.task('js', function () {
    gulp.src('./src/**/*.js')
        .pipe(connect.reload());
});

gulp.task('watch', function () {
    gulp.watch(['./src/**/*.html'], ['html']);
    gulp.watch(['./src/**/*.css'], ['css']);
    gulp.watch(['./src/**/*.js'], ['js']);
});

gulp.task('default', ['connect', 'watch']);