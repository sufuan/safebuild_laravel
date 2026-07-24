import React, { useState } from 'react';
import SEOHead from '@/Components/SEOHead';
import { Link } from '@inertiajs/react';
import { getAssetUrl } from '@/lib/utils';
import Navbar from '@/Components/Navbar';
import Footer from '@/Components/Footer';

export default function OurProjectsPage({ projects = [], categories = [] }) {
    const [active, setActive] = useState('all');

    const allFilters = ['all', ...categories];
    const visible = active === 'all' ? projects : projects.filter(p =>
        p.category?.toLowerCase() === active.toLowerCase()
    );

    return (
        <>
            <SEOHead
                title="Our Projects – Construction & Renovation Portfolio Victoria BC"
                description="Browse SafeBuild Canada's project portfolio in Victoria BC. Residential & commercial renovations, custom builds, architectural projects and more. See our quality work."
                canonical="https://safebuild.ca/our-projects"
            />
            <div className="boxed_wrapper">
                <Navbar />

                {/* ── PAGE HERO ─────────────────────────────────────────── */}
                <section className="relative h-[450px] flex items-center justify-center overflow-hidden">
                    <div className="absolute inset-0 bg-sb-dark/65 z-10"></div>
                    <img src={getAssetUrl('assets/project-v1-1-2.jpg')} alt="Our Projects"
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
                        {allFilters.length > 1 && (
                            <div className="flex flex-wrap justify-center gap-3 mb-12">
                                {allFilters.map(f => (
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
                        )}

                        {/* Grid */}
                        {visible.length > 0 ? (
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                                {visible.map(project => (
                                    <Link key={project.id} href={`/our-projects/${project.id}`}
                                        className="group relative overflow-hidden shadow-lg h-[320px] block">
                                        <img src={getAssetUrl(project.image_path)} alt={project.title}
                                            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                                        <div className="absolute inset-0 bg-gradient-to-t from-sb-dark/90 via-sb-dark/20 to-transparent opacity-80"></div>

                                        {/* ── Status badge ── */}
                                        {project.project_status === 'complete' ? (
                                            <div className="absolute top-4 left-4 flex items-center gap-1.5 bg-emerald-500 text-white text-[10px] font-extrabold uppercase tracking-widest px-3 py-1.5 rounded-full shadow-lg">
                                                <svg className="w-3 h-3 fill-white" viewBox="0 0 20 20"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 00-1.414 0L8 12.586 4.707 9.293a1 1 0 00-1.414 1.414l4 4a1 1 0 001.414 0l8-8a1 1 0 000-1.414z" clipRule="evenodd"/></svg>
                                                Completed
                                            </div>
                                        ) : (
                                            <div className="absolute top-4 left-4 flex items-center gap-1.5 bg-blue-500 text-white text-[10px] font-extrabold uppercase tracking-widest px-3 py-1.5 rounded-full shadow-lg">
                                                <span className="w-2 h-2 rounded-full bg-white animate-pulse inline-block"></span>
                                                In Progress
                                            </div>
                                        )}

                                        <div className="absolute inset-0 flex flex-col justify-end p-7">
                                            <span className="text-sb-orange text-xs font-bold uppercase tracking-widest mb-2">
                                                {project.category?.charAt(0).toUpperCase() + project.category?.slice(1)}
                                            </span>
                                            <h4 className="text-white text-xl font-bold uppercase font-poppins mb-2">{project.title}</h4>
                                            <span className="inline-flex items-center gap-2 text-white text-sm font-bold opacity-0 group-hover:opacity-100 transition-opacity duration-300 hover:text-sb-orange">
                                                View Details <i className="fas fa-arrow-right"></i>
                                            </span>
                                        </div>
                                        <div className="absolute bottom-4 right-4 w-10 h-10 bg-sb-red rounded-full flex items-center justify-center transform scale-0 group-hover:scale-100 transition-transform duration-300">
                                            <i className="fas fa-arrow-right text-white text-sm"></i>
                                        </div>
                                    </Link>
                                ))}
                            </div>
                        ) : (
                            <div className="text-center py-24 text-gray-400">
                                <i className="flaticon-architect text-5xl mb-4 block"></i>
                                <p className="text-lg font-semibold">No projects found in this category.</p>
                            </div>
                        )}
                    </div>
                </section>

                <Footer />
            </div>
        </>
    );
}
