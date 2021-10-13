<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class ProductRequest extends FormRequest
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
            // 'product_code' => 'unique:products',
//            'brand_id' => 'required', // for update purpose
//            'retail_price'=> 'required|numeric',
//            'wholesale_price'=> 'numeric',
//            'unit' => 'required',
          //  'category_id' => 'required|exists:categories,id'
        ];
    }
    public function messages()
    {
        return [
            'brand_id.required' => 'The brand name field is required',
        ];
    }
}
