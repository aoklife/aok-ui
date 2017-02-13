const connect = require('gulp-connect')
const gulp = require('gulp')
const nib = require('nib')
const shell = require('gulp-shell')
const stylus = require('gulp-stylus')

const paths = {
  stylusAll: ['./src/**/*.styl'],
  stylusEntry: ['./src/app.styl'],
  fonts: ['./dist/fonts/*.otf'],
}

gulp.task('connect', function() {
  connect.server({ port: 4000 })
})

gulp.task('stylus', function() {
  return gulp.src(paths.stylusEntry)
    .pipe(stylus({ use: nib() }))
    .pipe(gulp.dest('./tmp'))
})

gulp.task('build', function() {
  return gulp.src(paths.stylusEntry)
    .pipe(stylus({ compress: true, use: nib() }))
    .pipe(gulp.dest('./dist'))
})

gulp.task('copy', function() {
  return gulp.src(paths.fonts)
    .pipe(gulp.dest('./tmp/fonts'))
})

gulp.task('lint', shell.task(['stylint src']))

const cdnurl = 'https://cdnjs.cloudflare.com/ajax/libs/ionicons/2.0.1/css/ionicons.css'
gulp.task('docs', shell.task([`kss --source src --destination docs --css "/tmp/app.css" --css "${cdnurl}"`]))

gulp.task('watch', function() {
  gulp.watch(paths.stylusAll, ['lint', 'stylus', 'docs'])
})

gulp.task('default', [
  'connect',
  'copy',
  'lint',
  'stylus',
  'docs',
  'watch',
])
