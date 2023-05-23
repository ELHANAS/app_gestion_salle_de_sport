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
//authentification
Route::post('login', [AuthController::class , 'login']);
Route::group(['middleware','api'],function () {

    Route::post('logout', [AuthController::class , 'logout']);
    Route::post('refresh', [AuthController::class , 'refresh']);
    Route::post('me', [AuthController::class , 'me']);

}) ;

//users
Route::post('/registre', [userController::class , 'store']);


Route::post('/users', [userController::class , 'index']);
Route::post('/user/changePhoto/{id}', [userController::class , 'updateImage']);


//membres
Route::post('/AjouterParticipant', [\App\Http\Controllers\MembreController::class , 'store']);
Route::post('/participants', [\App\Http\Controllers\MembreController::class , 'index']);
Route::post('/participant/{membre}', [\App\Http\Controllers\MembreController::class , 'show']);

//DISCIPLINE
Route::post('/discipline', [\App\Http\Controllers\DisciplineController::class , 'index']);
Route::post('/ajouteDiscipline', [\App\Http\Controllers\DisciplineController::class , 'store']);
Route::post('/disciplineDetail/{discipline}', [\App\Http\Controllers\DisciplineController::class , 'show']);



//ABONNEMENT
Route::post('/abonnementparticipant/{membre}', [\App\Http\Controllers\AbonnementController::class , 'abonnementParParticipant']);
Route::post('/ajouterAbonnement', [\App\Http\Controllers\AbonnementController::class , 'store']);

