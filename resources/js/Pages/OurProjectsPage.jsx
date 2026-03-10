import { Head, Link } from '@inertiajs/react';
import Navbar from '@/Components/Navbar';
import Footer from '@/Components/Footer';
import React, { useState } from 'react';

const projects = [
    { id: 1,  img: 'assets/project-v1-1-2.jpg',         category: 'architecture', title: 'Architectural Design & Planning' },
    { id: 2,  img: 'assets/project-v1-2-2.jpg',         category: 'renovation',   title: 'Full Home Renovation' },
    { id: 3,  img: 'assets/project-v1-3-1-1.jpg',       category: 'excavation',   title: 'Site Excavation & Grading' },
    { id: 4,  img: 'assets/project-v1-4-1-1.jpg',       category: 'carpentry',    title: 'Custom Carpentry & Cabinetry' },
    { id: 5,  img: 'assets/project-v1-5-1-1.jpg',       category: 'renovation',   title: 'Commercial Renovation' },
    { id: 6,  img: 'assets/project-v1-2-1-1.jpg',       category: 'architecture', title: 'Structural Engineering' },
    { id: 7,  img: 'assets/pexels-tima-miroshnichenko-6196225.webp', category: 'excavation', title: 'Foundation & Trenching' },
    { id: 8,  img: 'assets/marek-studzinski-zQBjgS4PGpg-unsplash-1.webp', category: 'carpentry', title: 'Millwork & Interior Wood Finishing' },
    { id: 9,  img: 'assets/vecteezy_ai-generated-explore-the-role-of-scada-systems-in-industrial_40888741.webp', category: 'renovation', title: 'Industrial Renovation' },
    { id: 10, img: 'assets/blog-v1-1-1.jpg',            category: 'architecture', title: 'Residential Architecture' },
    { id: 11, img: 'assets/blog-v1-2-1.jpg',            category: 'carpentry',    title: 'Deck & Outdoor Carpentry' },
    { id: 12, img: 'assets/blog-v1-3-1.jpg',            category: 'excavation',   title: 'Rock Blasting & Removal' },
    { id: 13, img: 'assets/pexels-toni-30123884-1.webp',category: 'renovation',   title: 'Restoration & Abatement' },
    { id: 14, img: 'assets/pexels-tima-miroshnichenko-6474475.webp', category: 'architecture', title: 'Energy Efficient Design' },
    { id: 15, img: 'assets/mina-rad-K9T9hdf4PmI-unsplash.webp', category: 'carpentry', title: 'Built-in Shelving & Storage' },
    { id: 16, img: 'assets/emmanuel-ikwuegbu-KHO_jvns5Xc-unsplash.webp', category: 'excavation', title: 'Land Clearing & Preparation' },
    { id: 17, img: 'assets/steptodown.com399351.webp',  category: 'renovation',   title: 'Property Restoration Project' },
    { id: 18, img: 'assets/steptodown.com481843-1.webp',category: 'architecture', title: 'Heritage Building Conversion' },
];

const filters = ['all', 'renovation', 'architecture', 'excavation', 'carpentry'];

export default function OurProjectsPage() {
    const [active, setActive] = useState('all');

    const visible = active === 'all' ? projects : projects.filter(p => p.category === active);

    return (
        <>
            <Head title="Our Projects – SafeBuild Canada" />
            <div className="boxed_wrapper">
                <Navbar />

                {/* ── PAGE HERO ─────────────────────────────────────────── */}
                <section className="relative h-[450px] flex items-center justify-center overflow-hidden">
                    <div className="absolute inset-0 bg-sb-dark/65 z-10"></div>
                    <img src="assets/project-v1-1-2.jpg" alt="Our Projects"
                        className="absolute inset-0 w-full h-full object-cover" />
                    <div className="relative z-20 text-center px-4">
                        <h1 className="text-white text-4xl md:text-6xl font-bold uppercase mb-4 tracking-tight font-poppins">
                            Our Projects
                        </h1>
                        <nav className="flex items-center justify-center gap-2 text-sm font-bold uppercase tracking-widest">
                            <Link href="/" className="text-white hover:text-sb-orange transition-colors">Home</Link>
                            <span className="text-sb-orange">•</span>
                            <span className="text-sb-orange">Our Projects</span>
                        </nav>
                    </div>
                </section>

                {/* ── PROJECT GRID ──────────────────────────────────────── */}
                <section className="py-24 bg-gray-50">
                    <div className="container mx-auto px-6 max-w-7xl">

                        {/* Section Header */}
                        <div className="text-center mb-12">
                            <span className="text-sb-red uppercase tracking-[.3em] font-bold text-sm block mb-2">Our Projects</span>
                            <div className="h-1 w-12 bg-sb-red mx-auto mb-6"></div>
                            <h2 className="text-sb-dark text-4xl md:text-5xl font-bold uppercase font-poppins">
                                Transforming Visions Into <span className="text-sb-red">Reality</span>
                            </h2>
                        </div>

                        {/* Filter Buttons */}
                        <div className="flex flex-wrap justify-center gap-3 mb-12">
                            {filters.map(f => (
                                <button key={f}
                                    onClick={() => setActive(f)}
                                    className={`px-6 py-3 border-2 font-bold text-sm uppercase tracking-wider transition-all
                                        ${active === f
                                            ? 'bg-sb-red text-white border-sb-red'
                                            : 'border-gray-300 text-gray-600 hover:bg-sb-red hover:text-white hover:border-sb-red'
                                        }`}>
                                    {f === 'all' ? 'All' : f.charAt(0).toUpperCase() + f.slice(1)}
                                </button>
                            ))}
                        </div>

                        {/* Grid */}
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {visible.map(project => (
                                <div key={project.id}
                                    className="group relative overflow-hidden shadow-lg h-[320px]">
                                    <img src={project.img} alt={project.title}
                                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                                    <div className="absolute inset-0 bg-gradient-to-t from-sb-dark/90 via-sb-dark/20 to-transparent opacity-80"></div>
                                    <div className="absolute inset-0 flex flex-col justify-end p-7">
                                        <span className="text-sb-orange text-xs font-bold uppercase tracking-widest mb-2">
                                            {project.category.charAt(0).toUpperCase() + project.category.slice(1)}
                                        </span>
                                        <h4 className="text-white text-xl font-bold uppercase font-poppins mb-2">{project.title}</h4>
                                        <a href="#"
                                            className="inline-flex items-center gap-2 text-white text-sm font-bold opacity-0 group-hover:opacity-100 transition-opacity duration-300 hover:text-sb-orange">
                                            Project Details <i className="fas fa-arrow-right"></i>
                                        </a>
                                    </div>
                                    <div className="absolute top-4 right-4 w-10 h-10 bg-sb-red rounded-full flex items-center justify-center transform scale-0 group-hover:scale-100 transition-transform duration-300">
                                        <i className="fas fa-search-plus text-white text-sm"></i>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* ── CTA STRIP ─────────────────────────────────────────── */}
                <section className="bg-sb-red py-4 text-center">
                    <div className="container mx-auto px-4">
                        <h2 className="text-white font-bold text-sm font-roboto uppercase tracking-wide">
                            We would love to hear from you! Let us know your construction management needs and learn more about how we can help you achieve your goals.
                        </h2>
                    </div>
                </section>

                <Footer />
            </div>
        </>
    );
}
