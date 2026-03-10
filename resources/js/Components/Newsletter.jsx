import React from 'react';

export default function Newsletter() {
    return (
        <section className="relative py-24 bg-cover bg-center bg-no-repeat bg-fixed"
            style={{ "backgroundImage": "url('/assets/vecteezy_ai-generated-explore-the-role-of-scada-systems-in-industrial_40888741.webp')" }}>
            <div className="absolute inset-0 bg-sb-dark/90"></div> {/* Dark Overlay */}
            <div className="container mx-auto px-4 relative z-10">
                <div className="flex flex-col lg:flex-row items-center justify-between gap-12 max-w-6xl mx-auto">

                    {/* Left Side: Content */}
                    <div className="lg:w-1/2 text-white">
                        <div className="flex items-start gap-8">
                            <div className="text-sb-red text-6xl flex-shrink-0 mt-2">
                                <i className="flaticon-newsletter"></i>
                            </div>
                            <div>
                                <p className="text-lg font-medium text-gray-300 mb-2 uppercase tracking-wide">Join our
                                    Community</p>
                                <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white leading-tight">Subscribe
                                    Now !</h2>
                                <p className="text-gray-400 leading-relaxed text-lg">Stay Up to Date about our latest
                                    works and projects and about our new launched services.</p>
                            </div>
                        </div>
                    </div>

                    {/* Right Side: Form & Contact */}
                    <div className="lg:w-1/2 w-full">
                        {/* Subscription Form */}
                        <form
                            className="flex flex-col sm:flex-row bg-white/5 p-2 rounded border border-white/10 backdrop-blur-sm mb-4">
                            <input type="email" name="email" placeholder="Email address ..."
                                className="flex-grow bg-transparent text-white px-6 py-4 outline-none placeholder-gray-400 w-full" />
                            <button type="submit"
                                className="bg-sb-red text-white hover:bg-white hover:text-sb-red transition-all duration-300 px-8 py-4 font-bold uppercase tracking-wider flex items-center justify-center gap-2 whitespace-nowrap">
                                <i className="flaticon-paper-plane text-xl"></i>
                                <span>Subscribe</span>
                            </button>
                        </form>
                        <p className="text-gray-500 text-sm mb-10 pl-2 italic">* Please Write Your E-mail And Subscribe
                            Now</p>

                        {/* Contact Info */}
                        <div className="flex items-center gap-6 text-white group pl-2">
                            <div
                                className="w-16 h-16 rounded-full bg-sb-red flex items-center justify-center text-2xl group-hover:bg-white group-hover:text-sb-red transition-colors duration-300 shadow-lg">
                                <i className="flaticon-phone-call-2"></i>
                            </div>
                            <div>
                                <p className="text-sm text-gray-300 uppercase tracking-widest mb-1">Our 24/7 Phone
                                    Services</p>
                                <h3 className="text-3xl font-bold hover:text-sb-red transition-colors"><a
                                    href="tel:+12508860059">+1 (250) 886-0059</a></h3>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}
