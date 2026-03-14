import React, { useState, useEffect, useRef } from 'react';
import { usePage } from '@inertiajs/react';
import { getAssetUrl } from '@/lib/utils';

const Counter = ({ target, suffix = '', duration = 1500 }) => {
    const [count, setCount] = useState(0);
    const countRef = useRef(0);
    const elementRef = useRef(null);
    const [hasAnimated, setHasAnimated] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver((entries) => {
            if (entries[0].isIntersecting && !hasAnimated) {
                setHasAnimated(true);
                let start = 0;
                const end = parseInt(target) || 0;
                const totalDur = duration;
                const startTime = performance.now();

                const animate = (currentTime) => {
                    const elapsed = currentTime - startTime;
                    const progress = Math.min(elapsed / totalDur, 1);
                    
                    // Ease out cubic
                    const easedProgress = 1 - Math.pow(1 - progress, 3);
                    const currentCount = Math.floor(easedProgress * end);
                    
                    setCount(currentCount);

                    if (progress < 1) {
                        requestAnimationFrame(animate);
                    } else {
                        setCount(end);
                    }
                };

                requestAnimationFrame(animate);
            }
        }, { threshold: 0.1 });

        if (elementRef.current) {
            observer.observe(elementRef.current);
        }

        return () => observer.disconnect();
    }, [target, hasAnimated, duration]);

    return (
        <span ref={elementRef} className="inline-block min-w-[2.2ch] tabular-nums text-left">
            {count}{suffix}
        </span>
    );
};

export default function WhyChooseUs() {
    const { siteSettings = {} } = usePage().props;

    return (
        <section id="why-choose-us" className="py-24 bg-white overflow-hidden">
            <div className="max-w-7xl mx-auto px-6">
                <div className="flex flex-col lg:flex-row gap-16 items-center">
                    {/* Left: Content */}
                    <div className="lg:w-1/2">
                        <div className="mb-6">
                            <span className="text-sb-red uppercase tracking-[.2em] font-bold text-sm">Why SafeBuild
                                Canada?</span>
                            <div className="h-1 w-12 bg-sb-red mt-2"></div>
                        </div>
                        <h2
                            className="text-sb-dark text-4xl md:text-5xl font-poppins font-bold uppercase leading-tight mb-8">
                            {siteSettings.why_title || "Elevate Your Property To Its Full Potential"}
                        </h2>
                        <p className="text-gray-600 text-lg mb-10 leading-relaxed">
                            {siteSettings.why_description || "Let us bring your vision to life while maintaining the integrity and functionality of your property. We manage every detail with excellence from design to execution."}
                        </p>

                        <div className="space-y-6">
                            <div className="flex gap-4">
                                <div className="mt-1 text-sb-red"><i className="flaticon-right-arrow-1"></i></div>
                                <div>
                                    <h4 className="text-sb-dark font-bold text-lg uppercase">{siteSettings.why_acc_1_title || "Proven Expertise"}</h4>
                                    <p className="text-gray-600">{siteSettings.why_acc_1_text || "A trusted leader in construction and restoration across BC."}</p>
                                </div>
                            </div>
                            <div className="flex gap-4">
                                <div className="mt-1 text-sb-red"><i className="flaticon-right-arrow-1"></i></div>
                                <div>
                                    <h4 className="text-sb-dark font-bold text-lg uppercase">{siteSettings.why_acc_2_title || "Industry Accreditation"}</h4>
                                    <p className="text-gray-600">{siteSettings.why_acc_2_text || "Fully insured, BBB-accredited, and proud members of BOMA."}</p>
                                </div>
                            </div>
                            <div className="flex gap-4">
                                <div className="mt-1 text-sb-red"><i className="flaticon-right-arrow-1"></i></div>
                                <div>
                                    <h4 className="text-sb-dark font-bold text-lg uppercase">{siteSettings.why_acc_3_title || "Commitment to Quality"}</h4>
                                    <p className="text-gray-600">{siteSettings.why_acc_3_text || "Driven by precision, efficiency, and a focus on lasting value."}</p>
                                </div>
                            </div>
                        </div>

                        <div className="mt-12">
                            <a href="#contact"
                                className="bg-sb-dark hover:bg-sb-red text-white px-10 py-5 rounded-sm font-bold uppercase tracking-widest transition-all inline-block">
                                Explore Our Work
                            </a>
                        </div>
                    </div>

                    {/* Right: Stats Box & Image */}
                    <div className="lg:w-1/2 relative">
                        {/* Image */}
                        <div className="relative rounded-sm overflow-hidden shadow-2xl">
                            <img src={getAssetUrl(siteSettings.why_image, 'assets/steptodown.com191724.webp')} alt="Safebuild Professional"
                                className="w-full h-auto" />
                            {/* Overlay Stats */}
                            <div
                                className="absolute bottom-0 right-0 bg-sb-red p-10 md:p-14 text-white max-w-xs md:max-w-md transform translate-x-4 translate-y-4">
                                <div className="space-y-8">
                                    <div className="flex items-center gap-6 border-b border-white/20 pb-6">
                                        <span className="text-5xl font-bold">
                                            <Counter 
                                                target={(siteSettings.about_experience_years || "20").replace(/[^0-9]/g, '')}
                                                suffix={(siteSettings.about_experience_years || "20+").includes('+') ? '+' : ''}
                                            />
                                        </span>
                                        <span
                                            className="uppercase tracking-widest font-bold text-sm leading-tight">Years
                                            <br /> Experience</span>
                                    </div>
                                    <div className="flex items-center gap-6 border-b border-white/20 pb-6">
                                        <span className="text-5xl font-bold">
                                            <Counter 
                                                target={(siteSettings.about_projects_count || "400").replace(/[^0-9]/g, '')}
                                                suffix={(siteSettings.about_projects_count || "400+").includes('+') ? '+' : ''}
                                            />
                                        </span>
                                        <span
                                            className="uppercase tracking-widest font-bold text-sm leading-tight">Projects
                                            <br /> Completed</span>
                                    </div>
                                    <div className="flex items-center gap-6">
                                        <span className="text-5xl font-bold">
                                            <Counter 
                                                target={(siteSettings.about_pros_count || "50").replace(/[^0-9]/g, '')}
                                                suffix={(siteSettings.about_pros_count || "50+").includes('+') ? '+' : ''}
                                            />
                                        </span>
                                        <span
                                            className="uppercase tracking-widest font-bold text-sm leading-tight">Skilled
                                            <br /> Professionals</span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Decorative Element */}
                        <div className="absolute -top-6 -left-6 w-32 h-32 border-8 border-gray-100 -z-10"></div>
                    </div>
                </div>
            </div>
        </section>
    );
}
