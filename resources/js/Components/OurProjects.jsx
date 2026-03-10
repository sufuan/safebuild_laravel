import React from 'react';

export default function OurProjects() {
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
                    {/* Project 1 */}
                    <div
                        className="min-w-[300px] md:min-w-[400px] snap-start group relative rounded-sm overflow-hidden shadow-lg h-[450px]">
                        <img src="assets/project-v1-1-2.jpg" alt="Architectural Design"
                            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                        <div
                            className="absolute inset-0 bg-gradient-to-t from-sb-dark/90 via-transparent to-transparent opacity-80">
                        </div>
                        <div className="absolute inset-0 flex flex-col justify-end p-8">
                            <div
                                className="w-12 h-12 bg-sb-red rounded-full flex items-center justify-center mb-4 transform -translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                                <i className="flaticon-architect text-white text-xl"></i>
                            </div>
                            <h4 className="text-white text-2xl font-bold uppercase">Architectural Design</h4>
                        </div>
                    </div>

                    {/* Project 2 */}
                    <div
                        className="min-w-[300px] md:min-w-[400px] snap-start group relative rounded-sm overflow-hidden shadow-lg h-[450px]">
                        <img src="assets/project-v1-2-2.jpg" alt="Energy Efficiency"
                            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                        <div
                            className="absolute inset-0 bg-gradient-to-t from-sb-dark/90 via-transparent to-transparent opacity-80">
                        </div>
                        <div className="absolute inset-0 flex flex-col justify-end p-8">
                            <div
                                className="w-12 h-12 bg-sb-red rounded-full flex items-center justify-center mb-4 transform -translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                                <i className="flaticon-manufacture text-white text-xl"></i>
                            </div>
                            <h4 className="text-white text-2xl font-bold uppercase">Energy Efficiency</h4>
                        </div>
                    </div>

                    {/* Project 3 */}
                    <div
                        className="min-w-[300px] md:min-w-[400px] snap-start group relative rounded-sm overflow-hidden shadow-lg h-[450px]">
                        <img src="assets/marek-studzinski-zQBjgS4PGpg-unsplash-1.webp" alt="Demolition Service"
                            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                        <div
                            className="absolute inset-0 bg-gradient-to-t from-sb-dark/90 via-transparent to-transparent opacity-80">
                        </div>
                        <div className="absolute inset-0 flex flex-col justify-end p-8">
                            <div
                                className="w-12 h-12 bg-sb-red rounded-full flex items-center justify-center mb-4 transform -translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                                <i className="flaticon-chemical text-white text-xl"></i>
                            </div>
                            <h4 className="text-white text-2xl font-bold uppercase">Demolition Service</h4>
                        </div>
                    </div>

                    {/* Project 4 */}
                    <div
                        className="min-w-[300px] md:min-w-[400px] snap-start group relative rounded-sm overflow-hidden shadow-lg h-[450px]">
                        <img src="assets/steptodown.com481843-1.webp" alt="Rock Blasting"
                            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                        <div
                            className="absolute inset-0 bg-gradient-to-t from-sb-dark/90 via-transparent to-transparent opacity-80">
                        </div>
                        <div className="absolute inset-0 flex flex-col justify-end p-8">
                            <div
                                className="w-12 h-12 bg-sb-red rounded-full flex items-center justify-center mb-4 transform -translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                                <i className="flaticon-car-parts text-white text-xl"></i>
                            </div>
                            <h4 className="text-white text-2xl font-bold uppercase">Rock Blasting</h4>
                        </div>
                    </div>

                    {/* Project 5 */}
                    <div
                        className="min-w-[300px] md:min-w-[400px] snap-start group relative rounded-sm overflow-hidden shadow-lg h-[450px]">
                        <img src="assets/pexels-tima-miroshnichenko-6196225.webp" alt="Restoration Services"
                            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                        <div
                            className="absolute inset-0 bg-gradient-to-t from-sb-dark/90 via-transparent to-transparent opacity-80">
                        </div>
                        <div className="absolute inset-0 flex flex-col justify-end p-8">
                            <div
                                className="w-12 h-12 bg-sb-red rounded-full flex items-center justify-center mb-4 transform -translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                                <i className="flaticon-factory-1 text-white text-xl"></i>
                            </div>
                            <h4 className="text-white text-2xl font-bold uppercase">Restoration &amp; Abatement</h4>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
