<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

Route::get('/fogas', [App\Http\Controllers\FogasController::class, 'index']);
Route::get('/fogas/id/{fogas}', [App\Http\Controllers\FogasController::class, 'showId']);
Route::get('/fogas/minsize/{fogas}', [App\Http\Controllers\FogasController::class, 'showMinSize']);
Route::get('/fogas/minweight/{fogas}', [App\Http\Controllers\FogasController::class, 'showMinWeight']);
Route::post('/fogas', [App\Http\Controllers\FogasController::class, 'store']);