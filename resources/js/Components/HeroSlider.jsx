import React from 'react';
import { getAssetUrl } from '@/lib/utils';

export default function HeroSlider({ slides = [] }) {
    return (
        <section id="hero-slider" className="relative w-full h-[70vh] md:h-[85vh] overflow-hidden bg-black">
            {slides && slides.map((slide, index) => (
                <div key={slide.id} className={`hero-slide absolute inset-0 transition-opacity duration-1000 opacity-0 z-0 ${index === 0 ? 'active-slide' : ''}`}>
                    <div className="absolute inset-0 bg-black/40 z-10"></div>
                    <img src={getAssetUrl(slide.image_path)} alt={slide.title} className="w-full h-full object-cover" />
                    <div className="absolute inset-0 flex items-center justify-center z-20 text-center px-4 pb-24 md:pb-40">
                        <div className="max-w-4xl transform translate-y-10 transition-all duration-700 opacity-0 slide-content w-full">
                            {slide.subtitle && (
                                <span className="text-sb-orange uppercase tracking-[.3em] font-bold text-lg mb-4 block" style={{ textShadow: '2px 2px 4px rgba(0,0,0,0.8)' }}>
                                    {slide.subtitle}
                                </span>
                            )}
                            <div>
                                <h1 className="text-white text-3xl sm:text-4xl md:text-5xl lg:text-5xl xl:text-6xl font-poppins font-bold uppercase leading-tight mb-8 inline-block bg-black/30 px-6 py-4 md:px-10 rounded-xl line-clamp-2 max-w-full transition-none">
                                    {slide.title}
                                </h1>
                            </div>
                            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                                <a href="#about" className="bg-sb-red hover:bg-[#c42d0b] text-white px-8 py-4 rounded-sm font-bold uppercase tracking-wider transition-colors flex items-center gap-2">
                                    About Us <i className="flaticon-right-arrow-1 text-xs"></i>
                                </a>
                                <a href="#contact" className="bg-white hover:bg-gray-100 text-sb-dark px-8 py-4 rounded-sm font-bold uppercase tracking-wider transition-colors flex items-center gap-2">
                                    Contact Us <i className="flaticon-right-arrow-1 text-xs"></i>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            ))}

            {/* Slider Controls */}
            <button id="prevSlide"
                className="absolute left-4 top-1/2 -translate-y-1/2 z-30 bg-black/20 hover:bg-sb-red text-white p-4 transition-colors hidden md:block">
                <i className="flaticon-left-arrow"></i>
            </button>
            <button id="nextSlide"
                className="absolute right-4 top-1/2 -translate-y-1/2 z-30 bg-black/20 hover:bg-sb-red text-white p-4 transition-colors hidden md:block">
                <i className="flaticon-right-arrow"></i>
            </button>
        </section>
    );
}
