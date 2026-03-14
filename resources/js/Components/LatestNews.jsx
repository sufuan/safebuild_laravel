import React from 'react';
import { Link } from '@inertiajs/react';
import { getAssetUrl } from '@/lib/utils';

export default function LatestNews({ blogPosts = [] }) {
    return (
        <section className="py-24 bg-gray-50">
            <div className="container mx-auto px-4">
                {/* Section Title */}
                <div className="text-center mb-16 max-w-2xl mx-auto">
                    <p className="text-sb-red font-bold uppercase tracking-wider text-sm mb-2">SafeBuild Canada Insights</p>
                    <h2 className="text-4xl md:text-5xl font-bold text-sb-dark">Latest News</h2>
                </div>

                {/* Blog Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {blogPosts && blogPosts.map((post) => (
                        <div key={post.id} className="group bg-white shadow-md hover:shadow-2xl transition-all duration-300">
                            <div className="relative overflow-hidden h-64">
                                <img src={getAssetUrl(post.image_path, 'assets/blog-v1-1-1.jpg')} alt={post.title}
                                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                                <Link href={route('blog.show', post.id)}
                                    className="absolute inset-0 bg-sb-dark/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                                    <div
                                        className="w-14 h-14 bg-sb-red rounded-full flex items-center justify-center text-white text-xl transform scale-0 group-hover:scale-100 transition-transform duration-300 delay-100">
                                        <i className="fas fa-plus"></i>
                                    </div>
                                </Link>
                            </div>
                            <div className="p-8">
                                <ul className="flex text-sm text-gray-500 gap-6 mb-4 border-b border-gray-100 pb-4">
                                    <li className="flex items-center gap-2"><i className="far fa-calendar-alt text-sb-red"></i>
                                        {new Date(post.date || post.created_at).toLocaleDateString()}</li>
                                    <li className="flex items-center gap-2"><i className="far fa-comments text-sb-red"></i> No
                                        Comments</li>
                                </ul>
                                <h3
                                    className="text-xl font-bold mb-4 text-sb-dark hover:text-sb-red transition-colors leading-snug font-poppins h-14 overflow-hidden">
                                    <Link href={route('blog.show', post.id)}>{post.title}</Link>
                                </h3>
                                <p className="text-gray-500 leading-relaxed mb-6 line-clamp-3 text-sm">{post.excerpt}</p>
                                <Link href={route('blog.show', post.id)}
                                    className="text-sb-dark font-bold hover:text-sb-red uppercase text-xs tracking-widest inline-flex items-center gap-2 transition-colors">
                                    Read More <i className="fas fa-arrow-right text-sm"></i>
                                </Link>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
