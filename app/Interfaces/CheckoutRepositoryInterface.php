<?php

namespace App\Interfaces;

interface CheckoutRepositoryInterface
{
    public function saveTransaction($data);

    public function generateRecieptCode();
}
