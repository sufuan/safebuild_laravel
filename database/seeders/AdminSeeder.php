<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use App\Models\SiteSetting;
use App\Models\HeroSlide;
use App\Models\Service;
use App\Models\Project;
use App\Models\Testimonial;
use App\Models\TeamMember;
use App\Models\BrandLogo;
use App\Models\BlogPost;
use App\Models\CareerPerk;
use App\Models\OpenPosition;
use Illuminate\Support\Facades\Hash;
use App\Models\User;

class AdminSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        \Illuminate\Support\Facades\Schema::disableForeignKeyConstraints();

        // 1. Admin User
        User::updateOrCreate(
            ['email' => 'admin@admin.com'],
            [
                'name' => 'Admin User',
                'password' => Hash::make('password'),
            ]
        );

        // 2. Site Settings
        $settings = [
            ['key' => 'site_name', 'value' => 'SafeBuild Canada', 'type' => 'string'],
            ['key' => 'contact_email', 'value' => 'info@safebuild.ca', 'type' => 'string'],
            ['key' => 'contact_phone', 'value' => '+1 (250) 886-0059', 'type' => 'string'],
            ['key' => 'careers_email', 'value' => 'careers@safebuild.ca', 'type' => 'string'],
            ['key' => 'facebook_url', 'value' => 'https://www.facebook.com/safebuild.ca', 'type' => 'string'],
            ['key' => 'footer_about', 'value' => 'SafeBuild Canada is a premier general contractor offering comprehensive building services across Vancouver Island.', 'type' => 'text'],
        ];

        foreach ($settings as $setting) {
            SiteSetting::updateOrCreate(['key' => $setting['key']], $setting);
        }

        // 3. Hero Slides
        HeroSlide::truncate();
        HeroSlide::insert([
            [
                'title' => 'SafeBuild Canada',
                'subtitle' => 'Welcome to',
                'image_path' => 'assets/steptodown.com618418.webp',
                'button_text' => 'About Us',
                'is_active' => true,
                'order' => 1,
                'created_at' => now(), 'updated_at' => now(),
            ],
            [
                'title' => 'Excellence in Construction & Property Restoration',
                'subtitle' => null,
                'image_path' => 'assets/steptodown.com399351.webp',
                'button_text' => 'About Us',
                'is_active' => true,
                'order' => 2,
                'created_at' => now(), 'updated_at' => now(),
            ]
        ]);

        // 4. Services
        Service::truncate();
        Service::insert([
            [
                'title' => 'Comprehensive Property Services',
                'description' => 'Tailored to meet the unique needs of high-end residential, commercial, and industrial properties.',
                'icon_class' => 'flaticon-car-parts',
                'is_active' => true, 'order' => 1,
                'created_at' => now(), 'updated_at' => now(),
            ],
            [
                'title' => 'Renovation & Remodeling',
                'description' => 'Reimagine your property with innovative bespoke renovations and remodeling solutions.',
                'icon_class' => 'flaticon-architect',
                'is_active' => true, 'order' => 2,
                'created_at' => now(), 'updated_at' => now(),
            ],
            [
                'title' => 'Excavation & Site Preparation',
                'description' => 'Professional excavation services, including site grading, trenching, and land clearing.',
                'icon_class' => 'flaticon-chemical',
                'is_active' => true, 'order' => 3,
                'created_at' => now(), 'updated_at' => now(),
            ],
            [
                'title' => 'Restoration & Abatement Services',
                'description' => 'Advanced techniques and certified processes to restore safety and functionality to your property.',
                'icon_class' => 'flaticon-garage-owner',
                'is_active' => true, 'order' => 4,
                'created_at' => now(), 'updated_at' => now(),
            ]
        ]);

        // 5. Projects
        Project::truncate();
        Project::insert([
            [
                'title' => 'Architectural Design',
                'category' => 'Design',
                'image_path' => 'assets/project-v1-1-2.jpg',
                'created_at' => now(), 'updated_at' => now(),
            ],
            [
                'title' => 'Energy Efficiency',
                'category' => 'Efficiency',
                'image_path' => 'assets/project-v1-2-2.jpg',
                'created_at' => now(), 'updated_at' => now(),
            ],
            [
                'title' => 'Demolition Service',
                'category' => 'Demolition',
                'image_path' => 'assets/marek-studzinski-zQBjgS4PGpg-unsplash-1.webp',
                'created_at' => now(), 'updated_at' => now(),
            ],
            [
                'title' => 'Rock Blasting',
                'category' => 'Blasting',
                'image_path' => 'assets/steptodown.com481843-1.webp',
                'created_at' => now(), 'updated_at' => now(),
            ],
            [
                'title' => 'Restoration & Abatement',
                'category' => 'Restoration',
                'image_path' => 'assets/pexels-tima-miroshnichenko-6196225.webp',
                'created_at' => now(), 'updated_at' => now(),
            ]
        ]);

        // 6. Testimonials
        Testimonial::truncate();
        Testimonial::insert([
            [
                'name' => 'Emily Roads.',
                'role' => 'Property Developer',
                'quote' => 'Working with SafeBuild Canada on our commercial project was a breeze. They managed the entire process smoothly and efficiently.',
                'image_path' => 'assets/steptodown.com584276.webp',
                'created_at' => now(), 'updated_at' => now(),
            ],
            [
                'name' => 'Samuel Lawrence.',
                'role' => 'Real Estate Investor',
                'quote' => 'We hired SafeBuild for a renovation, and they exceeded our expectations. The team was professional, on time, and stayed within budget.',
                'image_path' => 'assets/steptodown.com191724.webp',
                'created_at' => now(), 'updated_at' => now(),
            ],
            [
                'name' => 'Linda Murphy.',
                'role' => 'Commercial Property Owner',
                'quote' => 'SafeBuild helped us transform our office space. They offered creative solutions, and the project was completed faster than expected.',
                'image_path' => 'assets/steptodown.com426279.webp',
                'created_at' => now(), 'updated_at' => now(),
            ]
        ]);

        // 7. Team Members
        TeamMember::truncate();
        TeamMember::insert([
            [
                'name' => 'Mahi Al Porahi',
                'role' => 'Industrial Engineer',
                'image_path' => 'assets/pexels-toni-30123884-1.webp',
                'order' => 1,
                'created_at' => now(), 'updated_at' => now(),
            ],
            [
                'name' => 'Liyazul Islam',
                'role' => 'Industrial Engineer',
                'image_path' => 'assets/pexels-tima-miroshnichenko-6474475.webp',
                'order' => 2,
                'created_at' => now(), 'updated_at' => now(),
            ],
            [
                'name' => 'Kutubul Alam',
                'role' => 'Industrial Engineer',
                'image_path' => 'assets/mina-rad-K9T9hdf4PmI-unsplash.webp',
                'order' => 3,
                'created_at' => now(), 'updated_at' => now(),
            ],
            [
                'name' => 'Nur A Alam Noyon',
                'role' => 'Industrial Engineer',
                'image_path' => 'assets/emmanuel-ikwuegbu-KHO_jvns5Xc-unsplash.webp',
                'order' => 4,
                'created_at' => now(), 'updated_at' => now(),
            ]
        ]);

        // 8. Brand Logos
        BrandLogo::truncate();
        BrandLogo::insert([
            ['image_path' => 'assets/brand-logo-1-1.png', 'order' => 1, 'created_at' => now(), 'updated_at' => now()],
            ['image_path' => 'assets/brand-logo-2-1.png', 'order' => 2, 'created_at' => now(), 'updated_at' => now()],
            ['image_path' => 'assets/brand-logo-3-1.png', 'order' => 3, 'created_at' => now(), 'updated_at' => now()],
            ['image_path' => 'assets/brand-logo-4-1.png', 'order' => 4, 'created_at' => now(), 'updated_at' => now()],
            ['image_path' => 'assets/brand-logo-5-1.png', 'order' => 5, 'created_at' => now(), 'updated_at' => now()],
            ['image_path' => 'assets/brand-logo-6-1.png', 'order' => 6, 'created_at' => now(), 'updated_at' => now()],
        ]);

        // 9. Career Perks
        CareerPerk::truncate();
        CareerPerk::insert([
            [
                'title' => 'Safety First',
                'description' => 'Our top priority is ensuring every team member goes home safe. We maintain rigorous safety standards and protocols on every site.',
                'icon_class' => 'fas fa-hard-hat',
                'order' => 1,
                'created_at' => now(), 'updated_at' => now(),
            ],
            [
                'title' => 'Career Growth',
                'description' => 'We invest in our people with ongoing training, mentorship, and clear pathways to advance your skills and career.',
                'icon_class' => 'fas fa-chart-line',
                'order' => 2,
                'created_at' => now(), 'updated_at' => now(),
            ],
            [
                'title' => 'Strong Team Culture',
                'description' => 'We are a family of builders who support each other, collaborating closely to deliver exceptional results and celebrate our successes.',
                'icon_class' => 'fas fa-users',
                'order' => 3,
                'created_at' => now(), 'updated_at' => now(),
            ]
        ]);

        // 10. Open Positions
        OpenPosition::truncate();
        OpenPosition::insert([
            [
                'title' => 'Site Supervisor',
                'location' => 'Victoria, BC',
                'type' => 'Full-Time',
                'experience' => 'Construction Management',
                'created_at' => now(), 'updated_at' => now(),
            ],
            [
                'title' => 'Journeyman Carpenter',
                'location' => 'Vancouver Island',
                'type' => 'Full-Time',
                'experience' => 'Trades',
                'created_at' => now(), 'updated_at' => now(),
            ],
            [
                'title' => 'Project Manager',
                'location' => 'Victoria, BC',
                'type' => 'Full-Time',
                'experience' => 'Management',
                'created_at' => now(), 'updated_at' => now(),
            ]
        ]);

        // 11. Blog Posts
        BlogPost::truncate();
        BlogPost::insert([
            [
                'title' => 'Lido Protocol-Staking-Guide-for-Cryptocurrency',
                'date' => '04 Sep 2024',
                'excerpt' => 'Key Features of Lido Finance for Smart Investors. Lido Finance streamlines staking for ETH holders...',
                'image_path' => 'assets/blog-v1-1-1.jpg',
                'created_at' => now(), 'updated_at' => now(),
            ],
            [
                'title' => 'Models & OEM Solutions | Simul Corporation.',
                'date' => '15 Jun 2023',
                'excerpt' => 'Nullam molestie volutpat justo, ut malesuada leo facilisis quis. Mauris ullamcorper accumsan sem...',
                'image_path' => 'assets/blog-v1-2-1.jpg',
                'created_at' => now(), 'updated_at' => now(),
            ],
            [
                'title' => 'Renovation New Solutions | Simul Corporation.',
                'date' => '15 Jun 2023',
                'excerpt' => 'Nullam molestie volutpat justo, ut malesuada leo facilisis quis. Mauris ullamcorper accumsan sem...',
                'image_path' => 'assets/blog-v1-3-1.jpg',
                'created_at' => now(), 'updated_at' => now(),
            ]
        ]);

        \Illuminate\Support\Facades\Schema::enableForeignKeyConstraints();
    }
}
