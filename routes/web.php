<?php

use App\Http\Controllers\CustomerController;
use App\Http\Controllers\RecieptController;
use App\Http\Controllers\ReportController;
use App\Http\Controllers\TransferController;
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
  return view('store');
});
Route::resource('product',ProductController::class);
Route::get('/product/edit/{id}',[ProductController::class, 'edit']);
Route::post('/product/update/{id}',[ProductController::class, 'update']);
Route::get('/product/view/{id}',[ProductController::class, 'show']);
Route::resource('branch',BranchController::class);
Route::resource('inventory',InventoryController::class);
Route::resource('brand',BrandController::class);
Route::resource('checkout',RecieptController::class);
Route::resource('customer',CustomerController::class);
Route::resource('transfer',TransferController::class);
Route::resource('reciept',RecieptController::class);

Route::get('/weekly_report',[ReportController::class,'currentWeekReport']);
Route::get('/yearly_report',[ReportController::class,'currentYearReport']);
Route::get('/admin/{any}', function () {
    return view('dashboard');
  })->where('any', '.*');


require __DIR__.'/auth.php';
