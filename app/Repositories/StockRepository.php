<?php

namespace App\Repositories;

use App\Interfaces\StockRepositoryInterface;
use App\Models\Product;

class StockRepository extends BaseRepository implements StockRepositoryInterface
{

    private $product;
    public function __construct(Product $product)
    {
        parent::__construct($product);
        $this->product = $product;
    }

    public function incrementStock($item)
    {
        $itemIndex = parent::findIndex($item['product']['id']);

    }

    public function decrementStock($item)
    {
        // get item id
        $itemIndex = parent::findIndex($item['product']['id']);
        $exchange_id = parent::findIndex($item['detail']['exchanged']);
        // check whether complete or refill
        if ($item['detail']['gas_type'] === 'C'){
            // method 1
            $newOutlightQuantity = $itemIndex->quantity['outlight'] - $item['quantity'];
                print_r($itemIndex->quantity['outlight']);
            $itemIndex->update(['quantity->outlight'=> $newOutlightQuantity]);


        }elseif($item['detail']['gas_type'] === 'R'){
            $newOutlightQuantity = $itemIndex->quantity['outlight'] - $item['quantity'];
            $newEmptyQuantity = $exchange_id->quantity['empty']+$item['quantity'];
           // $newEmptyQuantity = $itemIndex->quantity['empty'] + $item['quantity'];
            $itemIndex->update(['quantity->outlight'=> $newOutlightQuantity]);
            $itemIndex->where('id',$item['detail']['exchanged'])->update(['quantity->empty' => $newEmptyQuantity]);
        }else{
            $newOtherQuantity = $itemIndex->quantity['others'] - $item['quantity'];
            $itemIndex->update(['quantity->others'=> $newOtherQuantity]);
        }

    }

    public function checkQuantity($item)
    {
        // TODO: Implement checkQuantity() method.
        $quantityIndex = $this->model->findOrFail($item['product']['id']);
        $quantity = $quantityIndex->quantity;
        return $quantity;
    }
}
