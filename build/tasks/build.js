var gulp = require('gulp');

// Primary build process
gulp.task('build',
	[
        'scss',
	    'js',
	    'img'
	]
);

// Called by watch task for development
gulp.task('build:dev',
	[
        'scss:dev',
    	'js:dev'
	]
);
