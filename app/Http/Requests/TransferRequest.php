<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class TransferRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     *
     * @return bool
     */
    public function authorize()
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array
     */
    public function rules()
    {

                  return [
                      'product_id' => 'required',
                      'branch_id' => 'required',
                      'stock_type' => 'required',
                      'gas_type' => 'required'
                  ];

    }
    public function messages()
    {
        return [
            'product_id.required' => 'The product name field is required',
            'branch_id.required' => 'The branch name field is required',
        ];
    }
}
