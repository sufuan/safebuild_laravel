import { Head, Link } from '@inertiajs/react';
import Navbar from '@/Components/Navbar';
import Footer from '@/Components/Footer';
import React from 'react';

const posts = [
    {
        id: 1,
        img: 'assets/blog-v1-1-1.jpg',
        day: '04', month: 'Sep', year: '2024',
        title: 'Lido Protocol-Staking-Guide-for-Cryptocurrency',
        excerpt: 'Key Features of Lido Finance for Smart Investors. Lido Finance streamlines staking for ETH holders by enabling them to delegate their tokens without the need to lock assets in a contract. With Lido, investors can optimize their staking experience on Ethereum\'s mainnet.',
        href: '/blog/lido-protocol',
    },
    {
        id: 2,
        img: 'assets/blog-v1-2-1.jpg',
        day: '15', month: 'Jun', year: '2023',
        title: 'Models & OEM Solutions | Simul Corporation.',
        excerpt: 'Nullam molestie volutpat justo, ut malesuada leo facilisis quis. Mauris ullamcorper accumsan sem, sodales volutpat tellus semper at. Quisque orci felis, euismod et nibh vitae, fringilla porta dui.',
        href: '/blog/models-oem-solutions',
    },
    {
        id: 3,
        img: 'assets/blog-v1-3-1.jpg',
        day: '15', month: 'Jun', year: '2023',
        title: 'Models & OEM Solutions | Simul Corporation.',
        excerpt: 'Nullam molestie volutpat justo, ut malesuada leo facilisis quis. Mauris ullamcorper accumsan sem, sodales volutpat tellus semper at. Quisque orci felis, euismod et nibh vitae, fringilla porta dui.',
        href: '/blog/models-oem-solutions-2',
    },
    {
        id: 4,
        img: 'assets/blog-v1-1-1.jpg',
        day: '15', month: 'Jun', year: '2023',
        title: 'Models & OEM Solutions | Simul Corporation.',
        excerpt: 'Nullam molestie volutpat justo, ut malesuada leo facilisis quis. Mauris ullamcorper accumsan sem, sodales volutpat tellus semper at. Quisque orci felis, euismod et nibh vitae, fringilla porta dui.',
        href: '/blog/models-oem-solutions-3',
    },
    {
        id: 5,
        img: 'assets/blog-v1-2-1.jpg',
        day: '15', month: 'Jun', year: '2023',
        title: 'Models & OEM Solutions | Simul Corporation.',
        excerpt: 'Nullam molestie volutpat justo, ut malesuada leo facilisis quis. Mauris ullamcorper accumsan sem, sodales volutpat tellus semper at. Quisque orci felis, euismod et nibh vitae, fringilla porta dui.',
        href: '/blog/models-oem-solutions-4',
    },
    {
        id: 6,
        img: 'assets/blog-v1-3-1.jpg',
        day: '15', month: 'Jun', year: '2023',
        title: 'Models & OEM Solutions | Simul Corporation.',
        excerpt: 'Nullam molestie volutpat justo, ut malesuada leo facilisis quis. Mauris ullamcorper accumsan sem, sodales volutpat tellus semper at. Quisque orci felis, euismod et nibh vitae, fringilla porta dui.',
        href: '/blog/models-oem-solutions-5',
    },
    {
        id: 7,
        img: 'assets/blog-v1-1-1.jpg',
        day: '15', month: 'Jun', year: '2023',
        title: 'Models & OEM Solutions | Simul Corporation.',
        excerpt: 'Nullam molestie volutpat justo, ut malesuada leo facilisis quis. Mauris ullamcorper accumsan sem, sodales volutpat tellus semper at. Quisque orci felis, euismod et nibh vitae, fringilla porta dui.',
        href: '/blog/models-oem-solutions-6',
    },
    {
        id: 8,
        img: 'assets/blog-v1-2-1.jpg',
        day: '15', month: 'Jun', year: '2023',
        title: 'Renovation New Solutions | Simul Corporation.',
        excerpt: 'Nullam molestie volutpat justo, ut malesuada leo facilisis quis. Mauris ullamcorper accumsan sem, sodales volutpat tellus semper at. Quisque orci felis, euismod et nibh vitae, fringilla porta dui.',
        href: '/blog/renovation-new-solutions',
    },
    {
        id: 9,
        img: 'assets/blog-v1-3-1.jpg',
        day: '15', month: 'Jun', year: '2023',
        title: 'The Best Way Solutions | Simul Corporation.',
        excerpt: 'Nullam molestie volutpat justo, ut malesuada leo facilisis quis. Mauris ullamcorper accumsan sem, sodales volutpat tellus semper at. Quisque orci felis, euismod et nibh vitae, fringilla porta dui.',
        href: '/blog/best-way-solutions',
    },
    {
        id: 10,
        img: 'assets/blog-v1-1-1.jpg',
        day: '15', month: 'Jun', year: '2023',
        title: 'How to make Solutions | Simul Corporation.',
        excerpt: 'Nullam molestie volutpat justo, ut malesuada leo facilisis quis. Mauris ullamcorper accumsan sem, sodales volutpat tellus semper at. Quisque orci felis, euismod et nibh vitae, fringilla porta dui.',
        href: '/blog/how-to-make-solutions',
    },
];

export default function Blog() {
    return (
        <>
            <Head title="Blog – SafeBuild Canada" />
            <div className="boxed_wrapper">
                <Navbar />

                {/* ── PAGE HERO ─────────────────────────────────────────── */}
                <section className="relative h-[450px] flex items-center justify-center overflow-hidden">
                    <div className="absolute inset-0 bg-sb-dark/65 z-10"></div>
                    <img src="assets/blog-v1-1-1.jpg" alt="View All News"
                        className="absolute inset-0 w-full h-full object-cover" />
                    <div className="relative z-20 text-center px-4">
                        <h1 className="text-white text-4xl md:text-6xl font-bold uppercase mb-4 tracking-tight font-poppins">
                            View All News
                        </h1>
                        <nav className="flex items-center justify-center gap-2 text-sm font-bold uppercase tracking-widest">
                            <Link href="/" className="text-white hover:text-sb-orange transition-colors">Home</Link>
                            <span className="text-sb-orange">•</span>
                            <span className="text-sb-orange">View All News</span>
                        </nav>
                    </div>
                </section>

                {/* ── BLOG POSTS GRID ───────────────────────────────────── */}
                <section className="py-24 bg-white">
                    <div className="container mx-auto px-6 max-w-7xl">
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                            {posts.map((post) => (
                                <div key={post.id} className="group bg-white shadow-md hover:shadow-xl transition-all duration-300">
                                    <div className="relative overflow-hidden h-[260px]">
                                        <img src={post.img} alt={post.title}
                                            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                                        <div className="absolute top-4 left-4 bg-sb-red text-white text-center px-4 py-2 leading-tight">
                                            <span className="block text-2xl font-bold leading-none">{post.day}</span>
                                            <span className="block text-xs font-bold uppercase tracking-wider">{post.month}</span>
                                            <span className="block text-xs">{post.year}</span>
                                        </div>
                                    </div>
                                    <div className="p-8">
                                        <div className="flex flex-wrap items-center gap-x-3 gap-y-1 text-gray-400 text-xs mb-4">
                                            <span>No Comments</span>
                                            <span>info@safebuild.ca</span>
                                        </div>
                                        <h3 className="text-sb-dark text-lg font-bold mb-4 leading-snug font-poppins hover:text-sb-red transition-colors">
                                            <Link href={post.href}>{post.title}</Link>
                                        </h3>
                                        <p className="text-gray-500 text-sm leading-relaxed mb-6">{post.excerpt}</p>
                                        <Link href={post.href}
                                            className="inline-flex items-center gap-2 text-sb-red font-bold text-sm uppercase tracking-wider hover:gap-4 transition-all duration-300">
                                            Read More <i className="fas fa-long-arrow-alt-right"></i>
                                        </Link>
                                    </div>
                                </div>
                            ))}
                        </div>

                        {/* Pagination */}
                        <div className="flex justify-center gap-3 mt-16">
                            <a href="#" className="w-12 h-12 bg-sb-red text-white font-bold flex items-center justify-center hover:bg-sb-dark transition-colors">1</a>
                            <a href="#" className="w-12 h-12 bg-gray-100 text-sb-dark font-bold flex items-center justify-center hover:bg-sb-red hover:text-white transition-colors">2</a>
                            <a href="#" className="w-12 h-12 bg-gray-100 text-sb-dark font-bold flex items-center justify-center hover:bg-sb-red hover:text-white transition-colors">
                                <i className="fas fa-chevron-right text-sm"></i>
                            </a>
                        </div>
                    </div>
                </section>

                {/* ── CTA STRIP ─────────────────────────────────────────── */}
                <section className="bg-sb-red py-4 text-center border-t border-white/10">
                    <div className="container mx-auto px-4">
                        <h2 className="text-white font-bold text-sm font-roboto m-0 uppercase tracking-wide">
                            We would love to hear from you! Let us know your construction management needs and learn more about
                            how we can help you achieve your goals.
                        </h2>
                    </div>
                </section>

                <Footer />
            </div>
        </>
    );
}
