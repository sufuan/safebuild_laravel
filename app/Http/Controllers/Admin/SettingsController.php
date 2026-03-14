<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Inertia\Inertia;
use App\Models\SiteSetting;

class SettingsController extends Controller
{
    public function index()
    {
        return Inertia::render('Admin/BusinessSettings', [
            'settings' => SiteSetting::all()
        ]);
    }

    public function update(Request $request)
    {
        $settings = $request->input('settings', []);
        
        foreach ($settings as $index => $settingData) {
            $key = $settingData['key'];
            $value = $settingData['value'] ?? null;

            // Handle file upload if present
            if ($request->hasFile("settings.{$index}.value")) {
                $file = $request->file("settings.{$index}.value");
                $path = $file->store('assets/settings', 'public');
                $value = $path;
            }

            // If it's an image setting and we didn't upload a new one, 
            // and the value is null/empty/non-string, don't update it to avoid breaking paths
            if (str_ends_with($key, '_image') && !$request->hasFile("settings.{$index}.value") && empty($settingData['value'])) {
                continue;
            }

            SiteSetting::updateOrCreate(
                ['key' => $key],
                ['value' => $value]
            );
        }

        return back()->with('success', 'Settings updated successfully.');
    }
}
