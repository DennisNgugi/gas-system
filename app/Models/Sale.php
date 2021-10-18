<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Sale extends Model
{
    use HasFactory;

    public function products(){
        return $this->belongsTo(Product::class,'product_id');
    }

    public function reciepts(){
        return $this->belongsTo(Reciept::class,'reciept_id');
    }
}
