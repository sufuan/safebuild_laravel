<?php

use App\Http\Controllers\ProfileController;
use Illuminate\Foundation\Application;
use App\Http\Controllers\Admin\DashboardController;
use App\Http\Controllers\Admin\ContentController;
use App\Http\Controllers\Admin\ContentCRUDController;
use App\Http\Controllers\Admin\CareersController;
use App\Http\Controllers\Admin\CareersCRUDController;
use App\Http\Controllers\Admin\ContactMessageController;
use App\Http\Controllers\Admin\QuoteRequestController;
use App\Http\Controllers\Admin\SettingsController;
use App\Http\Controllers\Admin\BlogController;
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
        'testimonials' => Testimonial::where('is_active', true)->latest()->get(),
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
})->name('contact.index');

Route::post('/contact-us', [ContactMessageController::class, 'store'])->name('contact.store');
Route::post('/quote-requests', [QuoteRequestController::class, 'store'])->name('quotes.store');

Route::get('/blog', function () {
    return Inertia::render('Blog', [
        'posts' => BlogPost::where('is_active', true)->latest()->paginate(9)
    ]);
})->name('blog.index');

Route::get('/blog/{blog}', function (BlogPost $blog) {
    if (!$blog->is_active && !auth()->check()) {
        abort(404);
    }
    return Inertia::render('BlogDetail', [
        'post' => $blog,
        'recentPosts' => BlogPost::where('is_active', true)
            ->where('id', '!=', $blog->id)
            ->latest()
            ->take(3)
            ->get()
    ]);
})->name('blog.show');

use App\Models\CareerPerk;
use App\Models\OpenPosition;

Route::get('/careers', function () {
    return Inertia::render('Careers', [
        'perks' => CareerPerk::orderBy('order')->get(),
        'positions' => OpenPosition::latest()->get(),
    ]);
});

Route::post('/careers/apply', [CareersCRUDController::class, 'storeApplication'])->name('careers.apply');

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
    return Inertia::render('OurServices', [
        'services' => Service::where('is_active', true)->orderBy('order')->get()
    ]);
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





// Redirect /admin and /admin/ to dashboard if logged in, otherwise to login
Route::get('/admin', function () {
    if (auth()->check()) {
        return redirect('/admin/dashboard');
    }
    return redirect('/admin/login');
});

Route::middleware(['auth', 'verified'])->prefix('admin')->name('admin.')->group(function () {
    Route::get('/dashboard', [DashboardController::class, 'index'])->name('dashboard');
    Route::get('/content', [ContentController::class, 'index'])->name('content.index');

    // Hero CRUD
    Route::post('/content/hero', [ContentCRUDController::class, 'storeHero'])->name('content.hero.store');
    Route::post('/content/hero/{hero}', [ContentCRUDController::class, 'updateHero'])->name('content.hero.update');
    Route::delete('/content/hero/{hero}', [ContentCRUDController::class, 'deleteHero'])->name('content.hero.delete');

    // Services CRUD
    Route::post('/content/services', [ContentCRUDController::class, 'storeService'])->name('content.services.store');
    Route::post('/content/services/{service}', [ContentCRUDController::class, 'updateService'])->name('content.services.update');
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

    // Blog
    Route::get('/blog', [BlogController::class, 'index'])->name('blog.index');
    Route::post('/blog', [BlogController::class, 'store'])->name('blog.store');
    Route::post('/blog/{blog}', [BlogController::class, 'update'])->name('blog.update');
    Route::delete('/blog/{blog}', [BlogController::class, 'destroy'])->name('blog.delete');

    // Careers
    Route::get('/careers', [CareersController::class, 'index'])->name('careers.index');
    
    // Career Perks CRUD
    Route::post('/careers/perks', [CareersCRUDController::class, 'storePerk'])->name('careers.perks.store');
    Route::put('/careers/perks/{perk}', [CareersCRUDController::class, 'updatePerk'])->name('careers.perks.update');
    Route::delete('/careers/perks/{perk}', [CareersCRUDController::class, 'deletePerk'])->name('careers.perks.delete');

    // Open Positions CRUD
    Route::post('/careers/positions', [CareersCRUDController::class, 'storePosition'])->name('careers.positions.store');
    Route::put('/careers/positions/{position}', [CareersCRUDController::class, 'updatePosition'])->name('careers.positions.update');
    Route::delete('/careers/positions/{position}', [CareersCRUDController::class, 'deletePosition'])->name('careers.positions.delete');
    
    // Job Applications CRUD
    Route::delete('/careers/applications/{application}', [CareersCRUDController::class, 'deleteApplication'])->name('careers.applications.delete');
    Route::patch('/careers/applications/{application}/reviewed', [CareersCRUDController::class, 'markApplicationAsReviewed'])->name('careers.applications.reviewed');

    // Contact Messages
    Route::get('/contact-messages', [ContactMessageController::class, 'index'])->name('messages.index');
    Route::patch('/contact-messages/{message}/read', [ContactMessageController::class, 'markAsRead'])->name('messages.read');
    Route::patch('/contact-messages/{message}/toggle', [ContactMessageController::class, 'toggleRead'])->name('messages.toggle');
    Route::post('/contact-messages/read-all', [ContactMessageController::class, 'markAllAsRead'])->name('messages.readAll');
    Route::delete('/contact-messages/{message}', [ContactMessageController::class, 'destroy'])->name('messages.delete');

    // Quote Requests
    Route::get('/quote-requests', [QuoteRequestController::class, 'index'])->name('quotes.index');
    Route::patch('/quote-requests/{requestModel}/read', [QuoteRequestController::class, 'markAsRead'])->name('quotes.read');
    Route::patch('/quote-requests/{requestModel}/toggle', [QuoteRequestController::class, 'toggleRead'])->name('quotes.toggle');
    Route::post('/quote-requests/read-all', [QuoteRequestController::class, 'markAllAsRead'])->name('quotes.readAll');
    Route::delete('/quote-requests/{requestModel}', [QuoteRequestController::class, 'destroy'])->name('quotes.delete');

    // Business Settings
    Route::get('/settings', [SettingsController::class, 'index'])->name('settings.index');
    Route::post('/settings', [SettingsController::class, 'update'])->name('settings.update');
});

Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});

require __DIR__.'/auth.php';
