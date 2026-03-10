import React from 'react';
import { Head, Link } from '@inertiajs/react';
import Navbar from '@/Components/Navbar';
import Footer from '@/Components/Footer';

export default function Careers() {
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
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {/* Perk 1 */}
                        <div className="bg-white p-10 rounded-sm shadow-sm hover:shadow-lg transition-shadow duration-300 text-center group border border-gray-100">
                            <div className="w-20 h-20 mx-auto bg-sb-red/10 rounded-full flex items-center justify-center mb-6 group-hover:bg-sb-red transition-colors duration-300">
                                <i className="fas fa-hard-hat text-3xl text-sb-red group-hover:text-white transition-colors duration-300"></i>
                            </div>
                            <h3 className="text-2xl font-bold text-sb-dark mb-4">Safety First</h3>
                            <p className="text-gray-500 leading-relaxed">
                                Our top priority is ensuring every team member goes home safe. We maintain rigorous safety standards and protocols on every site.
                            </p>
                        </div>
                        {/* Perk 2 */}
                        <div className="bg-white p-10 rounded-sm shadow-sm hover:shadow-lg transition-shadow duration-300 text-center group border border-gray-100">
                            <div className="w-20 h-20 mx-auto bg-sb-orange/10 rounded-full flex items-center justify-center mb-6 group-hover:bg-sb-orange transition-colors duration-300">
                                <i className="fas fa-chart-line text-3xl text-sb-orange group-hover:text-white transition-colors duration-300"></i>
                            </div>
                            <h3 className="text-2xl font-bold text-sb-dark mb-4">Career Growth</h3>
                            <p className="text-gray-500 leading-relaxed">
                                We invest in our people with ongoing training, mentorship, and clear pathways to advance your skills and career.
                            </p>
                        </div>
                        {/* Perk 3 */}
                        <div className="bg-white p-10 rounded-sm shadow-sm hover:shadow-lg transition-shadow duration-300 text-center group border border-gray-100">
                            <div className="w-20 h-20 mx-auto bg-sb-navy/10 rounded-full flex items-center justify-center mb-6 group-hover:bg-sb-navy transition-colors duration-300">
                                <i className="fas fa-users text-3xl text-sb-navy group-hover:text-white transition-colors duration-300"></i>
                            </div>
                            <h3 className="text-2xl font-bold text-sb-dark mb-4">Strong Team Culture</h3>
                            <p className="text-gray-500 leading-relaxed">
                                We are a family of builders who support each other, collaborating closely to deliver exceptional results and celebrate our successes.
                            </p>
                        </div>
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
                        {/* Job 1 */}
                        <div className="border border-gray-200 rounded-sm p-8 flex flex-col md:flex-row items-start md:items-center justify-between hover:border-sb-red transition-colors duration-300">
                            <div>
                                <h3 className="text-2xl font-bold text-sb-dark mb-2">Site Supervisor</h3>
                                <div className="flex flex-wrap items-center gap-4 text-sm text-gray-500 font-medium">
                                    <span className="flex items-center gap-1"><i className="fas fa-map-marker-alt text-sb-red"></i> Victoria, BC</span>
                                    <span className="flex items-center gap-1"><i className="fas fa-clock text-sb-red"></i> Full-Time</span>
                                    <span className="flex items-center gap-1"><i className="fas fa-briefcase text-sb-red"></i> Construction Management</span>
                                </div>
                            </div>
                            <div className="mt-6 md:mt-0">
                                <a href="#apply" className="inline-block bg-sb-dark text-white font-bold uppercase tracking-widest px-8 py-3 hover:bg-sb-red transition-colors duration-300">
                                    Apply Now
                                </a>
                            </div>
                        </div>

                        {/* Job 2 */}
                        <div className="border border-gray-200 rounded-sm p-8 flex flex-col md:flex-row items-start md:items-center justify-between hover:border-sb-red transition-colors duration-300">
                            <div>
                                <h3 className="text-2xl font-bold text-sb-dark mb-2">Journeyman Carpenter</h3>
                                <div className="flex flex-wrap items-center gap-4 text-sm text-gray-500 font-medium">
                                    <span className="flex items-center gap-1"><i className="fas fa-map-marker-alt text-sb-red"></i> Vancouver Island</span>
                                    <span className="flex items-center gap-1"><i className="fas fa-clock text-sb-red"></i> Full-Time</span>
                                    <span className="flex items-center gap-1"><i className="fas fa-hammer text-sb-red"></i> Trades</span>
                                </div>
                            </div>
                            <div className="mt-6 md:mt-0">
                                <a href="#apply" className="inline-block bg-sb-dark text-white font-bold uppercase tracking-widest px-8 py-3 hover:bg-sb-red transition-colors duration-300">
                                    Apply Now
                                </a>
                            </div>
                        </div>

                        {/* Job 3 */}
                        <div className="border border-gray-200 rounded-sm p-8 flex flex-col md:flex-row items-start md:items-center justify-between hover:border-sb-red transition-colors duration-300">
                            <div>
                                <h3 className="text-2xl font-bold text-sb-dark mb-2">Project Manager</h3>
                                <div className="flex flex-wrap items-center gap-4 text-sm text-gray-500 font-medium">
                                    <span className="flex items-center gap-1"><i className="fas fa-map-marker-alt text-sb-red"></i> Victoria, BC</span>
                                    <span className="flex items-center gap-1"><i className="fas fa-clock text-sb-red"></i> Full-Time</span>
                                    <span className="flex items-center gap-1"><i className="fas fa-tasks text-sb-red"></i> Management</span>
                                </div>
                            </div>
                            <div className="mt-6 md:mt-0">
                                <a href="#apply" className="inline-block bg-sb-dark text-white font-bold uppercase tracking-widest px-8 py-3 hover:bg-sb-red transition-colors duration-300">
                                    Apply Now
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ── APPLICATION FORM SECTION ──────────────────────────────── */}
            <section id="apply" className="py-24 bg-gray-50">
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
                                        <a href="mailto:careers@safebuild.ca" className="text-lg font-bold text-sb-dark hover:text-sb-red transition-colors">careers@safebuild.ca</a>
                                    </div>
                                </div>

                                <div className="flex items-start gap-4">
                                    <div className="w-12 h-12 bg-sb-red/10 rounded-full flex items-center justify-center flex-shrink-0">
                                        <i className="fas fa-phone-alt text-sb-red text-xl"></i>
                                    </div>
                                    <div>
                                        <span className="block text-sm font-bold text-gray-400 uppercase tracking-widest mb-1">Call Us</span>
                                        <a href="tel:+12508860059" className="text-lg font-bold text-sb-dark hover:text-sb-red transition-colors">+1 (250) 886-0059</a>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Right: Application Form */}
                        <div className="lg:w-2/3 bg-white p-10 md:p-12 shadow-xl border-t-4 border-sb-red">
                            <form action="#" method="POST" className="space-y-6">
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div>
                                        <label className="block text-sm font-bold text-sb-dark uppercase tracking-wider mb-2">Full Name *</label>
                                        <input type="text" className="w-full bg-gray-50 border border-gray-200 px-5 py-4 focus:outline-none focus:border-sb-red transition-colors" placeholder="John Doe" required />
                                    </div>
                                    <div>
                                        <label className="block text-sm font-bold text-sb-dark uppercase tracking-wider mb-2">Email Address *</label>
                                        <input type="email" className="w-full bg-gray-50 border border-gray-200 px-5 py-4 focus:outline-none focus:border-sb-red transition-colors" placeholder="johndoe@email.com" required />
                                    </div>
                                </div>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div>
                                        <label className="block text-sm font-bold text-sb-dark uppercase tracking-wider mb-2">Phone Number *</label>
                                        <input type="tel" className="w-full bg-gray-50 border border-gray-200 px-5 py-4 focus:outline-none focus:border-sb-red transition-colors" placeholder="(250) 555-0123" required />
                                    </div>
                                    <div>
                                        <label className="block text-sm font-bold text-sb-dark uppercase tracking-wider mb-2">Position Applying For *</label>
                                        <select className="w-full bg-gray-50 border border-gray-200 px-5 py-4 focus:outline-none focus:border-sb-red transition-colors appearance-none" required>
                                            <option value="">Select a Position...</option>
                                            <option value="Site Supervisor">Site Supervisor</option>
                                            <option value="Journeyman Carpenter">Journeyman Carpenter</option>
                                            <option value="Project Manager">Project Manager</option>
                                            <option value="General Application">General Application</option>
                                        </select>
                                    </div>
                                </div>
                                <div>
                                    <label className="block text-sm font-bold text-sb-dark uppercase tracking-wider mb-2">Upload Resume / CV *</label>
                                    <input type="file" accept=".pdf,.doc,.docx" className="w-full bg-gray-50 border border-gray-200 px-5 py-3 focus:outline-none focus:border-sb-red transition-colors file:mr-4 file:py-2 file:px-4 file:border-0 file:text-sm file:font-semibold file:bg-sb-red file:text-white hover:file:bg-sb-dark file:cursor-pointer file:transition-colors" required />
                                    <p className="text-xs text-gray-500 mt-2">Accepted formats: PDF, DOC, DOCX. Max size: 5MB.</p>
                                </div>
                                <div>
                                    <label className="block text-sm font-bold text-sb-dark uppercase tracking-wider mb-2">Cover Letter / Message</label>
                                    <textarea rows="5" className="w-full bg-gray-50 border border-gray-200 px-5 py-4 focus:outline-none focus:border-sb-red transition-colors" placeholder="Tell us why you would be a great fit for SafeBuild..."></textarea>
                                </div>
                                <div>
                                    <button type="submit" className="w-full bg-sb-red text-white font-bold uppercase tracking-widest py-5 hover:bg-sb-dark transition-all duration-300">
                                        Submit Application
                                    </button>
                                </div>
                            </form>
                        </div>

                    </div>
                </div>
            </section>

            <Footer />
        </div>
    );
}
