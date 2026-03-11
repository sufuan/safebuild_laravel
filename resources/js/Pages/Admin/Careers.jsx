import React, { useState } from 'react';
import AdminLayout from '@/Layouts/AdminLayout';
import { Head, useForm, router } from '@inertiajs/react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { PlusCircle, Edit2, Trash2, BriefcaseBusiness, Star, FileText, LayoutList } from 'lucide-react';

export default function Careers({ perks, positions, applications }) {
    return (
        <AdminLayout>
            <Head title="Careers Management" />

            <div className="flex-1 space-y-6 p-8 pt-6 bg-gray-50/50">
                <div className="flex items-center justify-between mb-8">
                    <div>
                        <h2 className="text-4xl font-black tracking-tight text-sb-dark">Careers CMS</h2>
                        <p className="text-muted-foreground mt-2 text-lg">
                            Manage perks, open positions, and view incoming applications.
                        </p>
                    </div>
                </div>

                <Tabs defaultValue="perks" className="w-full">
                    <TabsList className="grid w-full lg:w-[600px] grid-cols-3 mb-8 h-12 p-1 bg-white border shadow-sm rounded-xl">
                        <TabsTrigger value="perks" className="rounded-lg data-[state=active]:bg-sb-red data-[state=active]:text-white transition-all text-md font-medium"><Star className="w-4 h-4 mr-2" /> Perks</TabsTrigger>
                        <TabsTrigger value="positions" className="rounded-lg data-[state=active]:bg-sb-red data-[state=active]:text-white transition-all text-md font-medium"><BriefcaseBusiness className="w-4 h-4 mr-2" /> Positions</TabsTrigger>
                        <TabsTrigger value="applications" className="rounded-lg data-[state=active]:bg-sb-red data-[state=active]:text-white transition-all text-md font-medium"><FileText className="w-4 h-4 mr-2" /> Applications</TabsTrigger>
                    </TabsList>

                    <TabsContent value="perks" className="mt-0 outline-none">
                        <SplitPane section="perks" data={perks} />
                    </TabsContent>
                    
                    <TabsContent value="positions" className="mt-0 outline-none">
                        <SplitPane section="positions" data={positions} />
                    </TabsContent>

                    <TabsContent value="applications" className="mt-0 outline-none">
                        <ApplicationsPane data={applications} />
                    </TabsContent>
                </Tabs>
            </div>
        </AdminLayout>
    );
}

// Split Pane Component (List Left, Form Right)
function SplitPane({ section, data }) {
    const isPerk = section === 'perks';
    const [editingItem, setEditingItem] = useState(null);

    const { data: formData, setData, post, put, delete: destroy, reset, processing, errors } = useForm(
        isPerk 
        ? { title: '', description: '', icon_class: '', order: '' }
        : { title: '', location: '', type: '', experience: '' }
    );

    const handleEdit = (item) => {
        setEditingItem(item);
        setData(item);
    };

    const handleAddNew = () => {
        setEditingItem(null);
        reset();
    };

    const handleDelete = (id) => {
        if(confirm(`Are you sure you want to delete this ${isPerk ? 'perk' : 'position'}?`)) {
            destroy(route(`admin.careers.${section}.delete`, id), {
                preserveScroll: true,
                onSuccess: () => {
                    if (editingItem && editingItem.id === id) handleAddNew();
                }
            });
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (editingItem) {
            put(route(`admin.careers.${section}.update`, editingItem.id), {
                preserveScroll: true,
                onSuccess: () => handleAddNew(),
            });
        } else {
            post(route(`admin.careers.${section}.store`), {
                preserveScroll: true,
                onSuccess: () => handleAddNew(),
            });
        }
    };

    return (
        <div className="flex flex-col xl:flex-row gap-8 items-start">
            {/* Left Side: List */}
            <div className="w-full xl:w-2/3 bg-white p-6 rounded-3xl shadow-sm border border-gray-100 flex flex-col min-h-[600px]">
                <div className="flex items-center justify-between mb-6 pb-4 border-b border-gray-100">
                    <h3 className="text-xl font-bold flex items-center gap-2">
                        <LayoutList className="w-5 h-5 text-sb-red" />
                        {isPerk ? 'All Career Perks' : 'Open Positions'}
                    </h3>
                    <Button onClick={handleAddNew} className="bg-sb-red hover:bg-sb-dark text-white rounded-full px-6 transition-all duration-300 shadow-md hover:shadow-lg">
                        <PlusCircle className="mr-2 h-4 w-4" /> Add New
                    </Button>
                </div>
                
                <div className="space-y-4 flex-1 overflow-y-auto pr-2 custom-scrollbar">
                    {data.length === 0 ? (
                        <div className="flex flex-col items-center justify-center h-64 text-gray-400">
                            <BriefcaseBusiness className="w-16 h-16 mb-4 opacity-20" />
                            <p>No {isPerk ? 'perks' : 'positions'} found. Create one to get started.</p>
                        </div>
                    ) : (
                        data.map((item) => (
                            <div 
                                key={item.id} 
                                onClick={() => handleEdit(item)}
                                className={`group flex flex-col sm:flex-row justify-between items-start sm:items-center p-5 rounded-2xl border transition-all duration-300 cursor-pointer hover:shadow-md ${
                                    editingItem?.id === item.id 
                                    ? 'border-sb-red bg-red-50/50 shadow-sm' 
                                    : 'border-gray-100 bg-white hover:border-gray-300'
                                }`}
                            >
                                <div className="flex items-start gap-4 mb-4 sm:mb-0">
                                    {isPerk && (
                                        <div className="w-12 h-12 rounded-full bg-gray-100 flex items-center justify-center text-sb-red shrink-0 group-hover:bg-white group-hover:shadow-sm transition-colors">
                                            <i className={`${item.icon_class} text-xl`}></i>
                                        </div>
                                    )}
                                    <div className="flex flex-col">
                                        <h4 className="font-bold text-sb-dark text-lg group-hover:text-sb-red transition-colors">{item.title}</h4>
                                        <p className="text-sm text-gray-500 line-clamp-1 mt-1">
                                            {isPerk ? item.description : `${item.location} • ${item.type} • ${item.experience}`}
                                        </p>
                                    </div>
                                </div>
                                
                                <div className="flex gap-2 w-full sm:w-auto justify-end shrink-0 opacity-100 sm:opacity-0 sm:group-hover:opacity-100 transition-opacity">
                                    <Button size="icon" variant="ghost" className="h-9 w-9 text-blue-600 hover:text-blue-700 hover:bg-blue-50 rounded-full" onClick={(e) => { e.stopPropagation(); handleEdit(item); }}>
                                        <Edit2 className="h-4 w-4" />
                                    </Button>
                                    <Button size="icon" variant="ghost" className="h-9 w-9 text-red-600 hover:text-red-700 hover:bg-red-50 rounded-full" onClick={(e) => { e.stopPropagation(); handleDelete(item.id); }}>
                                        <Trash2 className="h-4 w-4" />
                                    </Button>
                                </div>
                            </div>
                        ))
                    )}
                </div>
            </div>

            {/* Right Side: Form */}
            <div className="w-full xl:w-1/3 bg-white p-8 rounded-3xl shadow-xl border border-gray-100 sticky top-6">
                <div className="mb-8">
                    <span className="inline-block py-1 px-3 rounded-full bg-gray-100 text-xs font-bold text-gray-500 uppercase tracking-wider mb-3">
                        {editingItem ? 'Edit Mode' : 'Create Mode'}
                    </span>
                    <h3 className="text-2xl font-black text-sb-dark">
                        {editingItem ? `Edit ${isPerk ? 'Perk' : 'Position'}` : `New ${isPerk ? 'Perk' : 'Position'}`}
                    </h3>
                    <p className="text-sm text-gray-400 mt-2">
                        {editingItem ? 'Update the details below to modify the item.' : 'Fill in the details to create a new item.'}
                    </p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-6">
                    {/* Common Field */}
                    <div className="space-y-2">
                        <Label htmlFor="title" className="font-bold text-gray-700">Title <span className="text-red-500">*</span></Label>
                        <Input 
                            id="title" 
                            name="title" 
                            value={formData.title} 
                            onChange={e => setData('title', e.target.value)} 
                            className="bg-gray-50/50 border-gray-200 focus-visible:ring-sb-red h-12 rounded-xl"
                            placeholder={isPerk ? "e.g., Health Insurance" : "e.g., Senior Architect"}
                            required
                        />
                        {errors.title && <p className="text-sm text-red-500">{errors.title}</p>}
                    </div>

                    {isPerk ? (
                        <>
                            <div className="space-y-2">
                                <Label htmlFor="icon_class" className="font-bold text-gray-700">Icon Class (FontAwesome/Flaticon) <span className="text-red-500">*</span></Label>
                                <Input 
                                    id="icon_class" 
                                    name="icon_class" 
                                    value={formData.icon_class} 
                                    onChange={e => setData('icon_class', e.target.value)} 
                                    className="bg-gray-50/50 border-gray-200 focus-visible:ring-sb-red h-12 rounded-xl"
                                    placeholder="e.g., fas fa-heart"
                                    required
                                />
                                {errors.icon_class && <p className="text-sm text-red-500">{errors.icon_class}</p>}
                            </div>
                            <div className="space-y-2">
                                <Label htmlFor="description" className="font-bold text-gray-700">Description <span className="text-red-500">*</span></Label>
                                <Textarea 
                                    id="description" 
                                    name="description" 
                                    value={formData.description} 
                                    onChange={e => setData('description', e.target.value)} 
                                    className="bg-gray-50/50 border-gray-200 focus-visible:ring-sb-red min-h-[120px] rounded-xl resize-none"
                                    placeholder="Describe this perk..."
                                    required
                                />
                                {errors.description && <p className="text-sm text-red-500">{errors.description}</p>}
                            </div>
                            <div className="space-y-2">
                                <Label htmlFor="order" className="font-bold text-gray-700">Display Order</Label>
                                <Input 
                                    type="number"
                                    id="order" 
                                    name="order" 
                                    value={formData.order} 
                                    onChange={e => setData('order', e.target.value)} 
                                    className="bg-gray-50/50 border-gray-200 focus-visible:ring-sb-red h-12 rounded-xl"
                                />
                                {errors.order && <p className="text-sm text-red-500">{errors.order}</p>}
                            </div>
                        </>
                    ) : (
                        <>
                            <div className="space-y-2">
                                <Label htmlFor="location" className="font-bold text-gray-700">Location <span className="text-red-500">*</span></Label>
                                <Input 
                                    id="location" 
                                    name="location" 
                                    value={formData.location} 
                                    onChange={e => setData('location', e.target.value)} 
                                    className="bg-gray-50/50 border-gray-200 focus-visible:ring-sb-red h-12 rounded-xl"
                                    placeholder="e.g., Victoria, BC"
                                    required
                                />
                                {errors.location && <p className="text-sm text-red-500">{errors.location}</p>}
                            </div>
                            <div className="grid grid-cols-2 gap-4">
                                <div className="space-y-2">
                                    <Label htmlFor="type" className="font-bold text-gray-700">Job Type <span className="text-red-500">*</span></Label>
                                    <Input 
                                        id="type" 
                                        name="type" 
                                        value={formData.type} 
                                        onChange={e => setData('type', e.target.value)} 
                                        className="bg-gray-50/50 border-gray-200 focus-visible:ring-sb-red h-12 rounded-xl"
                                        placeholder="e.g., Full-Time"
                                        required
                                    />
                                    {errors.type && <p className="text-sm text-red-500">{errors.type}</p>}
                                </div>
                                <div className="space-y-2">
                                    <Label htmlFor="experience" className="font-bold text-gray-700">Category / Exp. <span className="text-red-500">*</span></Label>
                                    <Input 
                                        id="experience" 
                                        name="experience" 
                                        value={formData.experience} 
                                        onChange={e => setData('experience', e.target.value)} 
                                        className="bg-gray-50/50 border-gray-200 focus-visible:ring-sb-red h-12 rounded-xl"
                                        placeholder="e.g., Trades"
                                        required
                                    />
                                    {errors.experience && <p className="text-sm text-red-500">{errors.experience}</p>}
                                </div>
                            </div>
                        </>
                    )}

                    <div className="pt-6 flex gap-4">
                        <Button type="submit" disabled={processing} className="w-full h-14 bg-sb-dark hover:bg-black text-white rounded-xl text-lg font-bold transition-all shadow-lg hover:shadow-xl">
                            {editingItem ? 'Save Changes' : 'Create Item'}
                        </Button>
                        {editingItem && (
                            <Button type="button" variant="outline" onClick={handleAddNew} className="h-14 px-6 rounded-xl border-gray-200 text-gray-600 hover:bg-gray-50">
                                Cancel
                            </Button>
                        )}
                    </div>
                </form>
            </div>
        </div>
    );
}

// Applications Pane (View & Delete Only)
function ApplicationsPane({ data }) {
    const { delete: destroy } = useForm();

    const handleDelete = (id) => {
        if(confirm('Are you sure you want to delete this job application?')) {
            destroy(route('admin.careers.applications.delete', id), {
                preserveScroll: true
            });
        }
    };

    return (
        <div className="w-full bg-white p-8 rounded-3xl shadow-sm border border-gray-100 min-h-[600px]">
            <div className="flex items-center justify-between mb-8 pb-4 border-b border-gray-100">
                <h3 className="text-2xl font-black flex items-center gap-3 text-sb-dark">
                    <FileText className="w-6 h-6 text-sb-red" />
                    Job Applications Review
                </h3>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
                {data.length === 0 ? (
                    <div className="col-span-full flex flex-col items-center justify-center p-16 text-gray-400 border-2 border-dashed border-gray-200 rounded-3xl">
                        <FileText className="w-16 h-16 mb-4 opacity-20" />
                        <p className="text-lg">No job applications received yet.</p>
                    </div>
                ) : (
                    data.map(app => (
                        <div key={app.id} className="bg-gray-50/50 border border-gray-200 rounded-2xl p-6 hover:shadow-lg transition-all duration-300 flex flex-col justify-between">
                            <div>
                                <div className="flex justify-between items-start mb-4">
                                    <div>
                                        <h4 className="font-black text-xl text-sb-dark mb-1">{app.name}</h4>
                                        <a href={`mailto:${app.email}`} className="text-sb-red hover:underline text-sm font-medium">{app.email}</a>
                                        {app.phone && <p className="text-sm text-gray-500 mt-1">{app.phone}</p>}
                                    </div>
                                    <Button size="icon" variant="ghost" className="h-8 w-8 text-red-500 hover:text-red-700 hover:bg-red-50 rounded-full shrink-0" onClick={() => handleDelete(app.id)}>
                                        <Trash2 className="h-4 w-4" />
                                    </Button>
                                </div>
                                <div className="inline-block bg-sb-red/10 text-sb-red text-xs font-bold px-3 py-1 rounded-full mb-4 line-clamp-1">
                                    Applied for: {app.open_position?.title || `Position #${app.open_position_id}`}
                                </div>
                                {app.cover_letter && (
                                    <div className="mt-2 p-4 bg-white rounded-xl border border-gray-100 text-sm italic text-gray-600 line-clamp-3">
                                        "{app.cover_letter}"
                                    </div>
                                )}
                            </div>
                            {app.resume_path && (
                                <div className="mt-6 pt-4 border-t border-gray-200">
                                    <a href={`/${app.resume_path}`} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center w-full py-3 bg-sb-dark text-white rounded-xl hover:bg-black transition-colors font-medium text-sm">
                                        <FileText className="w-4 h-4 mr-2" /> View Resume
                                    </a>
                                </div>
                            )}
                        </div>
                    ))
                )}
            </div>
        </div>
    );
}
