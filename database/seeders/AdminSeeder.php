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
            ['key' => 'twitter_url', 'value' => 'https://twitter.com/safebuild', 'type' => 'string'],
            ['key' => 'linkedin_url', 'value' => 'https://linkedin.com/company/safebuild', 'type' => 'string'],
            ['key' => 'footer_about', 'value' => 'SafeBuild Canada is a premier general contractor offering comprehensive building services across Vancouver Island.', 'type' => 'text'],
            
            // About Us Section (Home)
            ['key' => 'about_title', 'value' => 'OUR 20 YEARS WORKING & BUILDING EXPERIENCE.', 'type' => 'string'],
            ['key' => 'about_subtitle', 'value' => 'We are working Since 2014 in Globally. Construction and Development', 'type' => 'string'],
            ['key' => 'about_description', 'value' => 'From comprehensive renovations and architectural design to property maintenance and restoration, our team ensures every project reflects unparalleled professionalism and precision.', 'type' => 'text'],
            ['key' => 'about_experience_years', 'value' => '20+', 'type' => 'string'],
            ['key' => 'about_projects_count', 'value' => '400+', 'type' => 'string'],
            ['key' => 'about_pros_count', 'value' => '50+', 'type' => 'string'],
            ['key' => 'about_image', 'value' => 'assets/steptodown.com688306.webp', 'type' => 'string'],
            ['key' => 'about_intro_text', 'value' => 'At SafeBuild, we combine over two decades of experience with a commitment to safe, reliable, and community-focused construction across Vancouver Island. From concept to completion, we deliver precise, high-quality results while embracing innovation, collaboration, and respect for the region\'s diverse communities and Indigenous heritage.', 'type' => 'text'],

            // Why Choose Us Section
            ['key' => 'why_title', 'value' => 'Elevate Your Property To Its Full Potential', 'type' => 'string'],
            ['key' => 'why_description', 'value' => 'Let us bring your vision to life while maintaining the integrity and functionality of your property. We manage every detail with excellence from design to execution.', 'type' => 'text'],
            ['key' => 'why_image', 'value' => 'assets/steptodown.com191724.webp', 'type' => 'string'],
            ['key' => 'why_acc_1_title', 'value' => 'Proven Expertise', 'type' => 'string'],
            ['key' => 'why_acc_1_text', 'value' => 'A trusted leader in construction and restoration across BC.', 'type' => 'string'],
            ['key' => 'why_acc_2_title', 'value' => 'Industry Accreditation', 'type' => 'string'],
            ['key' => 'why_acc_2_text', 'value' => 'Fully insured, BBB-accredited, and proud members of BOMA.', 'type' => 'string'],
            ['key' => 'why_acc_3_title', 'value' => 'Commitment to Quality', 'type' => 'string'],
            ['key' => 'why_acc_3_text', 'value' => 'Driven by precision, efficiency, and a focus on lasting value.', 'type' => 'string'],
            
            // Services Page
            ['key' => 'services_hero_image', 'value' => 'assets/steptodown.com399351.webp', 'type' => 'image'],
            ['key' => 'services_hero_title', 'value' => 'View All Services', 'type' => 'string'],
            ['key' => 'services_subtitle', 'value' => 'Comprehensive Property Services', 'type' => 'string'],
            ['key' => 'services_intro_title', 'value' => 'Designed for Excellence', 'type' => 'string'],
            ['key' => 'services_intro_description', 'value' => 'SafeBuild Canada delivers a complete suite of construction, restoration, and property enhancement services tailored for high-end residential, commercial, and industrial clients across Victoria and Vancouver Island.', 'type' => 'string'],
        ];

        foreach ($settings as $setting) {
            SiteSetting::updateOrCreate(['key' => $setting['key']], $setting);
        }

        // 3. Hero Slides
        HeroSlide::truncate();
        HeroSlide::insert([
                'title' => 'SafeBuild Canada',
                'subtitle' => 'Welcome to',
                'image_path' => 'assets/steptodown.com618418.webp',
                'is_active' => true,
                'order' => 1,
                'created_at' => now(), 'updated_at' => now(),
            [
                'title' => 'Excellence in Construction & Property Restoration',
                'subtitle' => null,
                'image_path' => 'assets/steptodown.com399351.webp',
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
                'description' => 'SafeBuild Canada delivers a complete suite of construction, restoration, and property enhancement services tailored for high-end residential, commercial, and industrial clients across Victoria and Vancouver Island. Every service we provide is rooted in safety, craftsmanship, and long-term value.',
                'icon_class' => 'fas fa-hard-hat',
                'image_path' => 'assets/steptodown.com399351.webp',
                'is_active' => true, 'order' => 1,
                'created_at' => now(), 'updated_at' => now(),
            ],
            [
                'title' => 'Renovation & Remodeling',
                'description' => 'Transform your space with customized renovation solutions designed to elevate comfort, functionality, and aesthetic appeal. From luxurious kitchens and bathrooms to full home and commercial remodels, our team blends innovative design with exceptional workmanship.',
                'icon_class' => 'flaticon-architect',
                'image_path' => 'assets/project-v1-1-2.jpg',
                'is_active' => true, 'order' => 2,
                'created_at' => now(), 'updated_at' => now(),
            ],
            [
                'title' => 'Architectural Design',
                'description' => 'Our architectural team combines creativity with structural expertise to deliver personalized designs that reflect your vision while meeting the highest standards of performance, efficiency, and durability.',
                'icon_class' => 'flaticon-manufacture',
                'image_path' => 'assets/steptodown.com618418.webp',
                'is_active' => true, 'order' => 3,
                'created_at' => now(), 'updated_at' => now(),
            ],
            [
                'title' => 'Excavation & Site Preparation',
                'description' => 'We provide precise, professional excavation, grading, trenching, and land preparation services—ensuring every project begins on a stable and well-planned foundation.',
                'icon_class' => 'flaticon-chemical',
                'image_path' => 'assets/steptodown.com481843-1.webp',
                'is_active' => true, 'order' => 4,
                'created_at' => now(), 'updated_at' => now(),
            ],
            [
                'title' => 'Demolition Services',
                'description' => 'SafeBuild offers safe and efficient demolition solutions, ranging from selective interior removals to full structural takedowns. Our team prioritizes safety, debris control, and clean site preparation for your next phase of development.',
                'icon_class' => 'flaticon-factory-1',
                'image_path' => 'assets/marek-studzinski-zQBjgS4PGpg-unsplash-1.webp',
                'is_active' => true, 'order' => 5,
                'created_at' => now(), 'updated_at' => now(),
            ],
            [
                'title' => 'Custom Carpentry & Cabinetry',
                'description' => 'Experience refined craftsmanship through our custom carpentry and cabinetry services. Whether creating built-ins, detailed millwork, or premium wood finishes, we deliver durable, elegant, and functional results.',
                'icon_class' => 'flaticon-car-parts',
                'image_path' => 'assets/project-v1-2-2.jpg',
                'is_active' => true, 'order' => 6,
                'created_at' => now(), 'updated_at' => now(),
            ],
            [
                'title' => 'Metal Fabrication',
                'description' => 'With in-house fabrication capabilities, we design and produce high-quality structural steel components, railings, brackets, and architectural metal features that enhance both strength and visual appeal.',
                'icon_class' => 'flaticon-garage-owner',
                'image_path' => 'assets/steptodown.com191724.webp',
                'is_active' => true, 'order' => 7,
                'created_at' => now(), 'updated_at' => now(),
            ],
            [
                'title' => 'Restoration & Abatement',
                'description' => 'We restore properties affected by fire, water, mold, or environmental hazards using certified restoration techniques. Our goal is to return your property to a safe, functional, and aesthetically renewed condition.',
                'icon_class' => 'fas fa-fire-extinguisher',
                'image_path' => 'assets/pexels-tima-miroshnichenko-6196225.webp',
                'is_active' => true, 'order' => 8,
                'created_at' => now(), 'updated_at' => now(),
            ],
            [
                'title' => 'Rock Blasting & Removal',
                'description' => 'For challenging terrain across Vancouver Island, SafeBuild provides precision rock blasting and removal services—supporting safe development even in the most complex site conditions.',
                'icon_class' => 'fas fa-mountain',
                'image_path' => 'assets/steptodown.com481843-1.webp',
                'is_active' => true, 'order' => 9,
                'created_at' => now(), 'updated_at' => now(),
            ],
            [
                'title' => 'Roofing Services',
                'description' => 'From new installations to ongoing maintenance and repairs, our roofing services are designed to protect your property and enhance its long-term value with durable, energy-efficient solutions.',
                'icon_class' => 'flaticon-architect',
                'image_path' => 'assets/steptodown.com688306.webp',
                'is_active' => true, 'order' => 10,
                'created_at' => now(), 'updated_at' => now(),
            ],
            [
                'title' => 'Energy Efficiency & Sustainability',
                'description' => 'We offer modern upgrades designed to improve performance and reduce energy consumption, including high-efficiency windows, doors, insulation, and HVAC improvements—supporting sustainable living on the Island.',
                'icon_class' => 'flaticon-factory',
                'image_path' => 'assets/project-v1-3-1.jpg',
                'is_active' => true, 'order' => 11,
                'created_at' => now(), 'updated_at' => now(),
            ],
            [
                'title' => 'Interior & Exterior Finishes',
                'description' => 'SafeBuild provides exceptional finishing services including painting, masonry, tile work, and flooring. Our detail-driven approach ensures beautiful, long-lasting results inside and out.',
                'icon_class' => 'flaticon-manufacture',
                'image_path' => 'assets/blog-v1-3-1.jpg',
                'is_active' => true, 'order' => 12,
                'created_at' => now(), 'updated_at' => now(),
            ],
            [
                'title' => 'Comprehensive Cleaning & Maintenance',
                'description' => 'From pre-construction preparation to post-construction cleaning and scheduled property maintenance, our team keeps your space safe, clean, and consistently well-maintained.',
                'icon_class' => 'flaticon-chemical',
                'image_path' => 'assets/blog-v1-2-1.jpg',
                'is_active' => true, 'order' => 13,
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
