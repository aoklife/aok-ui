const gulp = require('gulp')
const nib = require('nib')
const stylus = require('gulp-stylus')
const shell = require('gulp-shell')

const paths = {
  stylusAll: ['./src/**/*.styl'],
  stylusEntry: ['./src/app.styl'],
}

gulp.task('stylus', function() {
  return gulp.src(paths.stylusEntry)
    .pipe(stylus({ compress: true, use: nib() }))
    .pipe(gulp.dest('./dist'))
})

gulp.task('lint', shell.task(['stylint src']))

gulp.task('watch', function() {
  gulp.watch(paths.stylusAll, ['lint', 'stylus'])
})

gulp.task('default', ['lint', 'stylus', 'watch'])
