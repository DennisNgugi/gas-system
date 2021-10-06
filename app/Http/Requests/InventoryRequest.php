<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class InventoryRequest extends FormRequest
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
            'brand_id' => 'required',
            'branch_id' => 'required',
            'quantity' => 'required|min:0|numeric',
            'stock_in' => 'nullable|numeric',
            'stock_out' => 'nullable|numeric'
        ];
    }
    public function messages()
    {
        return [
            'brand_id.required' => 'The brand name field is required',
            'branch_id.required' => 'The branch name field is required',
        ];
    }
}
