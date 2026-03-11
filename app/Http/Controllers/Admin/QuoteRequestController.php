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

    public function store(Request $request)
    {
        $validated = $request->validate([
            'name' => 'required|string|max:255',
            'email' => 'required|email|max:255',
            'phone' => 'required|string|max:255',
            'service_id' => 'nullable|string|max:255',
            'project_details' => 'required|string',
        ]);

        QuoteRequest::create($validated);

        return back()->with('success', 'Your quote request has been submitted successfully!');
    }

    public function markAsRead(QuoteRequest $requestModel)
    {
        if (!$requestModel->is_read) {
            $requestModel->update(['is_read' => true]);
        }
        return back()->with('success', 'Quote request marked as read.');
    }

    public function toggleRead(QuoteRequest $requestModel)
    {
        $requestModel->update(['is_read' => !$requestModel->is_read]);
        return back()->with('success', 'Request status updated.');
    }

    public function markAllAsRead()
    {
        QuoteRequest::where('is_read', false)->update(['is_read' => true]);
        return back()->with('success', 'All quote requests marked as read.');
    }

    public function destroy(QuoteRequest $requestModel)
    {
        $requestModel->delete();
        return back()->with('success', 'Quote request deleted successfully.');
    }
}
