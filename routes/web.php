<?php

use App\Http\Controllers\ProfileController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

use App\Models\HeroSlide;
use App\Models\Service;
use App\Models\Project;
use App\Models\Testimonial;
use App\Models\TeamMember;
use App\Models\BrandLogo;
use App\Models\BlogPost;

Route::get('/', function () {
    return Inertia::render('Welcome', [
        'canLogin' => Route::has('login'),
        'canRegister' => Route::has('register'),
        'laravelVersion' => Application::VERSION,
        'phpVersion' => PHP_VERSION,
        'heroSlides' => HeroSlide::where('is_active', true)->orderBy('order')->get(),
        'services' => Service::where('is_active', true)->orderBy('order')->take(4)->get(),
        'projects' => Project::latest()->take(5)->get(),
        'testimonials' => Testimonial::latest()->take(3)->get(),
        'teamMembers' => TeamMember::orderBy('order')->take(4)->get(),
        'brandLogos' => BrandLogo::orderBy('order')->get(),
        'blogPosts' => BlogPost::latest()->take(3)->get(),
    ]);
});

Route::get('/about-us', function () {
    return Inertia::render('AboutUs');
});

Route::get('/contact-us', function () {
    return Inertia::render('ContactUs');
});

Route::get('/blog', function () {
    return Inertia::render('Blog');
});

Route::get('/careers', function () {
    return Inertia::render('Careers');
});

Route::get('/our-projects', function () {
    return Inertia::render('OurProjectsPage');
});

Route::get('/our-team', function () {
    return Inertia::render('OurTeam');
});

Route::get('/testimonials', function () {
    return Inertia::render('TestimonialsPage');
});

Route::get('/faq', function () {
    return Inertia::render('Faq');
});

Route::get('/our-services', function () {
    return Inertia::render('OurServices');
});

Route::get('/property-services-design', function () {
    return Inertia::render('PropertyServicesDesign');
});

Route::get('/renovation-remodeling', function () {
    return Inertia::render('RenovationRemodeling');
});

Route::get('/architectural-design', function () {
    return Inertia::render('ArchitecturalDesign');
});

Route::get('/excavation-site-prep', function () {
    return Inertia::render('ExcavationSitePrep');
});

Route::get('/custom-carpentry', function () {
    return Inertia::render('CustomCarpentry');
});




use App\Http\Controllers\Admin\DashboardController;
use App\Http\Controllers\Admin\ContentController;
use App\Http\Controllers\Admin\ContentCRUDController;

Route::middleware(['auth', 'verified'])->prefix('admin')->name('admin.')->group(function () {
    Route::get('/dashboard', [DashboardController::class, 'index'])->name('dashboard');
    Route::get('/content', [ContentController::class, 'index'])->name('content.index');

    // Hero CRUD
    Route::post('/content/hero', [ContentCRUDController::class, 'storeHero'])->name('content.hero.store');
    Route::post('/content/hero/{hero}', [ContentCRUDController::class, 'updateHero'])->name('content.hero.update');
    Route::delete('/content/hero/{hero}', [ContentCRUDController::class, 'deleteHero'])->name('content.hero.delete');

    // Services CRUD
    Route::post('/content/services', [ContentCRUDController::class, 'storeService'])->name('content.services.store');
    Route::put('/content/services/{service}', [ContentCRUDController::class, 'updateService'])->name('content.services.update');
    Route::delete('/content/services/{service}', [ContentCRUDController::class, 'deleteService'])->name('content.services.delete');

    // Projects CRUD
    Route::post('/content/projects', [ContentCRUDController::class, 'storeProject'])->name('content.projects.store');
    Route::post('/content/projects/{project}', [ContentCRUDController::class, 'updateProject'])->name('content.projects.update');
    Route::delete('/content/projects/{project}', [ContentCRUDController::class, 'deleteProject'])->name('content.projects.delete');

    // Testimonials CRUD
    Route::post('/content/testimonials', [ContentCRUDController::class, 'storeTestimonial'])->name('content.testimonials.store');
    Route::post('/content/testimonials/{testimonial}', [ContentCRUDController::class, 'updateTestimonial'])->name('content.testimonials.update');
    Route::delete('/content/testimonials/{testimonial}', [ContentCRUDController::class, 'deleteTestimonial'])->name('content.testimonials.delete');

    // Team CRUD
    Route::post('/content/team', [ContentCRUDController::class, 'storeTeam'])->name('content.team.store');
    Route::post('/content/team/{team}', [ContentCRUDController::class, 'updateTeam'])->name('content.team.update');
    Route::delete('/content/team/{team}', [ContentCRUDController::class, 'deleteTeam'])->name('content.team.delete');

    // Logos CRUD
    Route::post('/content/logos', [ContentCRUDController::class, 'storeLogo'])->name('content.logos.store');
    Route::delete('/content/logos/{logo}', [ContentCRUDController::class, 'deleteLogo'])->name('content.logos.delete');

    // Blog CRUD
    Route::post('/content/blog', [ContentCRUDController::class, 'storeBlog'])->name('content.blog.store');
    Route::post('/content/blog/{blog}', [ContentCRUDController::class, 'updateBlog'])->name('content.blog.update');
    Route::delete('/content/blog/{blog}', [ContentCRUDController::class, 'deleteBlog'])->name('content.blog.delete');
});

Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});

require __DIR__.'/auth.php';
