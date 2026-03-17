import { Head, Link } from '@inertiajs/react';
import Navbar from '@/Components/Navbar';
import Footer from '@/Components/Footer';
import React from 'react';
import { getAssetUrl } from '@/lib/utils';

export default function Blog({ posts }) {
    const formatDate = (dateString) => {
        const date = new Date(dateString);
        return {
            day: date.getDate().toString().padStart(2, '0'),
            month: date.toLocaleString('en-US', { month: 'short' }),
            year: date.getFullYear()
        };
    };

    return (
        <>
            <Head title="Blog – SafeBuild Canada" />
            <div className="boxed_wrapper">
                <Navbar />

                {/* ── PAGE HERO ─────────────────────────────────────────── */}
                <section className="relative h-[450px] flex items-center justify-center overflow-hidden">
                    <div className="absolute inset-0 bg-sb-dark/65 z-10"></div>
                    <img src={getAssetUrl('assets/blog-v1-1-1.jpg')} alt="View All News"
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
                        {posts.data.length > 0 ? (
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                                {posts.data.map((post) => {
                                    const { day, month, year } = formatDate(post.date || post.created_at);
                                    return (
                                        <div key={post.id} className="group bg-white shadow-md hover:shadow-xl transition-all duration-300">
                                            <div className="relative overflow-hidden h-[260px]">
                                                <img src={getAssetUrl(post.image_path, 'assets/blog-v1-1-1.jpg')} alt={post.title}
                                                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                                                <div className="absolute top-4 left-4 bg-sb-red text-white text-center px-4 py-2 leading-tight">
                                                    <span className="block text-2xl font-bold leading-none">{day}</span>
                                                    <span className="block text-xs font-bold uppercase tracking-wider">{month}</span>
                                                    <span className="block text-xs">{year}</span>
                                                </div>
                                            </div>
                                            <div className="p-8">
                                                <div className="flex flex-wrap items-center gap-x-3 gap-y-1 text-gray-400 text-xs mb-4">
                                                    <span>No Comments</span>
                                                    <span>{post.author || 'Admin'}</span>
                                                </div>
                                                <h3 className="text-sb-dark text-lg font-bold mb-4 leading-snug font-poppins hover:text-sb-red transition-colors">
                                                    <Link href={route('blog.show', post.id)}>{post.title}</Link>
                                                </h3>
                                                <p className="text-gray-500 text-sm leading-relaxed mb-6 line-clamp-3">{post.excerpt}</p>
                                                <Link href={route('blog.show', post.id)}
                                                    className="inline-flex items-center gap-2 text-sb-red font-bold text-sm uppercase tracking-wider hover:gap-4 transition-all duration-300">
                                                    Read More <i className="fas fa-long-arrow-alt-right"></i>
                                                </Link>
                                            </div>
                                        </div>
                                    );
                                })}
                            </div>
                        ) : (
                            <div className="text-center py-20">
                                <h2 className="text-2xl font-bold text-gray-400">No blog posts found.</h2>
                            </div>
                        )}

                        {/* Pagination */}
                        {posts.links && posts.links.length > 3 && (
                            <div className="flex justify-center gap-3 mt-16">
                                {posts.links.map((link, index) => (
                                    <Link
                                        key={index}
                                        href={link.url}
                                        dangerouslySetInnerHTML={{ __html: link.label }}
                                        className={`w-auto min-w-[48px] h-12 flex items-center justify-center px-4 font-bold transition-colors ${
                                            link.active 
                                                ? 'bg-sb-red text-white' 
                                                : 'bg-gray-100 text-sb-dark hover:bg-sb-red hover:text-white'
                                        } ${!link.url ? 'opacity-50 cursor-not-allowed hidden' : ''}`}
                                    />
                                ))}
                            </div>
                        )}
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
