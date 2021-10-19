<?php

namespace App\Interfaces;

interface TransferRepositoryInterface
{
    public function transfer($product);
    public function incrementStock($item);
    public function decrementStock($item);
}
