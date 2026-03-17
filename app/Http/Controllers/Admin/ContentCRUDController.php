<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Str;
use Illuminate\Support\Facades\Storage;
use App\Models\HeroSlide;
use App\Models\Service;
use App\Models\Project;
use App\Models\Testimonial;
use App\Models\TeamMember;
use App\Models\BrandLogo;
use App\Models\BlogPost;

class ContentCRUDController extends Controller
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
                \Log::error("Failed to move uploaded file: " . $e->getMessage());
                throw \Illuminate\Validation\ValidationException::withMessages([
                    $fieldName => 'Failed to move the uploaded file. error: ' . $e->getMessage()
                ]);
            }
        }
        return null;
    }

    // --- Hero Slides ---
    public function storeHero(Request $request) {
        $data = $request->validate([
            'title' => 'required|string|max:255',
            'subtitle' => 'nullable|string|max:255',
            'image_path' => 'required|image|mimes:jpeg,png,jpg,gif,webp|max:5120',
            'is_active' => 'boolean',
        ]);
        if ($path = $this->uploadImage($request, 'image_path', 'assets')) { $data['image_path'] = $path; }
        HeroSlide::create($data);
        return back()->with('success', 'Hero slide created.');
    }
    public function updateHero(Request $request, HeroSlide $hero) {
        $data = $request->validate([
            'title' => 'required|string|max:255',
            'subtitle' => 'nullable|string|max:255',
            'image_path' => 'nullable|image|mimes:jpeg,png,jpg,gif,webp|max:5120',
            'is_active' => 'boolean',
        ]);
        if ($path = $this->uploadImage($request, 'image_path', 'assets')) { $data['image_path'] = $path; } else { unset($data['image_path']); }
        $hero->update($data);
        return back()->with('success', 'Hero slide updated.');
    }
    public function deleteHero(HeroSlide $hero) { $hero->delete(); return back()->with('success', 'Slide deleted.'); }

    // --- Services ---
    public function storeService(Request $request) {
        $data = $request->validate([
            'title' => 'required|string',
            'description' => 'required|string',
            'icon_class' => 'required|string',
            'image_path' => 'required|image|mimes:jpeg,png,jpg,gif,webp|max:5120',
            'is_active' => 'boolean'
        ]);
        if ($path = $this->uploadImage($request, 'image_path', 'assets')) { $data['image_path'] = $path; }
        Service::create($data); 
        return back()->with('success', 'Service created.');
    }
    public function updateService(Request $request, Service $service) {
        $data = $request->validate([
            'title' => 'required|string',
            'description' => 'required|string',
            'icon_class' => 'required|string',
            'image_path' => 'nullable|image|mimes:jpeg,png,jpg,gif,webp|max:5120',
            'is_active' => 'boolean'
        ]);
        if ($path = $this->uploadImage($request, 'image_path', 'assets')) { $data['image_path'] = $path; } else { unset($data['image_path']); }
        $service->update($data); 
        return back()->with('success', 'Service updated.');
    }
    public function deleteService(Service $service) { $service->delete(); return back()->with('success', 'Service deleted.'); }

    // --- Projects ---
    public function storeProject(Request $request) {
        $data = $request->validate(['title' => 'required|string', 'category' => 'required|string', 'image_path' => 'required|image']);
        if ($path = $this->uploadImage($request, 'image_path', 'assets')) { $data['image_path'] = $path; }
        Project::create($data); return back()->with('success', 'Project created.');
    }
    public function updateProject(Request $request, Project $project) {
        $data = $request->validate(['title' => 'required|string', 'category' => 'required|string', 'image_path' => 'nullable|image']);
        if ($path = $this->uploadImage($request, 'image_path', 'assets')) { $data['image_path'] = $path; } else { unset($data['image_path']); }
        $project->update($data); return back()->with('success', 'Project updated.');
    }
    public function deleteProject(Project $project) { $project->delete(); return back()->with('success', 'Project deleted.'); }

    // --- Testimonials ---
    public function storeTestimonial(Request $request) {
        $data = $request->validate(['name' => 'required|string', 'role' => 'nullable|string', 'quote' => 'required|string', 'image_path' => 'nullable|image']);
        if ($path = $this->uploadImage($request, 'image_path', 'assets')) { $data['image_path'] = $path; }
        Testimonial::create($data); return back()->with('success', 'Testimonial created.');
    }
    public function updateTestimonial(Request $request, Testimonial $testimonial) {
        $data = $request->validate(['name' => 'required|string', 'role' => 'nullable|string', 'quote' => 'required|string', 'image_path' => 'nullable|image']);
        if ($path = $this->uploadImage($request, 'image_path', 'assets')) { $data['image_path'] = $path; } else { unset($data['image_path']); }
        $testimonial->update($data); return back()->with('success', 'Testimonial updated.');
    }
    public function deleteTestimonial(Testimonial $testimonial) { $testimonial->delete(); return back()->with('success', 'Testimonial deleted.'); }

    // --- Team ---
    public function storeTeam(Request $request) {
        $data = $request->validate(['name' => 'required|string', 'role' => 'required|string', 'image_path' => 'nullable|image']);
        if ($path = $this->uploadImage($request, 'image_path', 'assets')) { $data['image_path'] = $path; }
        TeamMember::create($data); return back()->with('success', 'Member added.');
    }
    public function updateTeam(Request $request, TeamMember $team) {
        $data = $request->validate(['name' => 'required|string', 'role' => 'required|string', 'image_path' => 'nullable|image']);
        if ($path = $this->uploadImage($request, 'image_path', 'assets')) { $data['image_path'] = $path; } else { unset($data['image_path']); }
        $team->update($data); return back()->with('success', 'Member updated.');
    }
    public function deleteTeam(TeamMember $team) { $team->delete(); return back()->with('success', 'Member deleted.'); }

    // --- Brand Logos ---
    public function storeLogo(Request $request) {
        $data = $request->validate(['image_path' => 'required|image']);
        if ($path = $this->uploadImage($request, 'image_path', 'assets')) { $data['image_path'] = $path; }
        BrandLogo::create($data); return back()->with('success', 'Logo added.');
    }
    public function deleteLogo(BrandLogo $logo) { $logo->delete(); return back()->with('success', 'Logo deleted.'); }

    // --- Blog ---
    public function storeBlog(Request $request) {
        $data = $request->validate(['title' => 'required|string', 'excerpt' => 'required|string', 'date' => 'required|string', 'image_path' => 'required|image']);
        if ($path = $this->uploadImage($request, 'image_path', 'assets')) { $data['image_path'] = $path; }
        BlogPost::create($data); return back()->with('success', 'Post created.');
    }
    public function updateBlog(Request $request, BlogPost $blog) {
        $data = $request->validate(['title' => 'required|string', 'excerpt' => 'required|string', 'date' => 'required|string', 'image_path' => 'nullable|image']);
        if ($path = $this->uploadImage($request, 'image_path', 'assets')) { $data['image_path'] = $path; } else { unset($data['image_path']); }
        $blog->update($data); return back()->with('success', 'Post updated.');
    }
    public function deleteBlog(BlogPost $blog) { $blog->delete(); return back()->with('success', 'Post deleted.'); }
}
