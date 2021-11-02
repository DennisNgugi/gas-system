<?php

namespace App\Models;

use Carbon\Carbon;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Product extends Model
{
    use HasFactory;

    protected $guarded = [];

    protected $casts = [
        'price' => 'json',
        'quantity'=>'json',
        'stock'=>'json'
    ];

    public function setProductNameAttribute($value)
    {
        $this->attributes['product_name'] = ucfirst($value);
    }

    public function brands(){
        return $this->belongsTo(Brand::class,'brand_id');
    }
    public function sales(){
        return $this->hasMany(Sale::class,'product_id');
    }
    public function transfers(){
        return $this->hasMany(Transfer::class,'product_id');

    }
    public function getCreatedAtAttribute($value)
    {
        return Carbon::parse($value)->toFormattedDateString();
    }


}
