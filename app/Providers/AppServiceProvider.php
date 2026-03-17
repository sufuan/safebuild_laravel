<?php

namespace App\Providers;

use Illuminate\Support\Facades\Vite;
use Illuminate\Support\ServiceProvider;

class AppServiceProvider extends ServiceProvider
{
    /**
     * Register any application services.
     */
    public function register(): void
    {
        // Fix for cPanel public_html structure
        $this->app->bind('path.public', function() {
            $publicPath = base_path('public');
            if (file_exists(base_path('public_html'))) {
                $publicPath = base_path('public_html');
            }
            return $publicPath;
        });
    }

    /**
     * Bootstrap any application services.
     */
    public function boot(): void
    {
        Vite::prefetch(concurrency: 3);
    }
}
