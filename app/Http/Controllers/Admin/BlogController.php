<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Inertia\Inertia;
use App\Models\BlogPost;
use Illuminate\Support\Str;

class BlogController extends Controller
{
    private function uploadImage(Request $request, $fieldName, $folderName)
    {
        if ($request->hasFile($fieldName)) {
            $file = $request->file($fieldName);
            $filename = time() . '_' . Str::slug(pathinfo($file->getClientOriginalName(), PATHINFO_FILENAME)) . '.' . $file->getClientOriginalExtension();
            $file->move(public_path('assets'), $filename);
            return 'assets/' . $filename;
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
            'image_path' => 'required|image|mimes:jpeg,png,jpg,gif,webp|max:5120',
            'is_active' => 'boolean',
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
            'image_path' => 'nullable|image|mimes:jpeg,png,jpg,gif,webp|max:5120',
            'is_active' => 'boolean',
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
