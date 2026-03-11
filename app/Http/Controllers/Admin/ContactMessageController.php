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
        $validated = $request->validate([
            'name' => 'required|string|max:255',
            'email' => 'required|email|max:255',
            'phone' => 'required|string|max:255',
            'subject' => 'nullable|string|max:255',
            'message' => 'required|string',
        ]);

        ContactMessage::create($validated);

        return back()->with('success', 'Your message has been sent successfully!');
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
