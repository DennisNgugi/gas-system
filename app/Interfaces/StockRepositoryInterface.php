<?php

namespace App\Interfaces;

interface StockRepositoryInterface
{
    public function incrementStock($item);

    public function decrementStock($item);

    public function checkQuantity($item);
}
