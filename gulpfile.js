const gulp          = require('gulp');
const sass          = require('gulp-sass');
const browserSync   = require('browser-sync').create();
const concat        = require('gulp-concat');
const uglify        = require('gulp-uglify');
const cleancss      = require('gulp-clean-css');
const rename        = require('gulp-rename');
const autoprefixer  = require('gulp-autoprefixer');
const imagemin      = require('gulp-imagemin');
const clean         = require('gulp-clean');
const runSequence   = require('run-sequence');
const notify        = require("gulp-notify");
const deploy        = require('gulp-gh-pages');

const srcDir = 'src'
const distDir = 'dist';

gulp.task('reloadBrowser', function (callback) {
  browserSync.reload();
  callback();
});

gulp.task('styles', () => {
    gulp.src(`${srcDir}/scss/main.scss\r`)
        .pipe(sass({ outputStyle: 'expanded' }).on("error", notify.onError()))
        .pipe(autoprefixer(['last 15 versions']))
        .pipe(gulp.dest(`${distDir}/css`))
});

gulp.task('images', () =>
    gulp.src(`${srcDir}/images/**/*`)
        .pipe(imagemin())
        .pipe(gulp.dest(`${distDir}/images`))
);

gulp.task('libs', () =>
    gulp.src(`${srcDir}/js/libs/**/*`)
        .pipe(imagemin())
        .pipe(gulp.dest(`${distDir}/js/libs/`))
);

gulp.task('fonts', () =>
    gulp.src(`${srcDir}/fonts/**/*`)
        .pipe(gulp.dest(`${distDir}/fonts`))
);

gulp.task('html', () =>
    gulp.src(`${srcDir}/*.html`)
        .pipe(gulp.dest(distDir))
);

gulp.task('cleanDist', () => 
    gulp.src(distDir)
        .pipe(clean({force: true}))
);

gulp.task('js', ['libs'], () => {
    gulp.src(`${srcDir}/js/*.js`)
        .pipe(concat('script.js'))
        .pipe(gulp.dest(`${distDir}/js`))
});

gulp.task('build', (cb) => {
    runSequence('cleanDist', ['images', 'js', 'styles', 'fonts', 'html'], cb);
});

gulp.task('watch', function() {
    browserSync.init({
        server: {
            baseDir: distDir
        }
    });
    gulp.watch(`${srcDir}/*.html`, ['html', 'reloadBrowser']);
    gulp.watch(`${srcDir}/**/*.scss`, ['styles', 'reloadBrowser']);
    gulp.watch(`${srcDir}/**/*`, ['js', 'reloadBrowser']);
    gulp.watch(`${srcDir}/img/**/*`), ['images', 'reloadBrowser'];
    gulp.watch(`${srcDir}/fonts/**/*`), ['fonts', 'reloadBrowser'];
});

gulp.task('default', ['build', 'watch']);