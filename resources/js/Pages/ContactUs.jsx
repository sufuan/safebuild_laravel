import { Head, Link, useForm, usePage } from '@inertiajs/react';
import Navbar from '@/Components/Navbar';
import Footer from '@/Components/Footer';
import BrandLogos from '@/Components/BrandLogos';
import React from 'react';
import { Toaster, toast } from 'sonner';
import { getAssetUrl } from '@/lib/utils';

export default function ContactUs() {
    const { siteSettings } = usePage().props;
    const isQuoteMode = typeof window !== 'undefined' ? new URLSearchParams(window.location.search).get('quote') === 'true' : false;
    const { data, setData, post, processing, errors, reset } = useForm({
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: '',
        is_quote: isQuoteMode,
        service_type: '',
        location: '',
        project_details: '',
        budget_range: '',
        attachment: null,
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        post(route('contact.store'), {
            forceFormData: true,
            onSuccess: () => {
                reset();
                toast.success(data.is_quote ? 'Your quote request has been submitted successfully!' : 'Your message has been sent successfully!');
            },
            onError: () => {
                toast.error('There was an error submitting your request. Please check the fields.');
            }
        });
    };

    return (
        <>
            <Head title="Contact Us – SafeBuild Canada" />
            <div className="boxed_wrapper">
                <Navbar />

                {/* ── PAGE HERO ─────────────────────────────────────────── */}
                <section className="relative h-[400px] flex items-center justify-center bg-black overflow-hidden">
                    <div className="absolute inset-0 bg-cover bg-center bg-no-repeat"
                        style={{ backgroundImage: `url(${getAssetUrl('assets/steptodown.com399351.webp')})` }}></div>
                    <div className="absolute inset-0 bg-[#0E0F0F]/70"></div>
                    <div className="relative z-10 text-center px-4">
                        <h1 className="text-white text-5xl md:text-6xl font-poppins font-bold uppercase tracking-wider mb-4">
                            CONTACT
                        </h1>
                        <nav className="flex items-center justify-center gap-2 text-white/80 text-sm font-bold uppercase">
                            <Link href="/" className="hover:text-sb-red transition-colors">Home</Link>
                            <span className="w-1.5 h-1.5 bg-sb-red rounded-full"></span>
                            <span>Contact Us</span>
                        </nav>
                    </div>
                </section>

                {/* ── FORM & TESTIMONIAL ────────────────────────────────── */}
                <section className="py-24 bg-white">
                    <div className="max-w-7xl mx-auto px-4 md:px-8">
                        <div className="flex flex-col lg:flex-row gap-16">
                            {/* Left: Contact Form */}
                            <div className="lg:w-2/3">
                                <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-10 pb-6 border-b border-gray-100 gap-6">
                                    <div>
                                        <h2 className="text-sb-dark text-3xl font-bold uppercase mb-2">
                                            {data.is_quote ? 'REQUEST A QUOTE' : 'CONTACT US'}
                                        </h2>
                                        <p className="text-gray-600">
                                            {data.is_quote 
                                                ? 'Request a Quote: For project details and quotation requests.' 
                                                : 'Contact Us: For general inquiries only.'}
                                        </p>
                                    </div>
                                    <div className="flex items-center gap-4 shrink-0 bg-gray-50 px-4 py-3 rounded-xl border border-gray-100">
                                        <span className={`text-sm font-bold uppercase tracking-widest ${!data.is_quote ? 'text-sb-dark' : 'text-gray-400'}`}>Contact Us</span>
                                        <button 
                                            type="button" 
                                            onClick={() => setData('is_quote', !data.is_quote)}
                                            className={`relative inline-flex h-8 w-14 items-center rounded-full transition-colors focus:outline-none focus:ring-2 focus:ring-sb-red focus:ring-offset-2 ${data.is_quote ? 'bg-sb-red' : 'bg-gray-300'}`}
                                        >
                                            <span className={`inline-block h-6 w-6 transform rounded-full bg-white transition-transform ${data.is_quote ? 'translate-x-[26px]' : 'translate-x-1'}`} />
                                        </button>
                                        <span className={`text-sm font-bold uppercase tracking-widest ${data.is_quote ? 'text-sb-red' : 'text-gray-400'}`}>Request a Quote</span>
                                    </div>
                                </div>

                                <form onSubmit={handleSubmit} className="space-y-6">
                                    {/* General Fields */}
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                        <div className="space-y-1">
                                            <input 
                                                type="text" 
                                                placeholder="Your Name*"
                                                value={data.name}
                                                onChange={e => setData('name', e.target.value)}
                                                className="w-full bg-gray-100 border-none px-6 py-4 rounded-sm focus:ring-1 focus:ring-sb-red outline-none transition-shadow" 
                                                required
                                            />
                                            {errors.name && <p className="text-xs text-red-500 font-bold mt-1 max-w-full">{errors.name}</p>}
                                        </div>
                                        <div className="space-y-1">
                                            <input 
                                                type="email" 
                                                placeholder="Email*"
                                                value={data.email}
                                                onChange={e => setData('email', e.target.value)}
                                                className="w-full bg-gray-100 border-none px-6 py-4 rounded-sm focus:ring-1 focus:ring-sb-red outline-none transition-shadow" 
                                                required
                                            />
                                            {errors.email && <p className="text-xs text-red-500 font-bold mt-1 max-w-full">{errors.email}</p>}
                                        </div>
                                    </div>
                                    
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                        <div className="space-y-1">
                                            <input 
                                                type="text" 
                                                placeholder="Phone*"
                                                value={data.phone}
                                                onChange={e => setData('phone', e.target.value)}
                                                className="w-full bg-gray-100 border-none px-6 py-4 rounded-sm focus:ring-1 focus:ring-sb-red outline-none transition-shadow" 
                                                required
                                            />
                                            {errors.phone && <p className="text-xs text-red-500 font-bold mt-1 max-w-full">{errors.phone}</p>}
                                        </div>
                                        {/* Subject is full-width in Contact mode unless we need symmetry */}
                                        <div className={`${data.is_quote ? 'hidden' : 'space-y-1'}`}>
                                            <input 
                                                type="text" 
                                                placeholder="Subject"
                                                value={data.subject}
                                                onChange={e => setData('subject', e.target.value)}
                                                className="w-full bg-gray-100 border-none px-6 py-4 rounded-sm focus:ring-1 focus:ring-sb-red outline-none transition-shadow" 
                                            />
                                            {errors.subject && <p className="text-xs text-red-500 font-bold mt-1 max-w-full">{errors.subject}</p>}
                                        </div>
                                        {/* Show Location instead of Subject in Quote mode */}
                                        <div className={`${!data.is_quote ? 'hidden' : 'space-y-1'}`}>
                                            <input 
                                                type="text" 
                                                placeholder="Project Location*"
                                                value={data.location}
                                                onChange={e => setData('location', e.target.value)}
                                                className="w-full bg-gray-100 border-none px-6 py-4 rounded-sm focus:ring-1 focus:ring-sb-red outline-none transition-shadow" 
                                                required={data.is_quote}
                                            />
                                            {errors.location && <p className="text-xs text-red-500 font-bold mt-1 max-w-full">{errors.location}</p>}
                                        </div>
                                    </div>

                                    {/* Quote Extra Fields */}
                                    {data.is_quote && (
                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 animate-in slide-in-from-top-4 fade-in duration-300">
                                            <div className="space-y-1">
                                                <select
                                                    value={data.service_type}
                                                    onChange={e => setData('service_type', e.target.value)}
                                                    className="w-full bg-gray-100 border-none px-6 py-4 rounded-sm focus:ring-1 focus:ring-sb-red outline-none text-gray-700 transition-shadow appearance-none cursor-pointer"
                                                    required={data.is_quote}
                                                >
                                                    <option value="" disabled>Select Service Type*</option>
                                                    <option value="New Construction">New Construction</option>
                                                    <option value="Renovation">Renovation</option>
                                                    <option value="Architectural Design">Architectural Design</option>
                                                    <option value="Custom Carpentry">Custom Carpentry</option>
                                                    <option value="Excavation & Prep">Excavation & Prep</option>
                                                    <option value="Other">Other</option>
                                                </select>
                                                {errors.service_type && <p className="text-xs text-red-500 font-bold mt-1 max-w-full">{errors.service_type}</p>}
                                            </div>
                                            <div className="space-y-1">
                                                <input
                                                    type="text" 
                                                    placeholder="Budget Range (Optional)"
                                                    value={data.budget_range}
                                                    onChange={e => setData('budget_range', e.target.value)}
                                                    className="w-full bg-gray-100 border-none px-6 py-4 rounded-sm focus:ring-1 focus:ring-sb-red outline-none transition-shadow"
                                                />
                                                {errors.budget_range && <p className="text-xs text-red-500 font-bold mt-1 max-w-full">{errors.budget_range}</p>}
                                            </div>
                                        </div>
                                    )}

                                    {/* Message or Project Details */}
                                    <div className="space-y-1">
                                        <textarea 
                                            rows="6" 
                                            placeholder={data.is_quote ? 'Project Details & Requirements*' : 'Message*'}
                                            value={data.is_quote ? data.project_details : data.message}
                                            onChange={e => data.is_quote ? setData('project_details', e.target.value) : setData('message', e.target.value)}
                                            className="w-full bg-gray-100 border-none px-6 py-4 rounded-sm focus:ring-1 focus:ring-sb-red outline-none resize-none transition-shadow"
                                            required
                                        ></textarea>
                                        {data.is_quote ? (
                                            errors.project_details && <p className="text-xs text-red-500 font-bold mt-1 max-w-full">{errors.project_details}</p>
                                        ) : (
                                            errors.message && <p className="text-xs text-red-500 font-bold mt-1 max-w-full">{errors.message}</p>
                                        )}
                                    </div>

                                    {/* Optional File Attachment for Quote */}
                                    {data.is_quote && (
                                        <div className="space-y-2 animate-in slide-in-from-top-4 fade-in duration-300">
                                            <label className="block text-sm font-bold text-gray-700">Attach Floor Plans, Photos, or Documents: (Optional)</label>
                                            <div className="flex items-center gap-4">
                                                <label className="bg-gray-100 hover:bg-gray-200 border border-gray-200 text-gray-700 cursor-pointer px-6 py-3 rounded-sm font-semibold transition-colors">
                                                    <span>Choose File</span>
                                                    <input 
                                                        type="file" 
                                                        className="hidden" 
                                                        onChange={e => setData('attachment', e.target.files[0])}
                                                        accept=".jpg,.jpeg,.png,.pdf,.doc,.docx,.webp"
                                                    />
                                                </label>
                                                <span className="text-sm text-gray-500 font-medium">
                                                    {data.attachment ? data.attachment.name : 'No file selected. (Max 10MB)'}
                                                </span>
                                            </div>
                                            {errors.attachment && <p className="text-xs text-red-500 font-bold mt-1 max-w-full">{errors.attachment}</p>}
                                        </div>
                                    )}

                                    <button 
                                        type="submit"
                                        disabled={processing}
                                        className="bg-sb-dark text-white px-10 py-5 font-bold uppercase flex items-center gap-3 hover:bg-sb-red transition-all duration-300 disabled:opacity-50 mt-8"
                                    >
                                        {processing ? 'SENDING...' : (data.is_quote ? 'SUBMIT QUOTE REQUEST' : 'SEND MESSAGE')}
                                        <i className="fas fa-long-arrow-alt-right"></i>
                                    </button>
                                </form>
                            </div>

                            {/* Right: Featured Testimonial */}
                            <div className="lg:w-1/3">
                                <div className="bg-gray-50 border border-gray-100 p-12 relative flex flex-col h-full">
                                    {/* Quote Icon */}
                                    <div className="mb-10">
                                        <svg className="w-16 h-16 fill-sb-orange" viewBox="0 0 100 80">
                                            <path d="M0 0h40v40H10c0 10 10 20 20 20v20C10 80 0 60 0 40V0zm60 0h40v40H70c0 10 10 20 20 20v20C70 80 60 60 60 40V0z" />
                                        </svg>
                                    </div>
                                    <p className="text-gray-600 text-lg leading-relaxed italic mb-12">
                                        "SafeBuild helped us transform our office space. They offered creative solutions, and
                                        the project was completed faster than expected."
                                    </p>
                                    <div className="mt-auto flex items-center justify-between">
                                        <div className="bg-sb-dark/5 p-6 pr-12">
                                            <h4 className="text-sb-dark font-bold uppercase tracking-widest text-sm mb-1">Linda Murphy.</h4>
                                            <p className="text-gray-500 text-xs font-medium uppercase">Commercial Property Owner</p>
                                        </div>
                                        <div className="flex-shrink-0 -ml-12">
                                            <img src={getAssetUrl('assets/steptodown.com426279.webp')} alt="Linda Murphy"
                                                className="w-20 h-20 rounded-full object-cover border-4 border-white shadow-xl" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* ── CONTACT DETAILS GRID ──────────────────────────────── */}
                <section className="py-20 border-t border-gray-100">
                    <div className="max-w-7xl mx-auto px-4 md:px-8">
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
                            {/* Address */}
                            <div className="flex flex-col">
                                <h4 className="text-sb-dark font-bold uppercase tracking-widest text-sm mb-6">ADDRESS</h4>
                                <p className="text-gray-500 leading-relaxed font-medium">3448 Karger Terrace, Victoria, British
                                    Columbia V9C 3N2, Canada.</p>
                            </div>
                            {/* Email */}
                            <div className="flex flex-col">
                                <h4 className="text-sb-dark font-bold uppercase tracking-widest text-sm mb-6">E-MAIL</h4>
                                <a href={`mailto:${siteSettings.contact_email || 'ceo@safebuild.ca'}`}
                                    className="text-gray-500 hover:text-sb-red transition-colors font-medium">{siteSettings.contact_email || 'ceo@safebuild.ca'}</a>
                            </div>
                            {/* Telephone */}
                            <div className="flex flex-col">
                                <h4 className="text-sb-dark font-bold uppercase tracking-widest text-sm mb-6">TELEPHONE</h4>
                                <a href={`tel:${(siteSettings.contact_phone || '+12508860059').replace(/[^0-9+]/g, '')}`}
                                    className="text-gray-500 hover:text-sb-red transition-colors font-medium">{siteSettings.contact_phone || '(+1 (250) 886-0059)'}</a>
                            </div>
                            {/* Social */}
                            <div className="flex flex-col">
                                <h4 className="text-sb-dark font-bold uppercase tracking-widest text-sm mb-6">SOCIAL</h4>
                                <div className="flex items-center gap-4">
                                    <a href={siteSettings.facebook_url || "#"} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-sb-red transition-colors text-lg">
                                        <i className="fab fa-facebook-f"></i>
                                    </a>
                                    <a href={siteSettings.twitter_url || "#"} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-sb-red transition-colors text-lg">
                                        <i className="fab fa-twitter"></i>
                                    </a>
                                    <a href={siteSettings.linkedin_url || "#"} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-sb-red transition-colors text-lg">
                                        <i className="fab fa-linkedin-in"></i>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* ── GOOGLE MAP ────────────────────────────────────────── */}
                <section className="h-[500px] w-full relative">
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2650.627712398506!2d-123.50424682337651!3d48.42512697136531!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x548f0df2944fa907%3A0xe549cd97c5cb1a1!2s3448%20Karger%20Terrace%2C%20Victoria%2C%20BC%20V9C%203K4%2C%20Canada!5e0!3m2!1sen!2sus!4v1700000000000!5m2!1sen!2sus"
                        width="100%" height="100%" style={{ border: 0 }}
                        allowFullScreen="" loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade">
                    </iframe>
                </section>

                <BrandLogos />

                <Footer />
                <Toaster position="top-right" richColors />
            </div>
        </>
    );
}
