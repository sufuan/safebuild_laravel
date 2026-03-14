import { Head, Link } from '@inertiajs/react';
import Navbar from '@/Components/Navbar';
import Footer from '@/Components/Footer';
import React from 'react';
import { getAssetUrl } from '@/lib/utils';

export default function BlogDetail({ post, recentPosts }) {
    const formatDate = (dateString) => {
        const date = new Date(dateString);
        return {
            day: date.getDate().toString().padStart(2, '0'),
            month: date.toLocaleString('en-US', { month: 'short' }),
            year: date.getFullYear()
        };
    };

    const { day, month, year } = formatDate(post.date || post.created_at);

    return (
        <>
            <Head title={`${post.title} – SafeBuild Canada`} />
            <div className="boxed_wrapper">
                <Navbar />

                {/* ── PAGE HERO ─────────────────────────────────────────── */}
                <section className="relative h-[350px] flex items-center justify-center overflow-hidden">
                    <div className="absolute inset-0 bg-sb-dark/70 z-10"></div>
                    <img src={getAssetUrl(post.image_path, '/assets/blog-v1-1-1.jpg')} alt={post.title}
                        className="absolute inset-0 w-full h-full object-cover" />
                    <div className="relative z-20 text-center px-4 max-w-4xl">
                        <h1 className="text-white text-3xl md:text-5xl font-bold uppercase mb-4 tracking-tight font-poppins leading-tight">
                            {post.title}
                        </h1>
                        <nav className="flex items-center justify-center gap-2 text-sm font-bold uppercase tracking-widest text-white/80">
                            <Link href="/" className="hover:text-sb-orange transition-colors">Home</Link>
                            <span>•</span>
                            <Link href="/blog" className="hover:text-sb-orange transition-colors">Blog</Link>
                            <span>•</span>
                            <span className="text-sb-orange truncate max-w-[200px]">{post.title}</span>
                        </nav>
                    </div>
                </section>

                <section className="py-24 bg-white">
                    <div className="container mx-auto px-6 max-w-7xl">
                        <div className="flex flex-col lg:flex-row gap-16">
                            {/* Main Content */}
                            <div className="lg:w-2/3">
                                <div className="relative mb-10 overflow-hidden shadow-xl rounded-sm">
                                    <img src={getAssetUrl(post.image_path, '/assets/blog-v1-1-1.jpg')} alt={post.title}
                                        className="w-full h-auto object-cover" />
                                    <div className="absolute top-6 left-6 bg-sb-red text-white text-center px-6 py-3 leading-tight shadow-lg">
                                        <span className="block text-3xl font-bold leading-none">{day}</span>
                                        <span className="block text-sm font-bold uppercase tracking-wider">{month}</span>
                                        <span className="block text-sm">{year}</span>
                                    </div>
                                </div>

                                <div className="prose prose-lg max-w-none prose-headings:text-sb-dark prose-headings:font-bold prose-headings:uppercase prose-p:text-gray-600 prose-p:leading-relaxed">
                                    <div className="flex items-center gap-6 text-gray-400 text-sm mb-8 border-b pb-6">
                                        <span className="flex items-center gap-2"><i className="far fa-user text-sb-red"></i> By {post.author || 'Admin'}</span>
                                        <span className="flex items-center gap-2"><i className="far fa-clock text-sb-red"></i> {post.read_time || '5 min read'}</span>
                                        <span className="flex items-center gap-2"><i className="far fa-comments text-sb-red"></i> No Comments</span>
                                    </div>

                                    {/* Excerpt as lead paragraph */}
                                    <p className="text-xl font-medium text-sb-dark mb-10 italic border-l-4 border-sb-red pl-6 py-2">
                                        {post.excerpt}
                                    </p>

                                    {/* Main Content Rendering - supports both plain text and basic HTML */}
                                    <div className="blog-content whitespace-pre-line" dangerouslySetInnerHTML={{ __html: post.content }}></div>
                                </div>

                                {/* Shared Socials Placeholder */}
                                <div className="mt-16 pt-10 border-t flex flex-wrap items-center justify-between gap-6">
                                    <div className="flex gap-4">
                                        <span className="font-bold uppercase tracking-wider text-sm text-sb-dark">Share:</span>
                                        <div className="flex gap-3">
                                            <a href="#" className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center hover:bg-sb-red hover:text-white transition-all"><i className="fab fa-facebook-f"></i></a>
                                            <a href="#" className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center hover:bg-sb-red hover:text-white transition-all"><i className="fab fa-twitter"></i></a>
                                            <a href="#" className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center hover:bg-sb-red hover:text-white transition-all"><i className="fab fa-linkedin-in"></i></a>
                                        </div>
                                    </div>
                                    <Link href="/blog" className="text-sb-red font-bold uppercase tracking-widest text-sm hover:underline">← Back to Blog</Link>
                                </div>
                            </div>

                            {/* Sidebar */}
                            <div className="lg:w-1/3 space-y-12">
                                {/* Search Widget */}
                                <div className="bg-gray-50 p-8 rounded-sm">
                                    <h4 className="text-sb-dark font-bold uppercase tracking-widest mb-6 relative pb-4 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-10 after:h-0.5 after:bg-sb-red">Search</h4>
                                    <div className="relative">
                                        <input type="text" placeholder="Keywords..." className="w-full bg-white border-none py-4 px-6 focus:ring-1 focus:ring-sb-red" />
                                        <button className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-sb-red"><i className="fas fa-search"></i></button>
                                    </div>
                                </div>

                                {/* Recent Posts Widget */}
                                <div className="bg-gray-50 p-8 rounded-sm">
                                    <h4 className="text-sb-dark font-bold uppercase tracking-widest mb-8 relative pb-4 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-10 after:h-0.5 after:bg-sb-red">Recent News</h4>
                                    <div className="space-y-6">
                                        {recentPosts.map((rPost) => (
                                            <div key={rPost.id} className="flex gap-4 items-start group">
                                                <div className="w-20 h-20 flex-shrink-0 overflow-hidden rounded-sm">
                                                    <img src={getAssetUrl(rPost.image_path, '/assets/blog-v1-1-1.jpg')} className="w-full h-full object-cover group-hover:scale-110 transition-transform" />
                                                </div>
                                                <div>
                                                    <span className="text-[10px] uppercase font-bold text-sb-red tracking-tighter">{new Date(rPost.date || rPost.created_at).toLocaleDateString()}</span>
                                                    <h5 className="text-sb-dark font-bold text-sm leading-snug group-hover:text-sb-red transition-colors">
                                                        <Link href={route('blog.show', rPost.id)}>{rPost.title}</Link>
                                                    </h5>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </div>

                                {/* Newsletter Widget */}
                                <div className="bg-sb-dark p-8 rounded-sm text-white">
                                    <h4 className="font-bold uppercase tracking-widest mb-4">Newsletter</h4>
                                    <p className="text-gray-400 text-sm mb-6">Stay updated with our latest news and property insights.</p>
                                    <form className="space-y-4">
                                        <input type="email" placeholder="Email Address" className="w-full bg-white/10 border-none py-4 px-6 text-white focus:ring-1 focus:ring-sb-red" />
                                        <button className="w-full bg-sb-red py-4 font-bold uppercase tracking-widest hover:bg-white hover:text-sb-dark transition-all">Subscribe</button>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* ── CTA STRIP ─────────────────────────────────────────── */}
                <section className="bg-sb-red py-4 text-center">
                    <div className="container mx-auto px-4">
                        <h2 className="text-white font-bold text-sm font-roboto m-0 uppercase tracking-wide">
                            Need professional property management? Contact us today for a free consultation.
                        </h2>
                    </div>
                </section>

                <Footer />
            </div>
        </>
    );
}
