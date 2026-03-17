import React, { useState } from 'react';
import AdminLayout from '@/Layouts/AdminLayout';
import { Head, useForm } from '@inertiajs/react';
import { toast } from 'sonner';
import { Button } from "@/components/ui/button";
import { MessageSquare, Mail, Phone, Calendar, Trash2, CheckCircle2, Circle } from 'lucide-react';
import dayjs from 'dayjs';

export default function ContactMessages({ messages }) {
    const [selectedMessage, setSelectedMessage] = useState(null);
    const { patch, delete: destroy, processing } = useForm();

    const handleSelect = (message) => {
        setSelectedMessage(message);
        if (!message.is_read) {
            patch(route('admin.messages.read', message.id), {
                preserveScroll: true,
                onSuccess: () => {
                    message.is_read = true;
                    toast.success('Message marked as read.');
                }
            });
        }
    };

    const handleToggleRead = (id) => {
        patch(route('admin.messages.toggle', id), {
            preserveScroll: true,
            onSuccess: (page) => {
                if (selectedMessage && selectedMessage.id === id) {
                    setSelectedMessage({ ...selectedMessage, is_read: !selectedMessage.is_read });
                }
                toast.success('Message status updated.');
            }
        });
    };

    const handleMarkAllAsRead = () => {
        if(confirm('Mark all messages as read?')) {
            post(route('admin.messages.readAll'), {
                preserveScroll: true,
                onSuccess: () => toast.success('All messages marked as read.'),
                onError: () => toast.error('Failed to mark messages as read.')
            });
        }
    };

    const handleDelete = (id) => {
        if(confirm('Are you sure you want to delete this message?')) {
            destroy(route('admin.messages.delete', id), {
                preserveScroll: true,
                onSuccess: () => {
                    if (selectedMessage && selectedMessage.id === id) {
                        setSelectedMessage(null);
                    }
                    toast.success('Message deleted.');
                },
                onError: () => toast.error('Failed to delete message.')
            });
        }
    };

    return (
        <AdminLayout>
            <Head title="Contact Messages" />

            <div className="flex-1 space-y-6 p-8 pt-6 bg-gray-50/50 min-h-screen">
                <div className="flex items-center justify-between mb-8">
                    <div>
                        <h2 className="text-4xl font-black tracking-tight text-sb-dark flex items-center gap-3">
                            <MessageSquare className="w-8 h-8 text-sb-red" />
                            Contact Messages
                        </h2>
                        <p className="text-muted-foreground mt-2 text-lg">
                            Review and manage inquiries from your website visitors.
                        </p>
                    </div>
                </div>

                <div className="flex flex-col xl:flex-row gap-8 items-start">
                    {/* Left Pane - Message List */}
                    <div className="w-full xl:w-1/3 bg-white p-6 rounded-3xl shadow-sm border border-gray-100 flex flex-col min-h-[700px] h-[calc(100vh-250px)]">
                        <div className="flex items-center justify-between mb-6 pb-4 border-b border-gray-100 shrink-0">
                            <h3 className="text-xl font-bold flex items-center gap-2 text-sb-dark">
                                Inbox ({messages.filter(m => !m.is_read).length} unread)
                            </h3>
                            {messages.some(m => !m.is_read) && (
                                <Button 
                                    variant="ghost" 
                                    size="sm" 
                                    onClick={handleMarkAllAsRead}
                                    className="text-xs font-bold text-sb-red hover:text-sb-red hover:bg-red-50 rounded-full"
                                >
                                    Mark all as read
                                </Button>
                            )}
                        </div>
                        
                        <div className="space-y-3 flex-1 overflow-y-auto pr-2 custom-scrollbar">
                            {messages.length === 0 ? (
                                <div className="flex flex-col items-center justify-center h-full text-gray-400">
                                    <MessageSquare className="w-12 h-12 mb-4 opacity-20" />
                                    <p>No messages received yet.</p>
                                </div>
                            ) : (
                                messages.map((msg) => (
                                    <div 
                                        key={msg.id} 
                                        onClick={() => handleSelect(msg)}
                                        className={`group relative p-5 rounded-2xl border transition-all duration-300 cursor-pointer ${
                                            selectedMessage?.id === msg.id 
                                            ? 'border-sb-red bg-red-50/50 shadow-sm' 
                                            : msg.is_read 
                                                ? 'border-gray-100 bg-white hover:border-gray-300 hover:shadow-sm' 
                                                : 'border-blue-100 bg-blue-50/30 hover:border-blue-300 hover:bg-blue-50'
                                        }`}
                                    >
                                        {!msg.is_read && (
                                            <div className="absolute top-5 right-5 w-3 h-3 bg-blue-500 rounded-full shadow-[0_0_10px_rgba(59,130,246,0.5)]"></div>
                                        )}
                                        <div className="flex justify-between items-start mb-2">
                                            <h4 className={`font-bold text-lg pr-6 ${selectedMessage?.id === msg.id ? 'text-sb-red' : 'text-sb-dark'}`}>
                                                {msg.name}
                                            </h4>
                                            {msg.is_quote && (
                                                <span className="shrink-0 bg-sb-red/10 text-sb-red text-[10px] font-bold uppercase px-2 py-0.5 rounded-sm tracking-wider">
                                                    Quote
                                                </span>
                                            )}
                                        </div>
                                        {msg.subject ? (
                                            <p className="text-sm font-semibold text-gray-700 mb-1 line-clamp-1">{msg.subject}</p>
                                        ) : msg.is_quote && msg.service_type ? (
                                            <p className="text-sm font-semibold text-sb-red mb-1 line-clamp-1">{msg.service_type}</p>
                                        ) : null}
                                        <p className="text-sm text-gray-500 line-clamp-2">
                                            {msg.is_quote ? msg.project_details : msg.message}
                                        </p>
                                        <div className="mt-3 pt-3 border-t border-gray-100 flex justify-between items-center bg-transparent">
                                            <span className="text-xs text-gray-400 flex items-center">
                                                <Calendar className="w-3 h-3 mr-1" />
                                                {dayjs(msg.created_at).format('MMM D, YYYY')}
                                            </span>
                                        </div>
                                    </div>
                                ))
                            )}
                        </div>
                    </div>

                    {/* Right Pane - Message Viewer */}
                    <div className="w-full xl:w-2/3 bg-white p-8 md:p-12 rounded-3xl shadow-xl border border-gray-100 xl:sticky top-6 flex flex-col min-h-[700px]">
                        {selectedMessage ? (
                            <div className="flex flex-col h-full animate-in fade-in zoom-in-95 duration-300">
                                <div className="flex justify-between items-start mb-8 pb-8 border-b border-gray-100">
                                    <div className="space-y-4">
                                        <div>
                                            <div className="flex items-center gap-3 mb-2">
                                                <h3 className="text-3xl font-black text-sb-dark">
                                                    {selectedMessage.is_quote ? 'Quote Request' : (selectedMessage.subject || 'No Subject Provided')}
                                                </h3>
                                                {selectedMessage.is_quote && (
                                                    <span className="bg-sb-red text-white text-[10px] font-bold uppercase px-2 py-1 rounded-sm tracking-wider">
                                                        Quote
                                                    </span>
                                                )}
                                            </div>
                                            <div className="flex flex-wrap items-center gap-4 text-sm mt-4">
                                                <span className="flex items-center text-gray-600 font-medium bg-gray-100 px-3 py-1.5 rounded-full">
                                                    <Mail className="w-4 h-4 mr-2 text-sb-red" />
                                                    <a href={`mailto:${selectedMessage.email}`} className="hover:underline">{selectedMessage.email}</a>
                                                </span>
                                                {selectedMessage.phone && (
                                                    <span className="flex items-center text-gray-600 font-medium bg-gray-100 px-3 py-1.5 rounded-full">
                                                        <Phone className="w-4 h-4 mr-2 text-sb-red" />
                                                        <a href={`tel:${selectedMessage.phone}`} className="hover:underline">{selectedMessage.phone}</a>
                                                    </span>
                                                )}
                                            </div>
                                        </div>
                                    </div>
                                    <div className="flex flex-col items-end gap-3 shrink-0">
                                        <span className="text-sm text-gray-400 flex items-center bg-gray-50 px-3 py-1 rounded-full">
                                            <Calendar className="w-4 h-4 mr-2" />
                                            {dayjs(selectedMessage.created_at).format('MMMM D, YYYY h:mm A')}
                                        </span>
                                        <Button 
                                            variant="destructive" 
                                            size="sm"
                                            onClick={() => handleDelete(selectedMessage.id)}
                                            className="rounded-full shadow-md hover:shadow-lg transition-all"
                                        >
                                            <Trash2 className="w-4 h-4 mr-2" /> Delete Message
                                        </Button>
                                    </div>
                                </div>

                                <div className="flex-1">
                                    {selectedMessage.is_quote ? (
                                        <div className="space-y-6">
                                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                                <div className="bg-gray-50 p-4 rounded-xl border border-gray-100">
                                                    <span className="text-xs font-bold text-gray-400 uppercase tracking-widest block mb-1">Service Type</span>
                                                    <span className="text-gray-900 font-semibold">{selectedMessage.service_type || 'Not specified'}</span>
                                                </div>
                                                <div className="bg-gray-50 p-4 rounded-xl border border-gray-100">
                                                    <span className="text-xs font-bold text-gray-400 uppercase tracking-widest block mb-1">Budget Range</span>
                                                    <span className="text-gray-900 font-semibold">{selectedMessage.budget_range || 'Not specified'}</span>
                                                </div>
                                                <div className="bg-gray-50 p-4 rounded-xl border border-gray-100 md:col-span-2">
                                                    <span className="text-xs font-bold text-gray-400 uppercase tracking-widest block mb-1">Project Location</span>
                                                    <span className="text-gray-900 font-semibold">{selectedMessage.location || 'Not specified'}</span>
                                                </div>
                                            </div>
                                            
                                            <div>
                                                <h4 className="text-sm font-bold text-gray-400 uppercase tracking-widest mb-3">Project Details</h4>
                                                <div className="prose max-w-none text-gray-700 leading-relaxed bg-gray-50/50 p-6 rounded-2xl border border-gray-100 min-h-[150px] whitespace-pre-wrap">
                                                    {selectedMessage.project_details || 'No details provided.'}
                                                </div>
                                            </div>

                                            {selectedMessage.attachment_path && (
                                                <div>
                                                    <h4 className="text-sm font-bold text-gray-400 uppercase tracking-widest mb-3">Attachment</h4>
                                                    <a 
                                                        href={`/storage/${selectedMessage.attachment_path}`} 
                                                        target="_blank" 
                                                        rel="noopener noreferrer"
                                                        className="inline-flex items-center space-x-2 bg-blue-50 text-blue-700 hover:bg-blue-100 border border-blue-200 px-4 py-2 rounded-lg transition-colors font-semibold text-sm"
                                                    >
                                                        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.172 7l-6.586 6.586a2 2 0 102.828 2.828l6.414-6.586a4 4 0 00-5.656-5.656l-6.415 6.585a6 6 0 108.486 8.486L20.5 13" />
                                                        </svg>
                                                        <span>View Attachment</span>
                                                    </a>
                                                </div>
                                            )}
                                        </div>
                                    ) : (
                                        <div>
                                            <h4 className="text-sm font-bold text-gray-400 uppercase tracking-widest mb-4">Message Content</h4>
                                            <div className="prose max-w-none text-gray-700 leading-relaxed bg-gray-50/50 p-8 rounded-2xl border border-gray-100 h-full min-h-[300px] whitespace-pre-wrap">
                                                {selectedMessage.message}
                                            </div>
                                        </div>
                                    )}
                                </div>
                                
                                <div className="mt-8 pt-6 border-t border-gray-100 flex items-center justify-between text-sm text-gray-500">
                                    <div className="flex items-center gap-2">
                                        <div className="w-8 h-8 rounded-full bg-sb-red text-white flex items-center justify-center font-bold">
                                            {selectedMessage.name.charAt(0).toUpperCase()}
                                        </div>
                                        <span className="font-semibold text-gray-900">{selectedMessage.name}</span>
                                    </div>
                                    <Button
                                        variant="outline"
                                        size="sm"
                                        onClick={() => handleToggleRead(selectedMessage.id)}
                                        className={`rounded-full border shadow-sm transition-all ${
                                            selectedMessage.is_read 
                                            ? 'bg-green-50 text-green-700 border-green-200 hover:bg-green-100' 
                                            : 'bg-blue-50 text-blue-700 border-blue-200 hover:bg-blue-100'
                                        }`}
                                    >
                                        {selectedMessage.is_read ? (
                                            <>
                                                <CheckCircle2 className="w-4 h-4 mr-2" /> Marked as Read
                                            </>
                                        ) : (
                                            <>
                                                <Circle className="w-4 h-4 mr-2" /> Mark as Read
                                            </>
                                        )}
                                    </Button>
                                </div>
                            </div>
                        ) : (
                            <div className="flex flex-col items-center justify-center h-full text-gray-400">
                                <div className="w-24 h-24 rounded-full bg-gray-50 flex items-center justify-center mb-6 border-4 border-white shadow-sm">
                                    <Mail className="w-10 h-10 text-gray-300" />
                                </div>
                                <h3 className="text-xl font-bold text-gray-600 mb-2">No Message Selected</h3>
                                <p className="text-center max-w-sm">Select a message from the list on the left to read its full contents here.</p>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </AdminLayout>
    );
}
