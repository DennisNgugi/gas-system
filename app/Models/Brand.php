<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Brand extends Model
{
    use HasFactory;
    protected $guarded = [];

    public function branches(){
        return $this->belongsToMany(Branch::class)->withPivot(['quantity','stock_in','stock_out'])->withTimestamps();
    }

    public function products(){
        return $this->hasMany(Product::class,'brand_id');
    }
}
