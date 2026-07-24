import React, { useState } from 'react';
import SEOHead from '@/Components/SEOHead';
import { Link } from '@inertiajs/react';
import { getAssetUrl } from '@/lib/utils';
import Navbar from '@/Components/Navbar';
import Footer from '@/Components/Footer';

export default function ProjectDetail({ project, relatedProjects = [] }) {
    const [lightboxImg, setLightboxImg] = useState(null);
    const gallery = project.gallery_images || [];

    const projectImage = project.image_path
        ? `https://safebuild.ca/${project.image_path.replace(/^\//, '')}`
        : 'https://safebuild.ca/assets/og-image.jpg';

    const projectSchema = {
        '@context': 'https://schema.org',
        '@type': 'WebPage',
        '@id': `https://safebuild.ca/our-projects/${project.id}#webpage`,
        name: `${project.title} | SafeBuild Canada`,
        description: project.description || `View the ${project.title} project by SafeBuild Canada in Victoria BC.`,
        url: `https://safebuild.ca/our-projects/${project.id}`,
        image: projectImage,
        isPartOf: { '@id': 'https://safebuild.ca/#website' },
        breadcrumb: {
            '@type': 'BreadcrumbList',
            itemListElement: [
                { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://safebuild.ca' },
                { '@type': 'ListItem', position: 2, name: 'Our Projects', item: 'https://safebuild.ca/our-projects' },
                { '@type': 'ListItem', position: 3, name: project.title, item: `https://safebuild.ca/our-projects/${project.id}` }
            ]
        }
    };

    return (
        <>
            <SEOHead
                title={`${project.title} – Project Portfolio`}
                description={project.description || `Explore the ${project.title} project by SafeBuild Canada in Victoria BC. ${project.category ? project.category + ' project' : 'Construction & renovation'} by Victoria\'s trusted general contractor.`}
                canonical={`https://safebuild.ca/our-projects/${project.id}`}
                ogImage={projectImage}
                schema={projectSchema}
            />
            <div className="boxed_wrapper">
                <Navbar />

                {/* ── PAGE HERO ─────────────────────────────────────────── */}
                <section className="relative h-[420px] flex items-center justify-center overflow-hidden">
                    <div className="absolute inset-0 bg-sb-dark/70 z-10"></div>
                    <img src={getAssetUrl(project.image_path)} alt={project.title}
                        className="absolute inset-0 w-full h-full object-cover" />
                    <div className="relative z-20 text-center px-4">
                        <span className="inline-block bg-sb-red text-white text-xs font-bold uppercase tracking-widest px-4 py-1.5 rounded-full mb-4">
                            {project.category}
                        </span>
                        <h1 className="text-white text-4xl md:text-5xl font-bold uppercase mb-4 tracking-tight font-poppins">
                            {project.title}
                        </h1>
                        <nav className="flex items-center justify-center gap-2 text-sm font-bold uppercase tracking-widest">
                            <Link href="/" className="text-white hover:text-sb-orange transition-colors">Home</Link>
                            <span className="text-sb-orange">•</span>
                            <Link href="/our-projects" className="text-white hover:text-sb-orange transition-colors">Projects</Link>
                            <span className="text-sb-orange">•</span>
                            <span className="text-sb-orange">{project.title}</span>
                        </nav>
                    </div>
                </section>

                {/* ── PROJECT DETAIL ────────────────────────────────────── */}
                <section className="py-20 bg-white">
                    <div className="container mx-auto px-6 max-w-6xl">
                        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">

                            {/* Main content */}
                            <div className="lg:col-span-2 space-y-10">
                                {/* Cover image */}
                                <div className="overflow-hidden rounded-2xl shadow-xl cursor-pointer group" onClick={() => setLightboxImg(getAssetUrl(project.image_path))}>
                                    <img src={getAssetUrl(project.image_path)} alt={project.title}
                                        className="w-full h-[400px] object-cover group-hover:scale-105 transition-transform duration-700" />
                                </div>

                                {/* Description */}
                                {project.description && (
                                    <div>
                                        <h2 className="text-2xl font-bold text-sb-dark uppercase font-poppins mb-4 flex items-center gap-3">
                                            <span className="w-8 h-1 bg-sb-red inline-block"></span>
                                            Project Overview
                                        </h2>
                                        <p className="text-gray-600 leading-relaxed text-lg whitespace-pre-line">{project.description}</p>
                                    </div>
                                )}

                                {/* Gallery */}
                                {gallery.length > 0 && (
                                    <div>
                                        <h2 className="text-2xl font-bold text-sb-dark uppercase font-poppins mb-6 flex items-center gap-3">
                                            <span className="w-8 h-1 bg-sb-red inline-block"></span>
                                            Project Gallery
                                        </h2>
                                        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                                            {gallery.map((img, idx) => (
                                                <div key={idx}
                                                    className="overflow-hidden rounded-xl shadow-md cursor-pointer group h-52"
                                                    onClick={() => setLightboxImg(getAssetUrl(img))}>
                                                    <img src={getAssetUrl(img)} alt={`Gallery image ${idx + 1}`}
                                                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                )}
                            </div>

                            {/* Sidebar */}
                            <div className="space-y-8">
                                {/* Project Status — highlighted hero badge */}
                                {project.project_status === 'complete' ? (
                                    <div className="rounded-2xl overflow-hidden shadow-sm border border-emerald-200">
                                        <div className="bg-emerald-500 px-6 py-4 flex items-center gap-3">
                                            <div className="w-10 h-10 rounded-xl bg-white/20 flex items-center justify-center shrink-0">
                                                <svg className="w-5 h-5 fill-white" viewBox="0 0 20 20"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 00-1.414 0L8 12.586 4.707 9.293a1 1 0 00-1.414 1.414l4 4a1 1 0 001.414 0l8-8a1 1 0 000-1.414z" clipRule="evenodd"/></svg>
                                            </div>
                                            <div>
                                                <p className="text-white font-extrabold text-base uppercase tracking-wide">Completed</p>
                                                <p className="text-emerald-100 text-xs font-medium">This project has been successfully delivered.</p>
                                            </div>
                                        </div>
                                    </div>
                                ) : (
                                    <div className="rounded-2xl overflow-hidden shadow-sm border border-blue-200">
                                        <div className="bg-blue-500 px-6 py-4 flex items-center gap-3">
                                            <div className="w-10 h-10 rounded-xl bg-white/20 flex items-center justify-center shrink-0">
                                                <span className="w-3.5 h-3.5 rounded-full bg-white animate-pulse inline-block"></span>
                                            </div>
                                            <div>
                                                <p className="text-white font-extrabold text-base uppercase tracking-wide">In Progress</p>
                                                <p className="text-blue-100 text-xs font-medium">This project is currently underway.</p>
                                            </div>
                                        </div>
                                    </div>
                                )}

                                {/* Project Info */}
                                <div className="bg-gray-50 rounded-2xl p-8 border border-gray-100 shadow-sm">
                                    <h3 className="text-lg font-black text-sb-dark uppercase tracking-wider mb-6">Project Info</h3>
                                    <ul className="space-y-4">
                                        <li className="flex items-start gap-3 border-b border-gray-200 pb-4">
                                            <i className="flaticon-architect text-sb-red text-xl mt-0.5"></i>
                                            <div>
                                                <span className="text-xs uppercase font-bold text-gray-400 tracking-wider block">Project Name</span>
                                                <span className="font-bold text-sb-dark">{project.title}</span>
                                            </div>
                                        </li>
                                        <li className="flex items-start gap-3 border-b border-gray-200 pb-4">
                                            <i className="flaticon-skyscrapers text-sb-red text-xl mt-0.5"></i>
                                            <div>
                                                <span className="text-xs uppercase font-bold text-gray-400 tracking-wider block">Category</span>
                                                <span className="font-bold text-sb-dark capitalize">{project.category}</span>
                                            </div>
                                        </li>
                                        {gallery.length > 0 && (
                                            <li className="flex items-start gap-3">
                                                <i className="flaticon-measure text-sb-red text-xl mt-0.5"></i>
                                                <div>
                                                    <span className="text-xs uppercase font-bold text-gray-400 tracking-wider block">Gallery Images</span>
                                                    <span className="font-bold text-sb-dark">{gallery.length} Photos</span>
                                                </div>
                                            </li>
                                        )}
                                    </ul>
                                </div>

                                {/* CTA */}
                                <div className="bg-sb-dark rounded-2xl p-8 text-center">
                                    <h3 className="text-white font-black text-xl uppercase mb-3">Have a Similar Project?</h3>
                                    <p className="text-gray-400 text-sm mb-6 leading-relaxed">Let us bring your vision to life with the same quality and expertise.</p>
                                    <Link href="/contact-us"
                                        className="inline-block bg-sb-red text-white font-bold px-8 py-3 rounded-full hover:bg-white hover:text-sb-dark transition-all duration-300 uppercase text-sm tracking-wider">
                                        Get a Free Quote
                                    </Link>
                                </div>

                                {/* Back */}
                                <Link href="/our-projects"
                                    className="flex items-center gap-2 text-sb-red font-bold hover:text-sb-dark transition-colors">
                                    <i className="flaticon-left-arrow text-sm"></i> Back to All Projects
                                </Link>
                            </div>
                        </div>
                    </div>
                </section>

                {/* ── RELATED PROJECTS ──────────────────────────────────── */}
                {relatedProjects.length > 0 && (
                    <section className="py-20 bg-gray-50">
                        <div className="container mx-auto px-6 max-w-6xl">
                            <div className="text-center mb-12">
                                <span className="text-sb-red uppercase tracking-[.3em] font-bold text-sm block mb-2">More Projects</span>
                                <div className="h-1 w-12 bg-sb-red mx-auto mb-4"></div>
                                <h2 className="text-sb-dark text-3xl md:text-4xl font-bold uppercase font-poppins">
                                    Related <span className="text-sb-red">Projects</span>
                                </h2>
                            </div>
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                                {relatedProjects.map(p => (
                                    <Link key={p.id} href={`/our-projects/${p.id}`}
                                        className="group relative overflow-hidden shadow-lg h-[260px] block rounded-xl">
                                        <img src={getAssetUrl(p.image_path)} alt={p.title}
                                            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                                        <div className="absolute inset-0 bg-gradient-to-t from-sb-dark/90 via-transparent to-transparent opacity-90"></div>
                                        <div className="absolute inset-0 flex flex-col justify-end p-6">
                                            <span className="text-sb-orange text-xs font-bold uppercase tracking-widest mb-1">{p.category}</span>
                                            <h4 className="text-white text-lg font-bold uppercase font-poppins">{p.title}</h4>
                                        </div>
                                    </Link>
                                ))}
                            </div>
                        </div>
                    </section>
                )}

                {/* Lightbox */}
                {lightboxImg && (
                    <div className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4" onClick={() => setLightboxImg(null)}>
                        <button className="absolute top-4 right-4 text-white text-4xl font-light hover:text-sb-red transition-colors" onClick={() => setLightboxImg(null)}>×</button>
                        <img src={lightboxImg} alt="Lightbox" className="max-h-[85vh] max-w-full object-contain rounded-xl shadow-2xl" onClick={e => e.stopPropagation()} />
                    </div>
                )}

                <Footer />
            </div>
        </>
    );
}
