import { Head, Link, usePage } from '@inertiajs/react';
import Navbar from '@/Components/Navbar';
import Footer from '@/Components/Footer';
import BrandLogos from '@/Components/BrandLogos';
import OurProjects from '@/Components/OurProjects';
import React from 'react';
import { getAssetUrl } from '@/lib/utils';

export default function AboutUsPage() {
    const { siteSettings } = usePage().props;
    return (
        <>
            <Head title="About Us – SafeBuild Canada" />
            <div className="boxed_wrapper">
                <Navbar />

                {/* ── PAGE HERO ─────────────────────────────────────────── */}
                <section className="relative h-[400px] flex items-center justify-center bg-black overflow-hidden">
                    <div className="absolute inset-0 bg-cover bg-center bg-no-repeat"
                        style={{ backgroundImage: `url(${getAssetUrl('assets/steptodown.com618418.webp')})` }}></div>
                    <div className="absolute inset-0 bg-[#0E0F0F]/70"></div>
                    <div className="relative z-10 text-center px-4">
                        <h1 className="text-white text-5xl md:text-6xl font-poppins font-bold uppercase tracking-wider mb-4">
                            About Us
                        </h1>
                        <nav className="flex items-center justify-center gap-2 text-white/80 text-sm font-bold uppercase">
                            <Link href="/" className="hover:text-sb-red transition-colors">Home</Link>
                            <span className="w-1.5 h-1.5 bg-sb-red rounded-full"></span>
                            <span>About Us</span>
                        </nav>
                    </div>
                </section>

                {/* ── INTRO SECTION ───────────────────────────────────────── */}
                <section className="py-24 bg-white overflow-hidden">
                    <div className="max-w-7xl mx-auto px-4 md:px-8">
                        <div className="flex flex-col lg:flex-row items-start gap-20">

                            {/* ── LEFT: Image Collage ── */}
                            <div className="lg:w-[45%] relative flex-shrink-0">
                                {/* Decorative background square */}
                                <div className="absolute top-8 left-8 w-full h-full bg-sb-red/8 border border-sb-red/15 -z-10"></div>

                                {/* Main tall image */}
                                <div className="relative">
                                    <img
                                        src={getAssetUrl('assets/steptodown.com688306.webp')}
                                        alt="SafeBuild construction work"
                                        className="w-full h-[520px] object-cover shadow-2xl"
                                        onError={e => { e.target.src = getAssetUrl('assets/project-v1-1-2.jpg'); }}
                                    />
                                    {/* Red top bar accent */}
                                    <div className="absolute top-0 left-0 w-20 h-1.5 bg-sb-red"></div>

                                    {/* Floating experience badge */}
                                    <div className="absolute -bottom-8 -right-8 bg-sb-red text-white p-8 shadow-2xl z-20">
                                        <span className="block text-6xl font-black leading-none">20+</span>
                                        <span className="text-xs uppercase font-bold tracking-[.2em] mt-2 block text-white/80">Years of<br />Excellence</span>
                                    </div>
                                </div>

                                {/* Two bottom images */}
                                <div className="grid grid-cols-2 gap-4 mt-4 pr-8">
                                    <img
                                        src={getAssetUrl('assets/steptodown.com584276.webp')}
                                        alt="SafeBuild project"
                                        className="w-full h-[160px] object-cover shadow-lg"
                                        onError={e => { e.target.src = getAssetUrl('assets/project-v1-2-2.jpg'); }}
                                    />
                                    <img
                                        src={getAssetUrl('assets/steptodown.com481843-1.webp')}
                                        alt="SafeBuild project"
                                        className="w-full h-[160px] object-cover shadow-lg"
                                        onError={e => { e.target.src = getAssetUrl('assets/project-v1-3-1-1.jpg'); }}
                                    />
                                </div>

                                {/* Stats strip */}
                                <div className="grid grid-cols-3 mt-4 border border-gray-100 shadow-sm bg-white pr-8">
                                    <div className="text-center py-6 border-r border-gray-100">
                                        <span className="block text-3xl font-black text-sb-orange">350+</span>
                                        <span className="text-xs font-bold uppercase tracking-wider text-sb-dark mt-1 block">Projects</span>
                                    </div>
                                    <div className="text-center py-6 border-r border-gray-100">
                                        <span className="block text-3xl font-black text-sb-orange">50+</span>
                                        <span className="text-xs font-bold uppercase tracking-wider text-sb-dark mt-1 block">Skilled Pros</span>
                                    </div>
                                    <div className="text-center py-6">
                                        <span className="block text-3xl font-black text-sb-orange">100%</span>
                                        <span className="text-xs font-bold uppercase tracking-wider text-sb-dark mt-1 block">Satisfaction</span>
                                    </div>
                                </div>
                            </div>

                            {/* ── RIGHT: Text Content ── */}
                            <div className="lg:w-[55%] pt-4">
                                <span className="text-sb-orange uppercase tracking-[.3em] font-bold text-sm mb-4 block">
                                    A B O U T &nbsp; U S
                                </span>
                                <h2 className="text-sb-dark text-4xl md:text-5xl font-poppins font-bold uppercase leading-tight mb-8">
                                    SafeBuild Canada – <br />
                                    <span className="text-sb-red">Building Value,</span> Creating Legacy
                                </h2>

                                {/* Divider */}
                                <div className="flex items-center gap-3 mb-8">
                                    <div className="h-1 w-12 bg-sb-red"></div>
                                    <div className="h-1 w-4 bg-sb-orange"></div>
                                </div>

                                <div className="space-y-5 text-gray-600 text-base leading-relaxed">
                                    <p>
                                        SafeBuild is a Vancouver Island–based construction and development company committed to delivering safe, reliable, and community-focused building solutions. Since our establishment in 2014, we have grown from a small, dedicated team into a trusted partner serving clients across Victoria, the West Shore, and broader British Columbia.
                                    </p>
                                    <p>
                                        With more than 20 years of combined industry experience, we bring expertise in General Contracting, Construction Management, Design-Build, Renovations, Tenant Improvements, and Property Maintenance. Our work reflects the highest standards of planning, craftsmanship, and project execution.
                                    </p>
                                    <p>
                                        
                                    </p>

                                    {/* Highlight box */}
                                    <div className="bg-gray-50 border-l-4 border-sb-red p-6 my-6">
                                        <p className="text-sb-dark font-semibold italic text-base leading-relaxed">
                                           "Fully insured  with $5 million liability coverage and work safe BC insurance, so our clients are fully protected."
                                        </p>
                                    </div>

                                    <p>
                                        Our portfolio includes residential, commercial, and institutional projects, with repeat clients who rely on our transparency, integrity, and problem-solving approach. We are actively engaged in supporting local communities through participation in public tenders and partnerships that contribute to sustainable urban growth across the region.
                                    </p>
                                    <p>
                                        Whether you are planning a new development, renovation, or large-scale construction initiative, SafeBuild is here to help bring your vision to life with precision, professionalism, and care.
                                    </p>
                                </div>

                                <div className="mt-10 flex flex-wrap gap-4">
                                    <Link
                                        href="/contact-us"
                                        className="inline-block bg-sb-red text-white font-bold uppercase tracking-widest px-10 py-4 hover:bg-sb-dark transition-all duration-300"
                                    >
                                        Get In Touch
                                    </Link>
                                    <Link
                                        href="/our-projects"
                                        className="inline-block border-2 border-sb-dark text-sb-dark font-bold uppercase tracking-widest px-10 py-4 hover:bg-sb-dark hover:text-white transition-all duration-300"
                                    >
                                        Our Projects
                                    </Link>
                                </div>
                            </div>

                        </div>
                    </div>
                </section>

                {/* ── WHY CHOOSE US ────────────────────────────────────────── */}
                <section className="py-20 bg-gray-50">
                    <div className="max-w-4xl mx-auto px-4 text-center">
                        <h2 className="text-sb-dark text-4xl md:text-5xl font-poppins font-bold uppercase mb-8">
                            Why SafeBuild Canada?
                        </h2>
                        <p className="text-gray-600 text-lg leading-relaxed mb-12">
                            Our membership in BOMA, the Victoria Chamber of Commerce, and BBB accreditation reflect our
                            adherence to the highest standards of professionalism and ethics. With a team of skilled
                            professionals, we ensure every project—no matter the scale—is executed with precision, care, and
                            attention to detail.
                        </p>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-left">
                            <div className="bg-white p-8 rounded-sm shadow-sm flex gap-6">
                                <i className="flaticon-car-parts text-4xl text-sb-red flex-shrink-0"></i>
                                <div>
                                    <h3 className="text-xl font-bold text-sb-dark mb-2">Comprehensive Property Services</h3>
                                    <p className="text-gray-500">Tailored to meet the unique needs of high-end residential,
                                        commercial, and industrial properties.</p>
                                </div>
                            </div>
                            <div className="bg-white p-8 rounded-sm shadow-sm flex gap-6">
                                <i className="flaticon-architect text-4xl text-sb-red flex-shrink-0"></i>
                                <div>
                                    <h3 className="text-xl font-bold text-sb-dark mb-2">Renovation and Remodeling</h3>
                                    <p className="text-gray-500">Reimagine your property with bespoke renovations and remodeling solutions.</p>
                                </div>
                            </div>
                            <div className="bg-white p-8 rounded-sm shadow-sm flex gap-6">
                                <i className="flaticon-chemical text-4xl text-sb-red flex-shrink-0"></i>
                                <div>
                                    <h3 className="text-xl font-bold text-sb-dark mb-2">Excavation &amp; Site Preparation</h3>
                                    <p className="text-gray-500">We provide professional excavation services, including site
                                        grading, trenching, and land clearing.</p>
                                </div>
                            </div>
                            <div className="bg-white p-8 rounded-sm shadow-sm flex gap-6">
                                <i className="flaticon-garage-owner text-4xl text-sb-red flex-shrink-0"></i>
                                <div>
                                    <h3 className="text-xl font-bold text-sb-dark mb-2">Restoration And Abatement Services</h3>
                                    <p className="text-gray-500">We use advanced techniques and certified processes to restore
                                        safety, functionality to your property.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

            

                {/* �
				{/* -- PROJECTS SECTION */}
                <OurProjects />

                {/* -- ─ TESTIMONIALS SECTION ─────────────────────────────────── */}
                <section className="py-24 bg-[#282d35] relative overflow-hidden">
                    <div className="container mx-auto px-4 relative z-10">
                        <div className="relative max-w-6xl mx-auto">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                {/* Testimonial 1 */}
                                <div className="bg-[#282d35] p-12 relative border border-white/10 flex flex-col min-h-[450px]">
                                    <div className="mb-10">
                                        <svg className="w-16 h-16 fill-white/20" viewBox="0 0 100 80">
                                            <path d="M0 0h40v40H10c0 10 10 20 20 20v20C10 80 0 60 0 40V0zm60 0h40v40H70c0 10 10 20 20 20v20C70 80 60 60 60 40V0z" />
                                        </svg>
                                    </div>
                                    <p className="text-white/80 text-lg leading-relaxed mb-12">"Working with SafeBuild Canada on our
                                        commercial project was a breeze. They managed the entire process smoothly and
                                        efficiently."</p>
                                    <div className="mt-auto flex items-center justify-between">
                                        <div className="bg-white/5 p-6 pr-12">
                                            <h4 className="text-white font-bold uppercase tracking-widest text-sm mb-1">Emily Roads.</h4>
                                            <p className="text-white/40 text-xs font-medium uppercase">Property Developer</p>
                                        </div>
                                        <div className="flex-shrink-0 -ml-12">
                                            <img src={getAssetUrl('assets/steptodown.com584276.webp')} alt="Emily Roads"
                                                className="w-20 h-20 rounded-full object-cover border-4 border-[#282d35] shadow-xl" />
                                        </div>
                                    </div>
                                </div>
                                {/* Testimonial 2 */}
                                <div className="bg-[#282d35] p-12 relative border border-white/10 flex flex-col min-h-[450px]">
                                    <div className="mb-10">
                                        <svg className="w-16 h-16 fill-white/20" viewBox="0 0 100 80">
                                            <path d="M0 0h40v40H10c0 10 10 20 20 20v20C10 80 0 60 0 40V0zm60 0h40v40H70c0 10 10 20 20 20v20C70 80 60 60 60 40V0z" />
                                        </svg>
                                    </div>
                                    <p className="text-white/80 text-lg leading-relaxed mb-12">"SafeBuild helped us transform our
                                        office space. They offered creative solutions, and the project was completed faster than
                                        expected."</p>
                                    <div className="mt-auto flex items-center justify-between">
                                        <div className="bg-white/5 p-6 pr-12">
                                            <h4 className="text-white font-bold uppercase tracking-widest text-sm mb-1">Linda Murphy.</h4>
                                            <p className="text-white/40 text-xs font-medium uppercase">Commercial Property Owner</p>
                                        </div>
                                        <div className="flex-shrink-0 -ml-12">
                                            <img src={getAssetUrl('assets/steptodown.com426279.webp')} alt="Linda Murphy"
                                                className="w-20 h-20 rounded-full object-cover border-4 border-[#282d35] shadow-xl" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* ── NEWSLETTER & MAP ─────────────────────────────────────── */}
                <section className="flex flex-col lg:flex-row min-h-[550px] overflow-hidden">
                    {/* Newsletter */}
                    <div className="lg:w-1/2 bg-[#1E232B] px-8 md:px-24 py-20 flex flex-col justify-center">
                        <div className="flex items-center gap-6 mb-8">
                            <div className="flex-shrink-0">
                                <div className="w-16 h-16 bg-white/10 rounded-lg flex items-center justify-center">
                                    <i className="fas fa-envelope-open-text text-white text-3xl"></i>
                                </div>
                            </div>
                            <div>
                                <span className="text-sb-orange uppercase tracking-[.3em] font-bold text-sm block mb-1">
                                    N E W S L E T T E R
                                </span>
                                <h2 className="text-white text-3xl md:text-4xl font-poppins font-bold uppercase leading-tight">
                                    SUBSCRIBE NOW !
                                </h2>
                            </div>
                        </div>
                        <p className="text-white/70 text-lg leading-relaxed mb-12">
                            Stay Up to Date about our latest works and projects and about our new launched services.
                        </p>
                        <form className="flex items-stretch gap-4 mb-6">
                            <div className="flex-1">
                                <input type="email" placeholder="Email address ..."
                                    className="w-full h-[60px] bg-[#2A303B] text-white px-6 focus:outline-none focus:ring-1 focus:ring-sb-orange transition-all placeholder:text-gray-500" />
                            </div>
                            <button type="submit"
                                className="w-[60px] h-[60px] bg-[#1a1e26] text-white flex items-center justify-center hover:bg-sb-orange transition-colors duration-300">
                                <i className="fas fa-paper-plane text-xl"></i>
                            </button>
                        </form>
                        <p className="text-sb-orange italic text-sm mb-16">
                            Please Write Your E-mail And Subscribe Now<span className="text-sb-orange">*</span>
                        </p>
                        {/* Phone Box */}
                        <div className="flex items-stretch w-full max-w-[450px] h-32">
                            <div className="w-32 bg-sb-orange flex items-center justify-center">
                                <i className="fas fa-phone-alt text-white text-4xl -rotate-12"></i>
                            </div>
                            <div className="flex-1 bg-[#1a1e26] px-8 flex flex-col justify-center">
                                <span className="text-white font-bold uppercase tracking-widest text-xs block mb-1 opacity-80">
                                    Our 24/7 Phone Services
                                </span>
                                <a href={`tel:${(siteSettings.contact_phone || '+12508860059').replace(/[^0-9+]/g, '')}`} className="text-white text-3xl font-bold hover:text-sb-orange transition-colors">
                                    {siteSettings.contact_phone || '+1 (250) 886-0059'}
                                </a>
                            </div>
                        </div>
                    </div>
                    {/* Map */}
                    <div className="lg:w-1/2 min-h-[550px] relative">
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2650.627712398506!2d-123.50424682337651!3d48.42512697136531!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x548f0df2944fa907%3A0xe549cd97c5cb1a1!2s3448%20Karger%20Terrace%2C%20Victoria%2C%20BC%20V9C%203K4%2C%20Canada!5e0!3m2!1sen!2sus!4v1700000000000!5m2!1sen!2sus"
                            width="100%" height="100%" style={{ border: 0, minHeight: '550px' }}
                            allowFullScreen="" loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade">
                        </iframe>
                    </div>
                </section>

                <BrandLogos />

                <Footer />
            </div>
        </>
    );
}

