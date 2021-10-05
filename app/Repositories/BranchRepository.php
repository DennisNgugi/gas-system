<?php
namespace App\Repositories;

use App\Models\Branch;
use App\Repositories\BaseRepository;
use App\Interfaces\BranchRepositoryInterface;

class BranchRepository  extends BaseRepository implements BranchRepositoryInterface {

    public $model;
    public function __construct(Branch $model){
        parent::__construct($model);
        $this->model = $model;
    }

}