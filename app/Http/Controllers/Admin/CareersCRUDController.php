<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\CareerPerk;
use App\Models\OpenPosition;
use App\Models\JobApplication;

class CareersCRUDController extends Controller
{
    // Career Perks
    public function storePerk(Request $request)
    {
        $validated = $request->validate([
            'icon_class' => 'required|string|max:255',
            'title' => 'required|string|max:255',
            'description' => 'required|string',
            'order' => 'integer|nullable',
        ]);
        CareerPerk::create($validated);
        return back()->with('success', 'Career perk created successfully.');
    }

    public function updatePerk(Request $request, CareerPerk $perk)
    {
        $validated = $request->validate([
            'icon_class' => 'required|string|max:255',
            'title' => 'required|string|max:255',
            'description' => 'required|string',
            'order' => 'integer|nullable',
        ]);
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
    
    // Job Applications
    public function deleteApplication(JobApplication $application)
    {
        // Add file deletion logic here if they upload resumes.
        if ($application->resume_path && file_exists(public_path($application->resume_path))) {
            unlink(public_path($application->resume_path));
        }
        $application->delete();
        return back()->with('success', 'Job application deleted successfully.');
    }
}
