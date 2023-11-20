<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\MaterialController;

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



// Route untuk menampilkan semua data material
Route::get('/materials', [MaterialController::class, 'index']);

// Route untuk menambahkan material baru
Route::post('/materials', [MaterialController::class, 'store']);

// Route untuk menghapus material berdasarkan ID
Route::delete('/materials/{id}', [MaterialController::class, 'destroy']);

// Tambahan: Route untuk menampilkan detail material berdasarkan ID
Route::get('/materials/{id}', [MaterialController::class, 'show']);



Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});
