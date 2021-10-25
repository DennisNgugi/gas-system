<?php

namespace App\Http\Controllers;

use App\Http\Requests\CustomerRequest;
use App\Interfaces\CustomerRepositoryInterface;
use App\Models\Customer;
use Illuminate\Http\Request;

class CustomerController extends Controller
{
    private $customerRepository;

    public function __construct(CustomerRepositoryInterface $customerRepository){
        $this->customerRepository = $customerRepository;
    }
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\JsonResponse
     */
    public function index(CustomerRepositoryInterface $customerRepository)
    {
        $customers = $customerRepository->paginateAll();
        return response()->json([
            'customers' => $customers
        ],200);
    }
    public function index2(CustomerRepositoryInterface $customerRepository)
    {
        $customers = $customerRepository->all();
        return response()->json([
            'customers' => $customers
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
    public function store(CustomerRequest $request,CustomerRepositoryInterface $customerRepository)
    {
        $customers = [
            'customer_name' => $request->customer_name,
            'phone_number' => $request->phone_number,
            'location' => $request->location,

        ];
        $customer = $customerRepository->create($customers);
        return response()->json(['success' => 'Customer Added Succesfully'],200);
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\Customer  $customer
     * @return \Illuminate\Http\JsonResponse
     */
    public function show($id)
    {
        $reciepts = Customer::where('id',$id)->with('reciepts','reciepts.users:id,name')->paginate(15);
        return response()->json([
            'reciepts' => $reciepts
        ]);
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\Customer  $customer
     * @return \Illuminate\Http\Response
     */
    public function edit(Customer $customer)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\Customer  $customer
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Customer $customer)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Customer  $customer
     * @return \Illuminate\Http\JsonResponse
     */
    public function destroy($id,CustomerRepositoryInterface $customerRepository)
    {
        try {
            $product = $customerRepository->delete($id);
            return response()->json(['success','Customer has been deleted']);
        }catch (\Exception $e){
            return response()->json(['error','Failed to delete.Try again!']);
        }
    }
}
