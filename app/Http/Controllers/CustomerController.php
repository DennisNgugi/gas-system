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
     * @return \Illuminate\Http\Response
     */
    public function index(CustomerRepositoryInterface $customerRepository)
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
     * @return \Illuminate\Http\Response
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
     * @return \Illuminate\Http\Response
     */
    public function show(Customer $customer)
    {
        //
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
     * @return \Illuminate\Http\Response
     */
    public function destroy(Customer $customer)
    {
        //
    }
}
