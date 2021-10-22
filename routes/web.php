<?php

use App\Http\Controllers\CargoController;
use App\Http\Controllers\FuncionarioController;
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

Route::get('/', [FuncionarioController::class, 'index']);
Route::get('/funcionario', [FuncionarioController::class, 'create']);
Route::post('/funcionario', [FuncionarioController::class, 'store']);
Route::get('/funcionario/{id}', [FuncionarioController::class, 'show']);
Route::put('/funcionario/{id}', [FuncionarioController::class, 'edit']);
Route::delete('/funcionario/{id}', [FuncionarioController::class, 'destroy']);


Route::get('/cargos', [CargoController::class, 'index']);
