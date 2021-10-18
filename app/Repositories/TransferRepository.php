<?php

namespace App\Repositories;

use App\Interfaces\TransferRepositoryInterface;
use App\Models\Transfer;

class TransferRepository extends BaseRepository implements TransferRepositoryInterface
{
    public $model;
    public function __construct(Transfer $model)
    {
        parent::__construct($model);
        $this->model = $model;
    }
}
