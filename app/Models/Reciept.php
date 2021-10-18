<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Reciept extends Model
{
    use HasFactory;

    protected $guarded = [];

    public function sales(){
        return $this->hasMany(Sale::class,'reciept_id');
    }
    public function customers(){
        return $this->belongsTo(Customer::class,'customer_id');
    }
}
