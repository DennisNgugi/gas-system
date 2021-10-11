<?php

namespace App\Repositories;

use App\Interfaces\CheckoutRepositoryInterface;
use App\Models\Reciept;
use App\Models\Sale;
use App\Models\Sales;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Str;

class CheckoutRepository extends BaseRepository implements CheckoutRepositoryInterface
{
    public $model;
    public function __construct(Reciept $model){
        parent::__construct($model);
        $this->model = $model;
    }

    public function saveTransaction($data)
    {

        $checkoutDetails = $data->checkout;
        $cartDetails = $data->cart;

        try {
            DB::transaction(function () use ($checkoutDetails,$cartDetails){
                $reciept = new Reciept;
                $reciept->reciept_code = $this->generateRecieptCode();
                $reciept->user_id = 1;
                //$reciept->customer_name = $checkoutDetails['customer_name'];
                $reciept->total_quantity = $checkoutDetails['total_quantity'];
                $reciept->total_amount = $checkoutDetails['total_amount'];
                $reciept->amount_paid = $checkoutDetails['amount_paid'];
                $reciept->balance = $checkoutDetails['balance'];
                $reciept->payment_mode = $checkoutDetails['payment_mode'];
                $reciept->gas_status = $checkoutDetails['gas_status'];
                $reciept->sale_type = $checkoutDetails['sale_type'];
                $reciept->remarks = $checkoutDetails['remarks'];

                $reciept->save();

                foreach($cartDetails as $cart) {
                    $sales = new Sale;
                    $sales->reciept_id = $reciept->id;
                    $sales->product_id = $cart['product']['id'];
                    $sales->quantity = $cart['quantity'];
                    $sales->price = $cart['product']['retail_price'];
                    $sales->total = $cart['product']['retail_price'] * $cart['quantity'];

                    $sales->save();

                }

            });
        }catch (\Exception $exception){
            echo $exception->getMessage();
        }
    }

    public function generateRecieptCode()
    {
        return Str::random(5).time();
    }


}
