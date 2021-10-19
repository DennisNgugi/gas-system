<?php

namespace App\Interfaces;

interface ReportRepositoryInterface
{
    public function currentWeekReport();

    public function currentYearReport();
}
