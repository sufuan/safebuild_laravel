import React from 'react';
import { Link } from '@inertiajs/react';
import { getAssetUrl } from '@/lib/utils';

export default function OurProjects({ projects = [] }) {
    return (
        <section id="projects" className="py-24 bg-gray-50 overflow-hidden">
            <div className="max-w-7xl mx-auto px-6">
                <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-8">
                    <div>
                        <div className="mb-4">
                            <span className="text-sb-red uppercase tracking-[.2em] font-bold text-sm">Our Projects</span>
                            <div className="h-1 w-12 bg-sb-red mt-2"></div>
                        </div>
                        <h2
                            className="text-sb-dark text-4xl md:text-5xl font-poppins font-bold uppercase leading-tight">
                            Transforming Visions <br /> Into <span className="text-sb-red">Reality</span>
                        </h2>
                    </div>
                    <div className="flex gap-4">
                        <button id="project-prev"
                            className="w-14 h-14 bg-white hover:bg-sb-red hover:text-white text-sb-dark transition-all flex items-center justify-center shadow-md">
                            <i className="flaticon-left-arrow"></i>
                        </button>
                        <button id="project-next"
                            className="w-14 h-14 bg-white hover:bg-sb-red hover:text-white text-sb-dark transition-all flex items-center justify-center shadow-md">
                            <i className="flaticon-right-arrow-1"></i>
                        </button>
                    </div>
                </div>

                {/* Slider Container */}
                <div id="project-slider"
                    className="flex gap-6 overflow-x-auto snap-x snap-mandatory scrollbar-hide pb-8">
                    {projects && projects.map((project) => (
                        <Link key={project.id} href={`/our-projects/${project.id}`}
                            className="min-w-[300px] md:min-w-[400px] snap-start group relative rounded-sm overflow-hidden shadow-lg h-[450px] block">
                            <img src={getAssetUrl(project.image_path)} alt={project.title}
                                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                            <div className="absolute inset-0 bg-gradient-to-t from-sb-dark/90 via-transparent to-transparent opacity-80"></div>

                            {/* ── Status badge ── */}
                            {project.project_status === 'complete' ? (
                                <div className="absolute top-4 left-4 flex items-center gap-1.5 bg-emerald-500 text-white text-[10px] font-extrabold uppercase tracking-widest px-3 py-1.5 rounded-full shadow-lg">
                                    <svg className="w-3 h-3 fill-white shrink-0" viewBox="0 0 20 20">
                                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 00-1.414 0L8 12.586 4.707 9.293a1 1 0 00-1.414 1.414l4 4a1 1 0 001.414 0l8-8a1 1 0 000-1.414z" clipRule="evenodd" />
                                    </svg>
                                    Completed
                                </div>
                            ) : (
                                <div className="absolute top-4 left-4 flex items-center gap-1.5 bg-blue-500 text-white text-[10px] font-extrabold uppercase tracking-widest px-3 py-1.5 rounded-full shadow-lg">
                                    <span className="w-2 h-2 rounded-full bg-white animate-pulse shrink-0"></span>
                                    In Progress
                                </div>
                            )}

                            <div className="absolute inset-0 flex flex-col justify-end p-8">
                                <div className="w-12 h-12 bg-sb-red rounded-full flex items-center justify-center mb-4 transform -translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                                    <i className="flaticon-architect text-white text-xl"></i>
                                </div>
                                <h4 className="text-white text-2xl font-bold uppercase">{project.title}</h4>
                                <span className="text-sb-red font-semibold">{project.category}</span>
                                <span className="text-white text-sm font-bold mt-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center gap-2">
                                    View Details <i className="flaticon-right-arrow-1 text-xs"></i>
                                </span>
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
        </section>
    );
}
