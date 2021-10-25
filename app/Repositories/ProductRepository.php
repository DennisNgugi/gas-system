<?php
namespace App\Repositories;

use App\Models\Product;
use App\Models\Sale;
use App\Models\Sales;
use App\Repositories\BaseRepository;
use App\Interfaces\ProductRepositoryInterface;
use Carbon\Carbon;
use Illuminate\Support\Facades\DB;

class ProductRepository  extends BaseRepository implements ProductRepositoryInterface {

    public $model;
    public function __construct(Product $model){
        parent::__construct($model);
        $this->model = $model;
    }


    public function productDetail($id)
    {
        // TODO: Implement productDetail() method.
        $product_detail = $this->model->with('sales','transfers')->find($id);

//
//        $product_detail = $this->model->where('id',$id)->with([
//            'sales' => function($query)
//            {
//                 $query->select( 'product_id','sale_type','gas_type');
//
//            }
    //   ])->get()->groupBy('created_at');
//        $product_detail = Sale::select('gas_type','sale_type','quantity',DB::raw('DATE(created_at) as created_at'))
//            ->orderBy('created_at')->where('product_id',$id)
//            ->get()->groupBy('created_at');

//       $product_detail = DB::table('sales')
//            ->join('products','products.id','=','sales.product_id')
//           ->select('products.product_name','sales.*')
//            ->where('sales.product_id',$id)
//
//            ->get()->groupBy(DB::raw('MONTHNAME(created_at) ASC'));

        return $product_detail->transfers->groupBy(function($date) {
            return Carbon::parse($date->created_at)->format('Y-m-d'); // grouping by years
            //return Carbon::parse($date->created_at)->format('m'); // grouping by months
        })->map(function ($row) {
            return $row->sum('stock_in');
        });
    }



}
