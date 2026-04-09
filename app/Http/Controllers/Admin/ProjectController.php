<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Str;
use App\Models\Project;
use Inertia\Inertia;

class ProjectController extends Controller
{
    public function index()
    {
        return Inertia::render('Admin/Projects', [
            'projects' => Project::latest()->get(),
        ]);
    }

    public function create()
    {
        return Inertia::render('Admin/Projects/Create');
    }

    public function edit(Project $project)
    {
        return Inertia::render('Admin/Projects/Edit', [
            'project' => $project,
        ]);
    }

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
                mkdir($targetDir, 0755, true);
            }
            $file->move($targetDir, $filename);
            return $folderName . '/' . $filename;
        }
        return null;
    }

    public function store(Request $request)
    {
        $data = $request->validate([
            'title'          => 'required|string|max:255',
            'category'       => 'required|string|max:255',
            'description'    => 'nullable|string',
            'image_path'     => 'required|image|mimes:jpeg,png,jpg,gif,webp|max:5120',
            'gallery_images' => 'nullable|array',
            'gallery_images.*' => 'image|mimes:jpeg,png,jpg,gif,webp|max:5120',
            'is_active'      => 'boolean',
            'project_status' => 'required|in:running,complete',
        ]);

        if ($path = $this->uploadImage($request, 'image_path', 'assets')) {
            $data['image_path'] = $path;
        }

        $galleryPaths = [];
        if ($request->hasFile('gallery_images')) {
            foreach ($request->file('gallery_images') as $galleryFile) {
                $filename = time() . '_' . rand(1000, 9999) . '_' . Str::slug(pathinfo($galleryFile->getClientOriginalName(), PATHINFO_FILENAME)) . '.' . $galleryFile->getClientOriginalExtension();
                $galleryFile->move(public_path('assets'), $filename);
                $galleryPaths[] = 'assets/' . $filename;
            }
        }
        $data['gallery_images'] = !empty($galleryPaths) ? $galleryPaths : null;

        Project::create($data);
        return redirect()->route('admin.projects.index')->with('success', 'Project created successfully.');
    }

    public function update(Request $request, Project $project)
    {
        $data = $request->validate([
            'title'          => 'required|string|max:255',
            'category'       => 'required|string|max:255',
            'description'    => 'nullable|string',
            'image_path'     => 'nullable|image|mimes:jpeg,png,jpg,gif,webp|max:5120',
            'gallery_images' => 'nullable|array',
            'gallery_images.*' => 'image|mimes:jpeg,png,jpg,gif,webp|max:5120',
            'is_active'      => 'boolean',
            'project_status' => 'required|in:running,complete',
        ]);

        if ($path = $this->uploadImage($request, 'image_path', 'assets')) {
            $data['image_path'] = $path;
        } else {
            unset($data['image_path']);
        }

        $galleryPaths = $project->gallery_images ?? [];
        if ($request->hasFile('gallery_images')) {
            foreach ($request->file('gallery_images') as $galleryFile) {
                $filename = time() . '_' . rand(1000, 9999) . '_' . Str::slug(pathinfo($galleryFile->getClientOriginalName(), PATHINFO_FILENAME)) . '.' . $galleryFile->getClientOriginalExtension();
                $galleryFile->move(public_path('assets'), $filename);
                $galleryPaths[] = 'assets/' . $filename;
            }
            $data['gallery_images'] = $galleryPaths;
        } else {
            unset($data['gallery_images']);
        }

        $project->update($data);
        return redirect()->route('admin.projects.index')->with('success', 'Project updated successfully.');
    }

    public function removeGalleryImage(Request $request, Project $project)
    {
        $request->validate(['image_path' => 'required|string']);
        $gallery = $project->gallery_images ?? [];
        $gallery = array_values(array_filter($gallery, fn($img) => $img !== $request->image_path));
        $project->update(['gallery_images' => $gallery]);
        return back()->with('success', 'Gallery image removed.');
    }

    public function destroy(Project $project)
    {
        $project->delete();
        return back()->with('success', 'Project deleted.');
    }
}
