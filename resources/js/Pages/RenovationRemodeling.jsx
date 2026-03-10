import Navbar from '@/Components/Navbar';
import Footer from '@/Components/Footer';
import Team from '@/Components/Team';
import Testimonial from '@/Components/Testimonial';
import { Link } from '@inertiajs/react';

const servicesList = [
    { label: 'Property Services & Design', href: '/property-services-design', active: false },
    { label: 'Renovation & Remodeling', href: '/renovation-remodeling', active: true },
    { label: 'Architectural Design', href: '/architectural-design', active: false },
    { label: "Owner's Representation", href: '/excavation-site-prep', active: false },
    { label: 'Custom Carpentry & Cabinetry', href: '/custom-carpentry', active: false },
    { label: 'Excavation & Site Prep', href: '/excavation-site-prep', active: false },
];

export default function RenovationRemodeling() {
    return (
        <>
            <Navbar />

            {/* Page Hero */}
            <section className="relative h-[450px] flex items-center justify-center overflow-hidden">
                <div className="absolute inset-0 bg-sb-dark/65 z-10"></div>
                <img
                    src="/assets/project-v1-2-2.jpg"
                    alt="Renovation And Remodeling Services"
                    className="absolute inset-0 w-full h-full object-cover"
                />
                <div className="relative z-20 text-center px-4">
                    <h1 className="text-white text-4xl md:text-6xl font-bold uppercase mb-4 tracking-tight font-poppins">
                        Renovation And Remodeling Services
                    </h1>
                    <nav className="flex items-center justify-center gap-2 text-sm font-bold uppercase tracking-widest">
                        <Link href="/" className="text-white hover:text-sb-orange transition-colors">Home</Link>
                        <span className="text-sb-orange">•</span>
                        <span className="text-sb-orange">Renovation & Remodeling</span>
                    </nav>
                </div>
            </section>

            {/* Service Detail Section */}
            <section className="py-24 bg-white">
                <div className="container mx-auto px-6 max-w-7xl">
                    <div className="flex flex-col lg:flex-row gap-16">

                        {/* Left: Main Content */}
                        <div className="lg:w-2/3">
                            <div className="mb-10 overflow-hidden shadow-lg">
                                <img
                                    src="/assets/project-v1-3-1-1.jpg"
                                    alt="Renovation And Remodeling Services"
                                    className="w-full h-[380px] object-cover hover:scale-105 transition-transform duration-700"
                                />
                            </div>

                            <div className="mb-8">
                                <span className="text-sb-orange uppercase tracking-[.3em] font-bold text-sm block mb-4">Service Details</span>
                                <h2 className="text-sb-dark text-3xl md:text-4xl font-bold leading-tight uppercase font-poppins mb-6">
                                    Revitalizing spaces with expert renovation and remodeling that grow — Our SafeBuild Canada.
                                </h2>
                            </div>

                            <div className="text-gray-600 leading-relaxed text-base mb-8">
                                <p className="mb-3">We specialize in transforming outdated spaces into modern masterpieces through skilled renovation and remodeling services.</p>
                                <p>From kitchen and bathroom upgrades to full-scale property transformations, we handle it all with precision and care.</p>
                            </div>

                            <h3 className="text-2xl font-bold text-sb-dark mb-6 uppercase font-poppins">Renovation And Remodeling Services</h3>

                            <div className="space-y-5 text-gray-600 leading-relaxed text-base">
                                <p>At SafeBuild Canada, our renovation and remodeling services are designed to breathe new life into your property. We understand that your home or workspace is a reflection of who you are, and we are committed to making it better in every way.</p>
                                <p>Our team of skilled professionals brings creativity and technical expertise to every renovation project. Whether you want to modernize a dated interior, expand your living space, or completely transform your property, we have the knowledge and tools to get it done right.</p>
                                <p>We work closely with you throughout the entire process, from initial planning and design to final installation and cleanup. Our goal is to deliver a seamless renovation experience that minimizes disruption and exceeds your expectations.</p>
                            </div>
                        </div>

                        {/* Right: Sidebar */}
                        <div className="lg:w-1/3">
                            <div className="bg-gray-50 p-8 shadow-sm border-l-4 border-sb-red mb-8">
                                <h4 className="text-sb-dark font-bold text-xl uppercase mb-6">Our Services List</h4>
                                <ul className="space-y-3">
                                    {servicesList.map((s, i) => (
                                        <li key={i}>
                                            <Link
                                                href={s.href}
                                                className={`flex items-center justify-between p-4 font-bold text-sm shadow-sm transition-all ${s.active ? 'bg-sb-red text-white' : 'bg-white border border-gray-100 text-gray-700 hover:bg-sb-red hover:text-white'}`}
                                            >
                                                {s.label} <i className="fas fa-chevron-right text-xs"></i>
                                            </Link>
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            {/* Contact CTA */}
                            <div className="bg-sb-dark p-8 text-white text-center">
                                <div className="text-sb-orange text-5xl mb-4">
                                    <i className="fas fa-phone-alt"></i>
                                </div>
                                <h4 className="text-xl font-bold uppercase mb-2">Need Help?</h4>
                                <p className="text-gray-400 text-sm mb-6">Talk to our renovation experts today and get a free consultation.</p>
                                <a
                                    href="tel:+12508860059"
                                    className="block bg-sb-red text-white font-bold py-4 px-8 hover:bg-white hover:text-sb-red transition-all uppercase tracking-wider text-sm"
                                >
                                    +1 (250) 886-0059
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <Team />
            <Testimonial />

            <Footer />
        </>
    );
}
