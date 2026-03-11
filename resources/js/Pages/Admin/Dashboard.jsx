import { Head } from '@inertiajs/react';
import AdminLayout from '@/Layouts/AdminLayout';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { FileImage, MessageSquare, Calculator, Database } from 'lucide-react';

export default function Dashboard({ stats }) {
    return (
        <AdminLayout breadcrumbs={<span>Dashboard</span>}>
            <Head title="Dashboard" />

            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4 mt-4">
                <Card>
                    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                        <CardTitle className="text-sm font-medium">Total Content Items</CardTitle>
                        <Database className="h-4 w-4 text-muted-foreground" />
                    </CardHeader>
                    <CardContent>
                        <div className="text-2xl font-bold">{stats?.totalItems || 0}</div>
                        <p className="text-xs text-muted-foreground mt-1">
                            Published elements
                        </p>
                    </CardContent>
                </Card>
                <Card>
                    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                        <CardTitle className="text-sm font-medium">New Job Applications</CardTitle>
                        <FileImage className="h-4 w-4 text-muted-foreground" />
                    </CardHeader>
                    <CardContent>
                        <div className="text-2xl font-bold">{stats?.newJobs || 0}</div>
                        <p className="text-xs text-muted-foreground mt-1">
                            Awaiting review
                        </p>
                    </CardContent>
                </Card>
                <Card>
                    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                        <CardTitle className="text-sm font-medium">Unread Messages</CardTitle>
                        <MessageSquare className="h-4 w-4 text-muted-foreground" />
                    </CardHeader>
                    <CardContent>
                        <div className="text-2xl font-bold">{stats?.newMessages || 0}</div>
                        <p className="text-xs text-muted-foreground mt-1">
                            Contact form inquiries
                        </p>
                    </CardContent>
                </Card>
                <Card>
                    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                        <CardTitle className="text-sm font-medium">New Quote Requests</CardTitle>
                        <Calculator className="h-4 w-4 text-muted-foreground" />
                    </CardHeader>
                    <CardContent>
                        <div className="text-2xl font-bold">{stats?.newQuotes || 0}</div>
                        <p className="text-xs text-muted-foreground mt-1">
                            Requires estimation
                        </p>
                    </CardContent>
                </Card>
            </div>
            
        </AdminLayout>
    );
}
