<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Illuminate\Support\Facades\Log;
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
                if (!$file->isValid()) {
                    throw \Illuminate\Validation\ValidationException::withMessages([
                        "settings.{$index}.value" => 'The uploaded file is not valid.'
                    ]);
                }

                $filename = time() . '_' . $key . '.' . $file->getClientOriginalExtension();
                $targetDir = public_path('assets/settings');
                
                if (!file_exists($targetDir)) {
                    if (!mkdir($targetDir, 0755, true)) {
                        throw \Illuminate\Validation\ValidationException::withMessages([
                            "settings.{$index}.value" => "Could not create directory: assets/settings. Please check folder permissions (755)."
                        ]);
                    }
                }

                if (!is_writable($targetDir)) {
                    throw \Illuminate\Validation\ValidationException::withMessages([
                        "settings.{$index}.value" => "The directory assets/settings is not writable. Please check folder permissions (755)."
                    ]);
                }

                try {
                    $file->move($targetDir, $filename);
                    $value = 'assets/settings/' . $filename;
                } catch (\Exception $e) {
                    Log::error("Failed to move settings file: " . $e->getMessage());
                    throw \Illuminate\Validation\ValidationException::withMessages([
                        "settings.{$index}.value" => 'Failed to move the uploaded file. error: ' . $e->getMessage()
                    ]);
                }
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
