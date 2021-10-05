<?php
namespace App\Repositories;

use App\Models\Brand;
use App\Repositories\BaseRepository;
use App\Interfaces\BrandRepositoryInterface;

class BrandRepository  extends BaseRepository implements BrandRepositoryInterface {

    public $model;
    public function __construct(Brand $model){
        parent::__construct($model);
        $this->model = $model;
    }

}