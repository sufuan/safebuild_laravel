import React from 'react';
import AdminLayout from '@/Layouts/AdminLayout';
import { Head, useForm } from '@inertiajs/react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Settings2, Globe, Phone, Mail, MapPin, Share2, Save } from 'lucide-react';

export default function BusinessSettings({ settings }) {
    // Helper to get setting value by key
    const getSetting = (key) => {
        const setting = settings.find(s => s.key === key);
        return setting ? setting.value : '';
    };

    const { data, setData, post, processing } = useForm({
        settings: [
            { key: 'site_name', value: getSetting('site_name') },
            { key: 'contact_email', value: getSetting('contact_email') },
            { key: 'contact_phone', value: getSetting('contact_phone') },
            { key: 'careers_email', value: getSetting('careers_email') },
            { key: 'facebook_url', value: getSetting('facebook_url') },
            { key: 'twitter_url', value: getSetting('twitter_url') },
            { key: 'linkedin_url', value: getSetting('linkedin_url') },
            { key: 'footer_about', value: getSetting('footer_about') }
        ]
    });

    const handleChange = (key, value) => {
        const newSettings = data.settings.map(s => 
            s.key === key ? { ...s, value } : s
        );
        setData('settings', newSettings);
    };

    const getValue = (key) => {
        const item = data.settings.find(s => s.key === key);
        return item ? item.value : '';
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        post(route('admin.settings.update'), {
            preserveScroll: true
        });
    };

    return (
        <AdminLayout>
            <Head title="Business Settings" />

            <div className="flex-1 space-y-6 p-8 pt-6 bg-gray-50/50 min-h-screen pb-24">
                <div className="flex items-center justify-between mb-8">
                    <div>
                        <h2 className="text-4xl font-black tracking-tight text-sb-dark flex items-center gap-3">
                            <Settings2 className="w-8 h-8 text-sb-red" />
                            Business Settings
                        </h2>
                        <p className="text-muted-foreground mt-2 text-lg">
                            Manage your core business information and global configurations.
                        </p>
                    </div>
                </div>

                <form onSubmit={handleSubmit} className="max-w-5xl mx-auto space-y-8">
                    {/* General Settings Card */}
                    <div className="bg-white p-8 md:p-12 rounded-3xl shadow-sm border border-gray-100 relative overflow-hidden">
                        <div className="absolute top-0 right-0 w-32 h-32 bg-sb-red/5 rounded-bl-[100px] -z-0"></div>
                        <h3 className="text-2xl font-bold flex items-center gap-3 text-sb-dark mb-8 border-b border-gray-100 pb-4 relative z-10">
                            <Globe className="w-6 h-6 text-sb-red" />
                            General Information
                        </h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 relative z-10">
                            <div className="space-y-3">
                                <Label htmlFor="site_name" className="font-bold text-gray-700">Company / Site Name</Label>
                                <Input 
                                    id="site_name" 
                                    value={getValue('site_name')} 
                                    onChange={e => handleChange('site_name', e.target.value)} 
                                    className="bg-gray-50/50 border-gray-200 focus-visible:ring-sb-red h-14 rounded-xl text-lg"
                                />
                            </div>
                            <div className="space-y-3">
                                <Label htmlFor="footer_about" className="font-bold text-gray-700">Footer About Text</Label>
                                <Textarea 
                                    id="footer_about" 
                                    value={getValue('footer_about')} 
                                    onChange={e => handleChange('footer_about', e.target.value)} 
                                    className="bg-gray-50/50 border-gray-200 focus-visible:ring-sb-red min-h-[140px] rounded-xl text-md resize-none"
                                />
                            </div>
                        </div>
                    </div>

                    {/* Contact Settings Card */}
                    <div className="bg-white p-8 md:p-12 rounded-3xl shadow-sm border border-gray-100">
                        <h3 className="text-2xl font-bold flex items-center gap-3 text-sb-dark mb-8 border-b border-gray-100 pb-4">
                            <Phone className="w-6 h-6 text-sb-red" />
                            Contact & Support Outlets
                        </h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            <div className="space-y-3">
                                <Label htmlFor="contact_email" className="font-bold text-gray-700 flex items-center gap-2">
                                    <Mail className="w-4 h-4 text-gray-400" /> General Email
                                </Label>
                                <Input 
                                    id="contact_email" 
                                    type="email"
                                    value={getValue('contact_email')} 
                                    onChange={e => handleChange('contact_email', e.target.value)} 
                                    className="bg-gray-50/50 border-gray-200 focus-visible:ring-sb-red h-14 rounded-xl"
                                />
                            </div>
                            <div className="space-y-3">
                                <Label htmlFor="contact_phone" className="font-bold text-gray-700 flex items-center gap-2">
                                    <Phone className="w-4 h-4 text-gray-400" /> Primary Phone
                                </Label>
                                <Input 
                                    id="contact_phone" 
                                    value={getValue('contact_phone')} 
                                    onChange={e => handleChange('contact_phone', e.target.value)} 
                                    className="bg-gray-50/50 border-gray-200 focus-visible:ring-sb-red h-14 rounded-xl"
                                />
                            </div>
                            <div className="space-y-3">
                                <Label htmlFor="careers_email" className="font-bold text-gray-700 flex items-center gap-2">
                                    <Mail className="w-4 h-4 text-gray-400" /> Careers / HR Email
                                </Label>
                                <Input 
                                    id="careers_email" 
                                    type="email"
                                    value={getValue('careers_email')} 
                                    onChange={e => handleChange('careers_email', e.target.value)} 
                                    className="bg-gray-50/50 border-gray-200 focus-visible:ring-sb-red h-14 rounded-xl"
                                />
                            </div>
                        </div>
                    </div>

                    {/* Social Media Card */}
                    <div className="bg-white p-8 md:p-12 rounded-3xl shadow-sm border border-gray-100">
                        <h3 className="text-2xl font-bold flex items-center gap-3 text-sb-dark mb-8 border-b border-gray-100 pb-4">
                            <Share2 className="w-6 h-6 text-sb-red" />
                            Social Media Links
                        </h3>
                        <div className="grid grid-cols-1 gap-8">
                            <div className="space-y-3">
                                <Label htmlFor="facebook_url" className="font-bold text-gray-700">Facebook Page URL</Label>
                                <Input 
                                    id="facebook_url" 
                                    type="url"
                                    value={getValue('facebook_url')} 
                                    onChange={e => handleChange('facebook_url', e.target.value)} 
                                    className="bg-gray-50/50 border-gray-200 focus-visible:ring-sb-red h-14 rounded-xl"
                                />
                            </div>
                            <div className="space-y-3">
                                <Label htmlFor="twitter_url" className="font-bold text-gray-700">Twitter (X) URL</Label>
                                <Input 
                                    id="twitter_url" 
                                    type="url"
                                    value={getValue('twitter_url')} 
                                    onChange={e => handleChange('twitter_url', e.target.value)} 
                                    className="bg-gray-50/50 border-gray-200 focus-visible:ring-sb-red h-14 rounded-xl"
                                />
                            </div>
                            <div className="space-y-3">
                                <Label htmlFor="linkedin_url" className="font-bold text-gray-700">LinkedIn Profile URL</Label>
                                <Input 
                                    id="linkedin_url" 
                                    type="url"
                                    value={getValue('linkedin_url')} 
                                    onChange={e => handleChange('linkedin_url', e.target.value)} 
                                    className="bg-gray-50/50 border-gray-200 focus-visible:ring-sb-red h-14 rounded-xl"
                                />
                            </div>
                        </div>
                    </div>

                    {/* Fixed Bottom Action Bar */}
                    <div className="fixed bottom-0 left-0 lg:left-64 right-0 p-6 bg-white/80 backdrop-blur-md border-t border-gray-200 flex justify-end items-center z-50">
                        <Button 
                            type="submit" 
                            disabled={processing} 
                            className="bg-sb-dark hover:bg-black text-white px-10 h-14 rounded-xl text-lg font-bold shadow-xl hover:shadow-2xl hover:-translate-y-1 transition-all flex items-center gap-2"
                        >
                            <Save className="w-5 h-5" />
                            Save All Settings
                        </Button>
                    </div>
                </form>
            </div>
        </AdminLayout>
    );
}
