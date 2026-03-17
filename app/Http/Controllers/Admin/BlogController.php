<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Inertia\Inertia;
use App\Models\BlogPost;
use Illuminate\Support\Str;

use Illuminate\Support\Facades\Log;

class BlogController extends Controller
{
    private function uploadImage(Request $request, $fieldName, $folderName = 'assets')
    {
        if ($request->hasFile($fieldName)) {
            $file = $request->file($fieldName);
            if (!$file->isValid()) {
                throw \Illuminate\Validation\ValidationException::withMessages([
                    $fieldName => 'The uploaded file is not valid.'
                ]);
            }

            $filename = time() . '_' . Str::slug(pathinfo($file->getClientOriginalName(), PATHINFO_FILENAME)) . '.' . $file->getClientOriginalExtension();
            $targetDir = public_path($folderName);
            
            if (!file_exists($targetDir)) {
                if (!mkdir($targetDir, 0755, true)) {
                    throw \Illuminate\Validation\ValidationException::withMessages([
                        $fieldName => "Could not create directory: {$folderName}. Please check folder permissions (755)."
                    ]);
                }
            }

            if (!is_writable($targetDir)) {
                throw \Illuminate\Validation\ValidationException::withMessages([
                    $fieldName => "The directory {$folderName} is not writable. Please check folder permissions (755)."
                ]);
            }

            try {
                $file->move($targetDir, $filename);
                return $folderName . '/' . $filename;
            } catch (\Exception $e) {
                Log::error("Failed to move blog image: " . $e->getMessage());
                throw \Illuminate\Validation\ValidationException::withMessages([
                    $fieldName => 'Failed to move the uploaded file. error: ' . $e->getMessage()
                ]);
            }
        }
        return null;
    }

    public function index()
    {
        return Inertia::render('Admin/BlogPosts', [
            'posts' => BlogPost::latest()->get()
        ]);
    }

    public function store(Request $request)
    {
        $data = $request->validate([
            'title' => 'required|string|max:255',
            'excerpt' => 'required|string',
            'content' => 'required|string',
            'date' => 'required|string',
            'read_time' => 'nullable|string',
            'author' => 'nullable|string',
            'image_path' => 'required|image|mimes:jpeg,png,jpg,gif,webp|max:3072',
            'is_active' => 'boolean',
        ], [
            'image_path.uploaded' => 'The image failed to upload. Please ensure the file is under 3MB.',
        ]);

        if ($path = $this->uploadImage($request, 'image_path', 'assets')) {
            $data['image_path'] = $path;
        }

        BlogPost::create($data);

        return back()->with('success', 'Blog post created successfully.');
    }

    public function update(Request $request, BlogPost $blog)
    {
        $data = $request->validate([
            'title' => 'required|string|max:255',
            'excerpt' => 'required|string',
            'content' => 'required|string',
            'date' => 'required|string',
            'read_time' => 'nullable|string',
            'author' => 'nullable|string',
            'image_path' => 'nullable|image|mimes:jpeg,png,jpg,gif,webp|max:3072',
            'is_active' => 'boolean',
        ], [
            'image_path.uploaded' => 'The image failed to upload. Please ensure the file is under 3MB.',
        ]);

        if ($path = $this->uploadImage($request, 'image_path', 'assets')) {
            $data['image_path'] = $path;
        } else {
            unset($data['image_path']);
        }

        $blog->update($data);

        return back()->with('success', 'Blog post updated successfully.');
    }

    public function destroy(BlogPost $blog)
    {
        $blog->delete();
        return back()->with('success', 'Blog post deleted successfully.');
    }
}
