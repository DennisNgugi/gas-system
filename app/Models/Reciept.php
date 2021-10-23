<?php

namespace App\Models;

use Carbon\Carbon;
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
    public function users(){
        return $this->belongsTo(User::class,'user_id');
    }
    public function getCreatedAtAttribute($value)
    {
        return Carbon::parse($value)->toDayDateTimeString();
    }

}
