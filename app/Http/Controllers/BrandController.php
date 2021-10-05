<?php

namespace App\Http\Controllers;

use App\Models\Brand;
use Illuminate\Http\Request;
use App\Http\Requests\BrandRequest;
use App\Interfaces\BrandRepositoryInterface;

class BrandController extends Controller
{
    private $brandRepository;

    public function __construct(BrandRepositoryInterface $brandRepository){
        $this->brandRepository = $brandRepository;
    }
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index(BrandRepositoryInterface $brandRepository)
    {
        $brands = $brandRepository->all();
        return response()->json([
            'brands' => $brands
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
     * @return \Illuminate\Http\Response
     */
    public function store(BrandRequest $request,BrandRepositoryInterface $brandRepository)
    {
        $gas = [
            'brand_name' => $request->brand_name,
           
        ];
        $brand = $brandRepository->create($gas);
         return response()->json(['success' => 'Gas Brand Added Succesfully'],200);
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\Brand  $Brand
     * @return \Illuminate\Http\Response
     */
    public function show(Brand $Brand)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\Brand  $Brand
     * @return \Illuminate\Http\Response
     */
    public function edit(Brand $Brand)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\Brand  $Brand
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Brand $Brand)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Brand  $Brand
     * @return \Illuminate\Http\Response
     */
    public function destroy(Brand $Brand)
    {
        //
    }
}
