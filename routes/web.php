<?php


use App\Http\Controllers\AjaxController;
use App\Http\Controllers\ProductController;
use App\Http\Controllers\SendMailController;
use App\Http\Controllers\UserController;

use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/


//Главная
Route::get('/', [App\Http\Controllers\IndexController::class, 'index'])->name('index');


// Администрирование --------------------------------------
//Группа для админки через посредника 'admin'
Route::prefix('admin')->name('admin.')->middleware('admin')->group(function (){
    Route::get('/', [App\Http\Controllers\Admin\IndexController::class, 'index'])->name('index');
});




//Тестовый маршрут для Фильтров записей
Route::get('/products', [ProductController::class, 'show'])->name('show-products');




//маршрут для AJAX
Route::post('/ajax', [AjaxController::class, 'getForm']);

//отправка форм обратной связи
Route::match(['get', 'post'], '/send', [SendMailController::class, 'send'])->name('mail.send');


/////// Регистрация и Авторизация ///////
Route::middleware('guest')->group(function (){
//Регистрация
    Route::get('/reg', [UserController::class, 'regForm'])->name('reg.form');
    Route::post('/reg', [UserController::class, 'regStore'])->name('reg.store');
//Авторизация
    Route::get('/admin-login', [UserController::class, 'loginForm'])->name('login.form');
    Route::post('/admin-login', [UserController::class, 'login'])->name('login');
});
//Логаут через посредника 'auth'
Route::get('/logout', [UserController::class, 'logout'])->middleware('auth')->name('logout');
/////////////////////////////////////////
