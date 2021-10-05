<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\BrandController;
use App\Http\Controllers\BranchController;
use App\Http\Controllers\ProductController;
use App\Http\Controllers\InventoryController;

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

Route::get('/', function () {
    return view('welcome');
});
Route::resource('product',ProductController::class);
Route::resource('branch',BranchController::class);
Route::resource('inventory',InventoryController::class);
Route::resource('brand',BrandController::class);
Route::get('/admin/{any}', function () {
    return view('dashboard');
  })->where('any', '.*');


require __DIR__.'/auth.php';
