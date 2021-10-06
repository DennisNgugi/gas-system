<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Inventory extends Model
{
    use HasFactory;

    protected $guarded = [];

    public function brands(){
        return $this->belongsTo(Brand::class,'brand_id');
    }

    public function branches(){
        return $this->belongsTo(Branch::class,'branch_id');
    }
}
