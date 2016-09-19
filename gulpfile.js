var gulp = require('gulp');
var babel = require('gulp-babel');
var sourcemaps = require('gulp-sourcemaps');
var plumber = require('gulp-plumber');

gulp.task('default', function(){
    return gulp.src('ts/*.js')
        .pipe(plumber())
        .pipe(sourcemaps.init())
        .pipe(babel({
            plugins:['transform-es2015-modules-amd'],
            presets: ['es2015']
        }))
        .pipe(sourcemaps.write('.'))
        .pipe(gulp.dest('dest'));
});


