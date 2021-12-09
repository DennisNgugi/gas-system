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
Route::group(['middleware' => 'auth'], function () {
    Route::get('/', function () {
        return view('store');
    });
});
Route::group(['middleware' => ['auth','is_admin']],function (){
    Route::get('/admin/{any}', function () {
        return view('dashboard');
    })->where('any', '.*');
});
Route::get('/print', function () {
    return view('print');
});

Route::resource('product',ProductController::class);
Route::delete('/product/{id}',[ProductController::class, 'destroy']);
Route::get('/products',[ProductController::class, 'index2']);
Route::get('/product/edit/{id}',[ProductController::class, 'edit']);
Route::post('/product/update/{id}',[ProductController::class, 'update']);
Route::get('/product/sales/view/{id}',[ProductController::class, 'getProductSales']);
Route::get('/product/transfers/view/{id}',[ProductController::class, 'getProductTransfers']);
Route::resource('branch',BranchController::class);
Route::resource('inventory',InventoryController::class);
Route::resource('brand',BrandController::class);
Route::resource('checkout',RecieptController::class);
Route::resource('customer',CustomerController::class);
Route::get('/customers',[CustomerController::class, 'index2']);
Route::get('/customer/view/{id}',[CustomerController::class, 'show']);
Route::delete('/customer/{id}',[CustomerController::class, 'destroy']);
Route::resource('transfer',TransferController::class);
Route::get('/transfers/report',[TransferController::class, 'transfersReport']);
Route::get('/transfers/today',[TransferController::class, 'todayTransfers']);
Route::resource('reciept',RecieptController::class);
Route::get('/reciept/view/{id}',[RecieptController::class, 'show']);
Route::delete('/reciept/{id}',[RecieptController::class, 'destroy']);
Route::get('/sales/today',[RecieptController::class, 'todaySales']);
Route::get('/sales/report',[RecieptController::class, 'salesReport']);
Route::get('/weekly_report',[ReportController::class,'currentWeekReport']);
Route::get('/last_week',[ReportController::class,'lastWeekReport']);
Route::get('/yearly_report',[ReportController::class,'currentYearReport']);


require __DIR__.'/auth.php';
