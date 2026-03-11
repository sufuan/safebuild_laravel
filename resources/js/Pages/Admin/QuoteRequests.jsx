import React, { useState } from 'react';
import AdminLayout from '@/Layouts/AdminLayout';
import { Head, useForm } from '@inertiajs/react';
import { Button } from "@/components/ui/button";
import { BadgeDollarSign, Mail, Phone, Calendar, Trash2, CheckCircle2, Wrench, Building2 } from 'lucide-react';
import dayjs from 'dayjs';

export default function QuoteRequests({ requests }) {
    const [selectedRequest, setSelectedRequest] = useState(null);
    const { patch, delete: destroy } = useForm();

    const handleSelect = (req) => {
        setSelectedRequest(req);
        if (!req.is_read) {
            patch(route('admin.quotes.read', req.id), {
                preserveScroll: true,
                onSuccess: () => {
                    req.is_read = true;
                }
            });
        }
    };

    const handleDelete = (id) => {
        if(confirm('Are you sure you want to delete this quote request?')) {
            destroy(route('admin.quotes.delete', id), {
                preserveScroll: true,
                onSuccess: () => {
                    if (selectedRequest && selectedRequest.id === id) {
                        setSelectedRequest(null);
                    }
                }
            });
        }
    };

    return (
        <AdminLayout>
            <Head title="Quote Requests" />

            <div className="flex-1 space-y-6 p-8 pt-6 bg-gray-50/50 min-h-screen">
                <div className="flex items-center justify-between mb-8">
                    <div>
                        <h2 className="text-4xl font-black tracking-tight text-sb-dark flex items-center gap-3">
                            <BadgeDollarSign className="w-8 h-8 text-sb-red" />
                            Quote Requests
                        </h2>
                        <p className="text-muted-foreground mt-2 text-lg">
                            Review and manage project estimation inquiries from potential clients.
                        </p>
                    </div>
                </div>

                <div className="flex flex-col xl:flex-row gap-8 items-start">
                    {/* Left Pane - Request List */}
                    <div className="w-full xl:w-1/3 bg-white p-6 rounded-3xl shadow-sm border border-gray-100 flex flex-col min-h-[700px] h-[calc(100vh-250px)]">
                        <div className="flex items-center justify-between mb-6 pb-4 border-b border-gray-100 shrink-0">
                            <h3 className="text-xl font-bold flex items-center gap-2 text-sb-dark">
                                Inbox ({requests.filter(r => !r.is_read).length} unread)
                            </h3>
                        </div>
                        
                        <div className="space-y-3 flex-1 overflow-y-auto pr-2 custom-scrollbar">
                            {requests.length === 0 ? (
                                <div className="flex flex-col items-center justify-center h-full text-gray-400">
                                    <Building2 className="w-12 h-12 mb-4 opacity-20" />
                                    <p>No quote requests received yet.</p>
                                </div>
                            ) : (
                                requests.map((req) => (
                                    <div 
                                        key={req.id} 
                                        onClick={() => handleSelect(req)}
                                        className={`group relative p-5 rounded-2xl border transition-all duration-300 cursor-pointer ${
                                            selectedRequest?.id === req.id 
                                            ? 'border-sb-red bg-red-50/50 shadow-sm' 
                                            : req.is_read 
                                                ? 'border-gray-100 bg-white hover:border-gray-300 hover:shadow-sm' 
                                                : 'border-blue-100 bg-blue-50/30 hover:border-blue-300 hover:bg-blue-50'
                                        }`}
                                    >
                                        {!req.is_read && (
                                            <div className="absolute top-5 right-5 w-3 h-3 bg-blue-500 rounded-full shadow-[0_0_10px_rgba(59,130,246,0.5)]"></div>
                                        )}
                                        <div className="flex justify-between items-start mb-2">
                                            <h4 className={`font-bold text-lg pr-6 ${selectedRequest?.id === req.id ? 'text-sb-red' : 'text-sb-dark'}`}>
                                                {req.name}
                                            </h4>
                                        </div>
                                        <div className="flex items-center gap-2 mb-2">
                                            <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-gray-100 text-gray-800">
                                                <Wrench className="w-3 h-3 mr-1" /> {req.service_id || 'General Service'}
                                            </span>
                                        </div>
                                        <p className="text-sm text-gray-500 line-clamp-2">
                                            {req.project_details}
                                        </p>
                                        <div className="mt-3 pt-3 border-t border-gray-100 flex justify-between items-center bg-transparent">
                                            <span className="text-xs text-gray-400 flex items-center">
                                                <Calendar className="w-3 h-3 mr-1" />
                                                {dayjs(req.created_at).format('MMM D, YYYY')}
                                            </span>
                                        </div>
                                    </div>
                                ))
                            )}
                        </div>
                    </div>

                    {/* Right Pane - Request Viewer */}
                    <div className="w-full xl:w-2/3 bg-white p-8 md:p-12 rounded-3xl shadow-xl border border-gray-100 xl:sticky top-6 flex flex-col min-h-[700px]">
                        {selectedRequest ? (
                            <div className="flex flex-col h-full animate-in fade-in zoom-in-95 duration-300">
                                <div className="flex justify-between items-start mb-8 pb-8 border-b border-gray-100">
                                    <div className="space-y-4">
                                        <div>
                                            <div className="inline-flex items-center px-4 py-2 rounded-full text-sm font-bold bg-sb-red/10 text-sb-red mb-4">
                                                <Wrench className="w-4 h-4 mr-2" /> Requested Service: {selectedRequest.service_id || 'General Inquiry'}
                                            </div>
                                            <div className="flex flex-wrap items-center gap-4 text-sm">
                                                <span className="flex items-center text-gray-600 font-medium bg-gray-100 px-3 py-1.5 rounded-full">
                                                    <Mail className="w-4 h-4 mr-2 text-sb-red" />
                                                    <a href={`mailto:${selectedRequest.email}`} className="hover:underline">{selectedRequest.email}</a>
                                                </span>
                                                <span className="flex items-center text-gray-600 font-medium bg-gray-100 px-3 py-1.5 rounded-full">
                                                    <Phone className="w-4 h-4 mr-2 text-sb-red" />
                                                    <a href={`tel:${selectedRequest.phone}`} className="hover:underline">{selectedRequest.phone}</a>
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="flex flex-col items-end gap-3 shrink-0">
                                        <span className="text-sm text-gray-400 flex items-center bg-gray-50 px-3 py-1 rounded-full">
                                            <Calendar className="w-4 h-4 mr-2" />
                                            {dayjs(selectedRequest.created_at).format('MMMM D, YYYY h:mm A')}
                                        </span>
                                        <Button 
                                            variant="destructive" 
                                            size="sm"
                                            onClick={() => handleDelete(selectedRequest.id)}
                                            className="rounded-full shadow-md hover:shadow-lg transition-all"
                                        >
                                            <Trash2 className="w-4 h-4 mr-2" /> Delete Request
                                        </Button>
                                    </div>
                                </div>

                                <div>
                                    <h4 className="text-sm font-bold text-gray-400 uppercase tracking-widest mb-4">Project Details</h4>
                                    <div className="prose max-w-none text-gray-700 leading-relaxed bg-gray-50/50 p-8 rounded-2xl border border-gray-100 h-full whitespace-pre-wrap">
                                        {selectedRequest.project_details}
                                    </div>
                                </div>
                                
                                <div className="mt-8 pt-6 border-t border-gray-100 flex items-center justify-between text-sm text-gray-500">
                                    <div className="flex items-center gap-2">
                                        <div className="w-8 h-8 rounded-full bg-sb-red text-white flex items-center justify-center font-bold">
                                            {selectedRequest.name.charAt(0).toUpperCase()}
                                        </div>
                                        <span className="font-semibold text-gray-900">{selectedRequest.name}</span>
                                    </div>
                                    <span className="flex items-center text-green-600 font-medium bg-green-50 px-3 py-1 rounded-full border border-green-100">
                                        <CheckCircle2 className="w-4 h-4 mr-2" /> Marked as Read
                                    </span>
                                </div>
                            </div>
                        ) : (
                            <div className="flex flex-col items-center justify-center h-full text-gray-400">
                                <div className="w-24 h-24 rounded-full bg-gray-50 flex items-center justify-center mb-6 border-4 border-white shadow-sm">
                                    <Building2 className="w-10 h-10 text-gray-300" />
                                </div>
                                <h3 className="text-xl font-bold text-gray-600 mb-2">No Quote Request Selected</h3>
                                <p className="text-center max-w-sm">Select a request from the list on the left to read its full details here.</p>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </AdminLayout>
    );
}
