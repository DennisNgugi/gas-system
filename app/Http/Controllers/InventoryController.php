<?php

namespace App\Http\Controllers;

use App\Interfaces\BranchRepositoryInterface;
use App\Interfaces\BrandRepositoryInterface;
use App\Models\Branch;
use App\Models\Inventory;
use Illuminate\Http\Request;
use App\Http\Requests\InventoryRequest;
use App\Interfaces\InventoryRepositoryInterface;

class InventoryController extends Controller
{

    private $branchRepository;
    private $brandRepository;

    public function __construct(BranchRepositoryInterface $branchRepository,BrandRepositoryInterface $brandRepository){
        $this->branchRepository = $branchRepository;
        $this->brandRepository = $brandRepository;
    }
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index(BranchRepositoryInterface $branchRepository,BrandRepositoryInterface $brandRepository)
    {
       $inventory = $branchRepository->withRelation(['brands','brands.products']);
        return response()->json([
            'inventory' => $inventory
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
     * @param  \Illuminate\H  ttp\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(InventoryRequest $request,BranchRepositoryInterface $branchRepository,BrandRepositoryInterface $brandRepository)
    {
        $branch = $branchRepository->findIndex($request->branch_id);
        $brand = $brandRepository->findIndex($request->brand_id);

        $branch->brands()->syncWithoutDetaching([
            $brand->id => [
                'quantity' => $request->quantity,
                'stock_in' => $request->stock_in,
                'stock_out' => $request->stock_out
            ]
        ]);
//        $inventory = [
//            'brand_id' => $request->brand_id,
//            'branch_id' => $request->branch_id,
//            'quantity' => $request->quantity,
//            'stock_in' => $request->stock_in,
//            'stock_out' => $request->stock_out
//        ];
//         $inventoryRepository->create($inventory);
         return response()->json(['success' => 'Inventory Added Succesfully'],200);
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\Inventory  $inventory
     * @return \Illuminate\Http\Response
     */
    public function show(Inventory $inventory)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\Inventory  $inventory
     * @return \Illuminate\Http\Response
     */
    public function edit(Inventory $inventory)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\Inventory  $inventory
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Inventory $inventory)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Inventory  $inventory
     * @return \Illuminate\Http\Response
     */
    public function destroy(Inventory $inventory)
    {
        //
    }
}
