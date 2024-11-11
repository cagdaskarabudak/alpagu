import DashboardLayout from '@/Layouts/DashboardLayout';
import { Head, Link } from '@inertiajs/react';
import { useEffect, useState } from 'react';

export default function Articles({articles}){
    const [articleListDoms, setArticleListDoms] = useState();

    useEffect(() => {
        let articleListElements = articles.map((article, index) => (
            <tr key={index}>
                <td>#{article.id}</td>
                <td><img src={(article.images ? "/storage/images/project_images/"+article.images[0].src : '/storage/images/alpagu.webp')} width={50} height={50} alt="" /></td>
                <td>{article.title}</td>
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

        setArticleListDoms(articleListElements);
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
                                    {articleListDoms}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </DashboardLayout>
    );
}