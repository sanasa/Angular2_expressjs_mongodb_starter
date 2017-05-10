var mocha=require('gulp-mocha');
var jshint=require('gulp-jshint');
var jslint=require('gulp-jslint');
var stylish = require('jshint-stylish');
var gulp = require('gulp');


gulp.task('hint', function() {
  return gulp.src(["./src/lib/*.js","./src/models/*.js","./src/routes/*.js"])
    .pipe(jshint())
    .pipe(jshint.reporter(stylish));
});

gulp.task('lint', function () {
    return gulp.src(["./src/lib/*.js","./src/models/*.js","./src/routes/*.js"])
            .pipe(jslint({}))
            .pipe(jslint.reporter('stylish'));
});

gulp.task('test', () =>
    gulp.src('./test/*.js', {read: false})
        .pipe(mocha({reporter: 'nyan'}))
);


// gulp.task("default", function(){
//     gulp.watch(["./src/lib/*.js","./src/models/*.js","./src/routes/*.js"],["hint","lint"]);

// });