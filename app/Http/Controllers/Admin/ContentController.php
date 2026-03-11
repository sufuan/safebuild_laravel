<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Inertia\Inertia;
use App\Models\HeroSlide;
use App\Models\Service;
use App\Models\Project;
use App\Models\Testimonial;
use App\Models\TeamMember;
use App\Models\BrandLogo;
use App\Models\BlogPost;

class ContentController extends Controller
{
    public function index()
    {
        return Inertia::render('Admin/Content', [
            'heroSlides' => HeroSlide::orderBy('order')->get(),
            'services' => Service::orderBy('order')->get(),
            'projects' => Project::latest()->get(),
            'testimonials' => Testimonial::latest()->get(),
            'teamMembers' => TeamMember::orderBy('order')->get(),
            'brandLogos' => BrandLogo::orderBy('order')->get(),
            'blogPosts' => BlogPost::latest()->get(),
        ]);
    }
}
