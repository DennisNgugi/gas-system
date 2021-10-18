<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Transfer extends Model
{
    use HasFactory;

    protected $guarded=[];

    public function products(){
        return $this->belongsTo(Product::class,'product_id');
    }
    public function branches(){
        return $this->belongsTo(Branch::class,'branch_id');
    }
}
