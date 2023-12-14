const mix = require('laravel-mix');

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

/*mix.js('resources/js/app.js', 'public/js')
    .postCss('resources/css/app.css', 'public/css', [
        //
]);*/

//Для Админки
mix.styles([
  'resources/assets/admin/plugins/fontawesome-free/css/all.min.css',
  'resources/assets/admin/css/adminlte.css',
  'resources/assets/admin/plugins/select2/css/select2.min.css',
  'resources/assets/admin/plugins/select2-bootstrap4-theme/select2-bootstrap4.min.css',
  'resources/assets/admin/plugins/summernote/css/summernote-bs4.min.css'

], 'public/assets/admin/css/admin.css');

mix.scripts([
    'resources/assets/admin/plugins/jquery/jquery.min.js',
    'resources/assets/admin/plugins/bootstrap/js/bootstrap.bundle.min.js',
    'resources/assets/admin/js/adminlte.min.js',
    'resources/assets/admin/js/demo.js',
    'resources/assets/admin/plugins/select2/js/select2.full.min.js',
    'resources/assets/admin/plugins/bs-custom-file-input/bs-custom-file-input.min.js',
    'resources/assets/admin/plugins/summernote/js/summernote-bs4.js',

    'resources/assets/admin/js/main.js'

], 'public/assets/admin/js/admin.js');

mix.copyDirectory('resources/assets/admin/plugins/fontawesome-free/webfonts', 'public/assets/admin/webfonts');
mix.copyDirectory('resources/assets/admin/img', 'public/assets/admin/dist/img');
mix.copy('resources/assets/admin/css/adminlte.css.map', 'public/assets/admin/css/adminlte.css.map');
mix.copy('resources/assets/admin/js/adminlte.min.js.map', 'public/assets/admin/js/adminlte.min.js.map');
mix.copyDirectory('resources/assets/admin/plugins/summernote/font', 'public/assets/admin/js/font');
mix.copyDirectory('resources/assets/admin/plugins/summernote/lang', 'public/assets/admin/js/lang');
mix.copy('resources/assets/admin/plugins/summernote/js/summernote-bs4.min.js.map', 'public/assets/admin/js/summernote-bs4.min.js.map');
//--------------------

//Для Фронта
mix.sass('resources/assets/sass/styles.scss', 'public/assets/css');
mix.scripts([
    'resources/assets/js/scripts.js'
], 'public/assets/js/scripts.js');
mix.scripts([
    'resources/assets/js/data-img.js'
], 'public/assets/js/data-img.js');

mix.copy('resources/assets/js/jquery-2.1.1.min.js', 'public/assets/js/jquery-2.1.1.min.js');
mix.copy('resources/assets/js/jquery.maskedinput.min.js', 'public/assets/js/jquery.maskedinput.min.js');

mix.copyDirectory('resources/assets/fonts', 'public/assets/fonts');
//--------------------
