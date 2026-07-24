import Navbar from '@/Components/Navbar';
import Footer from '@/Components/Footer';
import SEOHead from '@/Components/SEOHead';
import { Head, Link, usePage } from '@inertiajs/react';
import { getAssetUrl } from '@/lib/utils';
import React from 'react';

export default function OurServices({ services = [] }) {
    const { siteSettings = {} } = usePage().props;

    const servicesSchema = {
        '@context': 'https://schema.org',
        '@type': 'CollectionPage',
        '@id': 'https://safebuild.ca/our-services#webpage',
        name: 'Our Services – SafeBuild Canada Victoria BC',
        description: 'Explore SafeBuild Canada\'s full range of construction and property services in Victoria BC: renovation, remodeling, architectural design, excavation, custom carpentry, and more.',
        url: 'https://safebuild.ca/our-services',
        isPartOf: { '@id': 'https://safebuild.ca/#website' },
        breadcrumb: {
            '@type': 'BreadcrumbList',
            itemListElement: [
                { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://safebuild.ca' },
                { '@type': 'ListItem', position: 2, name: 'Our Services', item: 'https://safebuild.ca/our-services' }
            ]
        }
    };

    return (
        <>
            <SEOHead
                title="Our Services – Construction & Property Services Victoria BC"
                description="SafeBuild Canada offers renovation, remodeling, architectural design, excavation & site prep, custom carpentry, and full property services in Victoria BC. Request a free quote today."
                canonical="https://safebuild.ca/our-services"
                schema={servicesSchema}
            />
            <Navbar />

            {/* Page Hero */}
            <section className="relative h-[400px] flex items-center justify-center bg-black overflow-hidden">
                <div
                    className="absolute inset-0 bg-cover bg-center bg-no-repeat"
                    style={{ backgroundImage: `url(${getAssetUrl(siteSettings.services_hero_image, 'assets/steptodown.com399351.webp')})` }}
                ></div>
                <div className="absolute inset-0 bg-[#0E0F0F]/70"></div>
                <div className="relative z-10 text-center px-4">
                    <h1 className="text-white text-5xl md:text-6xl font-poppins font-bold uppercase tracking-wider mb-4">
                        {siteSettings.services_hero_title || 'View All Services'}
                    </h1>
                    <nav className="flex items-center justify-center gap-2 text-white/80 text-sm font-bold uppercase">
                        <Link href="/" className="hover:text-sb-red transition-colors">Home</Link>
                        <span className="w-1.5 h-1.5 bg-sb-red rounded-full inline-block"></span>
                        <span className="text-sb-orange">Our Services</span>
                    </nav>
                </div>
            </section>

            {/* Intro Section */}
            <section className="py-24 bg-white">
                <div className="max-w-4xl mx-auto px-4 text-center">
                    <span className="text-sb-orange uppercase tracking-[.3em] font-bold text-sm mb-4 block">
                        {siteSettings.services_subtitle || 'Comprehensive Property Services'}
                    </span>
                    <h2 className="text-sb-dark text-4xl md:text-5xl font-poppins font-bold uppercase leading-tight mb-8">
                        {siteSettings.services_intro_title || 'Designed for Excellence'}
                    </h2>
                    <p className="text-gray-600 text-lg leading-relaxed max-w-2xl mx-auto">
                        {siteSettings.services_intro_description || 'SafeBuild Canada delivers a complete suite of construction, restoration, and property enhancement services tailored for high-end residential, commercial, and industrial clients across Victoria and Vancouver Island. Every service we provide is rooted in safety, craftsmanship, and long-term value.'}
                    </p>
                </div>
            </section>

            {/* Services Grid — 2-column icon + text layout */}
            <section className="py-20 bg-gray-50">
                <div className="max-w-7xl mx-auto px-4 md:px-8">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                        {services.map((s, i) => (
                            <div key={s.id || i} className="flex gap-8 group">
                                <div className="flex-shrink-0">
                                    <i className={`${s.icon_class} text-6xl text-gray-300 group-hover:text-sb-orange transition-colors duration-300`}></i>
                                </div>
                                <div>
                                    <h3 className="text-2xl font-bold text-sb-dark mb-4 uppercase group-hover:text-sb-orange transition-colors duration-300">
                                        {s.title}
                                    </h3>
                                    <p className="text-gray-500 leading-relaxed">{s.description}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Featured About Section */}
            <section className="py-24 bg-white overflow-hidden">
                <div className="max-w-7xl mx-auto px-4 md:px-8">
                    <div className="flex flex-col lg:flex-row items-center gap-20">
                        <div className="lg:w-1/2">
                            <span className="text-sb-orange uppercase tracking-[.3em] font-bold text-sm mb-6 block">About Us</span>
                            <h2 className="text-sb-dark text-4xl md:text-5xl font-poppins font-bold uppercase leading-tight mb-8">
                                {siteSettings.about_title || 'Our 10 Years Working Experience Design.'}
                            </h2>
                            <p className="text-gray-600 text-lg leading-relaxed mb-10">
                                {siteSettings.about_description || 'SafeBuild Canada has established itself as a leader in the construction management industry. We combine decades of collective experience with modern techniques to deliver projects that stand the test of time.'}
                            </p>
                            <ul className="space-y-4 mb-12">
                                <li className="flex items-center gap-3 text-sb-dark font-bold">
                                    <i className="fas fa-check-circle text-sb-orange"></i> High-Quality Craftsmanship
                                </li>
                                <li className="flex items-center gap-3 text-sb-dark font-bold">
                                    <i className="fas fa-check-circle text-sb-orange"></i> Certified Safety Standards
                                </li>
                                <li className="flex items-center gap-3 text-sb-dark font-bold">
                                    <i className="fas fa-check-circle text-sb-orange"></i> Sustainable Construction Practices
                                </li>
                            </ul>
                            <Link
                                href="/about-us"
                                className="inline-block bg-sb-orange text-white font-bold uppercase tracking-widest px-10 py-5 rounded-full hover:bg-sb-dark transition-all duration-300"
                            >
                                Learn More
                            </Link>
                        </div>
                        <div className="lg:w-1/2 relative">
                            <img
                                src={getAssetUrl(siteSettings.about_image, '/assets/steptodown.com688306.webp')}
                                alt="Experience"
                                className="rounded-sm shadow-2xl w-full h-[600px] object-cover"
                            />
                            <div className="absolute -bottom-10 -left-10 bg-sb-orange text-white p-10 hidden md:block">
                                <span className="block text-5xl font-bold mb-2">{siteSettings.about_experience_years || '10+'}</span>
                                <span className="text-sm uppercase font-bold tracking-widest">Years of <br />Excellence</span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Orange CTA Contact Bar */}
            <section className="bg-sb-orange py-10">
                <div className="max-w-7xl mx-auto px-4 md:px-8">
                    <div className="flex flex-col md:flex-row items-center justify-between gap-8">
                        <div className="flex items-center gap-6">
                            <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center">
                                <i className="fas fa-phone-alt text-white text-3xl"></i>
                            </div>
                            <div>
                                <span className="text-white/80 uppercase tracking-widest text-xs font-bold block mb-1">Our 24/7 Phone Services</span>
                                <a href={`tel:${siteSettings.contact_phone || '+12508860059'}`} className="text-white text-3xl font-bold hover:text-sb-dark transition-colors">
                                    {siteSettings.contact_phone || '+1 (250) 886-0059'}
                                </a>
                            </div>
                        </div>
                        <div className="text-center md:text-right">
                            <h4 className="text-white text-xl font-bold uppercase mb-2">Need a Construction Expert?</h4>
                            <p className="text-white/80">Get a free consultation for your next project today.</p>
                        </div>
                    </div>
                </div>
            </section>

            <Footer />
        </>
    );
}
