<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\ProduitController ;
use App\Http\Controllers\Auth\LoginController ;
use App\Http\Controllers\userController ;
use App\Http\Controllers\AuthController ;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "api" middleware group. Make something great!
|
*/
Route::get('/{any}', [App\Http\Controllers\HomeController::class, 'index'])->where('any','.*');
Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return Auth::user()->name;
});

Route::post('login', [AuthController::class , 'login']);
Route::group(['middleware','api'],function () {

    Route::post('logout', [AuthController::class , 'logout']);
    Route::post('refresh', [AuthController::class , 'refresh']);
    Route::post('me', [AuthController::class , 'me']);

}) ;
Route::post('/registre', [userController::class , 'store']);
Route::post('/AjouterParticipant', [\App\Http\Controllers\MembreController::class , 'store']);
Route::post('/user/{id}', [userController::class , 'show']);
Route::post('/users', [userController::class , 'index']);

