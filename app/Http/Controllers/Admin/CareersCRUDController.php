<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\CareerPerk;
use App\Models\OpenPosition;
use App\Models\JobApplication;
use Illuminate\Support\Facades\Log;

class CareersCRUDController extends Controller
{
    // Career Perks
    public function storePerk(Request $request)
    {
        $validated = $request->validate([
            'title' => 'required|string|max:255',
            'description' => 'required|string',
            'order' => 'integer|nullable',
        ]);
        $validated['icon_class'] = '/assets/perk.jpg';
        CareerPerk::create($validated);
        return back()->with('success', 'Career perk created successfully.');
    }

    public function updatePerk(Request $request, CareerPerk $perk)
    {
        $validated = $request->validate([
            'title' => 'required|string|max:255',
            'description' => 'required|string',
            'order' => 'integer|nullable',
        ]);
        $validated['icon_class'] = '/assets/perk.jpg';
        $perk->update($validated);
        return back()->with('success', 'Career perk updated successfully.');
    }

    public function deletePerk(CareerPerk $perk)
    {
        $perk->delete();
        return back()->with('success', 'Career perk deleted successfully.');
    }

    // Open Positions
    public function storePosition(Request $request)
    {
        $validated = $request->validate([
            'title' => 'required|string|max:255',
            'location' => 'required|string|max:255',
            'type' => 'required|string|max:255',
            'experience' => 'required|string|max:255',
        ]);
        OpenPosition::create($validated);
        return back()->with('success', 'Open position created successfully.');
    }

    public function updatePosition(Request $request, OpenPosition $position)
    {
        $validated = $request->validate([
            'title' => 'required|string|max:255',
            'location' => 'required|string|max:255',
            'type' => 'required|string|max:255',
            'experience' => 'required|string|max:255',
        ]);
        $position->update($validated);
        return back()->with('success', 'Open position updated successfully.');
    }

    public function deletePosition(OpenPosition $position)
    {
        $position->delete();
        return back()->with('success', 'Open position deleted successfully.');
    }
    
    public function storeApplication(Request $request)
    {
        $validated = $request->validate([
            'open_position_id' => 'required|exists:open_positions,id',
            'name' => 'required|string|max:255',
            'email' => 'required|email|max:255',
            'phone' => 'required|string|max:255',
            'resume_path' => 'required|file|mimes:pdf,doc,docx|max:3072',
            'cover_letter' => 'nullable|string',
        ], [
            'resume_path.uploaded' => 'The file failed to upload. Please ensure it is under 3MB.',
        ]);

        if ($request->hasFile('resume_path')) {
            $file = $request->file('resume_path');
            if (!$file->isValid()) {
                throw \Illuminate\Validation\ValidationException::withMessages([
                    'resume_path' => 'The uploaded file is not valid.'
                ]);
            }

            $filename = time() . '_' . $file->getClientOriginalName();
            $targetDir = public_path('uploads/resumes');
            
            if (!file_exists($targetDir)) {
                if (!mkdir($targetDir, 0755, true)) {
                    throw \Illuminate\Validation\ValidationException::withMessages([
                        'resume_path' => 'Could not create directory for resumes. Please check folder permissions (755).'
                    ]);
                }
            }

            if (!is_writable($targetDir)) {
                throw \Illuminate\Validation\ValidationException::withMessages([
                    'resume_path' => 'The resume upload directory is not writable. Please check folder permissions (755).'
                ]);
            }

            try {
                $file->move($targetDir, $filename);
                $validated['resume_path'] = 'uploads/resumes/' . $filename;
            } catch (\Exception $e) {
                Log::error("Failed to move resume: " . $e->getMessage());
                throw \Illuminate\Validation\ValidationException::withMessages([
                    'resume_path' => 'Failed to move the uploaded resume. error: ' . $e->getMessage()
                ]);
            }
        }

        JobApplication::create($validated);
        return back()->with('success', 'Your application has been submitted successfully.');
    }

    public function deleteApplication(JobApplication $application)
    {
        // Add file deletion logic here if they upload resumes.
        if ($application->resume_path && file_exists(public_path($application->resume_path))) {
            unlink(public_path($application->resume_path));
        }
        $application->delete();
        return back()->with('success', 'Job application deleted successfully.');
    }

    public function markApplicationAsReviewed(JobApplication $application)
    {
        if ($application->status === 'pending') {
            $application->update(['status' => 'reviewed']);
        }
        return back()->with('success', 'Application marked as reviewed.');
    }
}
