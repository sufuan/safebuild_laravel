<?php

use App\Http\Controllers\ProfileController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::get('/', function () {
    return Inertia::render('Welcome', [
        'canLogin' => Route::has('login'),
        'canRegister' => Route::has('register'),
        'laravelVersion' => Application::VERSION,
        'phpVersion' => PHP_VERSION,
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





Route::get('/dashboard', function () {
    return Inertia::render('Dashboard');
})->middleware(['auth', 'verified'])->name('dashboard');

Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});

require __DIR__.'/auth.php';
