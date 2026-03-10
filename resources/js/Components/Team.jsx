import React from 'react';

export default function Team() {
    return (
        <section className="team-style1-area py-24 bg-white relative">
            <div className="container mx-auto px-4">
                {/* Section Title */}
                <div className="text-center mb-16 max-w-2xl mx-auto">
                    <p className="text-sb-red font-bold uppercase tracking-wider text-sm mb-2">The standard chunk is
                        used since those reproduce it.</p>
                    <h2 className="text-4xl md:text-5xl font-bold text-sb-dark">Team Member</h2>
                </div>

                {/* Team Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">

                    {/* Member 1: Mahi Al Porahi */}
                    <div className="group relative">
                        <div className="relative overflow-hidden mb-6">
                            <img src="assets/pexels-toni-30123884-1.webp" alt="Mahi Al Porahi"
                                className="w-full h-auto object-cover transition-transform duration-500 group-hover:scale-110" />
                            {/* Overlay */}
                            <div
                                className="absolute inset-0 bg-sb-dark/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                                <ul
                                    className="flex gap-4 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                                    <li><a href="#"
                                            className="w-10 h-10 rounded-full bg-sb-red text-white flex items-center justify-center hover:bg-white hover:text-sb-red transition-colors"><i
                                                className="fab fa-facebook-f"></i></a></li>
                                    <li><a href="#"
                                            className="w-10 h-10 rounded-full bg-sb-red text-white flex items-center justify-center hover:bg-white hover:text-sb-red transition-colors"><i
                                                className="fab fa-twitter"></i></a></li>
                                    <li><a href="#"
                                            className="w-10 h-10 rounded-full bg-sb-red text-white flex items-center justify-center hover:bg-white hover:text-sb-red transition-colors"><i
                                                className="fab fa-linkedin-in"></i></a></li>
                                </ul>
                            </div>
                        </div>
                        <div className="text-center">
                            <h3
                                className="text-xl font-bold text-sb-dark group-hover:text-sb-red transition-colors mb-1">
                                <a href="#">Mahi Al Porahi</a>
                            </h3>
                            <p className="text-gray-500 uppercase text-sm tracking-wide">Industrial Engineer</p>
                        </div>
                    </div>

                    {/* Member 2: Liyazul Islam */}
                    <div className="group relative">
                        <div className="relative overflow-hidden mb-6">
                            <img src="assets/pexels-tima-miroshnichenko-6474475.webp" alt="Liyazul Islam"
                                className="w-full h-auto object-cover transition-transform duration-500 group-hover:scale-110" />
                            <div
                                className="absolute inset-0 bg-sb-dark/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                                <ul
                                    className="flex gap-4 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                                    <li><a href="#"
                                            className="w-10 h-10 rounded-full bg-sb-red text-white flex items-center justify-center hover:bg-white hover:text-sb-red transition-colors"><i
                                                className="fab fa-facebook-f"></i></a></li>
                                    <li><a href="#"
                                            className="w-10 h-10 rounded-full bg-sb-red text-white flex items-center justify-center hover:bg-white hover:text-sb-red transition-colors"><i
                                                className="fab fa-twitter"></i></a></li>
                                    <li><a href="#"
                                            className="w-10 h-10 rounded-full bg-sb-red text-white flex items-center justify-center hover:bg-white hover:text-sb-red transition-colors"><i
                                                className="fab fa-linkedin-in"></i></a></li>
                                </ul>
                            </div>
                        </div>
                        <div className="text-center">
                            <h3
                                className="text-xl font-bold text-sb-dark group-hover:text-sb-red transition-colors mb-1">
                                <a href="#">Liyazul Islam</a>
                            </h3>
                            <p className="text-gray-500 uppercase text-sm tracking-wide">Industrial Engineer</p>
                        </div>
                    </div>

                    {/* Member 3: Kutubul Alam */}
                    <div className="group relative">
                        <div className="relative overflow-hidden mb-6">
                            <img src="assets/mina-rad-K9T9hdf4PmI-unsplash.webp" alt="Kutubul Alam"
                                className="w-full h-auto object-cover transition-transform duration-500 group-hover:scale-110" />
                            <div
                                className="absolute inset-0 bg-sb-dark/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                                <ul
                                    className="flex gap-4 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                                    <li><a href="#"
                                            className="w-10 h-10 rounded-full bg-sb-red text-white flex items-center justify-center hover:bg-white hover:text-sb-red transition-colors"><i
                                                className="fab fa-facebook-f"></i></a></li>
                                    <li><a href="#"
                                            className="w-10 h-10 rounded-full bg-sb-red text-white flex items-center justify-center hover:bg-white hover:text-sb-red transition-colors"><i
                                                className="fab fa-twitter"></i></a></li>
                                    <li><a href="#"
                                            className="w-10 h-10 rounded-full bg-sb-red text-white flex items-center justify-center hover:bg-white hover:text-sb-red transition-colors"><i
                                                className="fab fa-linkedin-in"></i></a></li>
                                </ul>
                            </div>
                        </div>
                        <div className="text-center">
                            <h3
                                className="text-xl font-bold text-sb-dark group-hover:text-sb-red transition-colors mb-1">
                                <a href="#">Kutubul Alam</a>
                            </h3>
                            <p className="text-gray-500 uppercase text-sm tracking-wide">Industrial Engineer</p>
                        </div>
                    </div>

                    {/* Member 4: Nur A Alam Noyon */}
                    <div className="group relative">
                        <div className="relative overflow-hidden mb-6">
                            <img src="assets/emmanuel-ikwuegbu-KHO_jvns5Xc-unsplash.webp" alt="Nur A Alam Noyon"
                                className="w-full h-auto object-cover transition-transform duration-500 group-hover:scale-110" />
                            <div
                                className="absolute inset-0 bg-sb-dark/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                                <ul
                                    className="flex gap-4 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                                    <li><a href="#"
                                            className="w-10 h-10 rounded-full bg-sb-red text-white flex items-center justify-center hover:bg-white hover:text-sb-red transition-colors"><i
                                                className="fab fa-facebook-f"></i></a></li>
                                    <li><a href="#"
                                            className="w-10 h-10 rounded-full bg-sb-red text-white flex items-center justify-center hover:bg-white hover:text-sb-red transition-colors"><i
                                                className="fab fa-twitter"></i></a></li>
                                    <li><a href="#"
                                            className="w-10 h-10 rounded-full bg-sb-red text-white flex items-center justify-center hover:bg-white hover:text-sb-red transition-colors"><i
                                                className="fab fa-linkedin-in"></i></a></li>
                                </ul>
                            </div>
                        </div>
                        <div className="text-center">
                            <h3
                                className="text-xl font-bold text-sb-dark group-hover:text-sb-red transition-colors mb-1">
                                <a href="#">Nur A Alam Noyon</a>
                            </h3>
                            <p className="text-gray-500 uppercase text-sm tracking-wide">Industrial Engineer</p>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}
