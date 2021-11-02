<?php

namespace App\Models;

use App\Repositories\TransferRepository;
use Carbon\Carbon;
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
    public function getTotalStockIn() {
        return $this->transfers->sum('stock_in');
    }

    public function getCreatedAtAttribute($value)
    {
        return Carbon::parse($value)->toDayDateTimeString();
    }
    // Notify every user after update has been done
//     public static function boot()
//     {
//         parent::boot();
//         static::creating(function ($model) {
//           $transfer =  new TransferRepository($model);
//           $transfer->transfer($model);
//
//         });
//     }


}
