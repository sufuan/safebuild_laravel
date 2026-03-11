import React from 'react';

export default function Testimonial({ testimonials = [] }) {
    return (
        <section className="testimonial-style1-area relative py-24 bg-[#f7f7f7] min-h-[800px]">
            <div className="testimonial-style1-content_bg absolute top-0 left-0 w-full h-[487px] bg-no-repeat bg-top z-20 pointer-events-none"
                style={{"backgroundImage":"url(/assets/testimonial-style1-content_bg-2.png)","backgroundPosition":"center top"}}>
            </div>
            <div className="container mx-auto px-6 relative z-10 pt-[250px]">
                <div className="flex flex-col lg:flex-row items-center justify-center">
                    {/* Main Testimonial Card */}
                    <div
                        className="relative bg-white p-8 md:p-16 shadow-lg max-w-6xl w-full flex flex-col items-center mt-12">

                        {/* Main Slider Area */}
                        <div className="relative w-full">

                            {/* Slider Container */}
                            <div id="testimonial-slider-container" className="relative overflow-hidden min-h-[350px]">
                                {testimonials && testimonials.map((testimonial, index) => (
                                    <div key={testimonial.id} className={`testimonial-slide ${index !== 0 ? 'hidden opacity-0' : ''} flex flex-col md:flex-row items-center gap-12 transition-all duration-700`}>
                                        <div className="flex-grow text-left relative">
                                            <div className="mb-10">
                                                <i className="flaticon-quote-left text-[#ff5e14] text-7xl md:text-8xl"></i>
                                            </div>
                                            <h3 className="text-sb-dark text-2xl md:text-4xl font-bold leading-snug mb-12 max-w-2xl">
                                                "{testimonial.quote}"
                                            </h3>
                                            <div className="inline-block bg-[#f4f4f4] px-8 py-6">
                                                <h4 className="text-sb-dark font-black tracking-widest uppercase text-lg">
                                                    {testimonial.name}
                                                </h4>
                                                <p className="text-gray-500 text-sm">{testimonial.role}</p>
                                            </div>
                                        </div>
                                        <div className="flex-shrink-0">
                                            <div className="w-56 h-56 md:w-80 md:h-80 rounded-full overflow-hidden border-[15px] border-white shadow-2xl bg-gray-100 flex items-center justify-center">
                                                {testimonial.image_path ? (
                                                    <img src={`/${testimonial.image_path}`} alt={testimonial.name}
                                                        className="w-full h-full object-cover" />
                                                ) : (
                                                    <img src="/assets/male-avatar-placeholder.png" alt={testimonial.name} className="w-full h-full object-cover" />
                                                )}
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>

                            {/* Side Arrows */}
                            <div className="hidden xl:block">
                                <button id="testimonial-prev"
                                    className="absolute -left-24 top-1/2 -translate-y-1/2 w-16 h-16 bg-white hover:bg-[#ff5e14] hover:text-white text-gray-400 transition-all flex items-center justify-center rounded-full shadow-md z-30">
                                    <i className="flaticon-left-arrow text-xl"></i>
                                </button>
                                <button id="testimonial-next"
                                    className="absolute -right-24 top-1/2 -translate-y-1/2 w-16 h-16 bg-white hover:bg-[#ff5e14] hover:text-white text-gray-400 transition-all flex items-center justify-center rounded-full shadow-md z-30">
                                    <i className="flaticon-right-arrow-1 text-xl"></i>
                                </button>
                            </div>
                        </div>

                    </div>
                </div>

                {/* Indicators */}
                <div className="flex justify-center gap-3 mt-12">
                    {testimonials && testimonials.map((_, index) => (
                        <button key={index} className={`testimonial-dot w-4 h-4 rounded-full ${index === 0 ? 'bg-[#ff5e14]' : 'bg-gray-300 hover:bg-[#ff5e14]'} transition-colors`} aria-label={`Go to slide ${index + 1}`}></button>
                    ))}
                </div>
            </div>
        </section>
    );
}
