import DashboardLayout from '@/Layouts/DashboardLayout';
import { Head, Link } from '@inertiajs/react';
import { useEffect, useState } from 'react';

export default function Projects({projects}){
    const [projectListDoms, setProjectListDoms] = useState();

    useEffect(() => {
        let projectListElements = projects.map((project, index) => (
            <tr key={index}>
                <td>#{project.id}</td>
                <td><img src={(project.images.length > 0 ? "/storage/images/project_images/"+project.images[0].src : '/storage/images/alpagu.webp')} width={50} height={50} alt="" /></td>
                <td>{project.name}</td>
                <td>
                    <div className="dropdown">
                        <a href="#" data-bs-toggle="dropdown" className="btn btn-outline-primary">...</a>
                        <ul className='dropdown-menu'>
                            <li><Link href="" className='dropdown-item'>View</Link></li>
                            <li><Link href="" className='dropdown-item'>Edit</Link></li>
                            <li><Link href="" className='dropdown-item'>Delete</Link></li>
                        </ul>
                    </div>
                </td>
            </tr>
        ));

        setProjectListDoms(projectListElements);
    }, []);

    return (

        <DashboardLayout>
            <Head title="Projects" />
            <div className="row">
                <div className="col-lg-12">
                    <div className="card">
                        <div className="card-body">
                            <table className="table table-hover table-responsive">
                                <thead>
                                    <tr>
                                        <th>ID</th>
                                        <th>name</th>
                                        <th>image</th>
                                        <th>action</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {projectListDoms}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </DashboardLayout>
    );
}