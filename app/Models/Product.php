<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Product extends Model
{
    use HasFactory;

    protected $guarded = [];

    protected $casts = [
        'price' => 'json',
        'quantity'=>'array',
        'stock'=>'json'
    ];

    public function brands(){
        return $this->belongsTo(Brand::class,'brand_id');
    }

}
