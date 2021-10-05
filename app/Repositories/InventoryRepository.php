<?php
namespace App\Repositories;

use App\Models\Inventory;
use App\Repositories\BaseRepository;
use App\Interfaces\InventoryRepositoryInterface;

class InventoryRepository  extends BaseRepository implements InventoryRepositoryInterface {

    public $model;
    public function __construct(Inventory $model){
        parent::__construct($model);
        $this->model = $model;
    }

}