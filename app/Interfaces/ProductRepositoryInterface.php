<?php
namespace App\Interfaces;

interface ProductRepositoryInterface{
    public function getProductSales($id);
    public function getProductTransfers($id);
}
