<?php

namespace App\Repositories;

use App\Interfaces\ReportRepositoryInterface;
use App\Models\Reciept;
use App\Models\Sale;
use Carbon\Carbon;
use Illuminate\Support\Facades\DB;

class ReportRepository extends BaseRepository implements ReportRepositoryInterface
{
    public $model;
    public function __construct(Sale $model){
        $this->model = $model;
    }
    /**
     * currentWeekReport
     *
     * @return void
     */
    public function currentWeekReport(){
        return $this->model->select(DB::raw("SUM(total) as amount,SUM(quantity) as quantity"),DB::raw("DAYNAME(created_at) as dayname"))
            ->whereBetween('created_at', [Carbon::now()->startOfWeek(), Carbon::now()->endOfWeek()])
            ->whereYear('created_at', date('Y'))
            ->groupBy('dayname')
            ->get();
    }

    public function lastWeekReport(){


        return $this->model->select(DB::raw("SUM(total) as amount,SUM(quantity) as quantity"),DB::raw("DAYNAME(created_at) as dayname"))
            ->whereBetween('created_at',
                [Carbon::now()->subWeek()->startOfWeek(), Carbon::now()->subWeek()->endOfWeek()]
            )
            ->get();
    }
    /**
     * currentMonthReport
     *
     * @return void
     */
    public function currentYearReport(){
        $currentYear = date('Y');

        return $this->model->whereRaw('YEAR(created_at) = ?',[$currentYear])
            ->select(DB::raw('SUM(total) as amount,SUM(quantity) as quantity, MONTHNAME( created_at ) as month'))
            ->groupBy(DB::raw('MONTHNAME(created_at) ASC'))->get();

    }


}
