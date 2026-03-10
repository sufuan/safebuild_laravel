import Navbar from '@/Components/Navbar';
import Footer from '@/Components/Footer';
import { Link } from '@inertiajs/react';

const services = [
    {
        icon: 'flaticon-architect',
        title: 'Renovation And Remodeling',
        desc: 'Reimagine your property with bespoke renovations and remodeling solutions. From luxury kitchens and bathrooms to complete property transformations, our team combines innovative design with impeccable craftsmanship.',
    },
    {
        icon: 'flaticon-manufacture',
        title: 'Architectural Design',
        desc: 'Our architectural services merge creativity with technical expertise, delivering custom designs that align with your vision and meet the highest structural standards.',
    },
    {
        icon: 'flaticon-chemical',
        title: 'Excavation And Site Preparation',
        desc: 'We provide professional excavation services, including site grading, trenching, and land clearing, ensuring your project starts on a solid foundation.',
    },
    {
        icon: 'flaticon-factory-1',
        title: 'Demolition Services',
        desc: 'Our demolition experts handle projects of all sizes, from selective interior demolition to complete structural removal. We prioritize safety, efficiency, and thorough site preparation.',
    },
    {
        icon: 'flaticon-car-parts',
        title: 'Custom Carpentry And Cabinetry',
        desc: 'Experience tailored craftsmanship with our custom carpentry and cabinetry solutions. Whether you need built-in shelving, intricate wood finishes, or custom furniture.',
    },
    {
        icon: 'flaticon-garage-owner',
        title: 'Metal Fabrication',
        desc: 'With our in-house metal fabrication capabilities, we create custom steel and metalwork solutions, including structural supports, railings, and architectural accents.',
    },
    {
        icon: 'flaticon-chemical-1',
        title: 'Restoration And Abatement Services',
        desc: 'Our restoration services address damage caused by fire, water, mold, or asbestos. We use advanced techniques and certified processes to restore safety and functionality.',
    },
    {
        icon: 'flaticon-energy',
        title: 'Rock Blasting And Removal',
        desc: 'SafeBuild Canada offers precision rock blasting and removal services, expertly managing challenging terrain to meet your construction needs with maximum safety.',
    },
    {
        icon: 'flaticon-architect',
        title: 'Roofing Services',
        desc: 'From installation to ongoing maintenance, our roofing services are designed to protect your property while enhancing its appearance and value for decades to come.',
    },
    {
        icon: 'flaticon-factory',
        title: 'Energy Efficiency Solutions',
        desc: 'Optimize your property with energy-efficient installations, including high-performance windows, doors, and HVAC upgrades focused on sustainability.',
    },
    {
        icon: 'flaticon-manufacture',
        title: 'Interior And Exterior Finishes',
        desc: 'Our painting, masonry, and flooring services deliver timeless finishes that elevate the look and feel of your property with professional aesthetic results.',
    },
    {
        icon: 'flaticon-chemical',
        title: 'Comprehensive Cleaning',
        desc: 'From pre- and post-construction cleaning to regular property maintenance, we ensure your property is always in impeccable condition and ready for use.',
    },
];

export default function OurServices() {
    return (
        <>
            <Navbar />

            {/* Page Hero */}
            <section className="relative h-[400px] flex items-center justify-center bg-black overflow-hidden">
                <div
                    className="absolute inset-0 bg-cover bg-center bg-no-repeat"
                    style={{ backgroundImage: "url('/assets/steptodown.com399351.webp')" }}
                ></div>
                <div className="absolute inset-0 bg-[#0E0F0F]/70"></div>
                <div className="relative z-10 text-center px-4">
                    <h1 className="text-white text-5xl md:text-6xl font-poppins font-bold uppercase tracking-wider mb-4">
                        View All Services
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
                    <span className="text-sb-orange uppercase tracking-[.3em] font-bold text-sm mb-4 block">Comprehensive Property Services</span>
                    <h2 className="text-sb-dark text-4xl md:text-5xl font-poppins font-bold uppercase leading-tight mb-8">
                        Designed for Excellence
                    </h2>
                    <p className="text-gray-600 text-lg leading-relaxed max-w-2xl mx-auto">
                        SafeBuild Canada offers an extensive array of construction, restoration, and maintenance services
                        tailored to meet the unique needs of high-end residential, commercial, and industrial properties.
                    </p>
                </div>
            </section>

            {/* Services Grid — 2-column icon + text layout */}
            <section className="py-20 bg-gray-50">
                <div className="max-w-7xl mx-auto px-4 md:px-8">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                        {services.map((s, i) => (
                            <div key={i} className="flex gap-8 group">
                                <div className="flex-shrink-0">
                                    <i className={`${s.icon} text-6xl text-gray-300 group-hover:text-sb-orange transition-colors duration-300`}></i>
                                </div>
                                <div>
                                    <h3 className="text-2xl font-bold text-sb-dark mb-4 uppercase group-hover:text-sb-orange transition-colors duration-300">
                                        {s.title}
                                    </h3>
                                    <p className="text-gray-500 leading-relaxed">{s.desc}</p>
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
                                Our 10 Years Working Experience Design.
                            </h2>
                            <p className="text-gray-600 text-lg leading-relaxed mb-10">
                                SafeBuild Canada has established itself as a leader in the construction management industry.
                                We combine decades of collective experience with modern techniques to deliver projects that
                                stand the test of time.
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
                                src="/assets/steptodown.com688306.webp"
                                alt="Experience"
                                className="rounded-sm shadow-2xl w-full h-[600px] object-cover"
                                onError={e => { e.target.src = '/assets/project-v1-1-2.jpg'; }}
                            />
                            <div className="absolute -bottom-10 -left-10 bg-sb-orange text-white p-10 hidden md:block">
                                <span className="block text-5xl font-bold mb-2">10+</span>
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
                                <a href="tel:+12508860059" className="text-white text-3xl font-bold hover:text-sb-dark transition-colors">
                                    +1 (250) 886-0059
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
