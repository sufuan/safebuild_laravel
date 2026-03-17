import { Link, usePage } from '@inertiajs/react';
import { getAssetUrl } from '@/lib/utils';

export default function Navbar() {
    const { siteSettings } = usePage().props;
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const [servicesSubmenuOpen, setServicesSubmenuOpen] = useState(false);
    const [pagesSubmenuOpen, setPagesSubmenuOpen] = useState(false);
    const [blogSubmenuOpen, setBlogSubmenuOpen] = useState(false);

    return (
        <>
            {/* ── TOP BAR ─────────────────────────────────────────────── */}
            <div className="flex items-stretch w-full overflow-hidden bg-white">
                <div
                    className="bg-black text-white py-2 md:py-4 px-4 md:px-8 relative z-20 flex items-center top-bar-black-bg"
                    style={{ width: '70%', clipPath: 'polygon(0 0, 92% 0, 100% 100%, 0% 100%)' }}
                >
                    <Link href="/" className="inline-block w-full">
                        <img
                            src={getAssetUrl('assets/SafeBuild-Logo-Ai-file-1.png')}
                            alt="SafeBuild Logo"
                            className="w-full max-w-[180px] md:max-w-[280px]"
                        />
                    </Link>
                </div>
                <div
                    className="bg-sb-orange text-white py-2 md:py-4 pr-4 md:pr-8 relative z-10 flex-1 flex items-center justify-end"
                    style={{
                        clipPath: 'polygon(8% 0, 100% 0, 100% 100%, 0% 100%)',
                        marginLeft: '-15%', // increased overlap for mobile
                        paddingLeft: '60px', // reduced padding for mobile
                    }}
                >
                    {/* Additional responsive styles applied via a class to override inline styles on md and up screens */}
                    <style>{`
                        @media (min-width: 768px) {
                            .top-bar-orange-bg {
                                margin-left: -10% !important;
                                padding-left: 120px !important;
                            }
                            .top-bar-black-bg {
                                width: 45% !important;
                            }
                        }
                    `}</style>
                    <div className="flex flex-col md:flex-row items-end md:items-center gap-2 md:gap-8 w-full justify-end pl-4 md:pl-12 top-bar-orange-bg">
                        <div className="flex items-center gap-3">
                            {/* Facebook */}
                            <a href={siteSettings.facebook_url || "#"} target="_blank" rel="noopener noreferrer" className="w-8 h-8 flex items-center justify-center bg-white rounded-full text-sb-orange hover:-translate-y-1 transition-transform duration-300">
                                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 512 512">
                                    <path d="M504 256C504 119 393 8 256 8S8 119 8 256c0 123.78 90.69 226.38 209.25 245V327.69h-63V256h63v-54.64c0-62.15 37-96.48 93.67-96.48 27.14 0 55.52 4.84 55.52 4.84v61h-31.28c-30.8 0-40.41 19.12-40.41 38.73V256h68.78l-11 71.69h-57.78V501C413.31 482.38 504 379.78 504 256z" />
                                </svg>
                            </a>
                            {/* Twitter */}
                            <a href={siteSettings.twitter_url || "#"} target="_blank" rel="noopener noreferrer" className="w-8 h-8 flex items-center justify-center bg-white rounded-full text-sb-orange hover:-translate-y-1 transition-transform duration-300">
                                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 512 512">
                                    <path d="M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z" />
                                </svg>
                            </a>
                            {/* LinkedIn */}
                            <a href={siteSettings.linkedin_url || "#"} target="_blank" rel="noopener noreferrer" className="w-8 h-8 flex items-center justify-center bg-white rounded-full text-sb-orange hover:-translate-y-1 transition-transform duration-300">
                                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 448 512">
                                    <path d="M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z" />
                                </svg>
                            </a>
                        </div>
                        <div className="hidden md:flex items-center gap-6 text-right ml-4">
                            <div className="flex items-center gap-2">
                                <svg className="w-8 h-8 fill-white flex-shrink-0" viewBox="0 0 512 512">
                                    <path d="M497.39 361.8l-112-48a24 24 0 0 0-28 6.9l-49.6 60.6A370.66 370.66 0 0 1 130.6 204.11l60.6-49.6a23.94 23.94 0 0 0 6.9-28l-48-112A24.16 24.16 0 0 0 122.6.61l-104 24A24 24 0 0 0 0 48c0 256.5 207.9 464 464 464a24 24 0 0 0 23.4-18.6l24-104a24.29 24.29 0 0 0-14.01-27.6z" />
                                </svg>
                                <div>
                                    <p className="text-white text-xs leading-tight opacity-90">Contact Us</p>
                                    <p className="text-black font-bold text-sm leading-tight">{siteSettings.contact_phone || '+1 (250) 886-0059'}</p>
                                </div>
                            </div>
                            <div className="flex items-center gap-2">
                                <svg className="w-8 h-8 fill-white flex-shrink-0" viewBox="0 0 384 512">
                                    <path d="M172.268 501.67C26.97 291.031 0 269.413 0 192 0 85.961 85.961 0 192 0s192 85.961 192 192c0 77.413-26.97 99.031-172.268 309.67-9.535 13.774-29.93 13.773-39.464 0zM192 272c44.183 0 80-35.817 80-80s-35.817-80-80-80-80 35.817-80 80 35.817 80 80 80z" />
                                </svg>
                                <div>
                                    <p className="text-white text-xs leading-tight opacity-90">Office Address</p>
                                    <p className="text-black font-bold text-sm leading-tight">3448 Karger Terrace, Victoria, BC ,V9C 3K5</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* ── STICKY NAVBAR ───────────────────────────────────────── */}
            <nav id="main-navbar" className="z-[999] bg-sb-red font-poppins transition-all duration-300 relative">
                <div className="absolute top-0 left-0 w-full h-1 bg-black -translate-y-full opacity-50"></div>
                <div className="flex items-center px-4 md:px-8 h-[70px]">
                    <div className="hidden md:flex items-center flex-1">
                        <ul className="flex items-center gap-0">
                            <li>
                                <Link href="/" className="block px-4 text-white text-sm font-bold uppercase leading-[70px] hover:text-sb-navy transition-colors">Home</Link>
                            </li>
                            <li>
                                <Link href="/about-us" className="block px-4 text-white text-sm font-bold uppercase leading-[70px] hover:text-sb-navy transition-colors">About us</Link>
                            </li>
                            <li className="relative group">
                                <Link href="/our-services.html" className="flex items-center gap-1 px-4 text-white text-sm font-bold uppercase leading-[70px] hover:text-sb-navy transition-colors">
                                    Services
                                    <svg className="w-3 h-3 fill-current" viewBox="0 0 448 512">
                                        <path d="M207.029 381.476L12.686 187.132c-9.373-9.373-9.373-24.569 0-33.941l22.667-22.667c9.357-9.357 24.522-9.375 33.901-.04L224 284.505l154.745-154.021c9.379-9.335 24.544-9.317 33.901.04l22.667 22.667c9.373 9.373 9.373 24.569 0 33.941L240.971 381.476c-9.373 9.372-24.569 9.372-33.942 0z" />
                                    </svg>
                                </Link>
                                <ul className="invisible opacity-0 translate-y-2 group-hover:visible group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-200 absolute top-full left-0 min-w-[260px] bg-white rounded-md shadow-lg py-2 z-50">
                                    <li><Link href="/our-services" className="block px-5 py-2 text-sm font-bold uppercase text-gray-800 hover:bg-gray-100 hover:text-sb-red transition-colors">Our Services</Link></li>
                                    <li><Link href="/property-services-design" className="block px-5 py-2 text-sm font-bold uppercase text-gray-800 hover:bg-gray-100 hover:text-sb-red transition-colors">Property Services &amp; Design</Link></li>
                                    <li><Link href="/renovation-remodeling" className="block px-5 py-2 text-sm font-bold uppercase text-gray-800 hover:bg-gray-100 hover:text-sb-red transition-colors">Renovation &amp; Remodeling</Link></li>
                                    <li><Link href="/architectural-design" className="block px-5 py-2 text-sm font-bold uppercase text-gray-800 hover:bg-gray-100 hover:text-sb-red transition-colors">Architectural Design</Link></li>
                                    <li><Link href="/excavation-site-prep" className="block px-5 py-2 text-sm font-bold uppercase text-gray-800 hover:bg-gray-100 hover:text-sb-red transition-colors">Excavation &amp; Site Prep</Link></li>
                                    <li><Link href="/custom-carpentry" className="block px-5 py-2 text-sm font-bold uppercase text-gray-800 hover:bg-gray-100 hover:text-sb-red transition-colors">Custom Carpentry &amp; Cabinetry</Link></li>
                                </ul>
                            </li>
                            <li className="relative group">
                                <Link href="/our-projects" className="flex items-center gap-1 px-4 text-white text-sm font-bold uppercase leading-[70px] hover:text-sb-navy transition-colors">
                                    Pages
                                    <svg className="w-3 h-3 fill-current" viewBox="0 0 448 512">
                                        <path d="M207.029 381.476L12.686 187.132c-9.373-9.373-9.373-24.569 0-33.941l22.667-22.667c9.357-9.357 24.522-9.375 33.901-.04L224 284.505l154.745-154.021c9.379-9.335 24.544-9.317 33.901.04l22.667 22.667c9.373 9.373 9.373 24.569 0 33.941L240.971 381.476c-9.373 9.372-24.569 9.372-33.942 0z" />
                                    </svg>
                                </Link>
                                <ul className="invisible opacity-0 translate-y-2 group-hover:visible group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-200 absolute top-full left-0 min-w-[220px] bg-white rounded-md shadow-lg py-2 z-50">
                                    <li><Link href="/our-team" className="block px-5 py-2 text-sm font-bold uppercase text-gray-800 hover:bg-gray-100 hover:text-sb-red transition-colors">Our Team</Link></li>
                                    <li><Link href="/testimonials" className="block px-5 py-2 text-sm font-bold uppercase text-gray-800 hover:bg-gray-100 hover:text-sb-red transition-colors">Testimonials</Link></li>
                                    <li><Link href="/faq" className="block px-5 py-2 text-sm font-bold uppercase text-gray-800 hover:bg-gray-100 hover:text-sb-red transition-colors">FAQ</Link></li>
                                    <li><Link href="/our-projects" className="block px-5 py-2 text-sm font-bold uppercase text-gray-800 hover:bg-gray-100 hover:text-sb-red transition-colors">Our All Projects</Link></li>
                                </ul>
                            </li>
                            <li>
                                <Link href="/blog" className="block px-4 text-white text-sm font-bold uppercase leading-[70px] hover:text-sb-navy transition-colors">Blog</Link>
                            </li>
                            <li>
                                <Link href="/careers" className="block px-4 text-white text-sm font-bold uppercase leading-[70px] hover:text-sb-navy transition-colors">Careers</Link>
                            </li>
                            <li>
                                <Link href="/contact-us" className="block px-4 text-white text-sm font-bold uppercase leading-[70px] hover:text-sb-navy transition-colors">Contact Us</Link>
                            </li>
                        </ul>
                    </div>
                    <button
                        id="mobile-menu-btn"
                        className="md:hidden text-white p-2"
                        aria-label="Menu Toggle"
                        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                    >
                        <svg className="w-7 h-7" fill="currentColor" viewBox="0 0 1000 1000">
                            <path d="M104 333H896C929 333 958 304 958 271S929 208 896 208H104C71 208 42 237 42 271S71 333 104 333ZM104 583H896C929 583 958 554 958 521S929 458 896 458H104C71 458 42 487 42 521S71 583 104 583ZM104 833H896C929 833 958 804 958 771S929 708 896 708H104C71 708 42 737 42 771S71 833 104 833Z" />
                        </svg>
                    </button>
                    <button id="search-toggle" className="text-white ml-auto md:ml-4 p-2 hover:opacity-80 transition-opacity" aria-label="Search">
                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 512 512">
                            <path d="M505 442.7L405.3 343c-4.5-4.5-10.6-7-17-7H372c27.6-35.3 44-79.7 44-128C416 93.1 322.9 0 208 0S0 93.1 0 208s93.1 208 208 208c48.3 0 92.7-16.4 128-44v16.3c0 6.4 2.5 12.5 7 17l99.7 99.7c9.4 9.4 24.6 9.4 33.9 0l28.3-28.3c9.4-9.4 9.4-24.6.1-34zM208 336c-70.7 0-128-57.2-128-128 0-70.7 57.2-128 128-128 70.7 0 128 57.2 128 128 0 70.7-57.2 128-128 128z" />
                        </svg>
                    </button>
                    <div className="hidden md:flex items-center ml-4">
                        <a href="#" className="bg-sb-dark text-white font-poppins font-semibold text-[15px] leading-6 px-11 py-5 rounded-[40px] hover:bg-black transition-colors">Request a Quote</a>
                    </div>
                </div>
                {/* Mobile Menu */}
                {mobileMenuOpen && (
                    <div id="mobile-menu" className="md:hidden bg-sb-red border-t border-white/20 px-4 pb-4">
                        <ul className="space-y-0">
                            <li><Link href="/" className="block py-3 text-white text-sm font-bold uppercase border-b border-white/10">Home</Link></li>
                            <li><Link href="/about-us" className="block py-3 text-white text-sm font-bold uppercase border-b border-white/10">About us</Link></li>
                            <li className="border-b border-white/10">
                                <button
                                    onClick={() => setServicesSubmenuOpen(!servicesSubmenuOpen)}
                                    className="flex items-center justify-between w-full py-3 text-white text-sm font-bold uppercase"
                                >
                                    Services
                                    <svg className={`w-3 h-3 fill-current transition-transform duration-200 ${servicesSubmenuOpen ? 'rotate-180' : ''}`} viewBox="0 0 448 512">
                                        <path d="M207.029 381.476L12.686 187.132c-9.373-9.373-9.373-24.569 0-33.941l22.667-22.667c9.357-9.357 24.522-9.375 33.901-.04L224 284.505l154.745-154.021c9.379-9.335 24.544-9.317 33.901.04l22.667 22.667c9.373 9.373 9.373 24.569 0 33.941L240.971 381.476c-9.373 9.372-24.569 9.372-33.942 0z" />
                                    </svg>
                                </button>
                                {servicesSubmenuOpen && (
                                    <ul className="pl-4 pb-2 space-y-1">
                                        <li><Link href="/our-services" className="block py-2 text-white/80 text-sm font-semibold hover:text-white">Our Services</Link></li>
                                        <li><Link href="/property-services-design" className="block py-2 text-white/80 text-sm font-semibold hover:text-white">Property Services &amp; Design</Link></li>
                                        <li><Link href="/renovation-remodeling" className="block py-2 text-white/80 text-sm font-semibold hover:text-white">Renovation &amp; Remodeling</Link></li>
                                        <li><Link href="/architectural-design" className="block py-2 text-white/80 text-sm font-semibold hover:text-white">Architectural Design</Link></li>
                                        <li><Link href="/excavation-site-prep" className="block py-2 text-white/80 text-sm font-semibold hover:text-white">Excavation &amp; Site Prep</Link></li>
                                        <li><Link href="/custom-carpentry" className="block py-2 text-white/80 text-sm font-semibold hover:text-white">Custom Carpentry &amp; Cabinetry</Link></li>
                                    </ul>
                                )}
                            </li>
                            <li className="border-b border-white/10">
                                <button
                                    onClick={() => setPagesSubmenuOpen(!pagesSubmenuOpen)}
                                    className="flex items-center justify-between w-full py-3 text-white text-sm font-bold uppercase"
                                >
                                    Pages
                                    <svg className={`w-3 h-3 fill-current transition-transform duration-200 ${pagesSubmenuOpen ? 'rotate-180' : ''}`} viewBox="0 0 448 512">
                                        <path d="M207.029 381.476L12.686 187.132c-9.373-9.373-9.373-24.569 0-33.941l22.667-22.667c9.357-9.357 24.522-9.375 33.901-.04L224 284.505l154.745-154.021c9.379-9.335 24.544-9.317 33.901.04l22.667 22.667c9.373 9.373 9.373 24.569 0 33.941L240.971 381.476c-9.373 9.372-24.569 9.372-33.942 0z" />
                                    </svg>
                                </button>
                                {pagesSubmenuOpen && (
                                    <ul className="pl-4 pb-2 space-y-1">
                                        <li><Link href="/our-team" className="block py-2 text-white/80 text-sm font-semibold hover:text-white">Our Team</Link></li>
                                        <li><Link href="/testimonials" className="block py-2 text-white/80 text-sm font-semibold hover:text-white">Testimonials</Link></li>
                                        <li><Link href="/faq" className="block py-2 text-white/80 text-sm font-semibold hover:text-white">FAQ</Link></li>
                                        <li><Link href="/our-projects" className="block py-2 text-white/80 text-sm font-semibold hover:text-white">Our All Projects</Link></li>
                                    </ul>
                                )}
                            </li>
                            <li><Link href="/blog" className="block py-3 text-white text-sm font-bold uppercase border-b border-white/10">Blog</Link></li>
                            <li><Link href="/careers" className="block py-3 text-white text-sm font-bold uppercase border-b border-white/10">Careers</Link></li>
                            <li><Link href="/contact-us" className="block py-3 text-white text-sm font-bold uppercase">Contact Us</Link></li>
                        </ul>
                    </div>
                )}
            </nav>
        </>
    );
}
