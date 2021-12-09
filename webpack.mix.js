const mix = require('laravel-mix');

const CaseSensitivePathsPlugin = require('case-sensitive-paths-webpack-plugin');
const VuetifyLoaderPlugin = require('vuetify-loader/lib/plugin');
var webpackConfig = {
    plugins: [
        new CaseSensitivePathsPlugin(),
        new VuetifyLoaderPlugin()
        // other plugins ...
    ]
    // other webpack config ...
}
mix.webpackConfig(webpackConfig)


/*
 |--------------------------------------------------------------------------
 | Mix Asset Management
 |--------------------------------------------------------------------------
 |
 | Mix provides a clean, fluent API for defining some Webpack build steps
 | for your Laravel applications. By default, we are compiling the CSS
 | file for the application as well as bundling up all the JS files.
 |
 */

mix.js('resources/js/app.js', 'public/js').vue().postCss('resources/css/app.css', 'public/css', [
    require('postcss-import'),
    require('tailwindcss'),
    require('autoprefixer'),
]);
mix.js('resources/js/store.js', 'public/js').vue()
    .sass('resources/sass/store.scss', 'public/css');
mix.js('resources/js/print.js', 'public/js').vue()
    .sass('resources/sass/print.scss', 'public/css');
