import React, { useState } from 'react';
import { toast } from 'sonner';
import { Head, useForm, usePage } from '@inertiajs/react';
import { getAssetUrl } from '@/lib/utils';
import AdminLayout from '@/Layouts/AdminLayout';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { Tabs, TabsList, TabsTrigger, TabsContent } from '@/components/ui/tabs';
import { Table, TableHeader, TableRow, TableHead, TableBody, TableCell } from '@/components/ui/table';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogFooter } from '@/components/ui/dialog';
import { Plus, Edit, Trash2, Image as ImageIcon } from 'lucide-react';

// Curated list of Flaticons available in the theme
const AVAILABLE_ICONS = [
    'flaticon-architect', 'flaticon-car-parts', 'flaticon-chemical',
    'flaticon-garage-owner', 'flaticon-skyscrapers', 'flaticon-factory',
    'flaticon-measure', 'flaticon-crane', 'flaticon-welder',
    'flaticon-paint-roller', 'flaticon-hook', 'flaticon-house'
];

function AboutSectionEditor() {
    const { siteSettings } = usePage().props;
    const { data, setData, post, processing } = useForm({
        settings: [
            { key: 'about_title', value: siteSettings.about_title || '' },
            { key: 'about_subtitle', value: siteSettings.about_subtitle || '' },
            { key: 'about_description', value: siteSettings.about_description || '' },
            { key: 'about_experience_years', value: siteSettings.about_experience_years || '' },
            { key: 'about_projects_count', value: siteSettings.about_projects_count || '' },
            { key: 'about_pros_count', value: siteSettings.about_pros_count || '' },
            { key: 'about_intro_text', value: siteSettings.about_intro_text || '' },
            { key: 'about_image', value: null },
        ]
    });

    const [aboutImagePreview, setAboutImagePreview] = useState(siteSettings.about_image ? getAssetUrl(siteSettings.about_image) : null);

    const handleAboutImageChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            if (file.size > 5 * 1024 * 1024) {
                toast.error('The file is too large. Please upload an image smaller than 5MB.');
                e.target.value = '';
                return;
            }
            const newSettings = [...data.settings];
            newSettings[7].value = file;
            setData('settings', newSettings);
            setAboutImagePreview(URL.createObjectURL(file));
        }
    };

    const updateSetting = (key, value) => {
        const newSettings = data.settings.map(s => s.key === key ? { ...s, value } : s);
        setData('settings', newSettings);
    };

    const getVal = (key) => data.settings.find(s => s.key === key)?.value || '';

    const submit = (e) => {
        e.preventDefault();
        post(route('admin.settings.update'), { 
            preserveScroll: true,
            onSuccess: () => toast.success('About section updated successfully!'),
            onError: () => toast.error('Failed to update About section.')
        });
    };

    return (
        <Card className="border-0 shadow-sm rounded-3xl overflow-hidden">
            <CardHeader className="bg-white border-b border-gray-100 px-8 py-6">
                <CardTitle className="text-2xl font-black text-sb-dark">About Us Section Content</CardTitle>
            </CardHeader>
            <CardContent className="p-8">
                <form onSubmit={submit} className="space-y-8">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <div className="space-y-6">
                            <div className="space-y-3">
                                <Label className="text-sm font-bold text-gray-700">Section Title</Label>
                                <Input value={getVal('about_title')} onChange={e => updateSetting('about_title', e.target.value)} className="h-12" />
                            </div>
                            <div className="space-y-3">
                                <Label className="text-sm font-bold text-gray-700">Section Subtitle</Label>
                                <Input value={getVal('about_subtitle')} onChange={e => updateSetting('about_subtitle', e.target.value)} className="h-12" />
                            </div>
                            <div className="space-y-3">
                                <Label className="text-sm font-bold text-gray-700">Description</Label>
                                <Textarea value={getVal('about_description')} onChange={e => updateSetting('about_description', e.target.value)} rows={4} />
                            </div>
                            <div className="grid grid-cols-3 gap-4">
                                <div className="space-y-2">
                                    <Label className="text-xs font-bold uppercase tracking-wider text-gray-500">Years Exp.</Label>
                                    <Input value={getVal('about_experience_years')} onChange={e => updateSetting('about_experience_years', e.target.value)} placeholder="20+" />
                                </div>
                                <div className="space-y-2">
                                    <Label className="text-xs font-bold uppercase tracking-wider text-gray-500">Projects</Label>
                                    <Input value={getVal('about_projects_count')} onChange={e => updateSetting('about_projects_count', e.target.value)} placeholder="400+" />
                                </div>
                                <div className="space-y-2">
                                    <Label className="text-xs font-bold uppercase tracking-wider text-gray-500">Pros Count</Label>
                                    <Input value={getVal('about_pros_count')} onChange={e => updateSetting('about_pros_count', e.target.value)} placeholder="50+" />
                                </div>
                            </div>
                        </div>
                        <div className="space-y-6">
                            <div className="space-y-3">
                                <Label className="text-sm font-bold text-gray-700">Section Image</Label>
                                <div 
                                    className="border-2 border-dashed border-gray-300 rounded-2xl p-4 h-64 flex flex-col items-center justify-center bg-gray-50 hover:bg-gray-100 cursor-pointer relative group overflow-hidden"
                                    onClick={() => document.getElementById('about-img-upload').click()}
                                >
                                    {aboutImagePreview ? (
                                        <img src={aboutImagePreview} alt="About Us" className="h-full w-full object-cover rounded-xl" />
                                    ) : (
                                        <ImageIcon className="h-12 w-12 text-gray-300" />
                                    )}
                                    <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex flex-col items-center justify-center">
                                        <span className="text-white font-bold bg-sb-red px-4 py-2 rounded-full text-sm">Change Image</span>
                                        <span className="text-white text-[10px] mt-2 font-medium">Max size: 5MB</span>
                                    </div>
                                    <input id="about-img-upload" type="file" className="hidden" accept="image/*" onChange={handleAboutImageChange} />
                                </div>
                            </div>
                            <div className="space-y-3">
                                <Label className="text-sm font-bold text-gray-700">Intro / Bottom Text</Label>
                                <Textarea value={getVal('about_intro_text')} onChange={e => updateSetting('about_intro_text', e.target.value)} rows={5} />
                            </div>
                        </div>
                    </div>
                    <div className="flex justify-end pt-4 border-t border-gray-100">
                        <Button type="submit" disabled={processing} className="bg-sb-red hover:bg-sb-dark text-white font-bold h-12 px-8 rounded-xl">
                            {processing ? 'Saving...' : 'Save About Section'}
                        </Button>
                    </div>
                </form>
            </CardContent>
        </Card>
    );
}

function WhyUsSectionEditor() {
    const { siteSettings } = usePage().props;
    const { data, setData, post, processing } = useForm({
        settings: [
            { key: 'why_title', value: siteSettings.why_title || '' },
            { key: 'why_description', value: siteSettings.why_description || '' },
            { key: 'why_acc_1_title', value: siteSettings.why_acc_1_title || '' },
            { key: 'why_acc_1_text', value: siteSettings.why_acc_1_text || '' },
            { key: 'why_acc_2_title', value: siteSettings.why_acc_2_title || '' },
            { key: 'why_acc_2_text', value: siteSettings.why_acc_2_text || '' },
            { key: 'why_acc_3_title', value: siteSettings.why_acc_3_title || '' },
            { key: 'why_acc_3_text', value: siteSettings.why_acc_3_text || '' },
            { key: 'why_image', value: null },
        ]
    });

    const [whyImagePreview, setWhyImagePreview] = useState(siteSettings.why_image ? getAssetUrl(siteSettings.why_image) : null);

    const handleWhyImageChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            if (file.size > 5 * 1024 * 1024) {
                toast.error('The file is too large. Please upload an image smaller than 5MB.');
                e.target.value = '';
                return;
            }
            const newSettings = [...data.settings];
            newSettings[8].value = file;
            setData('settings', newSettings);
            setWhyImagePreview(URL.createObjectURL(file));
        }
    };

    const updateSetting = (key, value) => {
        const newSettings = data.settings.map(s => s.key === key ? { ...s, value } : s);
        setData('settings', newSettings);
    };

    const getVal = (key) => data.settings.find(s => s.key === key)?.value || '';

    const submit = (e) => {
        e.preventDefault();
        post(route('admin.settings.update'), { 
            preserveScroll: true,
            onSuccess: () => toast.success('Why Choose Us section updated successfully!'),
            onError: () => toast.error('Failed to update Why Choose Us section.')
        });
    };

    return (
        <Card className="border-0 shadow-sm rounded-3xl overflow-hidden">
            <CardHeader className="bg-white border-b border-gray-100 px-8 py-6">
                <CardTitle className="text-2xl font-black text-sb-dark">Why Choose Us Section Content</CardTitle>
            </CardHeader>
            <CardContent className="p-8">
                <form onSubmit={submit} className="space-y-8">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <div className="space-y-6">
                            <div className="space-y-3">
                                <Label className="text-sm font-bold text-gray-700">Main Title</Label>
                                <Input value={getVal('why_title')} onChange={e => updateSetting('why_title', e.target.value)} className="h-12" />
                            </div>
                            <div className="space-y-3">
                                <Label className="text-sm font-bold text-gray-700">Main Description</Label>
                                <Textarea value={getVal('why_description')} onChange={e => updateSetting('why_description', e.target.value)} rows={3} />
                            </div>
                            
                            {/* Accreditations */}
                            <div className="space-y-4 pt-4 border-t border-gray-100">
                                <Label className="text-sm font-bold uppercase tracking-widest text-sb-red">Accreditation #1</Label>
                                <div className="grid gap-4">
                                    <Input value={getVal('why_acc_1_title')} onChange={e => updateSetting('why_acc_1_title', e.target.value)} placeholder="Title" />
                                    <Input value={getVal('why_acc_1_text')} onChange={e => updateSetting('why_acc_1_text', e.target.value)} placeholder="Description" />
                                </div>
                            </div>
                            <div className="space-y-4 pt-4 border-t border-gray-100">
                                <Label className="text-sm font-bold uppercase tracking-widest text-sb-red">Accreditation #2</Label>
                                <div className="grid gap-4">
                                    <Input value={getVal('why_acc_2_title')} onChange={e => updateSetting('why_acc_2_title', e.target.value)} placeholder="Title" />
                                    <Input value={getVal('why_acc_2_text')} onChange={e => updateSetting('why_acc_2_text', e.target.value)} placeholder="Description" />
                                </div>
                            </div>
                            <div className="space-y-4 pt-4 border-t border-gray-100">
                                <Label className="text-sm font-bold uppercase tracking-widest text-sb-red">Accreditation #3</Label>
                                <div className="grid gap-4">
                                    <Input value={getVal('why_acc_3_title')} onChange={e => updateSetting('why_acc_3_title', e.target.value)} placeholder="Title" />
                                    <Input value={getVal('why_acc_3_text')} onChange={e => updateSetting('why_acc_3_text', e.target.value)} placeholder="Description" />
                                </div>
                            </div>
                        </div>
                        <div className="space-y-6">
                            <Label className="text-sm font-bold text-gray-700">Section Image</Label>
                            <div 
                                className="border-2 border-dashed border-gray-300 rounded-2xl p-4 h-96 flex flex-col items-center justify-center bg-gray-50 hover:bg-gray-100 cursor-pointer relative group overflow-hidden"
                                onClick={() => document.getElementById('why-img-upload').click()}
                            >
                                {whyImagePreview ? (
                                    <img src={whyImagePreview} alt="Why Us" className="h-full w-full object-cover rounded-xl" />
                                ) : (
                                    <ImageIcon className="h-12 w-12 text-gray-300" />
                                )}
                                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex flex-col items-center justify-center">
                                    <span className="text-white font-bold bg-sb-red px-4 py-2 rounded-full text-sm">Change Image</span>
                                    <span className="text-white text-[10px] mt-2 font-medium">Max size: 5MB</span>
                                </div>
                                <input id="why-img-upload" type="file" className="hidden" accept="image/*" onChange={handleWhyImageChange} />
                            </div>
                        </div>
                    </div>
                    <div className="flex justify-end pt-4 border-t border-gray-100">
                        <Button type="submit" disabled={processing} className="bg-sb-red hover:bg-sb-dark text-white font-bold h-12 px-8 rounded-xl">
                            {processing ? 'Saving...' : 'Save Why Us Section'}
                        </Button>
                    </div>
                </form>
            </CardContent>
        </Card>
    );
}

function ServicesPageEditor() {
    const { siteSettings } = usePage().props;
    const [preview, setPreview] = useState(siteSettings.services_hero_image ? getAssetUrl(siteSettings.services_hero_image) : null);
    
    const { data, setData, post, processing } = useForm({
        settings: [
            { key: 'services_hero_image', value: siteSettings.services_hero_image || '', type: 'image' },
            { key: 'services_hero_title', value: siteSettings.services_hero_title || '' },
            { key: 'services_subtitle', value: siteSettings.services_subtitle || '' },
            { key: 'services_intro_title', value: siteSettings.services_intro_title || '' },
            { key: 'services_intro_description', value: siteSettings.services_intro_description || '' },
        ]
    });

    const updateSetting = (key, value) => {
        const newSettings = data.settings.map(s => s.key === key ? { ...s, value } : s);
        setData('settings', newSettings);
    };

    const getVal = (key) => data.settings.find(s => s.key === key)?.value || '';

    const handleFileChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            if (file.size > 5 * 1024 * 1024) {
                toast.error('The file is too large. Please upload an image smaller than 5MB.');
                e.target.value = '';
                return;
            }
            updateSetting('services_hero_image', file);
            setPreview(URL.createObjectURL(file));
        }
    };

    const submit = (e) => {
        e.preventDefault();
        post(route('admin.settings.update'), { 
            preserveScroll: true,
            onSuccess: () => toast.success('Services page content updated!'),
            onError: () => toast.error('Failed to update services content.')
        });
    };

    return (
        <Card className="border-0 shadow-sm rounded-3xl overflow-hidden">
            <CardHeader className="bg-white border-b border-gray-100 px-8 py-6">
                <CardTitle className="text-2xl font-black text-sb-dark">Services Page Settings</CardTitle>
            </CardHeader>
            <CardContent className="p-8">
                <form onSubmit={submit} className="space-y-8">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                        <div className="space-y-6">
                            <div className="space-y-3">
                                <Label className="text-sm font-bold text-gray-700">Hero Main Title</Label>
                                <Input value={getVal('services_hero_title')} onChange={e => updateSetting('services_hero_title', e.target.value)} className="h-12 border-gray-200" />
                            </div>
                            <div className="space-y-3">
                                <Label className="text-sm font-bold text-gray-700">Hero Subtitle (Orange Text)</Label>
                                <Input value={getVal('services_subtitle')} onChange={e => updateSetting('services_subtitle', e.target.value)} className="h-12 border-gray-200" />
                            </div>
                            <div className="space-y-3">
                                <Label className="text-sm font-bold text-gray-700">Main Intro Title</Label>
                                <Input value={getVal('services_intro_title')} onChange={e => updateSetting('services_intro_title', e.target.value)} className="h-12 border-gray-200" />
                            </div>
                            <div className="space-y-3">
                                <Label className="text-sm font-bold text-gray-700">Intro Description</Label>
                                <Textarea value={getVal('services_intro_description')} onChange={e => updateSetting('services_intro_description', e.target.value)} rows={5} className="border-gray-200 resize-none" />
                            </div>
                        </div>

                        <div className="space-y-3">
                            <Label className="text-sm font-bold text-gray-700">Hero Background Image</Label>
                            <div 
                                className="border-2 border-dashed border-gray-300 rounded-2xl p-4 h-[300px] flex flex-col items-center justify-center bg-gray-50 hover:bg-gray-100 cursor-pointer relative transition-all group overflow-hidden"
                                onClick={() => document.getElementById('services-hero-upload').click()}
                            >
                                {preview ? (
                                    <div className="relative w-full h-full">
                                        <img src={preview} alt="Hero Preview" className="w-full h-full object-cover rounded-xl" />
                                        <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex flex-col items-center justify-center rounded-xl">
                                            <span className="text-white font-bold bg-sb-red px-4 py-2 rounded-full">Change Image</span>
                                            <span className="text-white text-xs mt-2 font-medium">Max size: 5MB</span>
                                        </div>
                                    </div>
                                ) : (
                                    <div className="text-center">
                                        <ImageIcon className="h-10 w-10 text-gray-300 mx-auto mb-2" />
                                        <p className="text-sm text-gray-500 font-medium">Click to upload banner</p>
                                        <p className="text-[10px] text-gray-400 mt-1">Recommended size: under 5MB</p>
                                    </div>
                                )}
                                <input id="services-hero-upload" type="file" className="hidden" accept="image/*" onChange={handleFileChange} />
                            </div>
                        </div>
                    </div>

                    <div className="flex justify-end pt-6 border-t border-gray-100">
                        <Button type="submit" disabled={processing} className="bg-sb-red hover:bg-sb-dark text-white font-bold h-12 px-10 rounded-xl shadow-lg shadow-red-200 hover:shadow-xl transition-all">
                            {processing ? 'Saving...' : 'Save Services Content'}
                        </Button>
                    </div>
                </form>
            </CardContent>
        </Card>
    );
}


export default function Content({ heroSlides, services, projects, testimonials, teamMembers, brandLogos }) {
    // --- State & Forms ---
    const [activeTab, setActiveTab] = useState(new URLSearchParams(window.location.search).get('tab') || 'hero');
    const [isDialogOpen, setIsDialogOpen] = useState(false);
    const [editingItem, setEditingItem] = useState(null);
    const [imagePreview, setImagePreview] = useState(null);

    const { data, setData, post, delete: destroy, reset, clearErrors, errors, processing } = useForm({
        // Generic fields covering all potential tables
        title: '', subtitle: '', button_text: '', is_active: true,
        description: '', icon_class: 'flaticon-architect',
        category: '',
        name: '', role: '', quote: '',
        image_path: null,
    });

    // --- Helpers ---
    const openCreateDialog = () => {
        setEditingItem(null);
        clearErrors();
        reset();
        setImagePreview(null);
        setIsDialogOpen(true);
    };

    const openEditDialog = (item) => {
        setEditingItem(item);
        clearErrors();
        
        // Setup data based on whatever item has
        setData({
            title: item.title || '', subtitle: item.subtitle || '', button_text: item.button_text || '', is_active: item.is_active ?? true,
            description: item.description || '', icon_class: item.icon_class || 'flaticon-architect',
            category: item.category || '',
            name: item.name || '', role: item.role || '', quote: item.quote || '',
            image_path: null, // Don't pre-fill file input
        });

        setImagePreview(item.image_path ? getAssetUrl(item.image_path) : null);
        setIsDialogOpen(true);
    };

    const handleImageChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            if (file.size > 5 * 1024 * 1024) {
                toast.error('The file is too large. Please upload an image smaller than 5MB.');
                e.target.value = '';
                return;
            }
            setData('image_path', file);
            setImagePreview(URL.createObjectURL(file));
        } else {
            setData('image_path', null);
            setImagePreview(editingItem && editingItem.image_path ? getAssetUrl(editingItem.image_path) : null);
        }
    };

    const handleDelete = (endpoint, id) => {
        if (confirm('Are you sure you want to delete this item?')) {
            // Using admin. prefix for ziggy routes
            destroy(route(`admin.${endpoint}`, id), { preserveScroll: true });
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        
        const endpointMap = {
            'hero': 'content.hero',
            'services': 'content.services',
            'projects': 'content.projects',
            'testimonials': 'content.testimonials',
            'team': 'content.team',
            'logos': 'content.logos',
        };

        const prefix = endpointMap[activeTab];

        if (editingItem) {
            post(route(`admin.${prefix}.update`, editingItem.id), {
                preserveScroll: true,
                onSuccess: () => {
                    setIsDialogOpen(false);
                    toast.success('Content updated successfully!');
                },
                onError: () => toast.error('Failed to update content.')
            });
        } else {
            post(route(`admin.${prefix}.store`), {
                preserveScroll: true,
                onSuccess: () => {
                    setIsDialogOpen(false);
                    toast.success('Content created successfully!');
                },
                onError: () => toast.error('Failed to create content.')
            });
        }
    };

    return (
        <AdminLayout>
            <Head title="Manage Content - SafeBuild Admin" />

            <div className="flex justify-between items-center mb-6">
                <h1 className="text-3xl font-bold tracking-tight">Manage Content</h1>
                <Button onClick={openCreateDialog} className="bg-sb-red hover:bg-sb-dark">
                    <Plus className="mr-2 h-4 w-4" /> Add New
                </Button>
            </div>

            <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
                <TabsList className="mb-8 grid w-full grid-cols-2 lg:grid-cols-8 h-auto p-1 bg-white border border-gray-100 shadow-sm rounded-xl overflow-x-auto">
                    <TabsTrigger value="hero" className="py-2.5 rounded-lg data-[state=active]:bg-sb-red data-[state=active]:text-white font-medium text-sm transition-all">Hero Slides</TabsTrigger>
                    <TabsTrigger value="about" className="py-2.5 rounded-lg data-[state=active]:bg-sb-red data-[state=active]:text-white font-medium text-sm transition-all whitespace-nowrap">About Section</TabsTrigger>
                    <TabsTrigger value="services" className="py-2.5 rounded-lg data-[state=active]:bg-sb-red data-[state=active]:text-white font-medium text-sm transition-all whitespace-nowrap">Services List</TabsTrigger>
                    <TabsTrigger value="services_intro" className="py-2.5 rounded-lg data-[state=active]:bg-sb-red data-[state=active]:text-white font-medium text-sm transition-all whitespace-nowrap">Services Intro</TabsTrigger>
                    <TabsTrigger value="why" className="py-2.5 rounded-lg data-[state=active]:bg-sb-red data-[state=active]:text-white font-medium text-sm transition-all">Why Us</TabsTrigger>
                    <TabsTrigger value="projects" className="py-2.5 rounded-lg data-[state=active]:bg-sb-red data-[state=active]:text-white font-medium text-sm transition-all">Projects</TabsTrigger>
                    <TabsTrigger value="testimonials" className="py-2.5 rounded-lg data-[state=active]:bg-sb-red data-[state=active]:text-white font-medium text-sm transition-all">Testimonials</TabsTrigger>
                    <TabsTrigger value="team" className="py-2.5 rounded-lg data-[state=active]:bg-sb-red data-[state=active]:text-white font-medium text-sm transition-all">Team</TabsTrigger>
                    <TabsTrigger value="logos" className="py-2.5 rounded-lg data-[state=active]:bg-sb-red data-[state=active]:text-white font-medium text-sm transition-all whitespace-nowrap">Brand Logos</TabsTrigger>
                </TabsList>

                {/* --- About Section Tab --- */}
                <TabsContent value="about" className="mt-0">
                    <AboutSectionEditor />
                </TabsContent>

                {/* --- Hero Slides Tab --- */}
                <TabsContent value="hero" className="mt-0">
                    <Card className="border-0 shadow-sm rounded-3xl overflow-hidden">
                        <CardHeader className="bg-white border-b border-gray-100 px-8 py-6">
                            <CardTitle className="text-2xl font-black text-sb-dark">Hero Slides</CardTitle>
                        </CardHeader>
                        <CardContent className="p-0">
                            <Table>
                                <TableHeader className="bg-gray-50/50">
                                    <TableRow>
                                        <TableHead className="px-8 font-bold">Image</TableHead>
                                        <TableHead className="font-bold">Title</TableHead>
                                        <TableHead className="font-bold">Subtitle</TableHead>
                                        <TableHead className="font-bold cursor-pointer">Status</TableHead>
                                        <TableHead className="text-right px-8 font-bold">Actions</TableHead>
                                    </TableRow>
                                </TableHeader>
                                <TableBody>
                                    {heroSlides.map((slide) => (
                                        <TableRow key={slide.id} className="hover:bg-gray-50/30 transition-colors">
                                            <TableCell className="px-8 py-4">
                                                <img src={`/${slide.image_path}`} alt="Hero" className="w-32 h-16 object-cover rounded-md border border-gray-200 shadow-sm" />
                                            </TableCell>
                                            <TableCell className="font-bold text-sb-dark text-lg">{slide.title}</TableCell>
                                            <TableCell className="text-gray-500">{slide.subtitle}</TableCell>
                                            <TableCell>
                                                <span className={`px-3 py-1 text-xs font-bold rounded-full ${slide.is_active ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'}`}>
                                                    {slide.is_active ? 'Active' : 'Inactive'}
                                                </span>
                                            </TableCell>
                                            <TableCell className="text-right px-8">
                                                <Button variant="ghost" size="sm" onClick={() => openEditDialog(slide)} className="hover:text-sb-red hover:bg-red-50"><Edit className="h-4 w-4" /></Button>
                                                <Button variant="ghost" size="sm" className="text-gray-400 hover:text-red-600 hover:bg-red-50" onClick={() => handleDelete('content.hero.delete', slide.id)}><Trash2 className="h-4 w-4" /></Button>
                                            </TableCell>
                                        </TableRow>
                                    ))}
                                    {heroSlides.length === 0 && (
                                        <TableRow><TableCell colSpan="5" className="text-center text-muted-foreground py-12">No hero slides found.</TableCell></TableRow>
                                    )}
                                </TableBody>
                            </Table>
                        </CardContent>
                    </Card>
                </TabsContent>

                {/* --- Why Choose Us Tab --- */}
                <TabsContent value="why" className="mt-0">
                    <WhyUsSectionEditor />
                </TabsContent>

                {/* --- Services Intro Tab --- */}
                <TabsContent value="services_intro" className="mt-0">
                    <ServicesPageEditor />
                </TabsContent>

                {/* --- Services Tab --- */}
                <TabsContent value="services" className="mt-0">
                    <Card className="border-0 shadow-sm rounded-3xl overflow-hidden">
                        <CardHeader className="bg-white border-b border-gray-100 px-8 py-6">
                            <CardTitle className="text-2xl font-black text-sb-dark">Services</CardTitle>
                        </CardHeader>
                        <CardContent className="p-0">
                            <Table>
                                <TableHeader className="bg-gray-50/50">
                                    <TableRow>
                                        <TableHead className="px-8 font-bold">Icon</TableHead>
                                        <TableHead className="font-bold">Title</TableHead>
                                        <TableHead className="font-bold">Description</TableHead>
                                        <TableHead className="text-right px-8 font-bold">Actions</TableHead>
                                    </TableRow>
                                </TableHeader>
                                <TableBody>
                                    {services.map((service) => (
                                        <TableRow key={service.id} className="hover:bg-gray-50/30 transition-colors">
                                            <TableCell className="px-8 py-4 flex items-center gap-4">
                                                <div className="w-14 h-14 bg-red-50 rounded-full flex items-center justify-center border border-red-100 flex-shrink-0">
                                                    <i className={`${service.icon_class} text-2xl text-sb-red`}></i>
                                                </div>
                                                {service.image_path && (
                                                    <img src={getAssetUrl(service.image_path)} alt={service.title} className="w-14 h-14 object-cover rounded-md border" />
                                                )}
                                            </TableCell>
                                            <TableCell className="font-bold text-sb-dark text-lg whitespace-nowrap">{service.title}</TableCell>
                                            <TableCell className="text-gray-500 max-w-md truncate">{service.description}</TableCell>
                                            <TableCell className="text-right px-8 whitespace-nowrap">
                                                <Button variant="ghost" size="sm" onClick={() => openEditDialog(service)} className="hover:text-sb-red hover:bg-red-50"><Edit className="h-4 w-4" /></Button>
                                                <Button variant="ghost" size="sm" className="text-gray-400 hover:text-red-600 hover:bg-red-50" onClick={() => handleDelete('content.services.delete', service.id)}><Trash2 className="h-4 w-4" /></Button>
                                            </TableCell>
                                        </TableRow>
                                    ))}
                                    {services.length === 0 && (
                                        <TableRow><TableCell colSpan="4" className="text-center text-muted-foreground py-12">No services found.</TableCell></TableRow>
                                    )}
                                </TableBody>
                            </Table>
                        </CardContent>
                    </Card>
                </TabsContent>

                {/* --- Projects Tab --- */}
                <TabsContent value="projects" className="mt-0">
                    <Card className="border-0 shadow-sm rounded-3xl overflow-hidden">
                        <CardHeader className="bg-white border-b border-gray-100 px-8 py-6">
                            <CardTitle className="text-2xl font-black text-sb-dark">Projects</CardTitle>
                        </CardHeader>
                        <CardContent className="p-0">
                            <Table>
                                <TableHeader className="bg-gray-50/50">
                                    <TableRow>
                                        <TableHead className="px-8 font-bold">Image</TableHead>
                                        <TableHead className="font-bold">Title</TableHead>
                                        <TableHead className="font-bold">Category</TableHead>
                                        <TableHead className="text-right px-8 font-bold">Actions</TableHead>
                                    </TableRow>
                                </TableHeader>
                                <TableBody>
                                    {projects.map((project) => (
                                        <TableRow key={project.id} className="hover:bg-gray-50/30 transition-colors">
                                            <TableCell className="px-8 py-4">
                                                <img src={`/${project.image_path}`} alt="Project" className="w-20 h-20 object-cover rounded-xl border border-gray-200 shadow-sm" />
                                            </TableCell>
                                            <TableCell className="font-bold text-sb-dark text-lg">{project.title}</TableCell>
                                            <TableCell>
                                                <span className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider">{project.category}</span>
                                            </TableCell>
                                            <TableCell className="text-right px-8">
                                                <Button variant="ghost" size="sm" onClick={() => openEditDialog(project)} className="hover:text-sb-red hover:bg-red-50"><Edit className="h-4 w-4" /></Button>
                                                <Button variant="ghost" size="sm" className="text-gray-400 hover:text-red-600 hover:bg-red-50" onClick={() => handleDelete('content.projects.delete', project.id)}><Trash2 className="h-4 w-4" /></Button>
                                            </TableCell>
                                        </TableRow>
                                    ))}
                                    {projects.length === 0 && (
                                        <TableRow><TableCell colSpan="4" className="text-center text-muted-foreground py-12">No projects found.</TableCell></TableRow>
                                    )}
                                </TableBody>
                            </Table>
                        </CardContent>
                    </Card>
                </TabsContent>

                {/* --- Testimonials Tab --- */}
                <TabsContent value="testimonials" className="mt-0">
                    <Card className="border-0 shadow-sm rounded-3xl overflow-hidden">
                        <CardHeader className="bg-white border-b border-gray-100 px-8 py-6">
                            <CardTitle className="text-2xl font-black text-sb-dark">Testimonials</CardTitle>
                        </CardHeader>
                        <CardContent className="p-0">
                            <Table>
                                <TableHeader className="bg-gray-50/50">
                                    <TableRow>
                                        <TableHead className="px-8 font-bold w-24">Avatar</TableHead>
                                        <TableHead className="font-bold w-64">Name</TableHead>
                                        <TableHead className="font-bold">Quote</TableHead>
                                        <TableHead className="text-right px-8 font-bold w-32">Actions</TableHead>
                                    </TableRow>
                                </TableHeader>
                                <TableBody>
                                    {testimonials.map((testimonial) => (
                                        <TableRow key={testimonial.id} className="hover:bg-gray-50/30 transition-colors">
                                            <TableCell className="px-8 py-4">
                                                {testimonial.image_path ? (
                                                    <img src={`/${testimonial.image_path}`} alt={testimonial.name} className="w-14 h-14 object-cover rounded-full border-2 border-white shadow-md shadow-gray-200" />
                                                ) : (
                                                    <img src="/assets/male-avatar-placeholder.png" alt={testimonial.name} className="w-14 h-14 object-cover rounded-full border-2 border-white shadow-md shadow-gray-200" />
                                                )}
                                            </TableCell>
                                            <TableCell>
                                                <div className="font-bold text-sb-dark text-lg">{testimonial.name}</div>
                                                <div className="text-xs text-gray-500 uppercase font-semibold tracking-wider mt-1">{testimonial.role || 'Client'}</div>
                                            </TableCell>
                                            <TableCell className="text-gray-600 italic max-w-[200px] md:max-w-md lg:max-w-lg truncate">"{testimonial.quote}"</TableCell>
                                            <TableCell className="text-right px-8">
                                                <Button variant="ghost" size="sm" onClick={() => openEditDialog(testimonial)} className="hover:text-sb-red hover:bg-red-50"><Edit className="h-4 w-4" /></Button>
                                                <Button variant="ghost" size="sm" className="text-gray-400 hover:text-red-600 hover:bg-red-50" onClick={() => handleDelete('content.testimonials.delete', testimonial.id)}><Trash2 className="h-4 w-4" /></Button>
                                            </TableCell>
                                        </TableRow>
                                    ))}
                                    {testimonials.length === 0 && (
                                        <TableRow><TableCell colSpan="4" className="text-center text-muted-foreground py-12">No testimonials found.</TableCell></TableRow>
                                    )}
                                </TableBody>
                            </Table>
                        </CardContent>
                    </Card>
                </TabsContent>

                {/* --- Team Tab --- */}
                <TabsContent value="team" className="mt-0">
                    <Card className="border-0 shadow-sm rounded-3xl overflow-hidden">
                        <CardHeader className="bg-white border-b border-gray-100 px-8 py-6">
                            <CardTitle className="text-2xl font-black text-sb-dark">Team Members</CardTitle>
                        </CardHeader>
                        <CardContent className="p-0">
                            <Table>
                                <TableHeader className="bg-gray-50/50">
                                    <TableRow>
                                        <TableHead className="px-8 font-bold w-24">Photo</TableHead>
                                        <TableHead className="font-bold w-64">Name</TableHead>
                                        <TableHead className="font-bold">Role</TableHead>
                                        <TableHead className="text-right px-8 font-bold w-32">Actions</TableHead>
                                    </TableRow>
                                </TableHeader>
                                <TableBody>
                                    {teamMembers.map((member) => (
                                        <TableRow key={member.id} className="hover:bg-gray-50/30 transition-colors">
                                            <TableCell className="px-8 py-4">
                                                <img src={`/${member.image_path}`} alt={member.name} className="w-16 h-16 object-cover rounded-2xl border-2 border-white shadow-md shadow-gray-200" />
                                            </TableCell>
                                            <TableCell className="font-bold text-sb-dark text-lg">{member.name}</TableCell>
                                            <TableCell>
                                                <span className="bg-red-50 text-sb-red px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider">{member.role}</span>
                                            </TableCell>
                                            <TableCell className="text-right px-8">
                                                <Button variant="ghost" size="sm" onClick={() => openEditDialog(member)} className="hover:text-sb-red hover:bg-red-50"><Edit className="h-4 w-4" /></Button>
                                                <Button variant="ghost" size="sm" className="text-gray-400 hover:text-red-600 hover:bg-red-50" onClick={() => handleDelete('content.team.delete', member.id)}><Trash2 className="h-4 w-4" /></Button>
                                            </TableCell>
                                        </TableRow>
                                    ))}
                                    {teamMembers.length === 0 && (
                                        <TableRow><TableCell colSpan="4" className="text-center text-muted-foreground py-12">No team members found.</TableCell></TableRow>
                                    )}
                                </TableBody>
                            </Table>
                        </CardContent>
                    </Card>
                </TabsContent>

                {/* --- Brand Logos Tab --- */}
                <TabsContent value="logos" className="mt-0">
                    <Card className="border-0 shadow-sm rounded-3xl overflow-hidden">
                        <CardHeader className="bg-white border-b border-gray-100 px-8 py-6">
                            <CardTitle className="text-2xl font-black text-sb-dark">Brand Logos</CardTitle>
                        </CardHeader>
                        <CardContent className="p-8">
                            <div className="text-sm text-gray-500 mb-6 bg-blue-50/50 text-blue-800 p-4 rounded-xl border border-blue-100 flex items-center">
                                <span className="mr-2">💡</span>
                                Brand Logos only require an image. Title and other fields are ignored. It's recommended to use transparent PNGs.
                            </div>
                            <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-5 gap-6">
                                {brandLogos.map((logo) => (
                                    <div key={logo.id} className="flex flex-col items-center justify-center border border-gray-200 p-6 rounded-2xl bg-white relative group shadow-sm hover:shadow-md transition-all hover:border-sb-red/30 cursor-pointer">
                                         <img src={getAssetUrl(logo.image_path)} alt="Brand Logo" className="h-12 w-auto object-contain grayscale opacity-60 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-300" />
                                         <Button variant="destructive" size="icon" className="absolute -top-3 -right-3 h-8 w-8 opacity-0 group-hover:opacity-100 transition-all scale-75 group-hover:scale-100 shadow-md rounded-full bg-sb-red" onClick={() => handleDelete('content.logos.delete', logo.id)}>
                                            <Trash2 className="h-4 w-4" />
                                         </Button>
                                    </div>
                                ))}
                                {brandLogos.length === 0 && (
                                    <div className="col-span-full flex flex-col items-center justify-center p-12 text-gray-400 border-2 border-dashed rounded-3xl">
                                        <ImageIcon className="w-12 h-12 mb-3 text-gray-200" />
                                        <p>No brand logos uploaded yet.</p>
                                    </div>
                                )}
                            </div>
                        </CardContent>
                    </Card>
                </TabsContent>
            </Tabs>

            {/* --- Global Add/Edit Dialog --- */}
            {/* Added max-w-4xl for larger, more professional dialog sizing */}
            <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
                <DialogContent className="max-w-4xl bg-white p-0 overflow-hidden rounded-3xl shadow-2xl border-0">
                    <DialogHeader className="px-8 py-6 bg-gray-50/80 border-b border-gray-100 m-0">
                        <DialogTitle className="text-2xl font-black text-sb-dark">
                            {editingItem ? `Edit ${activeTab.charAt(0).toUpperCase() + activeTab.slice(1)}` : `Add New ${activeTab.charAt(0).toUpperCase() + activeTab.slice(1)}`}
                        </DialogTitle>
                    </DialogHeader>
                    
                    <form onSubmit={handleSubmit} className="p-8">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            {/* Left Column (Inputs) */}
                            <div className="space-y-6">
                                {/* Title field (used across many tabs) */}
                                {['hero', 'services', 'projects'].includes(activeTab) && (
                                    <div className="space-y-3">
                                        <Label className="text-sm font-bold text-gray-700">Title <span className="text-sb-red">*</span></Label>
                                        <Input value={data.title} onChange={e => setData('title', e.target.value)} placeholder="Enter title" className="h-12 bg-gray-50 border-gray-200 focus-visible:ring-sb-red rounded-xl" />
                                        {errors.title && <p className="text-sm text-sb-red mt-1 font-medium">{errors.title}</p>}
                                    </div>
                                )}

                                {/* Hero Specific */}
                                {activeTab === 'hero' && (
                                    <>
                                        <div className="space-y-3">
                                            <Label className="text-sm font-bold text-gray-700">Subtitle</Label>
                                            <Input value={data.subtitle} onChange={e => setData('subtitle', e.target.value)} placeholder="e.g. Welcome to SafeBuild" className="h-12 bg-gray-50 border-gray-200 focus-visible:ring-sb-red rounded-xl" />
                                            {errors.subtitle && <p className="text-sm text-sb-red mt-1 font-medium">{errors.subtitle}</p>}
                                        </div>
                                    </>
                                )}

                                {/* Services Specific */}
                                {activeTab === 'services' && (
                                    <>
                                        <div className="space-y-3">
                                            <Label className="text-sm font-bold text-gray-700">Description <span className="text-sb-red">*</span></Label>
                                            <Textarea value={data.description} onChange={e => setData('description', e.target.value)} placeholder="Explain the service offering in detail..." rows={4} className="bg-gray-50 border-gray-200 focus-visible:ring-sb-red rounded-xl resize-none" />
                                            {errors.description && <p className="text-sm text-sb-red mt-1 font-medium">{errors.description}</p>}
                                        </div>
                                    </>
                                )}

                                {/* Projects Specific */}
                                {activeTab === 'projects' && (
                                    <div className="space-y-3">
                                        <Label className="text-sm font-bold text-gray-700">Category <span className="text-sb-red">*</span></Label>
                                        <Input value={data.category} onChange={e => setData('category', e.target.value)} placeholder="e.g. Interior Design, Exterior Construction" className="h-12 bg-gray-50 border-gray-200 focus-visible:ring-sb-red rounded-xl" />
                                        {errors.category && <p className="text-sm text-sb-red mt-1 font-medium">{errors.category}</p>}
                                    </div>
                                )}

                                {/* Testimonials Specific */}
                                {activeTab === 'testimonials' && (
                                    <>
                                        <div className="space-y-3">
                                            <Label className="text-sm font-bold text-gray-700">Client Name <span className="text-sb-red">*</span></Label>
                                            <Input value={data.name} onChange={e => setData('name', e.target.value)} placeholder="e.g. John Doe" className="h-12 bg-gray-50 border-gray-200 focus-visible:ring-sb-red rounded-xl" />
                                            {errors.name && <p className="text-sm text-sb-red mt-1 font-medium">{errors.name}</p>}
                                        </div>
                                        <div className="space-y-3">
                                            <Label className="text-sm font-bold text-gray-700">Role / Company</Label>
                                            <Input value={data.role} onChange={e => setData('role', e.target.value)} placeholder="e.g. CEO of TechCorp" className="h-12 bg-gray-50 border-gray-200 focus-visible:ring-sb-red rounded-xl" />
                                        </div>
                                        <div className="space-y-3">
                                            <Label className="text-sm font-bold text-gray-700">Testimonial Quote <span className="text-sb-red">*</span></Label>
                                            <Textarea value={data.quote} onChange={e => setData('quote', e.target.value)} placeholder="Their exact words..." rows={4} className="bg-gray-50 border-gray-200 focus-visible:ring-sb-red rounded-xl resize-none" />
                                            {errors.quote && <p className="text-sm text-sb-red mt-1 font-medium">{errors.quote}</p>}
                                        </div>
                                    </>
                                )}

                                {/* Team Specific */}
                                {activeTab === 'team' && (
                                    <>
                                        <div className="space-y-3">
                                            <Label className="text-sm font-bold text-gray-700">Name <span className="text-sb-red">*</span></Label>
                                            <Input value={data.name} onChange={e => setData('name', e.target.value)} placeholder="e.g. Jane Doe" className="h-12 bg-gray-50 border-gray-200 focus-visible:ring-sb-red rounded-xl" />
                                            {errors.name && <p className="text-sm text-sb-red mt-1 font-medium">{errors.name}</p>}
                                        </div>
                                        <div className="space-y-3">
                                            <Label className="text-sm font-bold text-gray-700">Official Role <span className="text-sb-red">*</span></Label>
                                            <Input value={data.role} onChange={e => setData('role', e.target.value)} placeholder="e.g. Head Architect" className="h-12 bg-gray-50 border-gray-200 focus-visible:ring-sb-red rounded-xl" />
                                            {errors.role && <p className="text-sm text-sb-red mt-1 font-medium">{errors.role}</p>}
                                        </div>
                                    </>
                                )}
                            </div>

                            {/* Right Column (Image Upload & Specialized Picks) */}
                            <div className="space-y-6">
                                {/* Common Image Upload for Tabs that need it */}
                                {['hero', 'services', 'projects', 'testimonials', 'team', 'logos'].includes(activeTab) && (
                                    <div className="space-y-3 h-full flex flex-col">
                                        <Label className="text-sm font-bold text-gray-700">
                                            {activeTab === 'logos' ? 'Brand Logo Image' : 'Featured Image'} 
                                            {(!editingItem && !['testimonials', 'services'].includes(activeTab)) && <span className="text-sb-red ml-1">*</span>}
                                        </Label>
                                        <div 
                                            className="border-2 border-dashed border-gray-300 rounded-2xl p-6 flex-1 flex flex-col items-center justify-center bg-gray-50 hover:bg-gray-100 hover:border-sb-red/50 transition-all cursor-pointer relative group overflow-hidden min-h-[300px]"
                                            onClick={() => document.getElementById('image-upload').click()}
                                        >
                                            {imagePreview ? (
                                                <div className="relative w-full h-full flex items-center justify-center">
                                                    <img src={imagePreview} alt="Preview" className={`max-h-[300px] object-cover rounded-xl ${activeTab === 'logos' ? 'object-contain p-4' : 'shadow-md w-full'}`} />
                                                    <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center rounded-xl backdrop-blur-sm">
                                                        <span className="text-white font-bold bg-sb-red px-4 py-2 rounded-full">Change Image</span>
                                                    </div>
                                                </div>
                                            ) : (
                                                <div className="text-center px-4">
                                                    <div className="w-20 h-20 bg-white rounded-full shadow-sm flex items-center justify-center mx-auto mb-4 border border-gray-100 group-hover:scale-110 transition-transform">
                                                        <ImageIcon className="h-8 w-8 text-sb-red" />
                                                    </div>
                                                    <p className="font-bold text-gray-700 mb-1">Click to browse or drag image here</p>
                                                    <p className="text-sm text-gray-400">Supports JPG, PNG, WEBP (Max 5MB)</p>
                                                </div>
                                            )}
                                            <input id="image-upload" type="file" className="hidden" accept="image/*" onChange={handleImageChange} />
                                        </div>
                                        {errors.image_path && <p className="text-sm text-sb-red mt-1 font-medium">{errors.image_path}</p>}
                                    </div>
                                )}

                                {/* Services Icon Picker instead of text input */}
                                {activeTab === 'services' && (
                                    <div className="space-y-3">
                                        <Label className="text-sm font-bold text-gray-700 flex justify-between items-center">
                                            <span>Select Service Icon <span className="text-sb-red">*</span></span>
                                            <span className="text-xs bg-gray-100 px-2 py-1 rounded text-gray-500 font-normal">Selected: {data.icon_class}</span>
                                        </Label>
                                        
                                        <div className="bg-gray-50 border border-gray-200 rounded-xl p-4 h-[300px] overflow-y-auto custom-scrollbar">
                                            <div className="grid grid-cols-4 gap-3">
                                                {AVAILABLE_ICONS.map((iconClass) => (
                                                    <div 
                                                        key={iconClass}
                                                        onClick={() => setData('icon_class', iconClass)}
                                                        className={`aspect-square flex flex-col items-center justify-center rounded-xl cursor-pointer transition-all border-2 ${
                                                            data.icon_class === iconClass 
                                                            ? 'border-sb-red bg-red-50 text-sb-red shadow-sm' 
                                                            : 'border-transparent bg-white hover:border-gray-300 text-gray-600 hover:text-sb-dark'
                                                        }`}
                                                        title={iconClass}
                                                    >
                                                        <i className={`${iconClass} text-3xl`}></i>
                                                    </div>
                                                ))}
                                            </div>
                                        </div>
                                        {errors.icon_class && <p className="text-sm text-sb-red mt-1 font-medium">{errors.icon_class}</p>}
                                    </div>
                                )}
                            </div>
                        </div>

                        <div className="flex items-center justify-end gap-3 pt-8 mt-8 border-t border-gray-100">
                            <Button type="button" variant="outline" onClick={() => setIsDialogOpen(false)} className="h-12 px-6 rounded-xl border-gray-300 text-gray-700 font-bold hover:bg-gray-50">
                                Cancel
                            </Button>
                            <Button type="submit" disabled={processing} className="h-12 px-8 rounded-xl bg-sb-red hover:bg-sb-dark text-white font-bold shadow-md hover:shadow-lg transition-all">
                                {processing ? 'Saving Changes...' : 'Save Content'}
                            </Button>
                        </div>
                    </form>
                </DialogContent>
            </Dialog>

        </AdminLayout>
    );
}
