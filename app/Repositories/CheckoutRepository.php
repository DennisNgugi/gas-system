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
                if ($reciept->balance<0){
                    $reciept->payment_status = false;
                }
                $reciept->payment_mode = $checkoutDetails['payment_mode'];
                $reciept->phone_number = $checkoutDetails['phone_number'];
//                $reciept->message_time = $cartDetails['message_time'];
                $reciept->remarks = $checkoutDetails['remarks'];

                $reciept->save();

                foreach($cartDetails as $cart) {
                    $sales = new Sale;
                    $sales->reciept_id = $reciept->id;
                    $sales->product_id = $cart['product']['id'];
                    $sales->quantity = $cart['quantity'];
                    $sales->price = $cart['detail']['price'];
                    $sales->total = $cart['detail']['price'] * $cart['quantity'];
                    $sales->sale_type = $cart['detail']['sale_type'];
                    $sales->gas_type = $cart['detail']['gas_type'];
                    $sales->save();

                }

            });
        }catch (\Exception $exception){
            echo $exception->getMessage();
        }
    }

    public function generateRecieptCode()
    {
        return time();
    }


}
