import { Link, usePage } from '@inertiajs/react';
import { getAssetUrl } from '@/lib/utils';

const instaImages = [
    'project-v1-5-1-1.jpg',
    'project-v1-4-1-1.jpg',
    'project-v1-3-1-1.jpg',
    'project-v1-2-1-1.jpg',
    'project-v1-1-2.jpg',
    'project-v1-5-1-1.jpg',
];

export default function Footer() {
    const { siteSettings } = usePage().props;

    return (
        <>
            {/* ── CALL TO ACTION ────────────────────────────────────────── */}
            <section className="bg-sb-red py-[15px] text-center">
                <div className="container mx-auto px-4">
                    <h2 className="text-white font-bold text-[15px] m-0 uppercase tracking-wide">
                        We would love to hear from you! Let us know your construction management needs and learn more about
                        how we can help you achieve your goals.
                    </h2>
                </div>
            </section>

            {/* ── FOOTER ────────────────────────────────────────────────── */}
            <footer className="bg-[#11161e] pt-[90px] pb-[50px] font-roboto">
                <div className="container mx-auto px-4">
                    <div className="flex flex-col lg:flex-row flex-wrap">

                        {/* Column 1: Logo & Social (37%) */}
                        <div className="w-full lg:w-[37%] pr-4 mb-8 lg:mb-0">
                            <div className="mt-[20px] mb-[20px]">
                                <Link href="/" className="block">
                                    <img
                                        src={getAssetUrl('assets/SafeBuild-Logo-Ai-file.png')}
                                        alt="Logo"
                                        className="max-w-full h-auto brightness-0 invert opacity-100"
                                    />
                                </Link>
                            </div>
                            <div className="text-[#cecece] text-[14px] leading-[28px] mb-[40px]">
                                {siteSettings.footer_about || "SafeBuild is a premier construction management company dedicated to delivering high-quality residential and commercial projects with safety and precision."}
                            </div>
                            <ul className="flex">
                                <li className="mr-[15px]">
                                    <a href={siteSettings.facebook_url || "#"} target="_blank" rel="noopener noreferrer" className="block w-[35px] h-[35px] bg-[#fbfbfd] rounded-full text-[#11161e] text-[20px] leading-[35px] text-center transition-all duration-200 hover:bg-[#e84900] hover:text-white">
                                        <i className="fab fa-facebook-f"></i>
                                    </a>
                                </li>
                                <li className="mr-[15px]">
                                    <a href={siteSettings.twitter_url || "#"} target="_blank" rel="noopener noreferrer" className="block w-[35px] h-[35px] bg-[#fbfbfd] rounded-full text-[#11161e] text-[20px] leading-[35px] text-center transition-all duration-200 hover:bg-[#e84900] hover:text-white">
                                        <i className="fab fa-twitter"></i>
                                    </a>
                                </li>
                                <li className="mr-[15px]">
                                    <a href={siteSettings.linkedin_url || "#"} target="_blank" rel="noopener noreferrer" className="block w-[35px] h-[35px] bg-[#fbfbfd] rounded-full text-[#11161e] text-[20px] leading-[35px] text-center transition-all duration-200 hover:bg-[#e84900] hover:text-white">
                                        <i className="fab fa-linkedin-in"></i>
                                    </a>
                                </li>
                            </ul>
                        </div>

                        {/* Column 2: About Us (15%) */}
                        <div className="w-full lg:w-[15%] mb-8 lg:mb-0">
                            <div className="mb-[29px] -mt-[4px]">
                                <h3 className="text-white text-[18px] font-bold uppercase leading-[1.2em]">About Us</h3>
                            </div>
                            <ul className="space-y-[16px]">
                                <li>
                                    <Link href="/our-projects" className="text-[#cecece] text-[14px] font-normal leading-[22px] transition-all duration-500 hover:text-white block">
                                        <i className="fa fa-angle-right pr-[8px]"></i>Our Project
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/about-us" className="text-[#cecece] text-[14px] font-normal leading-[22px] transition-all duration-500 hover:text-white block">
                                        <i className="fa fa-angle-right pr-[8px]"></i>About us
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/our-services" className="text-[#cecece] text-[14px] font-normal leading-[22px] transition-all duration-500 hover:text-white block">
                                        <i className="fa fa-angle-right pr-[8px]"></i>Our Services
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/contact-us" className="text-[#cecece] text-[14px] font-normal leading-[22px] transition-all duration-500 hover:text-white block">
                                        <i className="fa fa-angle-right pr-[8px]"></i>Contact
                                    </Link>
                                </li>
                            </ul>
                        </div>

                        {/* Column 3: Support (15%) */}
                        <div className="w-full lg:w-[15%] mb-8 lg:mb-0">
                            <div className="mb-[29px] -mt-[4px]">
                                <h3 className="text-white text-[18px] font-bold uppercase leading-[1.2em]">Support</h3>
                            </div>
                            <ul className="space-y-[16px]">
                                <li>
                                    <Link href="/our-services" className="text-[#cecece] text-[14px] font-normal leading-[22px] transition-all duration-500 hover:text-white block">
                                        <i className="fa fa-angle-right pr-[8px]"></i>View All Services
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/property-services-design" className="text-[#cecece] text-[14px] font-normal leading-[22px] transition-all duration-500 hover:text-white block">
                                        <i className="fa fa-angle-right pr-[8px]"></i>Services Details
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/our-projects" className="text-[#cecece] text-[14px] font-normal leading-[22px] transition-all duration-500 hover:text-white block">
                                        <i className="fa fa-angle-right pr-[8px]"></i>Our Project
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/our-projects" className="text-[#cecece] text-[14px] font-normal leading-[22px] transition-all duration-500 hover:text-white block">
                                        <i className="fa fa-angle-right pr-[8px]"></i>Project Details
                                    </Link>
                                </li>
                            </ul>
                        </div>

                        {/* Column 4: Quick Links (15%) */}
                        <div className="w-full lg:w-[15%] mb-8 lg:mb-0">
                            <div className="mb-[29px] -mt-[4px]">
                                <h3 className="text-white text-[18px] font-bold uppercase leading-[1.2em]">Quick Links</h3>
                            </div>
                            <ul className="space-y-[16px]">
                                <li>
                                    <Link href="/our-team" className="text-[#cecece] text-[14px] font-normal leading-[22px] transition-all duration-500 hover:text-white block">
                                        <i className="fa fa-angle-right pr-[8px]"></i>Team Details
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/testimonials" className="text-[#cecece] text-[14px] font-normal leading-[22px] transition-all duration-500 hover:text-white block">
                                        <i className="fa fa-angle-right pr-[8px]"></i>Testimonials
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/faq" className="text-[#cecece] text-[14px] font-normal leading-[22px] transition-all duration-500 hover:text-white block">
                                        <i className="fa fa-angle-right pr-[8px]"></i>Faq
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/careers" className="text-[#cecece] text-[14px] font-normal leading-[22px] transition-all duration-500 hover:text-white block">
                                        <i className="fa fa-angle-right pr-[8px]"></i>Careers
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/blog" className="text-[#cecece] text-[14px] font-normal leading-[22px] transition-all duration-500 hover:text-white block">
                                        <i className="fa fa-angle-right pr-[8px]"></i>View All News
                                    </Link>
                                </li>
                            </ul>
                        </div>

                        {/* Column 5: Instagram (18%) */}
                        <div className="w-full lg:w-[18%]">
                            <div className="mb-[29px] -mt-[4px]">
                                <h3 className="text-white text-[18px] font-bold uppercase leading-[1.2em]">Instagram</h3>
                            </div>
                            <div className="flex flex-wrap -mx-[2px]">
                                {instaImages.map((img, i) => (
                                    <div key={i} className="m-[2px] w-[82px] h-[76px] relative group overflow-hidden">
                                        <img
                                            src={getAssetUrl(`assets/${img}`)}
                                            alt="Insta"
                                            className="w-full h-full object-cover rounded-[3px]"
                                        />
                                        <div className="absolute inset-0 bg-black/80 opacity-0 group-hover:opacity-100 transition-all duration-300 flex items-center justify-center scale-0 group-hover:scale-100">
                                            <a href="#" className="text-white">
                                                <i className="fa fa-search-plus"></i>
                                            </a>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                    </div>
                </div>
            </footer>
        </>
    );
}
