<?php

namespace App\Http\Controllers;

use App\Interfaces\CheckoutRepositoryInterface;
use App\Models\Reciept;
use Carbon\Carbon;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class RecieptController extends Controller
{

    private $checkoutRepository;

    public function __construct(CheckoutRepositoryInterface $checkoutRepository){
        $this->checkoutRepository = $checkoutRepository;
    }
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\JsonResponse
     */
    public function index()
    {
        $reciepts = Reciept::with('sales','customers:id,customer_name','sales.products:id,product_name','users:id,name')->paginate(10);
        return response()->json([
            'reciepts' => $reciepts
        ]);
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\JsonResponse
     */
    public function salesReport(Request $request)
    {

        $to_date =Carbon::parse($request->todate)->format('Y-m-d');
        $from_date =Carbon::parse($request->fromdate)->format('Y-m-d');


        if($to_date!= '' && $from_date!=''){
            $sales =  Reciept::with('sales','users:id,name','customers:id,customer_name')
                ->where(DB::raw("(DATE_FORMAT(created_at,'%Y-%m-%d'))"), '>=', $from_date)
                ->where(DB::raw("(DATE_FORMAT(created_at,'%Y-%m-%d'))"), '<=', $to_date)->get();

        }
        return response()->json([
            'sales' => $sales
        ]);

    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\JsonResponse
     */
    public function store(Request $request,CheckoutRepositoryInterface $checkoutRepository)
    {
         try{
         //return $request;
        $sales = $checkoutRepository->saveTransaction($request);
        return response()->json([
            'success' => 'Transaction processed succesfully'
        ],200);
         }catch(\Exception $exception){
             return response()->json([
                 "errors" => "Unsuccesfull Transaction. Try again!!"
             ],500);
         }
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\Reciept  $reciept
     * @return \Illuminate\Http\JsonResponse
     */
    public function show($id,CheckoutRepositoryInterface $checkoutRepository)
    {
        $reciept = $checkoutRepository->recieptDetail($id);
        return response()->json([
            'recieptDetail' => $reciept
        ],200);
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\Reciept  $reciept
     * @return \Illuminate\Http\Response
     */
    public function edit(Reciept $reciept)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\Reciept  $reciept
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Reciept $reciept)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Reciept  $reciept
     * @return \Illuminate\Http\JsonResponse
     */
    public function destroy($id)
    {
        try {
            $reciept = Reciept::findOrFail($id);
            $reciept->delete($id);
            return response()->json(['success','Reciept successfully deleted']);
        }catch (\Exception $e){
            return response()->json(['error','Failed to delete. Try again!']);
        }

    }
}
