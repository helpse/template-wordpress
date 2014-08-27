// File: Gulpfile.js

'use strict';

var gulp = require('gulp'),
  connect = require('gulp-connect');



// Servidor web de desarrollo
gulp.task('server', function() {
  connect.server({
    //root: './app',
    hostname: '0.0.0.0',
    port: 8080,
    livereload: true
  });
});

// Recarga el navegador cuando hay cambios en el HTML
gulp.task('php', function() {
  gulp.src('./**/*.php')
    .pipe(connect.reload());
});



// Vigila cambios que se produzcan en el código
// y lanza las tareas relacionadas
gulp.task('watch', function() {
  gulp.watch(['./**/*.php'], ['php']);
  //gulp.watch(['./app/img/**'], ['img']);
});

gulp.task('default', ['server', 'watch']);
