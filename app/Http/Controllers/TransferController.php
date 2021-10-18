<?php

namespace App\Http\Controllers;

use App\Interfaces\StockRepositoryInterface;
use App\Interfaces\TransferRepositoryInterface;
use App\Models\Transfer;
use Illuminate\Http\Request;

class TransferController extends Controller
{
    private $transferRepository;

    public function __construct(TransferRepositoryInterface $transferRepository){
        $this->transferRepository = $transferRepository;
    }
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\JsonResponse
     */
    public function index(TransferRepositoryInterface $transferRepository)
    {
        $transfers = $transferRepository->withRelation(['products:id,product_name','branches:id,branch_name'])->makeHidden(['updated_at']);
        return response()->json([
            'transfers' => $transfers
        ],200);
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
     * @return \Illuminate\Http\JsonResponse
     */
    public function store(Request $request,TransferRepositoryInterface $transferRepository)
    {
        $transfers = [
            'branch_id' => $request->branch_id,
            'stock_in' => $request->stock_in,
            'stock_type' => $request->stock_type,
            'product_id' => $request->product_id,
            'stock_out' => $request->stock_out
        ];
        $product = $transferRepository->create($transfers);
//        if($product){
//            $transferRepository->transfer($transfers);
//        }

        return response()->json(['success' => 'Transfer Completed Succesfully'],200);
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\Transfer  $transfer
     * @return \Illuminate\Http\Response
     */
    public function show(Transfer $transfer)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\Transfer  $transfer
     * @return \Illuminate\Http\Response
     */
    public function edit(Transfer $transfer)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\Transfer  $transfer
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Transfer $transfer)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Transfer  $transfer
     * @return \Illuminate\Http\Response
     */
    public function destroy(Transfer $transfer)
    {
        //
    }
}
