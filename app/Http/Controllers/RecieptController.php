<?php

namespace App\Http\Controllers;

use App\Interfaces\CheckoutRepositoryInterface;
use App\Models\Reciept;
use Illuminate\Http\Request;

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
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request,CheckoutRepositoryInterface $checkoutRepository)
    {
        // try{
         //return $request;
        $sales = $checkoutRepository->saveTransaction($request);
        return response()->json([
            'success' => 'Transaction processed succesfully'
        ],200);
        // }catch(\Exception $exception){
        //     return response()->json([
        //         "errors" => "Item has not been added to database. Try again!!"
        //     ],500);
        // }
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\Reciept  $reciept
     * @return \Illuminate\Http\Response
     */
    public function show(Reciept $reciept)
    {
        //
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
     * @return \Illuminate\Http\Response
     */
    public function destroy(Reciept $reciept)
    {
        //
    }
}
