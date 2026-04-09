import React, { useMemo, useRef } from 'react';
import { Link } from '@inertiajs/react';
import { getAssetUrl } from '@/lib/utils';

export default function OurProjects({ projects = [] }) {
    const sliderRef = useRef(null);

    const isRunningProject = (project) => {
        const status = String(project?.project_status || '').toLowerCase().trim();
        return ['running', 'in_progress', 'in progress', 'ongoing', 'active'].includes(status);
    };

    const runningProjects = useMemo(
        () => projects.filter((project) => isRunningProject(project)),
        [projects],
    );

    const featuredRunningProject = useMemo(() => {
        if (!runningProjects.length) {
            return null;
        }

        return [...runningProjects].sort((a, b) => {
            const timeA = a.updated_at
                ? new Date(a.updated_at).getTime()
                : a.created_at
                    ? new Date(a.created_at).getTime()
                    : 0;
            const timeB = b.updated_at
                ? new Date(b.updated_at).getTime()
                : b.created_at
                    ? new Date(b.created_at).getTime()
                    : 0;

            if (timeA === timeB) {
                return (b.id || 0) - (a.id || 0);
            }

            return timeB - timeA;
        })[0];
    }, [runningProjects]);

    const scrollSlider = (direction = 'next') => {
        if (!sliderRef.current) {
            return;
        }

        const scrollAmount = 420;
        sliderRef.current.scrollBy({
            left: direction === 'next' ? scrollAmount : -scrollAmount,
            behavior: 'smooth',
        });
    };

    const getProjectDescription = (project) => {
        const text =
            project?.description ||
            project?.short_description ||
            project?.overview ||
            `Live updates for ${project?.title || 'this project'} will appear here once description is added from admin panel.`;

        return text.length > 240 ? `${text.slice(0, 240)}...` : text;
    };

    return (
        <section
            id="projects"
            className="py-24 overflow-hidden bg-[radial-gradient(circle_at_top_left,_rgba(239,68,68,0.07),_transparent_40%),radial-gradient(circle_at_85%_20%,_rgba(15,23,42,0.08),_transparent_40%),linear-gradient(to_bottom,_#ffffff,_#f8fafc)]"
        >
            <div className="max-w-7xl mx-auto px-6">
                <div className="flex flex-col md:flex-row justify-between items-end mb-10 gap-8">
                    <div>
                        <div className="mb-4">
                            <span className="text-sb-red uppercase tracking-[.2em] font-bold text-sm">Our Projects</span>
                            <div className="h-1 w-12 bg-sb-red mt-2"></div>
                        </div>
                        <h2 className="text-sb-dark text-4xl md:text-5xl font-poppins font-bold uppercase leading-tight">
                            Transforming Visions <br /> Into <span className="text-sb-red">Reality</span>
                        </h2>
                    </div>
                </div>

                {featuredRunningProject ? (
                    <div className="relative mb-16 rounded-2xl overflow-hidden border border-slate-200 shadow-[0_28px_70px_-30px_rgba(15,23,42,.45)]">
                        <div className="absolute inset-0 bg-gradient-to-tr from-sb-dark via-sb-dark/85 to-sb-dark/60"></div>
                        <img
                            src={getAssetUrl(featuredRunningProject.image_path)}
                            alt={featuredRunningProject.title}
                            className="absolute inset-0 w-full h-full object-cover opacity-35"
                        />
                        <div className="relative p-7 md:p-12 lg:p-14 min-h-[520px] grid lg:grid-cols-[1.15fr_.85fr] gap-10 items-end">
                            <div>
                                <span className="inline-flex items-center gap-2 rounded-full bg-white/15 border border-white/20 px-4 py-2 text-white text-xs font-bold tracking-[0.22em] uppercase">
                                    <span className="w-2 h-2 rounded-full bg-sb-red animate-pulse"></span>
                                    Latest Running Project
                                </span>
                                <h3 className="text-white text-3xl md:text-5xl font-extrabold uppercase mt-6 leading-tight max-w-2xl">
                                    {featuredRunningProject.title}
                                </h3>
                                <p className="text-white/85 text-sm md:text-base leading-relaxed mt-6 max-w-2xl">
                                    {getProjectDescription(featuredRunningProject)}
                                </p>
                                <div className="mt-8 flex flex-wrap gap-3">
                                    <span className="inline-flex items-center rounded-full bg-white/10 border border-white/20 px-4 py-2 text-white text-xs uppercase tracking-[0.2em] font-semibold">
                                        {featuredRunningProject.category || 'General Construction'}
                                    </span>
                                    <span className="inline-flex items-center rounded-full bg-emerald-400/20 border border-emerald-300/35 px-4 py-2 text-emerald-100 text-xs uppercase tracking-[0.2em] font-semibold">
                                        In Progress
                                    </span>
                                </div>
                                <Link
                                    href="/our-projects"
                                    className="inline-flex items-center gap-2 mt-8 bg-sb-red hover:bg-red-700 text-white text-sm font-bold uppercase tracking-wider px-6 py-3 rounded-full transition-all shadow-lg"
                                >
                                    Explore Our Work <i className="flaticon-right-arrow-1 text-xs"></i>
                                </Link>
                            </div>
                            <div className="hidden lg:block">
                                <div className="bg-white/10 backdrop-blur-sm border border-white/15 rounded-2xl p-6">
                                    <p className="text-white/80 text-xs uppercase tracking-[0.25em] font-semibold mb-4">
                                        Project Visual
                                    </p>
                                    <div className="rounded-xl overflow-hidden h-56">
                                        <img
                                            src={getAssetUrl(featuredRunningProject.image_path)}
                                            alt={featuredRunningProject.title}
                                            className="w-full h-full object-cover"
                                        />
                                    </div>
                                    <p className="text-white/80 text-sm mt-4 leading-relaxed">
                                        {getProjectDescription(featuredRunningProject)}
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                ) : (
                    <div className="mb-16 rounded-2xl border border-slate-200 bg-white p-8 md:p-12 shadow-sm">
                        <h3 className="text-sb-dark text-2xl md:text-3xl font-extrabold uppercase">No Running Project Right Now</h3>
                        <p className="mt-4 text-slate-600 max-w-2xl">
                            All projects are currently completed. Browse the full project portfolio below to explore our latest delivered work.
                        </p>
                    </div>
                )}

                <div className="flex flex-col md:flex-row justify-between items-end mb-8 gap-6">
                    <div>
                        <h3 className="text-sb-dark text-2xl md:text-3xl font-bold uppercase">All Projects</h3>
                        <p className="text-slate-600 mt-2">Running and completed projects in one curated showcase.</p>
                    </div>
                    <div className="flex gap-4">
                        <button
                            id="project-prev"
                            type="button"
                            onClick={() => scrollSlider('prev')}
                            className="w-12 h-12 md:w-14 md:h-14 rounded-xl bg-white hover:bg-sb-red hover:text-white text-sb-dark transition-all flex items-center justify-center shadow-md border border-slate-200"
                            aria-label="Scroll projects left"
                        >
                            <i className="flaticon-left-arrow"></i>
                        </button>
                        <button
                            id="project-next"
                            type="button"
                            onClick={() => scrollSlider('next')}
                            className="w-12 h-12 md:w-14 md:h-14 rounded-xl bg-white hover:bg-sb-red hover:text-white text-sb-dark transition-all flex items-center justify-center shadow-md border border-slate-200"
                            aria-label="Scroll projects right"
                        >
                            <i className="flaticon-right-arrow-1"></i>
                        </button>
                    </div>
                </div>

                <div
                    id="project-slider"
                    ref={sliderRef}
                    className="flex gap-5 overflow-x-auto snap-x snap-mandatory scrollbar-hide pb-8"
                >
                    {projects && projects.map((project) => (
                        <Link
                            key={project.id}
                            href={`/our-projects/${project.id}`}
                            className="min-w-[250px] md:min-w-[320px] snap-start group relative rounded-2xl overflow-hidden shadow-lg h-[360px] md:h-[390px] block border border-slate-200/70"
                        >
                            <img
                                src={getAssetUrl(project.image_path)}
                                alt={project.title}
                                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                            <div className="absolute inset-0 bg-gradient-to-t from-sb-dark/90 via-transparent to-transparent opacity-80"></div>

                            {project.project_status === 'complete' ? (
                                <div className="absolute top-4 left-4 flex items-center gap-1.5 bg-emerald-500 text-white text-[10px] font-extrabold uppercase tracking-widest px-3 py-1.5 rounded-full shadow-lg">
                                    <svg className="w-3 h-3 fill-white shrink-0" viewBox="0 0 20 20">
                                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 00-1.414 0L8 12.586 4.707 9.293a1 1 0 00-1.414 1.414l4 4a1 1 0 001.414 0l8-8a1 1 0 000-1.414z" clipRule="evenodd" />
                                    </svg>
                                    Completed
                                </div>
                            ) : (
                                <div className="absolute top-4 left-4 flex items-center gap-1.5 bg-blue-500 text-white text-[10px] font-extrabold uppercase tracking-widest px-3 py-1.5 rounded-full shadow-lg">
                                    <span className="w-2 h-2 rounded-full bg-white animate-pulse shrink-0"></span>
                                    In Progress
                                </div>
                            )}

                            <div className="absolute inset-0 flex flex-col justify-end p-8">
                                <div className="w-12 h-12 bg-sb-red rounded-full flex items-center justify-center mb-4 transform -translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                                    <i className="flaticon-architect text-white text-xl"></i>
                                </div>
                                <h4 className="text-white text-2xl font-bold uppercase">{project.title}</h4>
                                <span className="text-sb-red font-semibold">{project.category}</span>
                                <span className="text-white text-sm font-bold mt-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center gap-2">
                                    View Details <i className="flaticon-right-arrow-1 text-xs"></i>
                                </span>
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
        </section>
    );
}
