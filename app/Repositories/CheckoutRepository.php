<?php

namespace App\Repositories;

use App\Interfaces\CheckoutRepositoryInterface;
use App\Interfaces\StockRepositoryInterface;
use App\Models\Reciept;
use App\Models\Sale;
use App\Models\Sales;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Str;

class CheckoutRepository extends BaseRepository implements CheckoutRepositoryInterface
{

    // inject the stock constructor in order to change quantity
    private $stockRepository;
    public function __construct(StockRepositoryInterface $stockRepository){

        $this->stockRepository = $stockRepository;
    }

    public function saveTransaction($data)
    {

        $checkoutDetails = $data->checkout;
        $cartDetails = $data->cart;
        $balance = $data->balance;
        $total_amount = $data->total_amount;
        $total_quantity = $data->total_quantity;
        $discount = $data->discount;

        try {
            DB::transaction(function () use ($checkoutDetails,$cartDetails,$balance,$discount,$total_amount,$total_quantity){
                $reciept = new Reciept;
                $reciept->reciept_code = $this->generateRecieptCode();
                $reciept->user_id = Auth::id();
                $reciept->customer_id = $checkoutDetails['customer_id'];
                $reciept->total_quantity = $total_quantity;
                $reciept->total_amount = $total_amount;
                $reciept->amount_paid = $checkoutDetails['amount_paid'];
                $reciept->balance = $balance;
//                if ($balance<0){
//                    $reciept->payment_status = false;
//                }
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

                    $this->stockRepository->decrementStock($cart);

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
