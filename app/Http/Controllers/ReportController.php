<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Interfaces\ReportRepositoryInterface;

class ReportController extends Controller
{
    private $reportRepository;

    /**
     * __construct
     *
     * @param  mixed $reportRepository
     * @return void
     */
    public function __construct(ReportRepositoryInterface $reportRepository){
        $this->reportRepository = $reportRepository;
    }
    /**
     * currentWeekReport
     *
     * @param  mixed $reportRepository
     * @return \Illuminate\Http\JsonResponse
     */
    public function currentWeekReport(ReportRepositoryInterface $reportRepository){
        $weeklyReport = $reportRepository->currentWeekReport();
        return response()->json([
            'weekly' => $weeklyReport
        ]);
    }

    /**
     * currentYearReport
     *
     * @param  mixed $reportRepository
     * @return \Illuminate\Http\JsonResponse
     */
    public function currentYearReport(ReportRepositoryInterface $reportRepository){
        $yearlyReport = $reportRepository->currentYearReport();
        return response()->json([
            'yearly' => $yearlyReport
        ]);
    }


}
