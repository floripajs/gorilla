// Load Gulp and your plugins
var gulp       = require('gulp'),
    connect    = require('gulp-connect'),
    stylus     = require('gulp-stylus'),
    handlebars = require('gulp-compile-handlebars'),
    rename     = require('gulp-rename'),
    ghPages    = require('gulp-gh-pages'),
    plumber    = require('gulp-plumber');

var paths = {
    dist:   './dist',
    src:    './src'
};

var files = {
    stylus:     paths.src + '/stylus/*.styl',
    handlebars: paths.src + '/handlebars/*.hbs'
};

var config = {
    name: 'Gorilla'
};

// Connect task
gulp.task('connect', connect.server({
    root: paths.dist,
    port: 5000,
    livereload: true,
    open: true
}));

// HTML task
gulp.task('handlebars', function () {
    gulp.src(files.handlebars)
        .pipe(handlebars(config))
        .pipe(rename('index.html'))
        .pipe(gulp.dest(paths.dist))
        .pipe(connect.reload());
});

// Stylus task
gulp.task('stylus', function () {
    gulp.src(files.stylus)
        .pipe(plumber())
        .pipe(stylus({
            use: ['nib'],
        }))
        .pipe(gulp.dest(paths.dist + '/assets/css'))
        .pipe(connect.reload());
});

// Deploy to gh-pages task
gulp.task('deploy', function() {
  return gulp.src(paths.dist)
    .pipe(ghPages());
});

// Watch task
gulp.task('watch', function () {
    gulp.watch(paths.src + '/stylus/**/*.styl', ['stylus']);
    gulp.watch(files.handlebars, ['handlebars']);
});

// Set 'gulp server' for development
gulp.task('server', ['handlebars', 'stylus', 'connect', 'watch']);
