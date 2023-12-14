-------------------------------
Установка laravel 9
-------------------------------
Через Консоль! -   example-app - текущая папка
cd domains
composer create-project laravel/laravel example-app

создать в корне .ahtaccess для переадресации в папку public
RewriteEngine On
RewriteRule (.*) public/$1 [L]

установить node.js или обновить 
npm -v

установить Laravel Mix из Терминала phpstorm
npm install

-----------------
.env
-----------------
APP_URL=http://eccon.lar (меняем имя)

Для сохранения файлов в публичную папку public - а не в storage 
filesystems.php - в public меняем 'root' => storage_path('app/public') на-> 'root' => public_path('uploads')
и
'url' => env('APP_URL').'/public',
и меняем
'default' => env('FILESYSTEM_DRIVER', 'public')

после лучше скинуть кэш
php artisan config:cache

---------------------------------------------------------------------------
Пакет - laravel sluggable  https://github.com/cviebrock/eloquent-sluggable
---------------------------------------------------------------------------
//Создает slug из указанного поля и записывает в базу автоматичекски
установка через Кансоль OpenServer!
composer require cviebrock/eloquent-sluggable

-------------------------
Пакет - laravel debugbar
-------------------------
установка через Консоль OpenServer!
composer require barryvdh/laravel-debugbar --dev

------------------------------------------------------------
Чтобы менять занчения столбцов по умолчанию через migration
------------------------------------------------------------
установка через Консоль OpenServer!
composer require doctrine/dbal

-----------------------------------------
Создаём свои собственные функции
-----------------------------------------
https://laravel.demiart.ru/laravel-sozdayom-svoi-sobstvennye-funktsii/

1) php artisan make:provider HelperServiceProvider
2) удаляем весь метод boot()
3) public function register()
{
    foreach (glob(app_path('Helpers') . '/*.php') as $file) {
        require_once $file;
    }
}
4) config/app.php добавляем HelperServiceProvider над AppServiceProvider:

----------------------
Обновить Node.js
----------------------
https://nodejs.org/en/

--------------------------------
настройка PHPStorm 
--------------------------------
настройка phpstorm.txt
laravel-ide-helper c GITa  https://github.com/barryvdh/laravel-ide-helper


------------------------------------------------------------------------------------------------------------------


-------
Artisan
-------
//Закрыть сайт на обслуживание "ошибка 503"
$ php artisan down
или
$ php artisan down --message="Ведутся технические работы, пожалуйста, попробуйте войти позже"
или кроме выбранного IP
php artisan down --allow=192.168.0.0/16
//Открыть сайт
$ php artisan up

//Список страниц
php artisan route:list

//Очистка кэша конфигов
php artisan config:cache

//Очистить кеш view-шек
php artisan view:clear

//создание контроллера через artisan
php artisan make:controller Admin/MainController

//Создание модели (имя - в ед. числе)  (-m) - миграцию к ней
php artisan make:model Category -m

//Coздание компонента
php artisan make:component Sales

//Создание миграции
//Конвенции имен - пример для таблицы связей post_tag - имена моделей!!!
php artisan make:migration create_post_tag_table
//создание поля в существующей таблице
php artisan make:migration alter_table_users_add_isadmin --table=users

//Выполнить (применить) миграции
php artisan migrate

//Откатить все миграции и выполнить заново
php artisan migrate:refresh

//Создание Ресурса (CRUD)
php artisan make:controller Admin/CategoryController -r

//Спсиок всех маршрутов
php artisan route:list
/по маске
php artisan route:list --path=admin/cat

//Создание middleware (посредника)
php artisan make:middleware AdminMiddleware
регистрация посредника
app/Http/Kernel.php -> $routeMiddleware
поменять редирект на главную в файле RedirectIfAuthenticated.php
пример: return redirect()->home();
//-------------------------------------










