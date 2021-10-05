<?php
namespace App\Repositories;

use App\Models\Product;
use App\Repositories\BaseRepository;
use App\Interfaces\ProductRepositoryInterface;

class ProductRepository  extends BaseRepository implements ProductRepositoryInterface {

    public $model;
    public function __construct(Product $model){
        parent::__construct($model);
        $this->model = $model;
    }

}