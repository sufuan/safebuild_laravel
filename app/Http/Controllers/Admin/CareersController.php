<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Inertia\Inertia;
use App\Models\CareerPerk;
use App\Models\OpenPosition;
use App\Models\JobApplication;

class CareersController extends Controller
{
    public function index()
    {
        return Inertia::render('Admin/Careers', [
            'perks' => CareerPerk::orderBy('order')->get(),
            'positions' => OpenPosition::all(),
            'applications' => JobApplication::with('openPosition')->latest()->get(),
        ]);
    }
}
