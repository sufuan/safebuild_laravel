<?php

namespace App\Http\Controllers;

use App\Models\BlogPost;
use App\Models\Project;
use Illuminate\Http\Response;

class SitemapController extends Controller
{
    public function index(): Response
    {
        $baseUrl = config('app.url', 'https://safebuild.ca');

        // Static routes
        $urls = [
            ['loc' => $baseUrl . '/', 'lastmod' => now()->toAtomString(), 'changefreq' => 'daily', 'priority' => '1.0'],
            ['loc' => $baseUrl . '/about-us', 'lastmod' => now()->toAtomString(), 'changefreq' => 'monthly', 'priority' => '0.9'],
            ['loc' => $baseUrl . '/our-services', 'lastmod' => now()->toAtomString(), 'changefreq' => 'weekly', 'priority' => '0.9'],
            ['loc' => $baseUrl . '/property-services-design', 'lastmod' => now()->toAtomString(), 'changefreq' => 'monthly', 'priority' => '0.8'],
            ['loc' => $baseUrl . '/renovation-remodeling', 'lastmod' => now()->toAtomString(), 'changefreq' => 'monthly', 'priority' => '0.8'],
            ['loc' => $baseUrl . '/architectural-design', 'lastmod' => now()->toAtomString(), 'changefreq' => 'monthly', 'priority' => '0.8'],
            ['loc' => $baseUrl . '/excavation-site-prep', 'lastmod' => now()->toAtomString(), 'changefreq' => 'monthly', 'priority' => '0.8'],
            ['loc' => $baseUrl . '/custom-carpentry', 'lastmod' => now()->toAtomString(), 'changefreq' => 'monthly', 'priority' => '0.8'],
            ['loc' => $baseUrl . '/our-projects', 'lastmod' => now()->toAtomString(), 'changefreq' => 'weekly', 'priority' => '0.9'],
            ['loc' => $baseUrl . '/blog', 'lastmod' => now()->toAtomString(), 'changefreq' => 'daily', 'priority' => '0.9'],
            ['loc' => $baseUrl . '/careers', 'lastmod' => now()->toAtomString(), 'changefreq' => 'weekly', 'priority' => '0.7'],
            ['loc' => $baseUrl . '/our-team', 'lastmod' => now()->toAtomString(), 'changefreq' => 'monthly', 'priority' => '0.6'],
            ['loc' => $baseUrl . '/testimonials', 'lastmod' => now()->toAtomString(), 'changefreq' => 'monthly', 'priority' => '0.6'],
            ['loc' => $baseUrl . '/faq', 'lastmod' => now()->toAtomString(), 'changefreq' => 'monthly', 'priority' => '0.8'],
            ['loc' => $baseUrl . '/contact-us', 'lastmod' => now()->toAtomString(), 'changefreq' => 'monthly', 'priority' => '0.9'],
        ];

        // Dynamic blog posts
        $blogPosts = BlogPost::where('is_active', true)->latest()->get();
        foreach ($blogPosts as $post) {
            $urls[] = [
                'loc' => $baseUrl . '/blog/' . $post->id,
                'lastmod' => ($post->updated_at ?? $post->created_at)->toAtomString(),
                'changefreq' => 'monthly',
                'priority' => '0.8',
            ];
        }

        // Dynamic projects
        $projects = Project::where('is_active', true)->latest()->get();
        foreach ($projects as $project) {
            $urls[] = [
                'loc' => $baseUrl . '/our-projects/' . $project->id,
                'lastmod' => ($project->updated_at ?? $project->created_at)->toAtomString(),
                'changefreq' => 'monthly',
                'priority' => '0.8',
            ];
        }

        // Build XML
        $xml = '<?xml version="1.0" encoding="UTF-8"?>' . "\n";
        $xml .= '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">' . "\n";

        foreach ($urls as $url) {
            $xml .= '  <url>' . "\n";
            $xml .= '    <loc>' . htmlspecialchars($url['loc']) . '</loc>' . "\n";
            $xml .= '    <lastmod>' . $url['lastmod'] . '</lastmod>' . "\n";
            $xml .= '    <changefreq>' . $url['changefreq'] . '</changefreq>' . "\n";
            $xml .= '    <priority>' . $url['priority'] . '</priority>' . "\n";
            $xml .= '  </url>' . "\n";
        }

        $xml .= '</urlset>';

        return response($xml, 200, [
            'Content-Type' => 'application/xml',
        ]);
    }
}
