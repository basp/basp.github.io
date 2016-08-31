var gulp = require('gulp'),
    del = require('del');


/**
 * Clean up the entire destination folder
 */
function runClean(cb) {
    del(global.getRoot('dest'), cb);
}

gulp.task('clean', runClean);


/**
 * Clean up the JS destination folder
 */
function runCleanJs(cb) {
    del(global.getDest('js'), cb);
}

gulp.task('clean:js', runCleanJs);


/**
 * Clean up the CSS destination folder
 */
function runCleanCss(cb) {
    del(global.getDest('scss'), cb);
}

gulp.task('clean:scss', runCleanCss);


/**
 * Clean up the images destination folder
 */
function runCleanImg(cb) {
    del(global.getDest('img'), cb);
}

gulp.task('clean:img', runCleanImg);


/**
 * Clean up the html files in the root
 */
function runCleanHtml(cb) {
    del(global.getDest('html'), cb);
}

gulp.task('clean:html', runCleanHtml);
