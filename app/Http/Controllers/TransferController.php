<?php

namespace App\Http\Controllers;

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
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        //
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
            'to_branch_id' => $request->to_branch_id,
            'from_branch_id' => $request->from_branch_id,
            'product_id' => $request->product_id,
            'quantity' => $request->quantity
        ];
        $product = $transferRepository->create($transfers);
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
