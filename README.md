## gulp es6 babel amd demo

I want to coding using ES6 modules, but it takes me lot's of time. 

This is an demo.

#### How to use

```bash
npm install -g gulp-cli
npm install
gulp
```

#### Main gulp process

```javascript
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
```

#### Troubles

Failed to connect [gulp-requirejs-optimize](https://www.npmjs.com/package/gulp-requirejs-optimize)

