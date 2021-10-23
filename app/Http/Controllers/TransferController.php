<?php

namespace App\Http\Controllers;

use App\Http\Requests\TransferRequest;
use App\Interfaces\StockRepositoryInterface;
use App\Interfaces\TransferRepositoryInterface;
use App\Models\Transfer;
use Carbon\Carbon;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

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
//        $transfers = $transferRepository->withRelation(['products:id,product_name','branches:id,branch_name'])->makeHidden(['updated_at'])->groupBy(function($item) {
//              return $item["products"]['product_name'];
//        });
        $transfers = Transfer::with(['products' => function ($query) {
            $query->select('id', 'product_name');
        },
            'branches' => function ($query) {
                $query->select('id', 'branch_name');
            },
        ])->get()->groupBy(function ($item) {
            return Carbon::parse($item->created_at)->toFormattedDateString()." - ".$item['products']['product_name'];
        });
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
    public function store(TransferRequest $request,TransferRepositoryInterface $transferRepository)
    {
        $transfers = [
            'branch_id' => $request->branch_id,
            'stock_in' => $request->stock_in,
            'stock_type' => $request->stock_type,
            'product_id' => $request->product_id,
            'stock_out' => $request->stock_out,
            'remarks' => $request->remarks
        ];
            $transferRepository->create($transfers);

            $transferRepository->transfer($transfers);


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
