var gulp = require('gulp');
gulp.task('hello', function() {
  console.log('Hello, World!');
});
gulp.task('task-name', function() {
  gulp.src('source-files') // 1
  .pipe(gulpPluginFunction()) // 2
  .pipe(gulp.dest('destination')); // 3
});
