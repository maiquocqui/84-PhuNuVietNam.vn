'use strict';

import path from 'path';
import header from 'gulp-header';

module.exports = function(gulp, setgulp, plugins, config, target, browserSync) {
    let url = config;
    let dest = path.join(target);
    let banner = [].join('\n');

    // Run task
    gulp.task('header', () => {
        return gulp.src(path.join(target, '**/*.{css,js}'))
            .pipe(header(banner, {
                url: url
            }))
            .pipe(gulp.dest(dest));

    });

}