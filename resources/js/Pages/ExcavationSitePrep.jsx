import { Link, usePage } from '@inertiajs/react';
import { getAssetUrl } from '@/lib/utils';
import Navbar from '@/Components/Navbar';
import Footer from '@/Components/Footer';
import Team from '@/Components/Team';
import Testimonial from '@/Components/Testimonial';

const servicesList = [
    { label: 'Property Services & Design', href: '/property-services-design', active: false },
    { label: 'Renovation & Remodeling', href: '/renovation-remodeling', active: false },
    { label: 'Architectural Design', href: '/architectural-design', active: false },
    { label: "Owner's Representation", href: '/excavation-site-prep', active: false },
    { label: 'Custom Carpentry & Cabinetry', href: '/custom-carpentry', active: false },
    { label: 'Excavation & Site Prep', href: '/excavation-site-prep', active: true },
];

export default function ExcavationSitePrep() {
    const { siteSettings } = usePage().props;
    return (
        <>
            <Navbar />

            {/* Page Hero */}
            <section className="relative h-[450px] flex items-center justify-center overflow-hidden">
                <div className="absolute inset-0 bg-sb-dark/65 z-10"></div>
                <img
                    src={getAssetUrl('assets/project-v1-3-1-1.jpg')}
                    alt="Excavation And Site Preparation"
                    className="absolute inset-0 w-full h-full object-cover"
                />
                <div className="relative z-20 text-center px-4">
                    <h1 className="text-white text-4xl md:text-6xl font-bold uppercase mb-4 tracking-tight font-poppins">
                        Excavation And Site Preparation Services
                    </h1>
                    <nav className="flex items-center justify-center gap-2 text-sm font-bold uppercase tracking-widest">
                        <Link href="/" className="text-white hover:text-sb-orange transition-colors">Home</Link>
                        <span className="text-sb-orange">•</span>
                        <span className="text-sb-orange">Excavation And Site Preparation Services</span>
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
                                    src={getAssetUrl('assets/project-v1-4-1-1.jpg')}
                                    alt="Excavation And Site Preparation Services"
                                    className="w-full h-[380px] object-cover hover:scale-105 transition-transform duration-700"
                                />
                            </div>

                            <div className="mb-8">
                                <span className="text-sb-orange uppercase tracking-[.3em] font-bold text-sm block mb-4">Service Details</span>
                                <h2 className="text-sb-dark text-3xl md:text-4xl font-bold leading-tight uppercase font-poppins mb-6">
                                    Shaping groundwork for construction success with unmatched excavation — Our SafeBuild Canada.
                                </h2>
                            </div>

                            <div className="text-gray-600 leading-relaxed text-base mb-8">
                                <p className="mb-3">We provide professional excavation services, including site grading, trenching, and land clearing.</p>
                                <p>Ensuring your project starts on a solid foundation is our only concern. We transform our challenges into opportunities for every project with our Excavation expertise.</p>
                            </div>

                            <h3 className="text-2xl font-bold text-sb-dark mb-6 uppercase font-poppins">Excavation and Site Preparation</h3>

                            <div className="space-y-5 text-gray-600 leading-relaxed text-base">
                                <p>Welcome to SafeBuild Canada's Land Development Services, where we transform raw land into a livable space with focus on innovation, integrity, and environmental stewardship. We offer comprehensive solutions to maximize the potential of your property whether it is for your own residence or an investment.</p>
                                <p>Our experienced team will work closely with planners, civil engineers and municipality to navigate the complexities of land development, from initial feasibility studies and zoning approvals to site design and infrastructure implementation. Whether you're planning a residential subdivision, commercial development, or mixed-use project, we have the expertise and resources to bring your vision to completion. At SafeBuild Canada, we prioritize smart growth principles, incorporating green spaces, pedestrian-friendly design, and sustainable practices to create communities that thrive for generations to come.</p>
                                <p>SafeBuild Canada, your trusted partner for all your land development needs, and let us help you unlock the full potential of your property. Together, we can create spaces where people live, work, and play in harmony with the natural world.</p>
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
                                <p className="text-gray-400 text-sm mb-6">Talk to our excavation experts today and get a free consultation.</p>
                                <a
                                    href={`tel:${siteSettings?.contact_phone || '+12508860059'}`}
                                    className="block bg-sb-red text-white font-bold py-4 px-8 hover:bg-white hover:text-sb-red transition-all uppercase tracking-wider text-sm"
                                >
                                    {siteSettings?.contact_phone || '+1 (250) 886-0059'}
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
