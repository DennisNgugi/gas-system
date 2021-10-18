<?php

namespace App\Repositories;

use App\Interfaces\TransferRepositoryInterface;
use App\Models\Branch;
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

        // if from HQ to another branch
        // find from_branch_id
        // reduce quantity



        //if from branch to HQ
        // find to_branch_id

        $branch = parent::findIndex($product->to_branch_id);
    }
}
