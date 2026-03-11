<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Inertia\Inertia;
use App\Models\QuoteRequest;

class QuoteRequestController extends Controller
{
    public function index()
    {
        return Inertia::render('Admin/QuoteRequests', [
            'requests' => QuoteRequest::latest()->get()
        ]);
    }

    public function markAsRead(QuoteRequest $requestModel)
    {
        $requestModel->update(['is_read' => true]);
        return back()->with('success', 'Quote request marked as read.');
    }

    public function destroy(QuoteRequest $requestModel)
    {
        $requestModel->delete();
        return back()->with('success', 'Quote request deleted successfully.');
    }
}
