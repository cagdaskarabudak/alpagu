import { Head, Link } from '@inertiajs/react';
import DashboardLayout from '@/Layouts/DashboardLayout';

export default function Dashboard() {
    return (
        <DashboardLayout>
            <Head title="Dashboard" />

            <div className="row gap-3 justify-content-center">
                <div className="col-lg-5 text-center">
                    <div className="card">
                        <div className="card-header">
                            <h5 className="card-title">Top Traffic (Month/Day)</h5>
                        </div>
                        <div className="card-body">
                            <h1 className="card-text">123/16</h1>
                        </div>
                        <div className="card-footer">
                            <Link href="#">See All</Link>
                        </div>
                    </div>
                </div>
                <div className="col-lg-5 text-center">
                    <div className="card">
                        <div className="card-header">
                            <h5 className="card-title">Top Traffic This Month / Today</h5>
                        </div>
                        <div className="card-body">
                            <h1 className="card-text">564/123</h1>
                        </div>
                        <div className="card-footer">
                            <Link href="#">See All</Link>
                        </div>
                    </div>
                </div>
                <div className="col-lg-5 text-center">
                    <div className="card">
                        <div className="card-header">
                            <h5 className="card-title">Top 5 Article</h5>
                        </div>
                        <div className="card-body">
                            <h1 className="card-text">123</h1>
                        </div>
                        <div className="card-footer">
                            <Link href="#">See All</Link>
                        </div>
                    </div>
                </div>
                <div className="col-lg-5 text-center">
                    <div className="card">
                        <div className="card-header">
                            <h5 className="card-title">Top 5 Project</h5>
                        </div>
                        <div className="card-body">
                            <h1 className="card-text">123</h1>
                        </div>
                        <div className="card-footer">
                            <Link href="#">See All</Link>
                        </div>
                    </div>
                </div>
                <div className="col-lg-3 text-center">
                    <div className="card">
                        <div className="card-header">
                            <h5 className="card-title">Total Projects</h5>
                        </div>
                        <div className="card-body">
                            <h1 className="card-text">123</h1>
                        </div>
                        <div className="card-footer">
                            <Link href="#">See All</Link>
                        </div>
                    </div>
                </div>
                <div className="col-lg-3 text-center">
                    <div className="card">
                        <div className="card-header">
                            <h5 className="card-title">Total Articles</h5>
                        </div>
                        <div className="card-body">
                            <h1 className="card-text">123</h1>
                        </div>
                        <div className="card-footer">
                            <Link href="#">See All</Link>
                        </div>
                    </div>
                </div>
                <div className="col-lg-3 text-center">
                    <div className="card">
                        <div className="card-header">
                            <h5 className="card-title">Total Article Comments</h5>
                        </div>
                        <div className="card-body">
                            <h1 className="card-text">123</h1>
                        </div>
                        <div className="card-footer">
                            <Link href="#">See All</Link>
                        </div>
                    </div>
                </div>
                <div className="col-lg-3 text-center">
                    <div className="card">
                        <div className="card-header">
                            <h5 className="card-title">Total Project Comments</h5>
                        </div>
                        <div className="card-body">
                            <h1 className="card-text">123</h1>
                        </div>
                        <div className="card-footer">
                            <Link href="#">See All</Link>
                        </div>
                    </div>
                </div>
            </div>
        </DashboardLayout>
    );
}
