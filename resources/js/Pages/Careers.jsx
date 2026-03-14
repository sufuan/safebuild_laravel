import React, { useState } from 'react';
import { Head, Link, useForm, usePage } from '@inertiajs/react';
import Navbar from '@/Components/Navbar';
import Footer from '@/Components/Footer';
import { Toaster, toast } from 'sonner';
import { useEffect } from 'react';

export default function Careers({ perks, positions }) {
    const { siteSettings } = usePage().props;
    const { data, setData, post, processing, reset, errors, recentlySuccessful } = useForm({
        name: '',
        email: '',
        phone: '',
        open_position_id: '',
        resume_path: null,
        cover_letter: '',
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        post(route('careers.apply'), {
            onSuccess: () => {
                reset();
                toast.success('Your application has been submitted successfully!');
            },
            onError: () => {
                toast.error('There was an error submitting your application. Please check the fields and try again.');
            }
        });
    };

    return (
        <div className="boxed_wrapper">
            <Head title="Careers – SafeBuild Canada" />
            <Navbar />

            {/* ── HERO SECTION ────────────────────────────────────────── */}
            <section className="relative h-[400px] flex items-center justify-center bg-black overflow-hidden">
                <div
                    className="absolute inset-0 bg-cover bg-center bg-no-repeat"
                    style={{ backgroundImage: "url('/assets/steptodown.com399351.webp')" }}
                ></div>
                <div className="absolute inset-0 bg-[#0E0F0F]/80"></div>
                <div className="relative z-10 text-center px-4">
                    <h1 className="text-white text-5xl md:text-6xl font-poppins font-bold uppercase tracking-wider mb-4">
                        Careers at SafeBuild
                    </h1>
                    <p className="text-gray-300 text-lg max-w-2xl mx-auto mb-6">
                        Join a dedicated team shaping the future of construction across Vancouver Island. Build your career with a company that values safety, craftsmanship, and community.
                    </p>
                    <nav className="flex items-center justify-center gap-2 text-white/80 text-sm font-bold uppercase">
                        <Link href="/" className="hover:text-sb-red transition-colors">Home</Link>
                        <span className="w-1.5 h-1.5 bg-sb-red rounded-full inline-block"></span>
                        <span className="text-sb-orange">Careers</span>
                    </nav>
                </div>
            </section>

            {/* ── WHY WORK WITH US ────────────────────────────────────── */}
            <section className="py-24 bg-gray-50">
                <div className="max-w-7xl mx-auto px-4 md:px-8 text-center">
                    <span className="text-sb-orange uppercase tracking-[.3em] font-bold text-sm mb-4 block">Our Culture</span>
                    <h2 className="text-sb-dark text-4xl font-poppins font-bold uppercase mb-16">
                        Why Work With Us
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {perks && perks.length > 0 ? perks.map((perk) => (
                            <div key={perk.id} className="bg-white p-10 rounded-sm shadow-sm hover:shadow-lg transition-shadow duration-300 text-center group border border-gray-100">
                                <div className="w-20 h-20 mx-auto bg-sb-red/10 rounded-full flex items-center justify-center mb-6 group-hover:bg-sb-red transition-colors duration-300 overflow-hidden">
                                    <img src={perk.icon_class || '/assets/perk.jpg'} alt={perk.title} className="w-10 h-10 object-contain group-hover:brightness-0 group-hover:invert transition-all duration-300" />
                                </div>
                                <h3 className="text-2xl font-bold text-sb-dark mb-4">{perk.title}</h3>
                                <p className="text-gray-500 leading-relaxed">
                                    {perk.description}
                                </p>
                            </div>
                        )) : (
                            <div className="col-span-full py-12 text-gray-400 italic">No perks listed yet.</div>
                        )}
                    </div>
                </div>
            </section>

            {/* ── OPEN POSITIONS ──────────────────────────────────────── */}
            <section className="py-24 bg-white">
                <div className="max-w-5xl mx-auto px-4 md:px-8">
                    <div className="text-center mb-16">
                        <span className="text-sb-orange uppercase tracking-[.3em] font-bold text-sm mb-4 block">Join Our Team</span>
                        <h2 className="text-sb-dark text-4xl font-poppins font-bold uppercase">
                            Open Positions
                        </h2>
                    </div>

                    <div className="space-y-6">
                        {positions && positions.length > 0 ? positions.map((job) => (
                            <div key={job.id} className="border border-gray-200 rounded-sm p-8 flex flex-col md:flex-row items-start md:items-center justify-between hover:border-sb-red transition-colors duration-300 shadow-sm hover:shadow-md transition-all">
                                <div>
                                    <h3 className="text-2xl font-bold text-sb-dark mb-2">{job.title}</h3>
                                    <div className="flex flex-wrap items-center gap-4 text-sm text-gray-500 font-medium">
                                        <span className="flex items-center gap-1"><i className="fas fa-map-marker-alt text-sb-red"></i> {job.location}</span>
                                        <span className="flex items-center gap-1"><i className="fas fa-clock text-sb-red"></i> {job.type}</span>
                                        <span className="flex items-center gap-1"><i className="fas fa-briefcase text-sb-red"></i> {job.experience}</span>
                                    </div>
                                </div>
                                <div className="mt-6 md:mt-0">
                                    <button 
                                        onClick={() => {
                                            const applySection = document.getElementById('apply');
                                            if (applySection) {
                                                applySection.scrollIntoView({ behavior: 'smooth' });
                                                setData('open_position_id', job.id);
                                            }
                                        }}
                                        className="inline-block bg-sb-dark text-white font-bold uppercase tracking-widest px-8 py-3 hover:bg-sb-red transition-colors duration-300"
                                    >
                                        Apply Now
                                    </button>
                                </div>
                            </div>
                        )) : (
                            <div className="text-center py-12 text-gray-400 border border-dashed border-gray-200 rounded-xl">
                                We don't have any specific openings right now, but feel free to send a general application below!
                            </div>
                        )}
                    </div>
                </div>
            </section>

            {/* ── APPLICATION FORM SECTION ──────────────────────────────── */}
            <section id="apply" className="py-24 bg-gray-50 scroll-mt-20">
                <div className="max-w-7xl mx-auto px-4 md:px-8">
                    <div className="flex flex-col lg:flex-row gap-16">
                        
                        {/* Left: Careers Contact Info */}
                        <div className="lg:w-1/3">
                            <span className="text-sb-orange uppercase tracking-[.3em] font-bold text-sm mb-4 block">Take the Next Step</span>
                            <h2 className="text-sb-dark text-4xl font-poppins font-bold uppercase mb-8">
                                Submit Your Application
                            </h2>
                            <p className="text-gray-600 mb-10 leading-relaxed">
                                Don't see a role that fits your experience? Send us your resume anyway! We are always looking for skilled, motivated professionals to join our growing team.
                            </p>

                            <div className="bg-white p-8 border border-gray-100 shadow-sm rounded-sm">
                                <h3 className="text-xl font-bold text-sb-dark border-b pb-4 mb-6">HR &amp; Careers Contact</h3>
                                
                                <div className="flex items-start gap-4 mb-6">
                                    <div className="w-12 h-12 bg-sb-red/10 rounded-full flex items-center justify-center flex-shrink-0">
                                        <i className="fas fa-envelope text-sb-red text-xl"></i>
                                    </div>
                                    <div>
                                        <span className="block text-sm font-bold text-gray-400 uppercase tracking-widest mb-1">Email Us</span>
                                        <a href={`mailto:${siteSettings.careers_email || 'careers@safebuild.ca'}`} className="text-lg font-bold text-sb-dark hover:text-sb-red transition-colors">{siteSettings.careers_email || 'careers@safebuild.ca'}</a>
                                    </div>
                                </div>

                                <div className="flex items-start gap-4">
                                    <div className="w-12 h-12 bg-sb-red/10 rounded-full flex items-center justify-center flex-shrink-0">
                                        <i className="fas fa-phone-alt text-sb-red text-xl"></i>
                                    </div>
                                    <div>
                                        <span className="block text-sm font-bold text-gray-400 uppercase tracking-widest mb-1">Call Us</span>
                                        <a href={`tel:${(siteSettings.contact_phone || '+12508860059').replace(/[^0-9+]/g, '')}`} className="text-lg font-bold text-sb-dark hover:text-sb-red transition-colors">{siteSettings.contact_phone || '+1 (250) 886-0059'}</a>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Right: Application Form */}
                        <div className="lg:w-2/3 bg-white p-10 md:p-12 shadow-xl border-t-4 border-sb-red">
                            {recentlySuccessful ? (
                                <div className="bg-green-50 border border-green-200 text-green-800 p-8 rounded-xl text-center">
                                    <h3 className="text-2xl font-bold mb-2">Application Sent!</h3>
                                    <p>Thank you for your interest in joining SafeBuild. Our HR team will review your application and get back to you shortly.</p>
                                    <button onClick={() => reset()} className="mt-6 text-sb-red font-bold hover:underline">Submit another application</button>
                                </div>
                            ) : (
                                <form onSubmit={handleSubmit} className="space-y-6">
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                        <div>
                                            <label className="block text-sm font-bold text-sb-dark uppercase tracking-wider mb-2">Full Name *</label>
                                            <input 
                                                type="text" 
                                                className="w-full bg-gray-50 border border-gray-200 px-5 py-4 focus:outline-none focus:border-sb-red transition-colors" 
                                                placeholder="John Doe" 
                                                value={data.name}
                                                onChange={e => setData('name', e.target.value)}
                                                required 
                                            />
                                            {errors.name && <p className="text-xs text-red-500 mt-1">{errors.name}</p>}
                                        </div>
                                        <div>
                                            <label className="block text-sm font-bold text-sb-dark uppercase tracking-wider mb-2">Email Address *</label>
                                            <input 
                                                type="email" 
                                                className="w-full bg-gray-50 border border-gray-200 px-5 py-4 focus:outline-none focus:border-sb-red transition-colors" 
                                                placeholder="johndoe@email.com" 
                                                value={data.email}
                                                onChange={e => setData('email', e.target.value)}
                                                required 
                                            />
                                            {errors.email && <p className="text-xs text-red-500 mt-1">{errors.email}</p>}
                                        </div>
                                    </div>
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                        <div>
                                            <label className="block text-sm font-bold text-sb-dark uppercase tracking-wider mb-2">Phone Number *</label>
                                            <input 
                                                type="tel" 
                                                className="w-full bg-gray-50 border border-gray-200 px-5 py-4 focus:outline-none focus:border-sb-red transition-colors" 
                                                placeholder="(250) 555-0123" 
                                                value={data.phone}
                                                onChange={e => setData('phone', e.target.value)}
                                                required 
                                            />
                                            {errors.phone && <p className="text-xs text-red-500 mt-1">{errors.phone}</p>}
                                        </div>
                                        <div>
                                            <label className="block text-sm font-bold text-sb-dark uppercase tracking-wider mb-2">Position Applying For *</label>
                                            <select 
                                                className="w-full bg-gray-50 border border-gray-200 px-5 py-4 focus:outline-none focus:border-sb-red transition-colors appearance-none" 
                                                value={data.open_position_id}
                                                onChange={e => setData('open_position_id', e.target.value)}
                                                required
                                            >
                                                <option value="">Select a Position...</option>
                                                {positions && positions.map(job => (
                                                    <option key={job.id} value={job.id}>{job.title}</option>
                                                ))}
                                            </select>
                                            {errors.open_position_id && <p className="text-xs text-red-500 mt-1">{errors.open_position_id}</p>}
                                        </div>
                                    </div>
                                    <div>
                                        <label className="block text-sm font-bold text-sb-dark uppercase tracking-wider mb-2">Upload Resume / CV *</label>
                                        <input 
                                            type="file" 
                                            accept=".pdf,.doc,.docx" 
                                            className="w-full bg-gray-50 border border-gray-200 px-5 py-3 focus:outline-none focus:border-sb-red transition-colors file:mr-4 file:py-2 file:px-4 file:border-0 file:text-sm file:font-semibold file:bg-sb-red file:text-white hover:file:bg-sb-dark file:cursor-pointer file:transition-colors" 
                                            onChange={e => setData('resume_path', e.target.files[0])}
                                            required 
                                        />
                                        <p className="text-xs text-gray-500 mt-2">Accepted formats: PDF, DOC, DOCX. Max size: 5MB.</p>
                                        {errors.resume_path && <p className="text-xs text-red-500 mt-1">{errors.resume_path}</p>}
                                    </div>
                                    <div>
                                        <label className="block text-sm font-bold text-sb-dark uppercase tracking-wider mb-2">Cover Letter / Message</label>
                                        <textarea 
                                            rows="5" 
                                            className="w-full bg-gray-50 border border-gray-200 px-5 py-4 focus:outline-none focus:border-sb-red transition-colors" 
                                            placeholder="Tell us why you would be a great fit for SafeBuild..."
                                            value={data.cover_letter}
                                            onChange={e => setData('cover_letter', e.target.value)}
                                        ></textarea>
                                        {errors.cover_letter && <p className="text-xs text-red-500 mt-1">{errors.cover_letter}</p>}
                                    </div>
                                    <div>
                                        <button 
                                            type="submit" 
                                            disabled={processing}
                                            className="w-full bg-sb-red text-white font-bold uppercase tracking-widest py-5 hover:bg-sb-dark transition-all duration-300 disabled:opacity-50"
                                        >
                                            {processing ? 'Submitting...' : 'Submit Application'}
                                        </button>
                                    </div>
                                </form>
                            )}
                        </div>

                    </div>
                </div>
            </section>

            <Footer />
            <Toaster position="top-right" richColors />
        </div>
    );
}
