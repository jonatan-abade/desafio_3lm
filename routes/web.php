<?php

use App\Http\Controllers\MainController;
use App\Http\Controllers\CargoController;
use App\Http\Controllers\FuncionarioController;
use Illuminate\Support\Facades\Route;

Route::get('/', [MainController::class, 'index']);

Route::get('/funcionarios', [FuncionarioController::class, 'index'])->name('funcionarios');
Route::post('/funcionario', [FuncionarioController::class, 'store']);
Route::put('/funcionario/{id}', [FuncionarioController::class, 'update']);
Route::delete('/funcionario/{id}', [FuncionarioController::class, 'destroy']);

Route::get('/cargos', [CargoController::class, 'index'])->name('cargos');
Route::post('/cargo', [CargoController::class, 'store']);
Route::put('/cargo/{id}', [CargoController::class, 'update']);
Route::delete('/cargo/{id}', [CargoController::class, 'destroy']);
