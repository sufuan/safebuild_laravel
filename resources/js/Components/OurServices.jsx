import React from 'react';

export default function OurServices() {
    return (
        <section id="services" className="py-20 bg-gray-50">
            <div className="max-w-7xl mx-auto px-6">
                <div className="flex flex-col lg:flex-row justify-between items-end mb-16 gap-8">
                    <div className="max-w-2xl">
                        <div className="mb-4">
                            <span className="text-sb-red uppercase tracking-[.2em] font-bold text-sm">Our Services</span>
                            <div className="h-1 w-12 bg-sb-red mt-2"></div>
                        </div>
                        <h2
                            className="text-sb-dark text-4xl md:text-5xl font-poppins font-bold uppercase leading-tight">
                            At <span className="text-sb-red">Safebuild Canada</span> We Expertly <br /> Crafted Solutions
                            for Your Property
                        </h2>
                    </div>
                    <div className="max-w-md text-gray-600 border-l-4 border-sb-red pl-6 py-2">
                        <p>We provide a full spectrum of construction, restoration, and maintenance services
                            designed to enhance the value and functionality of your property.</p>
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {/* Service Card 1 */}
                    <div
                        className="group bg-white p-10 border-b-4 border-transparent hover:border-sb-red shadow-sm hover:shadow-xl transition-all duration-300 hover:bg-sb-red hover:-translate-y-2">
                        <div
                            className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mb-8 group-hover:bg-white/20 transition-colors">
                            <i className="flaticon-car-parts text-3xl text-sb-red group-hover:text-white"></i>
                        </div>
                        <h3 className="text-xl font-bold text-sb-dark mb-4 group-hover:text-white transition-colors">
                            Comprehensive Property Services
                        </h3>
                        <p className="text-gray-600 group-hover:text-white/80 transition-colors">
                            Tailored to meet the unique needs of high-end residential, commercial, and industrial
                            properties.
                        </p>
                    </div>

                    {/* Service Card 2 */}
                    <div
                        className="group bg-white p-10 border-b-4 border-transparent hover:border-sb-red shadow-sm hover:shadow-xl transition-all duration-300 hover:bg-sb-red hover:-translate-y-2">
                        <div
                            className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mb-8 group-hover:bg-white/20 transition-colors">
                            <i className="flaticon-architect text-3xl text-sb-red group-hover:text-white"></i>
                        </div>
                        <h3 className="text-xl font-bold text-sb-dark mb-4 group-hover:text-white transition-colors">
                            Renovation &amp; Remodeling
                        </h3>
                        <p className="text-gray-600 group-hover:text-white/80 transition-colors">
                            Reimagine your property with innovative bespoke renovations and remodeling solutions.
                        </p>
                    </div>

                    {/* Service Card 3 */}
                    <div
                        className="group bg-white p-10 border-b-4 border-transparent hover:border-sb-red shadow-sm hover:shadow-xl transition-all duration-300 hover:bg-sb-red hover:-translate-y-2">
                        <div
                            className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mb-8 group-hover:bg-white/20 transition-colors">
                            <i className="flaticon-chemical text-3xl text-sb-red group-hover:text-white"></i>
                        </div>
                        <h3 className="text-xl font-bold text-sb-dark mb-4 group-hover:text-white transition-colors">
                            Excavation &amp; Site Preparation
                        </h3>
                        <p className="text-gray-600 group-hover:text-white/80 transition-colors">
                            Professional excavation services, including site grading, trenching, and land clearing.
                        </p>
                    </div>

                    {/* Service Card 4 */}
                    <div
                        className="group bg-white p-10 border-b-4 border-transparent hover:border-sb-red shadow-sm hover:shadow-xl transition-all duration-300 hover:bg-sb-red hover:-translate-y-2">
                        <div
                            className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mb-8 group-hover:bg-white/20 transition-colors">
                            <i className="flaticon-garage-owner text-3xl text-sb-red group-hover:text-white"></i>
                        </div>
                        <h3 className="text-xl font-bold text-sb-dark mb-4 group-hover:text-white transition-colors">
                            Restoration &amp; Abatement Services
                        </h3>
                        <p className="text-gray-600 group-hover:text-white/80 transition-colors">
                            Advanced techniques and certified processes to restore safety and functionality to your
                            property.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}
