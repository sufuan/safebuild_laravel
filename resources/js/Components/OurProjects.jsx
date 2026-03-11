import React from 'react';

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
                        <div key={project.id} className="min-w-[300px] md:min-w-[400px] snap-start group relative rounded-sm overflow-hidden shadow-lg h-[450px]">
                            <img src={`/${project.image_path}`} alt={project.title}
                                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                            <div className="absolute inset-0 bg-gradient-to-t from-sb-dark/90 via-transparent to-transparent opacity-80"></div>
                            <div className="absolute inset-0 flex flex-col justify-end p-8">
                                <div className="w-12 h-12 bg-sb-red rounded-full flex items-center justify-center mb-4 transform -translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                                    {/* Defaulting to a general icon since 'category' replaces icon in our generic DB model */}
                                    <i className="flaticon-architect text-white text-xl"></i>
                                </div>
                                <h4 className="text-white text-2xl font-bold uppercase">{project.title}</h4>
                                <span className="text-sb-red font-semibold">{project.category}</span>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
