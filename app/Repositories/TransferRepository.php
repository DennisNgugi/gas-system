<?php

namespace App\Repositories;

use App\Interfaces\StockRepositoryInterface;
use App\Interfaces\TransferRepositoryInterface;
use App\Models\Branch;
use App\Models\Product;
use App\Models\Transfer;

class TransferRepository extends BaseRepository implements TransferRepositoryInterface
{
    public $model;
    public function __construct(Transfer $model)
    {
        parent::__construct($model);
        $this->model = $model;

    }

    public function transfer($product)
    {

        // if($product['stock_type'] === 'in' && $product['gas_type'] === 'o' ){
        //     return $this->incrementStockInOutright($product);
        // }else if($product['stock_type'] === 'in' && $product['gas_type'] === 'e' ){
        //    return $this->incrementStockInEmpty($product);
        // }else if($product['stock_type'] === 'out' && $product['gas_type'] === 'o' ){
        //     return $this->decrementStockOutOutright($product);
        // }else{
        //     return $this->decrementStockOutEmpty($product);
        // }
        
        if($product['stock_type'] === 'in'){
            return $this->incrementStock($product);
        }else{
           return $this->decrementStock($product);
        }


    }

    public function incrementStock($item)
    {

       $product = Product::findOrFail($item['product_id']);
        $newOutlightQuantity = $product['quantity']['outlight'] + $item['stock_in'];
       // $newEmptyQuantity = $product['quantity']['empty'] - $item['stock_in'];
        $product->update(['quantity->outlight'=> $newOutlightQuantity]);
    }

    public function decrementStock($item)
    {
        $product = Product::findOrFail($item['product_id']);
        $newOutlightQuantity = $product['quantity']['outlight'] - $item['stock_out'];
        $newEmptyQuantity = $product['quantity']['empty'] + $item['stock_out'];
        $product->update(['quantity->outlight'=> $newOutlightQuantity,'quantity->empty' => $newEmptyQuantity]);
    }

    public function getTransfersByProductId($id)
    {
        return $this->model->with('products','branches')->get()->groupBy(function ($item){
            return $item->created_at->format('Y-m-d');
        });
    }


}
