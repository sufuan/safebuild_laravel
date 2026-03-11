import React from 'react';

export default function OurServices({ services = [] }) {
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
                    {services && services.map((service) => (
                        <div key={service.id} className="group bg-white p-10 border-b-4 border-transparent hover:border-sb-red shadow-sm hover:shadow-xl transition-all duration-300 hover:bg-sb-red hover:-translate-y-2">
                            <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mb-8 group-hover:bg-white/20 transition-colors">
                                <i className={`${service.icon_class} text-3xl text-sb-red group-hover:text-white`}></i>
                            </div>
                            <h3 className="text-xl font-bold text-sb-dark mb-4 group-hover:text-white transition-colors">
                                {service.title}
                            </h3>
                            <p className="text-gray-600 group-hover:text-white/80 transition-colors">
                                {service.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
