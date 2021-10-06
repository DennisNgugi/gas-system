<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Branch extends Model
{
    use HasFactory;

    protected $guarded = [];

    public function brands(){
        return $this->belongsToMany(Brand::class)->withPivot(['quantity','stock_in','stock_out'])->withTimestamps();
    }
}
