<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">

        {{-- Primary SEO Meta Tags --}}
        <title inertia>{{ config('app.name', 'SafeBuild Canada') }}</title>

        <meta name="description" content="SafeBuild Canada – Victoria BC's trusted general contractor. Expert renovation, remodeling, architectural design, excavation, custom carpentry & property services. Licensed, insured & BBB accredited. Call +1 (250) 886-0059.">
        <meta name="keywords" content="SafeBuild Canada, general contractor Victoria BC, renovation Victoria BC, remodeling British Columbia, construction contractor Canada, custom carpentry Victoria, excavation site prep BC, architectural design Victoria, home renovation Canada, commercial construction Victoria">
        <meta name="author" content="SafeBuild Canada">
        <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1">
        <meta name="googlebot" content="index, follow">
        <meta name="theme-color" content="#C8102E">

        {{-- Canonical URL --}}
        <link rel="canonical" href="{{ config('app.url') }}{{ request()->getPathInfo() }}">

        {{-- Open Graph --}}
        <meta property="og:type" content="website">
        <meta property="og:site_name" content="SafeBuild Canada">
        <meta property="og:title" content="SafeBuild Canada – Expert Construction & Renovation Victoria BC">
        <meta property="og:description" content="Victoria BC's #1 trusted general contractor. Renovation, remodeling, architectural design, excavation, custom carpentry & more. Licensed, insured & BBB accredited.">
        <meta property="og:url" content="{{ config('app.url') }}{{ request()->getPathInfo() }}">
        <meta property="og:image" content="{{ config('app.url') }}/assets/og-image.jpg">
        <meta property="og:image:width" content="1200">
        <meta property="og:image:height" content="630">
        <meta property="og:image:alt" content="SafeBuild Canada – Construction & Renovation">
        <meta property="og:locale" content="en_CA">

        {{-- Twitter Cards --}}
        <meta name="twitter:card" content="summary_large_image">
        <meta name="twitter:title" content="SafeBuild Canada – Expert Construction & Renovation Victoria BC">
        <meta name="twitter:description" content="Victoria BC's trusted general contractor. Renovation, remodeling, architectural design, excavation & custom carpentry. Licensed & BBB accredited.">
        <meta name="twitter:image" content="{{ config('app.url') }}/assets/og-image.jpg">
        <meta name="twitter:image:alt" content="SafeBuild Canada – Construction & Renovation">

        {{-- Geo / Local SEO --}}
        <meta name="geo.region" content="CA-BC">
        <meta name="geo.placename" content="Victoria, British Columbia, Canada">
        <meta name="geo.position" content="48.4284;-123.3656">
        <meta name="ICBM" content="48.4284, -123.3656">

        {{-- Favicons & App Icons --}}
        <link rel="icon" type="image/png" sizes="32x32" href="/assets/safebuild favicon.png">
        <link rel="icon" type="image/png" sizes="16x16" href="/assets/safebuild favicon.png">
        <link rel="apple-touch-icon" href="/assets/safebuild favicon.png">
        <link rel="shortcut icon" href="/assets/safebuild favicon.png">

        {{-- Fonts --}}
        <link rel="preconnect" href="https://fonts.googleapis.com">
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
        <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700&display=swap" rel="stylesheet">
        <link rel="preconnect" href="https://fonts.bunny.net">
        <link href="https://fonts.bunny.net/css?family=figtree:400,500,600&display=swap" rel="stylesheet" />

        {{-- Icons --}}
        <link rel="stylesheet" href="/assets/flaticon.css">
        <link rel="stylesheet" href="/assets/fontawesome-all.css">

        {{-- Schema.org LocalBusiness --}}
        @verbatim
        <script type="application/ld+json">
        {
            "@context": "https://schema.org",
            "@graph": [
                {
                    "@type": ["HomeImprovementBusiness", "GeneralContractor", "LocalBusiness"],
                    "@id": "https://safebuild.ca/#organization",
                    "name": "SafeBuild Canada",
                    "alternateName": "SafeBuild",
                    "url": "https://safebuild.ca",
                    "logo": {
                        "@type": "ImageObject",
                        "url": "https://safebuild.ca/assets/safebuild favicon.png",
                        "width": 512,
                        "height": 512
                    },
                    "image": "https://safebuild.ca/assets/og-image.jpg",
                    "description": "SafeBuild Canada is Victoria BC's trusted general contractor specializing in renovation, remodeling, architectural design, excavation & site preparation, custom carpentry, and comprehensive property services throughout Greater Victoria.",
                    "slogan": "Building Excellence, Delivering Trust",
                    "telephone": "+12508860059",
                    "email": "ceo@safebuild.ca",
                    "address": {
                        "@type": "PostalAddress",
                        "streetAddress": "Victoria",
                        "addressLocality": "Victoria",
                        "addressRegion": "BC",
                        "postalCode": "V8W",
                        "addressCountry": "CA"
                    },
                    "geo": {
                        "@type": "GeoCoordinates",
                        "latitude": 48.4284,
                        "longitude": -123.3656
                    },
                    "areaServed": [
                        {
                            "@type": "City",
                            "name": "Victoria",
                            "containedIn": "British Columbia, Canada"
                        },
                        {
                            "@type": "City",
                            "name": "Saanich"
                        },
                        {
                            "@type": "City",
                            "name": "Langford"
                        },
                        {
                            "@type": "City",
                            "name": "Oak Bay"
                        },
                        {
                            "@type": "City",
                            "name": "Esquimalt"
                        },
                        {
                            "@type": "AdministrativeArea",
                            "name": "Greater Victoria, British Columbia, Canada"
                        }
                    ],
                    "hasOfferCatalog": {
                        "@type": "OfferCatalog",
                        "name": "Construction & Property Services",
                        "itemListElement": [
                            {"@type": "Offer", "itemOffered": {"@type": "Service", "name": "Renovation & Remodeling"}},
                            {"@type": "Offer", "itemOffered": {"@type": "Service", "name": "Architectural Design"}},
                            {"@type": "Offer", "itemOffered": {"@type": "Service", "name": "Excavation & Site Preparation"}},
                            {"@type": "Offer", "itemOffered": {"@type": "Service", "name": "Custom Carpentry & Cabinetry"}},
                            {"@type": "Offer", "itemOffered": {"@type": "Service", "name": "Property Services & Design"}},
                            {"@type": "Offer", "itemOffered": {"@type": "Service", "name": "Restoration & Abatement"}}
                        ]
                    },
                    "memberOf": [
                        {"@type": "Organization", "name": "BOMA – Building Owners and Managers Association"},
                        {"@type": "Organization", "name": "Victoria Chamber of Commerce"},
                        {"@type": "Organization", "name": "Better Business Bureau (BBB)"}
                    ],
                    "sameAs": [
                        "https://safebuild.ca"
                    ],
                    "openingHoursSpecification": [
                        {
                            "@type": "OpeningHoursSpecification",
                            "dayOfWeek": ["Monday","Tuesday","Wednesday","Thursday","Friday"],
                            "opens": "08:00",
                            "closes": "18:00"
                        }
                    ],
                    "priceRange": "$$",
                    "currenciesAccepted": "CAD",
                    "paymentAccepted": "Cash, Credit Card, Bank Transfer",
                    "knowsLanguage": ["en"]
                },
                {
                    "@type": "WebSite",
                    "@id": "https://safebuild.ca/#website",
                    "url": "https://safebuild.ca",
                    "name": "SafeBuild Canada",
                    "description": "Victoria BC's trusted general contractor for renovation, remodeling, architectural design, and property services.",
                    "publisher": {
                        "@id": "https://safebuild.ca/#organization"
                    },
                    "potentialAction": {
                        "@type": "SearchAction",
                        "target": {
                            "@type": "EntryPoint",
                            "urlTemplate": "https://safebuild.ca/blog?search={search_term_string}"
                        },
                        "query-input": "required name=search_term_string"
                    },
                    "inLanguage": "en-CA"
                }
            ]
        }
        </script>
        @endverbatim

        {{-- Scripts --}}
        @routes
        @viteReactRefresh
        @vite(['resources/js/app.jsx', "resources/js/Pages/{$page['component']}.jsx"])
        @inertiaHead
    </head>
    <body class="font-sans antialiased">
        @inertia
    </body>
</html>
