<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use Inertia\Inertia;

class DashboardController extends Controller
{
    public function index()
    {
        return Inertia::render('Admin/Dashboard', [
            'stats' => [
                'newJobs' => 0,
                'newMessages' => 0,
                'newQuotes' => 0,
                'totalItems' => 0,
            ]
        ]);
    }
}
