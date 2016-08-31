/**
 * Configure paths
 */

/**
 * Root paths
 */
global.setRoot('dest',              './dist');
global.setRoot('src',               './src');
global.setRoot('styleguide',        './styleguide');

/**
 * Destination paths
 */
global.setDest('scss',              '/css');
global.setDest('js',                '/js');
global.setDest('img',               '/img');

/**
 * Source paths
 */
global.setSrc('scss',               '/scss');
global.setSrc('scssFiles',          '/scss/**/*.scss');
global.setSrc('js',                 '/js');
global.setSrc('jsFiles',            '/js/**/*.js');
global.setSrc('rjs-config',         '/js/require.config.js');
global.setSrc('img',                '/img/**/*.{jpg,jpeg,png,gif,svg}');
global.setSrc('css',                '/css');
