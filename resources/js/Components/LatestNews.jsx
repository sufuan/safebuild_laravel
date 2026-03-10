import React from 'react';

export default function LatestNews() {
    return (
        <section className="py-24 bg-gray-50">
            <div className="container mx-auto px-4">
                {/* Section Title */}
                <div className="text-center mb-16 max-w-2xl mx-auto">
                    <p className="text-sb-red font-bold uppercase tracking-wider text-sm mb-2">The standard chunk of
                        used since the is reproduced below</p>
                    <h2 className="text-4xl md:text-5xl font-bold text-sb-dark">Latest News</h2>
                </div>

                {/* Blog Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

                    {/* Blog Post 1 */}
                    <div className="group bg-white shadow-md hover:shadow-2xl transition-all duration-300">
                        <div className="relative overflow-hidden h-64">
                            <img src="assets/blog-v1-3-1.jpg" alt="Blog 1"
                                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                            <a href="#"
                                className="absolute inset-0 bg-sb-dark/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                                <div
                                    className="w-14 h-14 bg-sb-red rounded-full flex items-center justify-center text-white text-xl transform scale-0 group-hover:scale-100 transition-transform duration-300 delay-100">
                                    <i className="flaticon-plus"></i>
                                </div>
                            </a>
                        </div>
                        <div className="p-8">
                            <ul className="flex text-sm text-gray-500 gap-6 mb-4 border-b border-gray-100 pb-4">
                                <li className="flex items-center gap-2"><i className="flaticon-calendar text-sb-red"></i>
                                    Jun 15, 2023</li>
                                <li className="flex items-center gap-2"><i className="flaticon-message text-sb-red"></i> No
                                    Comments</li>
                            </ul>
                            <h3
                                className="text-xl font-bold mb-4 text-sb-dark hover:text-sb-red transition-colors leading-snug">
                                <a href="#">Models &amp; OEM Solutions | Simul Corporation.</a>
                            </h3>
                            <p className="text-gray-500 leading-relaxed mb-6 line-clamp-3">Nullam molestie volutpat
                                justo, ut malesuada leo facilisis quis. Mauris ullamcorper accumsan sem, sodales
                                volutpat ...</p>
                            <a href="#"
                                className="text-sb-dark font-bold hover:text-sb-red uppercase text-xs tracking-widest inline-flex items-center gap-2 transition-colors">
                                Read More <i className="fas fa-arrow-right text-sm"></i>
                            </a>
                        </div>
                    </div>

                    {/* Blog Post 2 */}
                    <div className="group bg-white shadow-md hover:shadow-2xl transition-all duration-300">
                        <div className="relative overflow-hidden h-64">
                            <img src="assets/blog-v1-2-1.jpg" alt="Blog 2"
                                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                            <a href="#"
                                className="absolute inset-0 bg-sb-dark/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                                <div
                                    className="w-14 h-14 bg-sb-red rounded-full flex items-center justify-center text-white text-xl transform scale-0 group-hover:scale-100 transition-transform duration-300 delay-100">
                                    <i className="flaticon-plus"></i>
                                </div>
                            </a>
                        </div>
                        <div className="p-8">
                            <ul className="flex text-sm text-gray-500 gap-6 mb-4 border-b border-gray-100 pb-4">
                                <li className="flex items-center gap-2"><i className="flaticon-calendar text-sb-red"></i>
                                    Jun 15, 2023</li>
                                <li className="flex items-center gap-2"><i className="flaticon-message text-sb-red"></i> No
                                    Comments</li>
                            </ul>
                            <h3
                                className="text-xl font-bold mb-4 text-sb-dark hover:text-sb-red transition-colors leading-snug">
                                <a href="#">Models &amp; OEM Solutions | Simul Corporation.</a>
                            </h3>
                            <p className="text-gray-500 leading-relaxed mb-6 line-clamp-3">Nullam molestie volutpat
                                justo, ut malesuada leo facilisis quis. Mauris ullamcorper accumsan sem, sodales
                                volutpat ...</p>
                            <a href="#"
                                className="text-sb-dark font-bold hover:text-sb-red uppercase text-xs tracking-widest inline-flex items-center gap-2 transition-colors">
                                Read More <i className="fas fa-arrow-right text-sm"></i>
                            </a>
                        </div>
                    </div>

                    {/* Blog Post 3 */}
                    <div className="group bg-white shadow-md hover:shadow-2xl transition-all duration-300">
                        <div className="relative overflow-hidden h-64">
                            <img src="assets/blog-v1-1-1.jpg" alt="Blog 3"
                                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                            <a href="#"
                                className="absolute inset-0 bg-sb-dark/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                                <div
                                    className="w-14 h-14 bg-sb-red rounded-full flex items-center justify-center text-white text-xl transform scale-0 group-hover:scale-100 transition-transform duration-300 delay-100">
                                    <i className="flaticon-plus"></i>
                                </div>
                            </a>
                        </div>
                        <div className="p-8">
                            <ul className="flex text-sm text-gray-500 gap-6 mb-4 border-b border-gray-100 pb-4">
                                <li className="flex items-center gap-2"><i className="flaticon-calendar text-sb-red"></i>
                                    Jun 15, 2023</li>
                                <li className="flex items-center gap-2"><i className="flaticon-message text-sb-red"></i> No
                                    Comments</li>
                            </ul>
                            <h3
                                className="text-xl font-bold mb-4 text-sb-dark hover:text-sb-red transition-colors leading-snug">
                                <a href="#">Models &amp; OEM Solutions | Simul Corporation.</a>
                            </h3>
                            <p className="text-gray-500 leading-relaxed mb-6 line-clamp-3">Nullam molestie volutpat
                                justo, ut malesuada leo facilisis quis. Mauris ullamcorper accumsan sem, sodales
                                volutpat ...</p>
                            <a href="#"
                                className="text-sb-dark font-bold hover:text-sb-red uppercase text-xs tracking-widest inline-flex items-center gap-2 transition-colors">
                                Read More <i className="fas fa-arrow-right text-sm"></i>
                            </a>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}
