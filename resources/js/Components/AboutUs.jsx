import React from 'react';

export default function AboutUs() {
    return (
        <>
            {/* About Us */}
            <section id="about" className="relative z-40 px-4">
                <div
                    className="max-w-7xl mx-auto -mt-16 md:-mt-24 bg-white shadow-2xl flex flex-col lg:flex-row items-stretch overflow-hidden w-[90%] md:w-[95%]">
                    {/* Text Content */}
                    <div className="lg:w-7/12 p-8 md:p-14">
                        <div className="mb-4">
                            <span className="text-sb-orange uppercase tracking-[.2em] font-bold text-sm">About Us</span>
                            <div className="h-1 w-12 bg-sb-red mt-2"></div>
                        </div>
                        <h2
                            className="text-sb-dark text-3xl md:text-4xl font-poppins font-bold uppercase leading-snug mb-6">
                            OUR 20 YEARS WORKING <br /> &amp; BUILDING EXPERIENCE.
                        </h2>
                        <div className="space-y-4 text-gray-600 mb-8">
                            <p className="text-sb-dark font-bold text-lg italic">
                                We are working Since 2014 in Globally. Construction and Development
                            </p>
                            <p className="leading-relaxed">
                                From comprehensive renovations and architectural design to property maintenance and
                                restoration, our
                                team ensures every project reflects unparalleled professionalism and precision.
                            </p>
                        </div>

                        {/* Stats */}
                        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 bg-gray-50 p-6">
                            <div>
                                <span className="block text-sb-red text-2xl font-bold">20+</span>
                                <span className="text-sm uppercase tracking-wider font-bold text-sb-dark">Years Exp.</span>
                            </div>
                            <div>
                                <span className="block text-sb-red text-2xl font-bold">400+</span>
                                <span className="text-sm uppercase tracking-wider font-bold text-sb-dark">Projects</span>
                            </div>
                            <div>
                                <span className="block text-sb-red text-2xl font-bold">50+</span>
                                <span className="text-sm uppercase tracking-wider font-bold text-sb-dark">Skilled Pros</span>
                            </div>
                        </div>
                    </div>

                    {/* Image Box */}
                    <div className="lg:w-5/12 relative min-h-[300px]">
                        <img src="assets/steptodown.com688306.webp" alt="Construction Work"
                            className="w-full h-full object-cover" />
                        <div className="absolute inset-0 bg-sb-red/10"></div>
                    </div>
                </div>
            </section>

            {/* Intro Text */}
            <section className="py-16 md:py-24 bg-white">
                <div className="max-w-7xl mx-auto px-6 text-center">
                    <p className="text-sb-dark text-lg md:text-xl leading-relaxed max-w-4xl mx-auto font-medium">
                        At <span className="text-sb-red font-bold">SafeBuild Canada</span>, we pride ourselves on delivering
                        superior
                        construction and property restoration services tailored to meet the highest standards of
                        quality and craftsmanship. Serving residential, commercial, and industrial clients
                        across the <span className="font-bold">Greater Victoria area</span>, we specialize in creating and
                        maintaining properties
                        that inspire confidence and stand the test of time.
                    </p>
                </div>
            </section>
        </>
    );
}
