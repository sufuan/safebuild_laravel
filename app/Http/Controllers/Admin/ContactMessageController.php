<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Inertia\Inertia;
use App\Models\ContactMessage;

class ContactMessageController extends Controller
{
    public function index()
    {
        return Inertia::render('Admin/ContactMessages', [
            'messages' => ContactMessage::latest()->get()
        ]);
    }

    public function store(Request $request)
    {
        $rules = [
            'name' => 'required|string|max:255',
            'email' => 'required|email|max:255',
            'phone' => 'required|string|max:255',
            'subject' => 'nullable|string|max:255',
            'message' => 'nullable|string', // Optional if quote
            'is_quote' => 'boolean',
            'service_type' => 'nullable|string|max:255',
            'location' => 'nullable|string|max:255',
            'project_details' => 'nullable|string', // Required if quote, but we validate below conditionally
            'budget_range' => 'nullable|string|max:255',
            'attachment' => 'nullable|file|mimes:pdf,doc,docx,jpg,jpeg,png,webp|max:10240', // 10MB max
        ];

        // If it's a quote, ensure project details are provided
        if ($request->boolean('is_quote')) {
            $rules['project_details'] = 'required|string';
        } else {
            $rules['message'] = 'required|string';
        }

        $validated = $request->validate($rules);

        // If it's a quote, the database requires 'message' to not be null
        if ($request->boolean('is_quote') && empty($validated['message'])) {
            $validated['message'] = $validated['project_details'] ?? '';
        }

        // Handle attachment upload
        if ($request->hasFile('attachment')) {
            $validated['attachment_path'] = $request->file('attachment')->store('quote_attachments', 'public');
        }
        
        // Remove attachment from validated array since it's not a database column
        unset($validated['attachment']);

        ContactMessage::create($validated);

        return back()->with('success', $request->boolean('is_quote') ? 'Your quote request has been submitted successfully!' : 'Your message has been sent successfully!');
    }

    public function markAsRead(ContactMessage $message)
    {
        if (!$message->is_read) {
            $message->update(['is_read' => true]);
        }
        return back()->with('success', 'Message marked as read.');
    }

    public function toggleRead(ContactMessage $message)
    {
        $message->update(['is_read' => !$message->is_read]);
        return back()->with('success', 'Message status updated.');
    }

    public function markAllAsRead()
    {
        ContactMessage::where('is_read', false)->update(['is_read' => true]);
        return back()->with('success', 'All messages marked as read.');
    }

    public function destroy(ContactMessage $message)
    {
        $message->delete();
        return back()->with('success', 'Message deleted successfully.');
    }
}
