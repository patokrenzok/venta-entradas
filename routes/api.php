<?php

use App\Http\Controllers\Auth\UserController;
use App\Http\Controllers\RolesController;
use App\Http\Controllers\UsersController;
use Illuminate\Support\Facades\Route;

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

Route::middleware('auth:sanctum')->group(function () {
    Route::post('/register', [UserController::class, 'register'])->name('auth.register');
    Route::delete('/logout', [UserController::class, 'logout'])->name('auth.logout');
    Route::get('/me', [UserController::class, 'me'])->name('auth.me');

    Route::apiResource('users', UsersController::class);
    Route::apiResource('roles', RolesController::class);
});

Route::post('/login', [UserController::class, 'login'])->name('auth.login');
