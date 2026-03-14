import { usePage } from '@inertiajs/react';
import { getAssetUrl } from '@/lib/utils';

export default function AboutUs() {
    const { siteSettings = {} } = usePage().props;

    return (
        <>
            {/* About Us */}
            <section id="about" className="relative z-40 px-4">
                <div
                    className="max-w-7xl mx-auto -mt-16 md:-mt-24 bg-white shadow-2xl flex flex-col lg:flex-row items-stretch overflow-hidden w-[90%] md:w-[95%]">
                    {/* Text Content */}
                    <div className="lg:w-7/12 p-8 md:p-14">
                        <div className="mb-4">
                            <span className="text-sb-orange uppercase tracking-[.2em] font-bold text-sm">About Us</span>
                            <div className="h-1 w-12 bg-sb-red mt-2"></div>
                        </div>
                        <h2
                            className="text-sb-dark text-3xl md:text-4xl font-poppins font-bold uppercase leading-snug mb-6 whitespace-pre-line">
                            {siteSettings.about_title || "OUR 20 YEARS WORKING \n & BUILDING EXPERIENCE."}
                        </h2>
                        <div className="space-y-4 text-gray-600 mb-8">
                            <p className="text-sb-dark font-bold text-lg italic">
                                {siteSettings.about_subtitle || "We are working Since 2014 in Globally. Construction and Development"}
                            </p>
                            <p className="leading-relaxed">
                                {siteSettings.about_description || "From comprehensive renovations and architectural design to property maintenance and restoration, our team ensures every project reflects unparalleled professionalism and precision."}
                            </p>
                        </div>

                        {/* Stats */}
                        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 bg-gray-50 p-6">
                            <div>
                                <span className="block text-sb-red text-2xl font-bold">{siteSettings.about_experience_years || "20+"}</span>
                                <span className="text-sm uppercase tracking-wider font-bold text-sb-dark">Years Exp.</span>
                            </div>
                            <div>
                                <span className="block text-sb-red text-2xl font-bold">{siteSettings.about_projects_count || "400+"}</span>
                                <span className="text-sm uppercase tracking-wider font-bold text-sb-dark">Projects</span>
                            </div>
                            <div>
                                <span className="block text-sb-red text-2xl font-bold">{siteSettings.about_pros_count || "50+"}</span>
                                <span className="text-sm uppercase tracking-wider font-bold text-sb-dark">Skilled Pros</span>
                            </div>
                        </div>
                    </div>

                    <div className="lg:w-5/12 relative min-h-[300px]">
                        <img src={getAssetUrl(siteSettings.about_image, 'assets/steptodown.com688306.webp')} alt="Construction Work"
                            className="w-full h-full object-cover" />
                        <div className="absolute inset-0 bg-sb-red/10"></div>
                    </div>
                </div>
            </section>

            {/* Intro Text */}
            <section className="py-16 md:py-24 bg-white">
                <div className="max-w-7xl mx-auto px-6 text-center">
                    <p className="text-sb-dark text-lg md:text-xl leading-relaxed max-w-4xl mx-auto font-medium">
                        {siteSettings.about_intro_text || "At SafeBuild, we combine over two decades of experience with a commitment to safe, reliable, and community-focused construction across Vancouver Island. From concept to completion, we deliver precise, high-quality results while embracing innovation, collaboration, and respect for the region's diverse communities and Indigenous heritage. Our team is dedicated to building trusted relationships, shaping stronger neighborhoods, and ensuring that every project reflects excellence, integrity, and long-lasting value."}
                    </p>
                </div>
            </section>
        </>
    );
}
