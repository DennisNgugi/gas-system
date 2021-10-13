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

    }

    public function decrementStock($item)
    {
        // get item id
        $itemIndex = $this->product->findOrFail($item['product']['id']);
        // check whether complete or refill
        if ($item['detail']['gas_type'] === 'C'){
            $newOutlightQuantity = $this->checkQuantity($item)['outlight'] - $item['quantity'];
            $itemIndex->update(['quantity->outlight'=> $newOutlightQuantity]);
        }elseif($item['detail']['gas_type'] === 'E'){
            $newOutlightQuantity = $this->checkQuantity($item)['outlight'] - $item['quantity'];
            $itemIndex->update(['quantity->outlight'=> $newOutlightQuantity]);
            $newEmptyQuantity = $this->checkQuantity($item)['empty'] + $item['quantity'];
            $itemIndex->update(['quantity->empty'=> $newEmptyQuantity]);
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
