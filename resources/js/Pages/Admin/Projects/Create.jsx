import React, { useState, useRef, useCallback } from 'react';
import { Head, Link, useForm } from '@inertiajs/react';
import { toast } from 'sonner';
import AdminLayout from '@/Layouts/AdminLayout';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Separator } from '@/components/ui/separator';
import { Badge } from '@/components/ui/badge';
import {
    ArrowLeft, Upload, ImagePlus, X, CheckCircle2,
    Eye, EyeOff, FolderOpen, Tag, AlignLeft, Image as ImageIcon,
    Clock, CircleCheckBig,
} from 'lucide-react';

const formatBytes = (b) => {
    if (!b) return '';
    const k = 1024, sizes = ['B', 'KB', 'MB'];
    const i = Math.floor(Math.log(b) / Math.log(k));
    return `${(b / Math.pow(k, i)).toFixed(1)} ${sizes[i]}`;
};

export default function Create() {
    // Cover image
    const [coverPreview, setCoverPreview] = useState(null);
    const [coverFile, setCoverFile]       = useState(null);
    const [isDragging, setIsDragging]     = useState(false);
    const coverDragCounter                = useRef(0);
    const coverRef                        = useRef(null);

    // Gallery images — stored as { file, preview } for stable URLs
    const [galleryItems, setGalleryItems]       = useState([]);
    const [isGalleryDragging, setIsGalleryDragging] = useState(false);
    const galleryDragCounter                    = useRef(0);
    const galleryRef                            = useRef(null);

    const { data, setData, post, errors, processing } = useForm({
        title: '', category: '', description: '',
        image_path: null, gallery_images: [],
        is_active: true, project_status: 'running',
    });

    /* ── Cover: drag-and-drop (counter prevents false drag-leave on children) ── */
    const processCover = useCallback((file) => {
        if (!file || !file.type.startsWith('image/')) return toast.error('Please upload a valid image.');
        if (file.size > 5 * 1024 * 1024) return toast.error(`File too large (${formatBytes(file.size)}). Max 5 MB.`);
        if (coverPreview && coverPreview.startsWith('blob:')) URL.revokeObjectURL(coverPreview);
        const preview = URL.createObjectURL(file);
        setCoverFile(file); setCoverPreview(preview); setData('image_path', file);
    }, [setData, coverPreview]);

    const onCoverDragEnter = (e) => { e.preventDefault(); coverDragCounter.current++; setIsDragging(true); };
    const onCoverDragLeave = (e) => { e.preventDefault(); coverDragCounter.current--; if (coverDragCounter.current === 0) setIsDragging(false); };
    const onCoverDragOver  = (e) => { e.preventDefault(); };
    const onCoverDrop      = (e) => { e.preventDefault(); coverDragCounter.current = 0; setIsDragging(false); processCover(e.dataTransfer.files[0]); };

    const clearCover = (e) => {
        e.stopPropagation();
        if (coverPreview?.startsWith('blob:')) URL.revokeObjectURL(coverPreview);
        setCoverFile(null); setCoverPreview(null); setData('image_path', null);
    };

    /* ── Gallery: drag-and-drop ── */
    const addGalleryFiles = (files) => {
        const valid = Array.from(files)
            .filter(f => {
                if (!f.type.startsWith('image/'))    { toast.error(`${f.name} is not an image.`); return false; }
                if (f.size > 5 * 1024 * 1024)        { toast.error(`${f.name} exceeds 5 MB.`); return false; }
                return true;
            })
            .map(f => ({ file: f, preview: URL.createObjectURL(f) }));
        const merged = [...galleryItems, ...valid];
        setGalleryItems(merged);
        setData('gallery_images', merged.map(i => i.file));
    };

    const removeGallery = (idx) => {
        URL.revokeObjectURL(galleryItems[idx].preview);
        const next = galleryItems.filter((_, i) => i !== idx);
        setGalleryItems(next);
        setData('gallery_images', next.map(i => i.file));
    };

    const onGalleryDragEnter = (e) => { e.preventDefault(); galleryDragCounter.current++; setIsGalleryDragging(true); };
    const onGalleryDragLeave = (e) => { e.preventDefault(); galleryDragCounter.current--; if (galleryDragCounter.current === 0) setIsGalleryDragging(false); };
    const onGalleryDragOver  = (e) => { e.preventDefault(); };
    const onGalleryDrop      = (e) => { e.preventDefault(); galleryDragCounter.current = 0; setIsGalleryDragging(false); addGalleryFiles(e.dataTransfer.files); };

    /* ── Submit ── */
    const handleSubmit = (e) => {
        e.preventDefault();
        post(route('admin.projects.store'), {
            onError: () => toast.error('Please fix the errors below.'),
        });
    };

    return (
        <AdminLayout>
            <Head title="Add New Project – SafeBuild Admin" />

            {/* ── Sticky top bar ─────────────────────────────────── */}
            <div className="sticky top-0 z-20 -mx-6 -mt-6 px-6 py-4 mb-8 bg-white/80 backdrop-blur-md border-b border-gray-100 shadow-sm">
                <div className="flex items-center justify-between max-w-7xl mx-auto">
                    <div className="flex items-center gap-4 min-w-0">
                        <Button variant="ghost" size="sm" asChild className="text-gray-500 hover:text-gray-900 shrink-0">
                            <Link href={route('admin.projects.index')}>
                                <ArrowLeft className="h-4 w-4 mr-1.5" /> Projects
                            </Link>
                        </Button>
                        <Separator orientation="vertical" className="h-5" />
                        <div className="min-w-0">
                            <h1 className="text-lg font-extrabold text-gray-900 truncate">Add New Project</h1>
                            <p className="text-xs text-muted-foreground hidden sm:block">Fill in the details below then publish.</p>
                        </div>
                    </div>
                    <div className="flex items-center gap-2 shrink-0">
                        <Button variant="outline" asChild className="font-semibold">
                            <Link href={route('admin.projects.index')}>Discard</Link>
                        </Button>
                        <Button type="submit" form="project-form" disabled={processing}
                            className="bg-sb-red hover:bg-sb-dark text-white font-bold px-6 shadow-lg shadow-red-100">
                            {processing ? 'Publishing…' : 'Publish Project'}
                        </Button>
                    </div>
                </div>
            </div>

            <form id="project-form" onSubmit={handleSubmit}>
                <div className="grid grid-cols-1 xl:grid-cols-3 gap-8 max-w-7xl mx-auto">

                    {/* ── LEFT: details ──────────────────────────── */}
                    <div className="xl:col-span-2 space-y-6">

                        {/* Basic info */}
                        <Card className="border-0 shadow-sm rounded-3xl overflow-hidden">
                            <CardHeader className="pb-0 pt-7 px-8 border-b border-gray-100">
                                <div className="flex items-center gap-3 mb-5">
                                    <div className="w-9 h-9 rounded-xl bg-violet-50 flex items-center justify-center">
                                        <FolderOpen className="h-4 w-4 text-violet-600" />
                                    </div>
                                    <div>
                                        <CardTitle className="text-base font-extrabold text-gray-900">Project Information</CardTitle>
                                        <CardDescription className="text-xs">The core details of your project.</CardDescription>
                                    </div>
                                </div>
                            </CardHeader>
                            <CardContent className="px-8 py-7 space-y-6">
                                {/* Title */}
                                <div className="space-y-2">
                                    <Label className="font-bold text-gray-700 flex items-center gap-2">
                                        <FolderOpen className="h-3.5 w-3.5 text-gray-400" /> Project Title <span className="text-sb-red">*</span>
                                    </Label>
                                    <Input value={data.title} onChange={e => setData('title', e.target.value)}
                                        placeholder="e.g. Heritage Building Renovation"
                                        className={`h-12 text-base rounded-xl border-gray-200 focus:border-sb-red focus:ring-sb-red/20 ${errors.title ? 'border-red-400' : ''}`} />
                                    {errors.title && <p className="text-xs text-red-500 flex items-center gap-1"><X className="h-3 w-3" />{errors.title}</p>}
                                </div>

                                {/* Category */}
                                <div className="space-y-2">
                                    <Label className="font-bold text-gray-700 flex items-center gap-2">
                                        <Tag className="h-3.5 w-3.5 text-gray-400" /> Category <span className="text-sb-red">*</span>
                                    </Label>
                                    <Input value={data.category} onChange={e => setData('category', e.target.value)}
                                        placeholder="e.g. Renovation, Architecture, Excavation…"
                                        className={`h-12 text-base rounded-xl border-gray-200 focus:border-sb-red focus:ring-sb-red/20 ${errors.category ? 'border-red-400' : ''}`} />
                                    {errors.category && <p className="text-xs text-red-500 flex items-center gap-1"><X className="h-3 w-3" />{errors.category}</p>}
                                    <p className="text-xs text-muted-foreground">Used for filtering on the Projects page.</p>
                                </div>
                            </CardContent>
                        </Card>

                        {/* Description */}
                        <Card className="border-0 shadow-sm rounded-3xl overflow-hidden">
                            <CardHeader className="pb-0 pt-7 px-8 border-b border-gray-100">
                                <div className="flex items-center gap-3 mb-5">
                                    <div className="w-9 h-9 rounded-xl bg-blue-50 flex items-center justify-center">
                                        <AlignLeft className="h-4 w-4 text-blue-600" />
                                    </div>
                                    <div>
                                        <CardTitle className="text-base font-extrabold text-gray-900">Description</CardTitle>
                                        <CardDescription className="text-xs">Describe the scope, materials, and highlights of the project.</CardDescription>
                                    </div>
                                </div>
                            </CardHeader>
                            <CardContent className="px-8 py-7">
                                <Textarea value={data.description} onChange={e => setData('description', e.target.value)}
                                    placeholder="Write a detailed description of the project — scope of work, challenges overcome, materials used, timeline..."
                                    rows={8} className="resize-y text-base rounded-xl border-gray-200 focus:border-sb-red focus:ring-sb-red/20 leading-relaxed" />
                                <p className="text-xs text-muted-foreground mt-2">{data.description.length} characters</p>
                            </CardContent>
                        </Card>

                        {/* Project Status */}
                        <Card className="border-0 shadow-sm rounded-3xl overflow-hidden">
                            <CardContent className="px-8 py-6">
                                <p className="font-extrabold text-gray-900 text-sm mb-4 uppercase tracking-wider">Project Status</p>
                                <div className="flex flex-col sm:flex-row gap-3">
                                    {[
                                        { val: 'running',  icon: Clock,           label: 'In Progress', sub: 'Project is currently underway',       color: 'blue'    },
                                        { val: 'complete', icon: CircleCheckBig,  label: 'Completed',   sub: 'Project has been finished successfully', color: 'emerald' },
                                    ].map(({ val, icon: Icon, label, sub, color }) => (
                                        <button key={val} type="button" onClick={() => setData('project_status', val)}
                                            className={`flex-1 flex items-center gap-4 p-4 rounded-2xl border-2 text-left transition-all duration-200
                                                ${data.project_status === val
                                                    ? `border-${color}-500 bg-${color}-50`
                                                    : 'border-gray-200 bg-white hover:border-gray-300'}`}>
                                            <div className={`w-10 h-10 rounded-xl flex items-center justify-center transition-colors
                                                ${data.project_status === val ? `bg-${color}-100` : 'bg-gray-100'}`}>
                                                <Icon className={`h-5 w-5 transition-colors ${data.project_status === val ? `text-${color}-600` : 'text-gray-400'}`} />
                                            </div>
                                            <div>
                                                <p className="font-bold text-gray-900 text-sm">{label}</p>
                                                <p className="text-xs text-muted-foreground">{sub}</p>
                                            </div>
                                            {data.project_status === val && (
                                                <CheckCircle2 className={`h-5 w-5 text-${color}-500 ml-auto shrink-0`} />
                                            )}
                                        </button>
                                    ))}
                                </div>
                            </CardContent>
                        </Card>

                        {/* Visibility */}
                        <Card className="border-0 shadow-sm rounded-3xl overflow-hidden">
                            <CardContent className="px-8 py-6">
                                <p className="font-extrabold text-gray-900 text-sm mb-4 uppercase tracking-wider">Visibility</p>
                                <div className="flex flex-col sm:flex-row gap-3">
                                    {[
                                        { val: true,  icon: Eye,    label: 'Published', sub: 'Visible to all visitors on the site', color: 'emerald' },
                                        { val: false, icon: EyeOff, label: 'Draft',     sub: 'Hidden from the public, save for later', color: 'amber'   },
                                    ].map(({ val, icon: Icon, label, sub, color }) => (
                                        <button key={label} type="button" onClick={() => setData('is_active', val)}
                                            className={`flex-1 flex items-center gap-4 p-4 rounded-2xl border-2 text-left transition-all
                                                ${data.is_active === val
                                                    ? `border-${color}-500 bg-${color}-50`
                                                    : 'border-gray-200 bg-white hover:border-gray-300'}`}>
                                            <div className={`w-10 h-10 rounded-xl flex items-center justify-center
                                                ${data.is_active === val ? `bg-${color}-100` : 'bg-gray-100'}`}>
                                                <Icon className={`h-5 w-5 ${data.is_active === val ? `text-${color}-600` : 'text-gray-400'}`} />
                                            </div>
                                            <div>
                                                <p className="font-bold text-gray-900 text-sm">{label}</p>
                                                <p className="text-xs text-muted-foreground">{sub}</p>
                                            </div>
                                            {data.is_active === val && (
                                                <CheckCircle2 className={`h-5 w-5 text-${color}-500 ml-auto shrink-0`} />
                                            )}
                                        </button>
                                    ))}
                                </div>
                            </CardContent>
                        </Card>
                    </div>

                    {/* ── RIGHT: media (sticky) ──────────────────── */}
                    <div className="space-y-6 xl:sticky xl:top-24 xl:self-start">

                        {/* Cover Image */}
                        <Card className="border-0 shadow-sm rounded-3xl overflow-hidden">
                            <CardHeader className="pb-0 pt-7 px-7 border-b border-gray-100">
                                <div className="flex items-center gap-3 mb-5">
                                    <div className="w-9 h-9 rounded-xl bg-rose-50 flex items-center justify-center">
                                        <ImageIcon className="h-4 w-4 text-rose-500" />
                                    </div>
                                    <div>
                                        <CardTitle className="text-base font-extrabold text-gray-900">Cover Image <span className="text-sb-red">*</span></CardTitle>
                                        <CardDescription className="text-xs">Main image shown on cards &amp; the hero.</CardDescription>
                                    </div>
                                </div>
                            </CardHeader>
                            <CardContent className="px-7 py-6">
                                {/* Drop zone */}
                                <div
                                    onClick={() => coverRef.current?.click()}
                                    onDragEnter={onCoverDragEnter}
                                    onDragLeave={onCoverDragLeave}
                                    onDragOver={onCoverDragOver}
                                    onDrop={onCoverDrop}
                                    className={`relative rounded-2xl overflow-hidden cursor-pointer transition-all duration-200
                                        ${coverPreview ? 'h-56' : 'h-52 border-2 border-dashed hover:border-sb-red/60 hover:bg-red-50/20'}
                                        ${isDragging ? 'ring-4 ring-sb-red/50 ring-offset-2 scale-[1.02] border-sb-red bg-red-50/30' : ''}
                                        ${errors.image_path ? 'border-red-400' : 'border-gray-300'}`}>

                                    {coverPreview ? (
                                        <>
                                            <img src={coverPreview} alt="Cover preview" className="w-full h-full object-cover pointer-events-none" />
                                            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 hover:opacity-100 transition-opacity flex flex-col items-end justify-start p-3">
                                                <button type="button" onClick={clearCover}
                                                    className="w-8 h-8 bg-red-600 hover:bg-red-700 rounded-full flex items-center justify-center shadow-lg transition-colors">
                                                    <X className="h-4 w-4 text-white" />
                                                </button>
                                            </div>
                                            <div className="absolute inset-0 flex items-end justify-center pb-4 opacity-0 hover:opacity-100 transition-opacity pointer-events-none">
                                                <span className="bg-white/90 backdrop-blur-sm text-gray-800 font-bold text-xs px-4 py-1.5 rounded-full flex items-center gap-1.5">
                                                    <Upload className="h-3 w-3" /> Drag new image or click to change
                                                </span>
                                            </div>
                                        </>
                                    ) : (
                                        <div className="absolute inset-0 flex flex-col items-center justify-center gap-2 text-center px-4 pointer-events-none">
                                            <div className={`w-16 h-16 rounded-2xl flex items-center justify-center mb-1 transition-colors ${isDragging ? 'bg-red-100' : 'bg-gray-100'}`}>
                                                <Upload className={`h-7 w-7 transition-colors ${isDragging ? 'text-sb-red' : 'text-gray-400'}`} />
                                            </div>
                                            <p className={`font-bold text-sm transition-colors ${isDragging ? 'text-sb-red' : 'text-gray-700'}`}>
                                                {isDragging ? 'Drop to upload!' : 'Drag & drop your image here'}
                                            </p>
                                            <p className="text-xs text-muted-foreground">or click anywhere to browse</p>
                                            <Badge variant="secondary" className="mt-1 text-xs font-medium">JPG · PNG · WEBP · GIF · Max 5 MB</Badge>
                                        </div>
                                    )}
                                    <input ref={coverRef} type="file" className="hidden" accept="image/*"
                                        onChange={e => { if (e.target.files[0]) processCover(e.target.files[0]); }} />
                                </div>

                                {/* File info bar */}
                                {coverFile && (
                                    <div className="mt-3 flex items-center gap-3 bg-emerald-50 border border-emerald-200 rounded-xl px-4 py-2.5">
                                        <CheckCircle2 className="h-4 w-4 text-emerald-500 shrink-0" />
                                        <div className="min-w-0">
                                            <p className="text-xs font-bold text-gray-800 truncate">{coverFile.name}</p>
                                            <p className="text-xs text-emerald-600 font-medium">{formatBytes(coverFile.size)} · Ready to upload</p>
                                        </div>
                                    </div>
                                )}
                                {errors.image_path && <p className="text-xs text-red-500 mt-2 flex items-center gap-1"><X className="h-3 w-3" />{errors.image_path}</p>}
                            </CardContent>
                        </Card>

                        {/* Gallery */}
                        <Card className="border-0 shadow-sm rounded-3xl overflow-hidden">
                            <CardHeader className="pb-0 pt-7 px-7 border-b border-gray-100">
                                <div className="flex items-center gap-3 mb-5">
                                    <div className="w-9 h-9 rounded-xl bg-indigo-50 flex items-center justify-center">
                                        <ImagePlus className="h-4 w-4 text-indigo-600" />
                                    </div>
                                    <div>
                                        <CardTitle className="text-base font-extrabold text-gray-900">Project Gallery</CardTitle>
                                        <CardDescription className="text-xs">Extra photos shown on the detail page.</CardDescription>
                                    </div>
                                </div>
                            </CardHeader>
                            <CardContent className="px-7 py-6 space-y-3">
                                {/* Gallery drop zone */}
                                <div
                                    onDragEnter={onGalleryDragEnter}
                                    onDragLeave={onGalleryDragLeave}
                                    onDragOver={onGalleryDragOver}
                                    onDrop={onGalleryDrop}
                                    className={`rounded-2xl transition-all duration-200 ${isGalleryDragging ? 'ring-4 ring-indigo-400/50 ring-offset-2 bg-indigo-50/40' : ''}`}>

                                    {galleryItems.length > 0 ? (
                                        <div className="grid grid-cols-3 gap-2.5">
                                            {galleryItems.map((item, idx) => (
                                                <div key={idx} className="relative group aspect-square rounded-xl overflow-hidden border-2 border-indigo-200 shadow-sm">
                                                    <img src={item.preview} alt="" className="w-full h-full object-cover pointer-events-none" />
                                                    <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity" />
                                                    <button type="button" onClick={() => removeGallery(idx)}
                                                        className="absolute top-1.5 right-1.5 w-6 h-6 bg-red-600 hover:bg-red-700 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all shadow">
                                                        <X className="h-3 w-3 text-white" />
                                                    </button>
                                                    <span className="absolute bottom-1.5 left-1.5 bg-indigo-600 text-white text-[9px] px-1.5 py-0.5 rounded font-bold opacity-0 group-hover:opacity-100 transition-opacity">READY</span>
                                                </div>
                                            ))}
                                            {/* Add-more tile */}
                                            <button type="button" onClick={() => galleryRef.current?.click()}
                                                className="aspect-square rounded-xl border-2 border-dashed border-gray-300 hover:border-indigo-400 hover:bg-indigo-50/30 flex flex-col items-center justify-center transition-colors cursor-pointer">
                                                <ImagePlus className="h-5 w-5 text-gray-400 mb-1" />
                                                <span className="text-[10px] text-gray-400 font-bold">Add more</span>
                                            </button>
                                        </div>
                                    ) : (
                                        /* Empty drop zone */
                                        <div onClick={() => galleryRef.current?.click()}
                                            className={`w-full border-2 border-dashed rounded-2xl py-8 flex flex-col items-center gap-2 cursor-pointer transition-all
                                                ${isGalleryDragging ? 'border-indigo-400 bg-indigo-50/50' : 'border-gray-200 hover:border-indigo-300 hover:bg-indigo-50/20'}`}>
                                            <div className={`w-12 h-12 rounded-xl flex items-center justify-center transition-colors ${isGalleryDragging ? 'bg-indigo-100' : 'bg-gray-100'}`}>
                                                <ImagePlus className={`h-5 w-5 transition-colors ${isGalleryDragging ? 'text-indigo-500' : 'text-gray-400'}`} />
                                            </div>
                                            <p className={`text-sm font-bold transition-colors ${isGalleryDragging ? 'text-indigo-600' : 'text-gray-600'}`}>
                                                {isGalleryDragging ? 'Drop images here!' : 'Drag & drop or click to add'}
                                            </p>
                                            <p className="text-xs text-muted-foreground">Multiple files supported</p>
                                        </div>
                                    )}
                                </div>

                                <input ref={galleryRef} type="file" className="hidden" accept="image/*" multiple
                                    onChange={e => { if (e.target.files.length) addGalleryFiles(e.target.files); }} />

                                {galleryItems.length > 0 && (
                                    <p className="text-xs text-center text-muted-foreground pt-1">
                                        <span className="font-bold text-indigo-600">{galleryItems.length}</span> image{galleryItems.length !== 1 ? 's' : ''} ready to upload · hover a thumbnail to remove
                                    </p>
                                )}
                            </CardContent>
                        </Card>

                        {/* Bottom action */}
                        <Button type="submit" form="project-form" disabled={processing} size="lg"
                            className="w-full bg-sb-red hover:bg-sb-dark text-white font-bold h-13 rounded-2xl text-base shadow-lg shadow-red-100">
                            {processing ? 'Publishing…' : 'Publish Project'}
                        </Button>
                    </div>
                </div>
            </form>
        </AdminLayout>
    );
}
