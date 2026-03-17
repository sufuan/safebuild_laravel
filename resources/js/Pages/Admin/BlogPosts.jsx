import React, { useState } from 'react';
import AdminLayout from '@/Layouts/AdminLayout';
import { Head, useForm } from '@inertiajs/react';
import { toast } from 'sonner';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Edit2, Trash2, Plus, Calendar, Clock, User, FileText, Image as ImageIcon, Eye, CheckCircle2 } from 'lucide-react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';

export default function BlogPosts({ posts }) {
    const [selectedPost, setSelectedPost] = useState(null);
    const [isCreating, setIsCreating] = useState(false);
    const [imagePreview, setImagePreview] = useState(null);

    const { data, setData, post, delete: destroy, reset, clearErrors, errors, processing } = useForm({
        title: '',
        excerpt: '',
        content: '',
        date: '',
        read_time: '',
        author: '',
        image_path: null,
        is_active: true,
    });

    const handleSelect = (post) => {
        setIsCreating(false);
        setSelectedPost(post);
        clearErrors();
        
        setData({
            title: post.title || '',
            excerpt: post.excerpt || '',
            content: post.content || '',
            date: post.date || '',
            read_time: post.read_time || '',
            author: post.author || '',
            image_path: null,
            is_active: post.is_active ?? true,
        });
        setImagePreview(post.image_path ? `/${post.image_path}` : null);
    };

    const handleCreateNew = () => {
        setSelectedPost(null);
        setIsCreating(true);
        clearErrors();
        reset();
        setImagePreview(null);
        // Default today's date
        const today = new Date().toLocaleDateString('en-GB', { day: 'numeric', month: 'short', year: 'numeric' });
        setData('date', today);
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
            setImagePreview(selectedPost && selectedPost.image_path ? `/${selectedPost.image_path}` : null);
        }
    };

    const handleDelete = (id) => {
        if(confirm('Are you sure you want to delete this blog post?')) {
            destroy(route('admin.blog.delete', id), {
                preserveScroll: true,
                onSuccess: () => {
                    if (selectedPost && selectedPost.id === id) {
                        setSelectedPost(null);
                        setIsCreating(false);
                    }
                }
            });
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        
        if (isCreating) {
            post(route('admin.blog.store'), {
                preserveScroll: true,
                onSuccess: () => {
                    setIsCreating(false);
                    reset();
                }
            });
        } else if (selectedPost) {
            post(route('admin.blog.update', selectedPost.id), {
                preserveScroll: true
            });
        }
    };

    const quillModules = {
        toolbar: [
            [{ 'header': [1, 2, 3, false] }],
            ['bold', 'italic', 'underline', 'strike'],
            [{ 'list': 'ordered'}, { 'list': 'bullet' }],
            ['link', 'blockquote', 'code-block'],
            ['clean']
        ]
    };

    return (
        <AdminLayout>
            <Head title="Blog Posts" />

            <div className="flex-1 space-y-6 p-8 pt-6 bg-gray-50/50 min-h-screen">
                <div className="flex items-center justify-between mb-8">
                    <div>
                        <h2 className="text-4xl font-black tracking-tight text-sb-dark flex items-center gap-3">
                            <FileText className="w-8 h-8 text-sb-red" />
                            Blog Management
                        </h2>
                        <p className="text-muted-foreground mt-2 text-lg">
                            Create and publish articles using the rich text editor.
                        </p>
                    </div>
                    <Button 
                        onClick={handleCreateNew} 
                        className="bg-sb-red hover:bg-sb-dark text-white px-6 h-12 rounded-xl text-md font-bold shadow-md transition-all gap-2"
                    >
                        <Plus className="w-5 h-5" /> Write New Post
                    </Button>
                </div>

                <div className="flex flex-col xl:flex-row gap-8 items-start">
                    {/* Left Pane - Posts List */}
                    <div className="w-full xl:w-1/3 bg-white p-6 rounded-3xl shadow-sm border border-gray-100 flex flex-col min-h-[700px] h-[calc(100vh-250px)]">
                        <div className="flex items-center justify-between mb-6 pb-4 border-b border-gray-100 shrink-0">
                            <h3 className="text-xl font-bold flex items-center gap-2 text-sb-dark">
                                Published Posts ({posts.length})
                            </h3>
                        </div>
                        
                        <div className="space-y-4 flex-1 overflow-y-auto pr-2 custom-scrollbar">
                            {posts.length === 0 ? (
                                <div className="flex flex-col items-center justify-center h-full text-gray-400">
                                    <FileText className="w-12 h-12 mb-4 opacity-20" />
                                    <p>No blog posts created yet.</p>
                                </div>
                            ) : (
                                posts.map((postItem) => (
                                    <div 
                                        key={postItem.id} 
                                        onClick={() => handleSelect(postItem)}
                                        className={`group relative flex gap-4 p-4 rounded-2xl border transition-all duration-300 cursor-pointer ${
                                            selectedPost?.id === postItem.id 
                                            ? 'border-sb-red bg-red-50/50 shadow-sm' 
                                            : 'border-gray-100 bg-white hover:border-gray-300 hover:shadow-sm'
                                        }`}
                                    >
                                        <div className="w-24 h-24 shrink-0 rounded-xl overflow-hidden border border-gray-200">
                                            <img src={`/${postItem.image_path}`} alt="cover" className="w-full h-full object-cover" />
                                        </div>
                                        <div className="flex-1 min-w-0 flex flex-col justify-center">
                                            <h4 className={`font-bold text-md mb-1 line-clamp-2 ${selectedPost?.id === postItem.id ? 'text-sb-red' : 'text-sb-dark'}`}>
                                                {postItem.title}
                                            </h4>
                                            <div className="flex items-center text-xs text-gray-500 mb-2 gap-3">
                                                <span className="flex items-center"><Calendar className="w-3 h-3 mr-1" />{postItem.date}</span>
                                            </div>
                                            {!postItem.is_active && (
                                                <span className="inline-block px-2 py-0.5 bg-gray-100 text-gray-600 text-[10px] font-bold uppercase rounded-md absolute top-4 right-4">Draft</span>
                                            )}
                                        </div>
                                    </div>
                                ))
                            )}
                        </div>
                    </div>

                    {/* Right Pane - Post Editor */}
                    <div className="w-full xl:w-2/3 bg-white p-8 md:p-12 rounded-3xl shadow-xl border border-gray-100 xl:sticky top-6 flex flex-col min-h-[700px]">
                        {isCreating || selectedPost ? (
                            <form onSubmit={handleSubmit} className="flex flex-col h-full animate-in fade-in duration-300">
                                <div className="flex justify-between items-center mb-8 pb-6 border-b border-gray-100">
                                    <h3 className="text-2xl font-black text-sb-dark flex items-center gap-3">
                                        <Edit2 className="w-6 h-6 text-sb-red" />
                                        {isCreating ? 'Draft New Post' : 'Edit Post'}
                                    </h3>
                                    {selectedPost && (
                                        <Button 
                                            type="button"
                                            variant="destructive" 
                                            size="sm"
                                            onClick={() => handleDelete(selectedPost.id)}
                                            className="rounded-full shadow-md"
                                        >
                                            <Trash2 className="w-4 h-4 mr-2" /> Delete Post
                                        </Button>
                                    )}
                                </div>

                                <div className="space-y-6 flex-1 overflow-y-auto pr-2 custom-scrollbar pb-6">
                                    {/* Cover Image Upload */}
                                    <div className="space-y-3">
                                        <Label className="text-sm font-bold text-gray-700">Cover Image <span className="text-sb-red">*</span></Label>
                                        <div 
                                            className="border-2 border-dashed border-gray-300 rounded-2xl p-6 flex flex-col items-center justify-center bg-gray-50 hover:bg-gray-100 hover:border-sb-red/50 transition-all cursor-pointer relative group overflow-hidden min-h-[250px]"
                                            onClick={() => document.getElementById('blog-image-upload').click()}
                                        >
                                            {imagePreview ? (
                                                <div className="relative w-full h-full flex items-center justify-center">
                                                    <img src={imagePreview} alt="Preview" className="max-h-[250px] object-cover rounded-xl shadow-md w-full" />
                                                    <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center rounded-xl backdrop-blur-sm">
                                                        <span className="text-white font-bold bg-sb-red px-4 py-2 rounded-full">Change Image</span>
                                                    </div>
                                                </div>
                                            ) : (
                                                <div className="text-center px-4">
                                                    <div className="w-16 h-16 bg-white rounded-full shadow-sm flex items-center justify-center mx-auto mb-4 border border-gray-100 group-hover:scale-110 transition-transform">
                                                        <ImageIcon className="h-6 w-6 text-sb-red" />
                                                    </div>
                                                    <p className="font-bold text-gray-700 mb-1">Click to add cover image</p>
                                                    <p className="text-sm text-gray-400">Recommended: 1200x800px (Max 5MB)</p>
                                                </div>
                                            )}
                                            <input id="blog-image-upload" type="file" className="hidden" accept="image/*" onChange={handleImageChange} />
                                        </div>
                                        {errors.image_path && <p className="text-sm text-sb-red mt-1 font-medium">{errors.image_path}</p>}
                                    </div>

                                    <div className="space-y-3">
                                        <Label className="text-sm font-bold text-gray-700">Article Title <span className="text-sb-red">*</span></Label>
                                        <Input 
                                            value={data.title} 
                                            onChange={e => setData('title', e.target.value)} 
                                            placeholder="E.g. The Future of Sustainable Construction" 
                                            className="h-14 bg-gray-50 border-gray-200 focus-visible:ring-sb-red rounded-xl text-lg font-semibold" 
                                        />
                                        {errors.title && <p className="text-sm text-sb-red mt-1 font-medium">{errors.title}</p>}
                                    </div>

                                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                                        <div className="space-y-3">
                                            <Label className="text-sm font-bold text-gray-700 flex items-center gap-2"><Calendar className="w-4 h-4" /> Publish Date</Label>
                                            <Input value={data.date} onChange={e => setData('date', e.target.value)} placeholder="15 Jun 2026" className="bg-gray-50 border-gray-200 focus-visible:ring-sb-red rounded-xl" />
                                            {errors.date && <p className="text-sm text-sb-red mt-1 font-medium">{errors.date}</p>}
                                        </div>
                                        <div className="space-y-3">
                                            <Label className="text-sm font-bold text-gray-700 flex items-center gap-2"><Clock className="w-4 h-4" /> Read Time</Label>
                                            <Input value={data.read_time} onChange={e => setData('read_time', e.target.value)} placeholder="e.g. 5 Min Read" className="bg-gray-50 border-gray-200 focus-visible:ring-sb-red rounded-xl" />
                                        </div>
                                        <div className="space-y-3">
                                            <Label className="text-sm font-bold text-gray-700 flex items-center gap-2"><User className="w-4 h-4" /> Author Name</Label>
                                            <Input value={data.author} onChange={e => setData('author', e.target.value)} placeholder="e.g. Admin Team" className="bg-gray-50 border-gray-200 focus-visible:ring-sb-red rounded-xl" />
                                        </div>
                                    </div>

                                    <div className="space-y-3">
                                        <Label className="text-sm font-bold text-gray-700">Short Excerpt (Summary) <span className="text-sb-red">*</span></Label>
                                        <Textarea 
                                            value={data.excerpt} 
                                            onChange={e => setData('excerpt', e.target.value)} 
                                            placeholder="A brief 2-sentence summary of the post..." 
                                            rows={2} 
                                            className="bg-gray-50 border-gray-200 focus-visible:ring-sb-red rounded-xl resize-none" 
                                        />
                                        {errors.excerpt && <p className="text-sm text-sb-red mt-1 font-medium">{errors.excerpt}</p>}
                                    </div>

                                    <div className="space-y-3">
                                        <Label className="text-sm font-bold text-gray-700">Full Content (Rich Text) <span className="text-sb-red">*</span></Label>
                                        <div className="bg-white rounded-xl overflow-hidden border border-gray-200 focus-within:border-sb-red focus-within:ring-1 focus-within:ring-sb-red transition-all">
                                            <ReactQuill 
                                                theme="snow" 
                                                value={data.content} 
                                                onChange={(val) => setData('content', val)} 
                                                modules={quillModules}
                                                className="h-[300px] mb-10" // mb-10 is needed because quill toolbar is absolutely positioned sometimes or bottom padding is weird
                                            />
                                        </div>
                                        {errors.content && <p className="text-sm text-sb-red mt-1 font-medium">{errors.content}</p>}
                                    </div>

                                    <div className="flex items-center space-x-2 pt-4">
                                        <input 
                                            type="checkbox" 
                                            id="is_active" 
                                            checked={data.is_active} 
                                            onChange={e => setData('is_active', e.target.checked)}
                                            className="w-5 h-5 text-sb-red rounded border-gray-300 focus:ring-sb-red"
                                        />
                                        <Label htmlFor="is_active" className="cursor-pointer font-bold text-gray-700">Publish immediately (Active)</Label>
                                    </div>

                                </div>
                                
                                <div className="mt-6 pt-6 border-t border-gray-100 flex items-center justify-end gap-3 shrink-0">
                                    <Button 
                                        type="submit" 
                                        disabled={processing} 
                                        className="bg-sb-dark hover:bg-black text-white px-10 h-14 rounded-xl text-lg font-bold shadow-xl hover:-translate-y-1 transition-all flex items-center gap-2"
                                    >
                                        <CheckCircle2 className="w-5 h-5" />
                                        {processing ? 'Saving...' : (isCreating ? 'Publish Post' : 'Save Changes')}
                                    </Button>
                                </div>
                            </form>
                        ) : (
                            <div className="flex flex-col items-center justify-center h-full text-gray-400">
                                <div className="w-24 h-24 rounded-full bg-gray-50 flex items-center justify-center mb-6 border-4 border-white shadow-sm">
                                    <FileText className="w-10 h-10 text-gray-300" />
                                </div>
                                <h3 className="text-xl font-bold text-gray-600 mb-2">No Post Selected</h3>
                                <p className="text-center max-w-sm mb-6">Select a post from the list to edit, or create a new one.</p>
                                <Button onClick={handleCreateNew} variant="outline" className="rounded-full font-bold border-gray-300 text-sb-dark">
                                    <Plus className="w-4 h-4 mr-2" /> Write New Post
                                </Button>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </AdminLayout>
    );
}
