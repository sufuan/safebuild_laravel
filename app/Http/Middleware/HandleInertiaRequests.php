<?php

namespace App\Http\Middleware;

use Illuminate\Http\Request;
use Inertia\Middleware;
use App\Models\JobApplication;
use App\Models\ContactMessage;
use App\Models\QuoteRequest;

class HandleInertiaRequests extends Middleware
{
    /**
     * The root template that is loaded on the first page visit.
     *
     * @var string
     */
    protected $rootView = 'app';

    /**
     * Determine the current asset version.
     */
    public function version(Request $request): ?string
    {
        return parent::version($request);
    }

    /**
     * Define the props that are shared by default.
     *
     * @return array<string, mixed>
     */
    public function share(Request $request): array
    {
        return [
            ...parent::share($request),
            'auth' => [
                'user' => $request->user(),
            ],
            'counts' => [
                'applications' => JobApplication::where('status', 'pending')->count(),
                'messages' => ContactMessage::where('is_read', false)->count(),
                'quotes' => QuoteRequest::where('is_read', false)->count(),
            ],
            'siteSettings' => \App\Models\SiteSetting::all()->pluck('value', 'key')->toArray(),
        ];
    }
}
