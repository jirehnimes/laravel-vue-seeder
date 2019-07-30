<?php

use Illuminate\Http\Request;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

// WEB

Route::post('auth/login', 'AuthController@login');
Route::post('auth/register', 'AuthController@register');

Route::middleware(['auth:api'])->group(
    function () {
        Route::get('users', 'UserController@testUsers');
    }
);

// ADMIN

Route::prefix('admin')->middleware(['authorize.admin'])->group(function () {
    Route::post('auth/register', 'AuthController@adminRegister');
});


