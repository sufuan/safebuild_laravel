import { Head, Link } from '@inertiajs/react';
import SEOHead from '@/Components/SEOHead';
import Navbar from '@/Components/Navbar';
import Footer from '@/Components/Footer';
import React, { useState } from 'react';

const faqs = [
    {
        category: 'General',
        items: [
            {
                q: 'What services does SafeBuild Canada offer?',
                a: 'SafeBuild Canada provides a comprehensive range of property services including renovation & remodeling, architectural design, excavation & site preparation, custom carpentry & cabinetry, restoration & abatement, property management, and factory manufacture services throughout the Greater Victoria area.',
            },
            {
                q: 'Which areas does SafeBuild Canada serve?',
                a: 'We primarily serve the Greater Victoria area of British Columbia, Canada. This includes Victoria, Saanich, Esquimalt, Oak Bay, Langford, Colwood, View Royal, and surrounding municipalities.',
            },
            {
                q: 'Is SafeBuild Canada licensed and insured?',
                a: 'Yes. SafeBuild Canada is fully licensed, insured, and accredited. We are proud members of BOMA (Building Owners and Managers Association), the Victoria Chamber of Commerce, and hold BBB accreditation — reflecting our commitment to the highest standards of professionalism and ethics.',
            },
        ],
    },
    {
        category: 'Projects & Process',
        items: [
            {
                q: 'How do I get a quote for my project?',
                a: 'Getting a quote is simple. You can fill out our Contact Us form, call us at +1 (250) 886-0059, or email us at ceo@safebuild.ca. One of our project managers will reach out within 24 hours to schedule a free on-site assessment and provide a detailed estimate.',
            },
            {
                q: 'How long does a typical renovation project take?',
                a: 'Project timelines vary depending on scope, size, and complexity. A standard bathroom renovation may take 1–2 weeks, while a full home renovation could span 3–6 months. We provide a detailed project timeline at the outset and keep you informed throughout every stage.',
            },
            {
                q: 'Do you handle both residential and commercial projects?',
                a: 'Absolutely. SafeBuild Canada has extensive experience with high-end residential properties, commercial buildings, and industrial facilities. Our team is equipped to handle projects of any scale with the same level of care and precision.',
            },
            {
                q: 'Will I have a dedicated project manager?',
                a: 'Yes. Every project is assigned a dedicated project manager who serves as your single point of contact throughout the engagement. They coordinate all trades, manage the schedule, and provide regular progress updates.',
            },
        ],
    },
    {
        category: 'Pricing & Contracts',
        items: [
            {
                q: 'How is pricing determined for a project?',
                a: 'Pricing is based on the scope of work, materials, labour, and project timeline. After our initial consultation and site assessment, we provide a transparent, detailed written quote with no hidden fees. We offer both fixed-price and time-and-materials contracts depending on the nature of the project.',
            },
            {
                q: 'Do you require a deposit to begin work?',
                a: 'Yes, we typically require a deposit of 20–30% of the total project cost to secure your start date and procure materials. The remaining balance is structured in milestone payments, with the final payment due upon project completion and your satisfaction.',
            },
            {
                q: 'What happens if there are unexpected costs during the project?',
                a: 'We maintain open communication throughout the project. If unforeseen conditions arise (such as hidden damage within walls), we will immediately inform you, provide a change order outlining the additional scope and cost, and obtain your approval before proceeding. We never proceed with unapproved work.',
            },
        ],
    },
    {
        category: 'After Your Project',
        items: [
            {
                q: 'Do you provide a warranty on your work?',
                a: 'Yes. SafeBuild Canada stands behind the quality of our workmanship. We offer a minimum 1-year workmanship warranty on all projects. Specific materials and products may carry additional manufacturer warranties, which we will clearly outline in your project documentation.',
            },
            {
                q: 'What should I do if I notice an issue after project completion?',
                a: 'Contact us directly at ceo@safebuild.ca or call +1 (250) 886-0059. Our team will schedule an inspection promptly. Issues covered under warranty will be resolved at no cost to you. We are committed to your long-term satisfaction.',
            },
        ],
    },
];

function FaqItem({ q, a }) {
    const [open, setOpen] = useState(false);
    return (
        <div className="border border-gray-100 rounded-sm overflow-hidden mb-3 shadow-sm">
            <button
                onClick={() => setOpen(!open)}
                className="w-full flex items-center justify-between px-7 py-5 text-left bg-white hover:bg-gray-50 transition-colors"
            >
                <span className={`font-bold text-base font-poppins ${open ? 'text-sb-red' : 'text-sb-dark'}`}>
                    {q}
                </span>
                <span className={`flex-shrink-0 ml-4 w-8 h-8 rounded-full flex items-center justify-center transition-colors ${open ? 'bg-sb-red text-white' : 'bg-gray-100 text-gray-500'}`}>
                    <i className={`fas ${open ? 'fa-minus' : 'fa-plus'} text-sm`}></i>
                </span>
            </button>
            <div className={`overflow-hidden transition-all duration-300 ${open ? 'max-h-96' : 'max-h-0'}`}>
                <p className="px-7 pb-6 pt-2 text-gray-500 leading-relaxed text-sm border-t border-gray-50">
                    {a}
                </p>
            </div>
        </div>
    );
}

export default function Faq() {
    const faqEntities = faqs.flatMap(cat => cat.items.map(item => ({
        '@type': 'Question',
        name: item.q,
        acceptedAnswer: {
            '@type': 'Answer',
            text: item.a
        }
    })));

    const faqSchema = {
        '@context': 'https://schema.org',
        '@type': 'FAQPage',
        '@id': 'https://safebuild.ca/faq#faqpage',
        mainEntity: faqEntities,
        isPartOf: { '@id': 'https://safebuild.ca/#website' },
        breadcrumb: {
            '@type': 'BreadcrumbList',
            itemListElement: [
                { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://safebuild.ca' },
                { '@type': 'ListItem', position: 2, name: 'FAQ', item: 'https://safebuild.ca/faq' }
            ]
        }
    };

    return (
        <>
            <SEOHead
                title="Frequently Asked Questions – General Contractor Victoria BC"
                description="Find answers to common questions about SafeBuild Canada's services, project timelines, pricing, warranties, licensing, and renovation process in Victoria BC."
                canonical="https://safebuild.ca/faq"
                schema={faqSchema}
            />
            <div className="boxed_wrapper">
                <Navbar />

                {/* ── PAGE HERO ─────────────────────────────────────────── */}
                <section className="relative h-[400px] flex items-center justify-center bg-black overflow-hidden">
                    <div className="absolute inset-0 bg-cover bg-center bg-no-repeat"
                        style={{ backgroundImage: "url('assets/steptodown.com618418.webp')" }}></div>
                    <div className="absolute inset-0 bg-[#0E0F0F]/75"></div>
                    <div className="relative z-10 text-center px-4">
                        <h1 className="text-white text-5xl md:text-6xl font-poppins font-bold uppercase tracking-wider mb-4">
                            FAQ
                        </h1>
                        <nav className="flex items-center justify-center gap-2 text-white/80 text-sm font-bold uppercase">
                            <Link href="/" className="hover:text-sb-red transition-colors">Home</Link>
                            <span className="w-1.5 h-1.5 bg-sb-red rounded-full"></span>
                            <span>Frequently Asked Questions</span>
                        </nav>
                    </div>
                </section>

                {/* ── INTRO ─────────────────────────────────────────────── */}
                <section className="py-20 bg-white">
                    <div className="max-w-4xl mx-auto px-4 text-center">
                        <span className="text-sb-red font-bold uppercase tracking-[.3em] text-sm mb-4 block">
                            Got Questions?
                        </span>
                        <h2 className="text-sb-dark text-4xl md:text-5xl font-poppins font-bold uppercase mb-6">
                            Frequently Asked Questions
                        </h2>
                        <p className="text-gray-500 text-lg leading-relaxed">
                            Find answers to the most common questions about our services, process, pricing, and more.
                            Can't find what you're looking for? <Link href="/contact-us" className="text-sb-red font-bold hover:underline">Contact us directly.</Link>
                        </p>
                    </div>
                </section>

                {/* ── FAQ CATEGORIES ────────────────────────────────────── */}
                <section className="pb-24 bg-gray-50">
                    <div className="max-w-4xl mx-auto px-4">
                        {faqs.map((section) => (
                            <div key={section.category} className="mb-12">
                                <div className="flex items-center gap-4 mb-6">
                                    <div className="w-8 h-1 bg-sb-red"></div>
                                    <h3 className="text-sb-dark text-xl font-poppins font-bold uppercase tracking-wider">
                                        {section.category}
                                    </h3>
                                </div>
                                {section.items.map((item, i) => (
                                    <FaqItem key={i} q={item.q} a={item.a} />
                                ))}
                            </div>
                        ))}
                    </div>
                </section>

                {/* ── CTA ───────────────────────────────────────────────── */}
                <section className="py-20 bg-sb-dark text-center">
                    <div className="max-w-3xl mx-auto px-4">
                        <h2 className="text-white text-3xl md:text-4xl font-poppins font-bold uppercase mb-6">
                            Still Have Questions?
                        </h2>
                        <p className="text-white/70 text-lg mb-10 leading-relaxed">
                            Our team is available 24/7 to assist you. Don't hesitate to reach out.
                        </p>
                        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                            <Link href="/contact-us"
                                className="bg-sb-red text-white font-bold uppercase tracking-wider px-10 py-4 hover:bg-white hover:text-sb-red transition-all duration-300 flex items-center gap-3">
                                Contact Us <i className="fas fa-long-arrow-alt-right"></i>
                            </Link>
                            <a href="tel:+12508860059"
                                className="bg-white/10 text-white font-bold uppercase tracking-wider px-10 py-4 hover:bg-white hover:text-sb-dark transition-all duration-300 flex items-center gap-3">
                                <i className="fas fa-phone-alt"></i> +1 (250) 886-0059
                            </a>
                        </div>
                    </div>
                </section>

                <Footer />
            </div>
        </>
    );
}
