import { Head, Link } from '@inertiajs/react';
import Navbar from '@/Components/Navbar';
import Footer from '@/Components/Footer';
import Testimonial from '@/Components/Testimonial';
import React from 'react';

export default function TestimonialsPage() {
    return (
        <>
            <Head title="Testimonials – SafeBuild Canada" />
            <div className="boxed_wrapper">
                <Navbar />

                {/* ── PAGE HERO ─────────────────────────────────────────── */}
                <section className="relative h-[400px] flex items-center justify-center bg-black overflow-hidden">
                    <div className="absolute inset-0 bg-cover bg-center bg-no-repeat"
                        style={{ backgroundImage: "url('assets/steptodown.com688306.webp')" }}></div>
                    <div className="absolute inset-0 bg-[#0E0F0F]/70"></div>
                    <div className="relative z-10 text-center px-4">
                        <h1 className="text-white text-5xl md:text-6xl font-poppins font-bold uppercase tracking-wider mb-4">
                            Testimonials
                        </h1>
                        <nav className="flex items-center justify-center gap-2 text-white/80 text-sm font-bold uppercase">
                            <Link href="/" className="hover:text-sb-red transition-colors">Home</Link>
                            <span className="w-1.5 h-1.5 bg-sb-red rounded-full"></span>
                            <span>Testimonials</span>
                        </nav>
                    </div>
                </section>

                {/* ── TESTIMONIAL COMPONENT ─────────────────────────────── */}
                <Testimonial />

                <Footer />
            </div>
        </>
    );
}
