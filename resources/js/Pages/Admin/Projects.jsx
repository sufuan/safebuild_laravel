import React from 'react';
import { Head, Link, router } from '@inertiajs/react';
import { toast } from 'sonner';
import { getAssetUrl } from '@/lib/utils';
import AdminLayout from '@/Layouts/AdminLayout';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { Table, TableHeader, TableRow, TableHead, TableBody, TableCell } from '@/components/ui/table';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Plus, Pencil, Trash2, Image as ImageIcon, Eye, FolderOpen, ImagePlus } from 'lucide-react';

export default function Projects({ projects }) {
    const handleDelete = (id) => {
        if (!confirm('Are you sure you want to delete this project?')) return;
        router.delete(route('admin.projects.delete', id), {
            preserveScroll: true,
            onSuccess: () => toast.success('Project deleted.'),
            onError: () => toast.error('Failed to delete project.'),
        });
    };

    const activeCount = projects.filter(p => p.is_active).length;

    return (
        <AdminLayout>
            <Head title="Manage Projects - SafeBuild Admin" />

            {/* ── Page Header ──────────────────────────────────────── */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8">
                <div>
                    <h1 className="text-3xl font-extrabold tracking-tight text-gray-900">Projects</h1>
                    <p className="text-muted-foreground mt-1 text-sm">
                        Manage your portfolio — <span className="font-semibold text-gray-700">{projects.length}</span> total,&nbsp;
                        <span className="font-semibold text-emerald-600">{activeCount}</span> published
                    </p>
                </div>
                <Button asChild className="bg-sb-red hover:bg-sb-dark shadow-lg shadow-red-100 font-bold h-11 px-6">
                    <Link href={route('admin.projects.create')}>
                        <Plus className="mr-2 h-4 w-4" /> Add New Project
                    </Link>
                </Button>
            </div>

            {/* ── Stats Strip ──────────────────────────────────────── */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-8">
                {[
                    { label: 'Total Projects', value: projects.length, icon: FolderOpen, color: 'text-violet-600', bg: 'bg-violet-50' },
                    { label: 'Published', value: activeCount, icon: Eye, color: 'text-emerald-600', bg: 'bg-emerald-50' },
                    { label: 'Hidden', value: projects.length - activeCount, icon: ImageIcon, color: 'text-amber-600', bg: 'bg-amber-50' },
                    { label: 'Gallery Images', value: projects.reduce((s, p) => s + (p.gallery_images?.length || 0), 0), icon: ImagePlus, color: 'text-blue-600', bg: 'bg-blue-50' },
                ].map(({ label, value, icon: Icon, color, bg }) => (
                    <Card key={label} className="border-0 shadow-sm rounded-2xl">
                        <CardContent className="p-5 flex items-center gap-4">
                            <div className={`${bg} p-3 rounded-xl`}>
                                <Icon className={`h-5 w-5 ${color}`} />
                            </div>
                            <div>
                                <p className="text-2xl font-extrabold text-gray-900">{value}</p>
                                <p className="text-xs text-muted-foreground font-medium">{label}</p>
                            </div>
                        </CardContent>
                    </Card>
                ))}
            </div>

            {/* ── Projects Table ───────────────────────────────────── */}
            <Card className="border-0 shadow-sm rounded-3xl overflow-hidden">
                <CardHeader className="bg-white border-b border-gray-100 px-8 py-5 flex flex-row items-center justify-between">
                    <CardTitle className="text-xl font-extrabold text-gray-900">All Projects</CardTitle>
                    <Badge variant="secondary" className="text-xs font-bold px-3 py-1 rounded-full">{projects.length} entries</Badge>
                </CardHeader>
                <CardContent className="p-0">
                    <Table>
                        <TableHeader className="bg-gray-50/70">
                            <TableRow>
                                <TableHead className="px-8 py-4 font-bold text-gray-600 uppercase text-[11px] tracking-wider w-24">Cover</TableHead>
                                <TableHead className="font-bold text-gray-600 uppercase text-[11px] tracking-wider">Project</TableHead>
                                <TableHead className="font-bold text-gray-600 uppercase text-[11px] tracking-wider">Category</TableHead>
                                <TableHead className="font-bold text-gray-600 uppercase text-[11px] tracking-wider">Gallery</TableHead>
                                <TableHead className="font-bold text-gray-600 uppercase text-[11px] tracking-wider">Progress</TableHead>
                                <TableHead className="font-bold text-gray-600 uppercase text-[11px] tracking-wider">Visibility</TableHead>
                                <TableHead className="text-right px-8 font-bold text-gray-600 uppercase text-[11px] tracking-wider">Actions</TableHead>
                            </TableRow>
                        </TableHeader>
                        <TableBody>
                            {projects.map((project) => (
                                <TableRow key={project.id} className="hover:bg-gray-50/40 transition-colors border-b border-gray-100/60">
                                    <TableCell className="px-8 py-4">
                                        <div className="w-16 h-16 rounded-2xl overflow-hidden border border-gray-200 shadow-sm bg-gray-100 flex-shrink-0">
                                            <img src={getAssetUrl(project.image_path)} alt={project.title} className="w-full h-full object-cover" />
                                        </div>
                                    </TableCell>
                                    <TableCell className="py-4 max-w-xs">
                                        <p className="font-bold text-gray-900 text-base leading-tight">{project.title}</p>
                                        {project.description && (
                                            <p className="text-gray-400 text-xs mt-1 line-clamp-1">{project.description}</p>
                                        )}
                                    </TableCell>
                                    <TableCell>
                                        <Badge variant="secondary" className="bg-gray-100 text-gray-700 border-0 text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-full">
                                            {project.category}
                                        </Badge>
                                    </TableCell>
                                    <TableCell>
                                        <div className="flex items-center gap-1.5 text-gray-500">
                                            <ImagePlus className="h-3.5 w-3.5" />
                                            <span className="text-sm font-semibold">{(project.gallery_images || []).length}</span>
                                        </div>
                                    </TableCell>
                                    {/* Progress */}
                                    <TableCell>
                                        {project.project_status === 'complete' ? (
                                            <Badge className="bg-emerald-50 text-emerald-700 border-0 font-bold text-xs px-3 py-1 rounded-full flex items-center gap-1.5 w-fit">
                                                <svg className="w-3 h-3 fill-emerald-600" viewBox="0 0 20 20"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 00-1.414 0L8 12.586 4.707 9.293a1 1 0 00-1.414 1.414l4 4a1 1 0 001.414 0l8-8a1 1 0 000-1.414z" clipRule="evenodd"/></svg>
                                                Completed
                                            </Badge>
                                        ) : (
                                            <Badge className="bg-blue-50 text-blue-700 border-0 font-bold text-xs px-3 py-1 rounded-full flex items-center gap-1.5 w-fit">
                                                <span className="w-1.5 h-1.5 rounded-full bg-blue-500 animate-pulse inline-block"></span>
                                                In Progress
                                            </Badge>
                                        )}
                                    </TableCell>
                                    {/* Visibility */}
                                    <TableCell>
                                        {project.is_active ? (
                                            <Badge className="bg-emerald-50 text-emerald-700 border-0 font-bold text-xs px-3 py-1 rounded-full">● Published</Badge>
                                        ) : (
                                            <Badge className="bg-amber-50 text-amber-700 border-0 font-bold text-xs px-3 py-1 rounded-full">○ Hidden</Badge>
                                        )}
                                    </TableCell>
                                    <TableCell className="text-right px-8 whitespace-nowrap">
                                        <div className="flex items-center justify-end gap-1">
                                            <Button variant="ghost" size="sm" asChild className="h-9 w-9 p-0 rounded-xl hover:bg-blue-50 hover:text-blue-600 transition-colors">
                                                <a href={`/our-projects/${project.id}`} target="_blank" rel="noopener noreferrer" title="Preview on site">
                                                    <Eye className="h-4 w-4" />
                                                </a>
                                            </Button>
                                            <Button variant="ghost" size="sm" asChild className="h-9 w-9 p-0 rounded-xl hover:bg-amber-50 hover:text-amber-600 transition-colors">
                                                <Link href={route('admin.projects.edit', project.id)} title="Edit project">
                                                    <Pencil className="h-4 w-4" />
                                                </Link>
                                            </Button>
                                            <Button variant="ghost" size="sm" onClick={() => handleDelete(project.id)} className="h-9 w-9 p-0 rounded-xl hover:bg-red-50 hover:text-red-600 transition-colors text-gray-400" title="Delete project">
                                                <Trash2 className="h-4 w-4" />
                                            </Button>
                                        </div>
                                    </TableCell>
                                </TableRow>
                            ))}
                            {projects.length === 0 && (
                                <TableRow>
                                    <TableCell colSpan="7" className="py-24 text-center">
                                        <div className="flex flex-col items-center gap-4">
                                            <div className="w-20 h-20 rounded-3xl bg-gray-100 flex items-center justify-center">
                                                <FolderOpen className="h-9 w-9 text-gray-300" />
                                            </div>
                                            <div>
                                                <p className="font-bold text-gray-700 text-lg">No projects yet</p>
                                                <p className="text-muted-foreground text-sm mt-1">Click "Add New Project" to publish your first portfolio project.</p>
                                            </div>
                                            <Button asChild className="bg-sb-red hover:bg-sb-dark mt-2 font-bold">
                                                <Link href={route('admin.projects.create')}><Plus className="mr-2 h-4 w-4" /> Add First Project</Link>
                                            </Button>
                                        </div>
                                    </TableCell>
                                </TableRow>
                            )}
                        </TableBody>
                    </Table>
                </CardContent>
            </Card>
        </AdminLayout>
    );
}
