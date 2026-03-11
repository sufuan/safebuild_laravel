import React, { useState } from 'react';
import { Head, useForm, router } from '@inertiajs/react';
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

export default function Content({ heroSlides, services, projects, testimonials, teamMembers, brandLogos, blogPosts }) {
    // --- State & Forms ---
    const [activeTab, setActiveTab] = useState('hero');
    const [isDialogOpen, setIsDialogOpen] = useState(false);
    const [editingItem, setEditingItem] = useState(null);
    const [imagePreview, setImagePreview] = useState(null);

    const { data, setData, post, put, delete: destroy, reset, clearErrors, errors, processing } = useForm({
        // Generic fields covering all potential tables
        title: '', subtitle: '', button_text: '', is_active: true,
        description: '', icon_class: '',
        category: '',
        name: '', role: '', quote: '',
        excerpt: '', date: '',
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
            description: item.description || '', icon_class: item.icon_class || '',
            category: item.category || '',
            name: item.name || '', role: item.role || '', quote: item.quote || '',
            excerpt: item.excerpt || '', date: item.date || '',
            image_path: null, // Don't pre-fill file input
        });

        setImagePreview(item.image_path ? `/${item.image_path}` : null);
        setIsDialogOpen(true);
    };

    const handleImageChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            setData('image_path', file);
            setImagePreview(URL.createObjectURL(file));
        } else {
            setData('image_path', null);
            setImagePreview(editingItem && editingItem.image_path ? `/${editingItem.image_path}` : null);
        }
    };

    const handleDelete = (endpoint, id) => {
        if (confirm('Are you sure you want to delete this item?')) {
            destroy(route(endpoint, id), { preserveScroll: true });
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        
        // Define endpoints based on active tab
        const endpointMap = {
            'hero': 'content.hero',
            'services': 'content.services',
            'projects': 'content.projects',
            'testimonials': 'content.testimonials',
            'team': 'content.team',
            'logos': 'content.logos',
            'blog': 'content.blog',
        };

        const prefix = endpointMap[activeTab];

        if (editingItem) {
            // Cannot use PUT method natively with multipart/form-data containing files in Laravel via standard payload
            // We use POST with _method = PUT via Inertia's post method to support file uploads on update
            post(route(`${prefix}.update`, editingItem.id), {
                preserveScroll: true,
                onSuccess: () => setIsDialogOpen(false),
            });
        } else {
            post(route(`${prefix}.store`), {
                preserveScroll: true,
                onSuccess: () => setIsDialogOpen(false),
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
                <TabsList className="mb-8 grid w-full grid-cols-2 md:grid-cols-4 lg:grid-cols-7">
                    <TabsTrigger value="hero">Hero Slides</TabsTrigger>
                    <TabsTrigger value="services">Services</TabsTrigger>
                    <TabsTrigger value="projects">Projects</TabsTrigger>
                    <TabsTrigger value="testimonials">Testimonials</TabsTrigger>
                    <TabsTrigger value="team">Team</TabsTrigger>
                    <TabsTrigger value="logos">Brand Logos</TabsTrigger>
                    <TabsTrigger value="blog">Blog Posts</TabsTrigger>
                </TabsList>

                {/* --- Hero Slides Tab --- */}
                <TabsContent value="hero">
                    <Card>
                        <CardHeader>
                            <CardTitle>Hero Slides</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <Table>
                                <TableHeader>
                                    <TableRow>
                                        <TableHead>Image</TableHead>
                                        <TableHead>Title</TableHead>
                                        <TableHead>Subtitle</TableHead>
                                        <TableHead>Status</TableHead>
                                        <TableHead className="text-right">Actions</TableHead>
                                    </TableRow>
                                </TableHeader>
                                <TableBody>
                                    {heroSlides.map((slide) => (
                                        <TableRow key={slide.id}>
                                            <TableCell>
                                                <img src={`/${slide.image_path}`} alt="Hero" className="w-24 h-12 object-cover rounded-sm border" />
                                            </TableCell>
                                            <TableCell className="font-medium">{slide.title}</TableCell>
                                            <TableCell>{slide.subtitle}</TableCell>
                                            <TableCell>{slide.is_active ? 'Active' : 'Inactive'}</TableCell>
                                            <TableCell className="text-right">
                                                <Button variant="ghost" size="sm" onClick={() => openEditDialog(slide)}><Edit className="h-4 w-4" /></Button>
                                                <Button variant="ghost" size="sm" className="text-red-500" onClick={() => handleDelete('content.hero.delete', slide.id)}><Trash2 className="h-4 w-4" /></Button>
                                            </TableCell>
                                        </TableRow>
                                    ))}
                                    {heroSlides.length === 0 && (
                                        <TableRow><TableCell colSpan="5" className="text-center text-muted-foreground py-8">No hero slides found.</TableCell></TableRow>
                                    )}
                                </TableBody>
                            </Table>
                        </CardContent>
                    </Card>
                </TabsContent>

                {/* --- Services Tab --- */}
                <TabsContent value="services">
                    <Card>
                        <CardHeader>
                            <CardTitle>Services</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <Table>
                                <TableHeader>
                                    <TableRow>
                                        <TableHead>Icon</TableHead>
                                        <TableHead>Title</TableHead>
                                        <TableHead>Description</TableHead>
                                        <TableHead className="text-right">Actions</TableHead>
                                    </TableRow>
                                </TableHeader>
                                <TableBody>
                                    {services.map((service) => (
                                        <TableRow key={service.id}>
                                            <TableCell>
                                                <div className="w-10 h-10 bg-muted rounded-full flex items-center justify-center">
                                                    <i className={`${service.icon_class} text-sb-red`}></i>
                                                </div>
                                            </TableCell>
                                            <TableCell className="font-medium">{service.title}</TableCell>
                                            <TableCell className="truncate max-w-[300px]">{service.description}</TableCell>
                                            <TableCell className="text-right">
                                                <Button variant="ghost" size="sm" onClick={() => openEditDialog(service)}><Edit className="h-4 w-4" /></Button>
                                                <Button variant="ghost" size="sm" className="text-red-500" onClick={() => handleDelete('content.services.delete', service.id)}><Trash2 className="h-4 w-4" /></Button>
                                            </TableCell>
                                        </TableRow>
                                    ))}
                                    {services.length === 0 && (
                                        <TableRow><TableCell colSpan="4" className="text-center text-muted-foreground py-8">No services found.</TableCell></TableRow>
                                    )}
                                </TableBody>
                            </Table>
                        </CardContent>
                    </Card>
                </TabsContent>

                {/* --- Projects Tab --- */}
                <TabsContent value="projects">
                    <Card>
                        <CardHeader>
                            <CardTitle>Projects</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <Table>
                                <TableHeader>
                                    <TableRow>
                                        <TableHead>Image</TableHead>
                                        <TableHead>Title</TableHead>
                                        <TableHead>Category</TableHead>
                                        <TableHead className="text-right">Actions</TableHead>
                                    </TableRow>
                                </TableHeader>
                                <TableBody>
                                    {projects.map((project) => (
                                        <TableRow key={project.id}>
                                            <TableCell>
                                                <img src={`/${project.image_path}`} alt="Project" className="w-16 h-16 object-cover rounded-sm border" />
                                            </TableCell>
                                            <TableCell className="font-medium">{project.title}</TableCell>
                                            <TableCell>{project.category}</TableCell>
                                            <TableCell className="text-right">
                                                <Button variant="ghost" size="sm" onClick={() => openEditDialog(project)}><Edit className="h-4 w-4" /></Button>
                                                <Button variant="ghost" size="sm" className="text-red-500" onClick={() => handleDelete('content.projects.delete', project.id)}><Trash2 className="h-4 w-4" /></Button>
                                            </TableCell>
                                        </TableRow>
                                    ))}
                                    {projects.length === 0 && (
                                        <TableRow><TableCell colSpan="4" className="text-center text-muted-foreground py-8">No projects found.</TableCell></TableRow>
                                    )}
                                </TableBody>
                            </Table>
                        </CardContent>
                    </Card>
                </TabsContent>

                {/* --- Testimonials Tab --- */}
                <TabsContent value="testimonials">
                    <Card>
                        <CardHeader>
                            <CardTitle>Testimonials</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <Table>
                                <TableHeader>
                                    <TableRow>
                                        <TableHead>Avatar</TableHead>
                                        <TableHead>Name</TableHead>
                                        <TableHead>Role</TableHead>
                                        <TableHead>Quote</TableHead>
                                        <TableHead className="text-right">Actions</TableHead>
                                    </TableRow>
                                </TableHeader>
                                <TableBody>
                                    {testimonials.map((testimonial) => (
                                        <TableRow key={testimonial.id}>
                                            <TableCell>
                                                {testimonial.image_path && <img src={`/${testimonial.image_path}`} alt={testimonial.name} className="w-12 h-12 object-cover rounded-full border" />}
                                            </TableCell>
                                            <TableCell className="font-medium">{testimonial.name}</TableCell>
                                            <TableCell>{testimonial.role}</TableCell>
                                            <TableCell className="truncate max-w-[300px]">{testimonial.quote}</TableCell>
                                            <TableCell className="text-right">
                                                <Button variant="ghost" size="sm" onClick={() => openEditDialog(testimonial)}><Edit className="h-4 w-4" /></Button>
                                                <Button variant="ghost" size="sm" className="text-red-500" onClick={() => handleDelete('content.testimonials.delete', testimonial.id)}><Trash2 className="h-4 w-4" /></Button>
                                            </TableCell>
                                        </TableRow>
                                    ))}
                                    {testimonials.length === 0 && (
                                        <TableRow><TableCell colSpan="5" className="text-center text-muted-foreground py-8">No testimonials found.</TableCell></TableRow>
                                    )}
                                </TableBody>
                            </Table>
                        </CardContent>
                    </Card>
                </TabsContent>

                {/* --- Team Tab --- */}
                <TabsContent value="team">
                    <Card>
                        <CardHeader>
                            <CardTitle>Team Members</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <Table>
                                <TableHeader>
                                    <TableRow>
                                        <TableHead>Photo</TableHead>
                                        <TableHead>Name</TableHead>
                                        <TableHead>Role</TableHead>
                                        <TableHead className="text-right">Actions</TableHead>
                                    </TableRow>
                                </TableHeader>
                                <TableBody>
                                    {teamMembers.map((member) => (
                                        <TableRow key={member.id}>
                                            <TableCell>
                                                <img src={`/${member.image_path}`} alt={member.name} className="w-12 h-12 object-cover rounded-full border" />
                                            </TableCell>
                                            <TableCell className="font-medium">{member.name}</TableCell>
                                            <TableCell>{member.role}</TableCell>
                                            <TableCell className="text-right">
                                                <Button variant="ghost" size="sm" onClick={() => openEditDialog(member)}><Edit className="h-4 w-4" /></Button>
                                                <Button variant="ghost" size="sm" className="text-red-500" onClick={() => handleDelete('content.team.delete', member.id)}><Trash2 className="h-4 w-4" /></Button>
                                            </TableCell>
                                        </TableRow>
                                    ))}
                                    {teamMembers.length === 0 && (
                                        <TableRow><TableCell colSpan="4" className="text-center text-muted-foreground py-8">No team members found.</TableCell></TableRow>
                                    )}
                                </TableBody>
                            </Table>
                        </CardContent>
                    </Card>
                </TabsContent>

                {/* --- Brand Logos Tab --- */}
                <TabsContent value="logos">
                    <Card>
                        <CardHeader>
                            <CardTitle>Brand Logos</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <div className="grid grid-cols-2 md:grid-cols-6 gap-4 border p-4 rounded-md bg-muted/20">
                                {brandLogos.map((logo) => (
                                    <div key={logo.id} className="flex flex-col items-center justify-center border p-4 rounded bg-white relative group">
                                         <img src={`/${logo.image_path}`} alt="Brand Logo" className="h-10 object-contain grayscale group-hover:grayscale-0 transition-all" />
                                         <Button variant="destructive" size="icon" className="absolute -top-2 -right-2 h-6 w-6 opacity-0 group-hover:opacity-100 transition-opacity" onClick={() => handleDelete('content.logos.delete', logo.id)}>
                                            <Trash2 className="h-3 w-3" />
                                         </Button>
                                    </div>
                                ))}
                                {brandLogos.length === 0 && (
                                    <div className="col-span-full text-center text-muted-foreground py-8">No brand logos found.</div>
                                )}
                            </div>
                        </CardContent>
                    </Card>
                </TabsContent>

                {/* --- Blog Posts Tab --- */}
                <TabsContent value="blog">
                    <Card>
                        <CardHeader>
                            <CardTitle>Blog Posts</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <Table>
                                <TableHeader>
                                    <TableRow>
                                        <TableHead>Cover</TableHead>
                                        <TableHead>Title</TableHead>
                                        <TableHead>Date Published</TableHead>
                                        <TableHead className="text-right">Actions</TableHead>
                                    </TableRow>
                                </TableHeader>
                                <TableBody>
                                    {blogPosts.map((post) => (
                                        <TableRow key={post.id}>
                                            <TableCell>
                                               <img src={`/${post.image_path}`} alt="Blog Cover" className="w-16 h-12 object-cover rounded-sm border" />
                                            </TableCell>
                                            <TableCell className="font-medium">{post.title}</TableCell>
                                            <TableCell>{post.date}</TableCell>
                                            <TableCell className="text-right">
                                                <Button variant="ghost" size="sm" onClick={() => openEditDialog(post)}><Edit className="h-4 w-4" /></Button>
                                                <Button variant="ghost" size="sm" className="text-red-500" onClick={() => handleDelete('content.blog.delete', post.id)}><Trash2 className="h-4 w-4" /></Button>
                                            </TableCell>
                                        </TableRow>
                                    ))}
                                    {blogPosts.length === 0 && (
                                        <TableRow><TableCell colSpan="4" className="text-center text-muted-foreground py-8">No blog posts found.</TableCell></TableRow>
                                    )}
                                </TableBody>
                            </Table>
                        </CardContent>
                    </Card>
                </TabsContent>

            </Tabs>

            {/* --- Global Add/Edit Dialog --- */}
            <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
                <DialogContent className="max-w-2xl bg-white max-h-[90vh] overflow-y-auto">
                    <DialogHeader>
                        <DialogTitle>{editingItem ? 'Edit Item' : 'Add New Item'}</DialogTitle>
                    </DialogHeader>
                    
                    <form onSubmit={handleSubmit} className="space-y-6 pt-4">
                        
                        {/* Common Image Upload for Tabs that need it */}
                        {['hero', 'projects', 'testimonials', 'team', 'logos', 'blog'].includes(activeTab) && (
                            <div className="space-y-2">
                                <Label>Image {(!editingItem && activeTab !== 'testimonials') && <span className="text-red-500">*</span>}</Label>
                                <div className="border-2 border-dashed rounded-lg p-6 flex flex-col items-center justify-center bg-gray-50 hover:bg-gray-100 transition-colors cursor-pointer relative"
                                    onClick={() => document.getElementById('image-upload').click()}>
                                    {imagePreview ? (
                                        <img src={imagePreview} alt="Preview" className="max-h-[200px] object-contain" />
                                    ) : (
                                        <>
                                            <ImageIcon className="h-10 w-10 text-gray-400 mb-2" />
                                            <p className="text-sm text-gray-500">Click to upload image</p>
                                        </>
                                    )}
                                    <input id="image-upload" type="file" className="hidden" accept="image/*" onChange={handleImageChange} />
                                </div>
                                {errors.image_path && <p className="text-sm text-red-500 mt-1">{errors.image_path}</p>}
                            </div>
                        )}

                        {/* Title field (used across many tabs) */}
                        {['hero', 'services', 'projects', 'blog'].includes(activeTab) && (
                            <div className="space-y-2">
                                <Label>Title <span className="text-red-500">*</span></Label>
                                <Input value={data.title} onChange={e => setData('title', e.target.value)} placeholder="Enter title" />
                                {errors.title && <p className="text-sm text-red-500 mt-1">{errors.title}</p>}
                            </div>
                        )}

                        {/* Hero Specific */}
                        {activeTab === 'hero' && (
                            <>
                                <div className="space-y-2">
                                    <Label>Subtitle</Label>
                                    <Input value={data.subtitle} onChange={e => setData('subtitle', e.target.value)} placeholder="Welcome to" />
                                    {errors.subtitle && <p className="text-sm text-red-500 mt-1">{errors.subtitle}</p>}
                                </div>
                                <div className="space-y-2">
                                    <Label>Button Text</Label>
                                    <Input value={data.button_text} onChange={e => setData('button_text', e.target.value)} placeholder="Discover More" />
                                </div>
                            </>
                        )}

                        {/* Services Specific */}
                        {activeTab === 'services' && (
                            <>
                                <div className="space-y-2">
                                    <Label>Description <span className="text-red-500">*</span></Label>
                                    <Textarea value={data.description} onChange={e => setData('description', e.target.value)} placeholder="Service description..." rows={3} />
                                    {errors.description && <p className="text-sm text-red-500 mt-1">{errors.description}</p>}
                                </div>
                                <div className="space-y-2">
                                    <Label>Icon Class (Flaticon) <span className="text-red-500">*</span></Label>
                                    <Input value={data.icon_class} onChange={e => setData('icon_class', e.target.value)} placeholder="flaticon-architect" />
                                    {errors.icon_class && <p className="text-sm text-red-500 mt-1">{errors.icon_class}</p>}
                                </div>
                            </>
                        )}

                        {/* Projects Specific */}
                        {activeTab === 'projects' && (
                            <div className="space-y-2">
                                <Label>Category <span className="text-red-500">*</span></Label>
                                <Input value={data.category} onChange={e => setData('category', e.target.value)} placeholder="e.g. Design, Real Estate" />
                                {errors.category && <p className="text-sm text-red-500 mt-1">{errors.category}</p>}
                            </div>
                        )}

                        {/* Testimonials Specific */}
                        {activeTab === 'testimonials' && (
                            <>
                                <div className="space-y-2">
                                    <Label>Name <span className="text-red-500">*</span></Label>
                                    <Input value={data.name} onChange={e => setData('name', e.target.value)} placeholder="John Doe" />
                                    {errors.name && <p className="text-sm text-red-500 mt-1">{errors.name}</p>}
                                </div>
                                <div className="space-y-2">
                                    <Label>Role</Label>
                                    <Input value={data.role} onChange={e => setData('role', e.target.value)} placeholder="Property Owner" />
                                </div>
                                <div className="space-y-2">
                                    <Label>Quote <span className="text-red-500">*</span></Label>
                                    <Textarea value={data.quote} onChange={e => setData('quote', e.target.value)} placeholder="Their testimonial..." rows={4} />
                                    {errors.quote && <p className="text-sm text-red-500 mt-1">{errors.quote}</p>}
                                </div>
                            </>
                        )}

                        {/* Team Specific */}
                        {activeTab === 'team' && (
                            <>
                                <div className="space-y-2">
                                    <Label>Name <span className="text-red-500">*</span></Label>
                                    <Input value={data.name} onChange={e => setData('name', e.target.value)} placeholder="Jane Doe" />
                                    {errors.name && <p className="text-sm text-red-500 mt-1">{errors.name}</p>}
                                </div>
                                <div className="space-y-2">
                                    <Label>Role <span className="text-red-500">*</span></Label>
                                    <Input value={data.role} onChange={e => setData('role', e.target.value)} placeholder="Project Manager" />
                                    {errors.role && <p className="text-sm text-red-500 mt-1">{errors.role}</p>}
                                </div>
                            </>
                        )}

                        {/* Logos Specific */}
                        {activeTab === 'logos' && (
                            <div className="text-sm text-muted-foreground p-4 bg-gray-50 rounded border">
                                Brand Logos only require an image. Title and other fields are ignored. It's recommended to use transparent PNGs.
                            </div>
                        )}

                        {/* Blog Specific */}
                        {activeTab === 'blog' && (
                            <>
                                <div className="space-y-2">
                                    <Label>Date Published <span className="text-red-500">*</span></Label>
                                    <Input value={data.date} onChange={e => setData('date', e.target.value)} placeholder="15 Jun 2023" />
                                    {errors.date && <p className="text-sm text-red-500 mt-1">{errors.date}</p>}
                                </div>
                                <div className="space-y-2">
                                    <Label>Excerpt <span className="text-red-500">*</span></Label>
                                    <Textarea value={data.excerpt} onChange={e => setData('excerpt', e.target.value)} placeholder="Brief summary of the post..." rows={3} />
                                    {errors.excerpt && <p className="text-sm text-red-500 mt-1">{errors.excerpt}</p>}
                                </div>
                            </>
                        )}

                        <DialogFooter className="pt-4">
                            <Button type="button" variant="outline" onClick={() => setIsDialogOpen(false)}>Cancel</Button>
                            <Button type="submit" disabled={processing} className="bg-sb-red hover:bg-sb-dark">
                                {processing ? 'Saving...' : 'Save Changes'}
                            </Button>
                        </DialogFooter>
                    </form>
                </DialogContent>
            </Dialog>

        </AdminLayout>
    );
} 
