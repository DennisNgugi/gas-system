<?php

namespace App\Http\Controllers;

use App\Models\Product;
use Illuminate\Http\Request;
use App\Http\Requests\ProductRequest;
use App\Interfaces\ProductRepositoryInterface;

class ProductController extends Controller
{

    private $productRepository;

    public function __construct(ProductRepositoryInterface $productRepository){
        $this->productRepository = $productRepository;
    }
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\JsonResponse
     */
    public function index(ProductRepositoryInterface $productRepository)
    {
        $products = $productRepository->withRelationPaginated(['brands:id,brand_name']);
        return response()->json([
            'products' => $products
        ],200);
    }
    public function index2(ProductRepositoryInterface $productRepository)
    {
        $products = $productRepository->withRelation(['brands:id,brand_name']);
        return response()->json([
            'products' => $products
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
    public function store(ProductRequest $request,ProductRepositoryInterface $productRepository)
    {
   // return $request;

        $products = [
            'product_name' => $request->product_name,
            'brand_id' => $request->brand_id,
            'unit' => $request->unit,
            'price' => $request->price,
            'quantity' => $request->quantity


        ];
        $product = $productRepository->create($products);
        return response()->json(['success' => 'Product Added Succesfully'],200);
    }

    // public function getUnitName($id){
    //     $unitName = Unit::findOrFail($id);

    //     return $unitName;
    // }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\Product  $product
     * @return \Illuminate\Http\JsonResponse
     */
    public function show($id,ProductRepositoryInterface $productRepository)
    {
        $product = $productRepository->productDetail($id);
        return response()->json([
            'productDetail' => $product
        ],200);
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\Product  $product
     * @return \Illuminate\Http\JsonResponse
     */
    public function edit($id,ProductRepositoryInterface $productRepository)
    {
        $product = $productRepository->findIndex($id);
        return response()->json([
            'product' => $product
        ],200);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\Product  $product
     * @return \Illuminate\Http\JsonResponse
     */
    public function update(ProductRequest $request,ProductRepositoryInterface $productRepository,$id)
    {
       // try{
            $product = $productRepository->update($request->all(),$id);
            return response()->json([
                "success" => "Product updated Successfully"
            ],200);
//        }catch(\Exception $exception){
//            return response()->json([
//                "errors" => "Product has failed to update!"
//            ],500);
//        }
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Product  $product
     * @return \Illuminate\Http\JsonResponse
     */
    public function destroy(ProductRepositoryInterface $productRepository,$id)
    {
        try {
            $product = $productRepository->delete($id);
            return response()->json(['success','Product has been deleted']);
        }catch (\Exception $e){
            return response()->json(['error','Failed to delete.Try again!']);
        }

    }
}
