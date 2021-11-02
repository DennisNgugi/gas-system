<?php
namespace App\Repositories;

use App\Models\Product;
use App\Models\Sale;
use App\Models\Sales;
use App\Models\Transfer;
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

    public function getProductTransfers($id)
    {
        // TODO: Implement getProductTransfers() method.
        $product_detail =  Transfer::where('product_id',$id)->with('branches:id,branch_name')->whereMonth('created_at', Carbon::now()->month)->paginate(10);
        return $product_detail;
    }


    public function getProductSales($id)
    {
        // TODO: Implement productDetail() method.
        $product_detail =  Sale::where('product_id',$id)->whereMonth('created_at', Carbon::now()->month)->paginate(10);
//        $product_detail = $this->model->where('id',$id)->with('sales')->paginate(10)->groupBy(function($date) {
//            return $date['sales'][0]['sale_type']; // grouping by years
//            //return Carbon::parse($date->created_at)->format('m'); // grouping by months
//        });;

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

        return $product_detail;
        //return $product_detail;
    }



}
