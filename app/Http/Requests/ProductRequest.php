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
             'product_name' => 'required',
            'brand_id' => 'required', // for update purpose
            'unit' => 'required',
        ];
    }
    public function messages()
    {
        return [
            'brand_id.required' => 'The category name field is required',
        ];
    }
}
