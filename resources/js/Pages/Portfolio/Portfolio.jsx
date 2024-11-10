import { Head, Link } from "@inertiajs/react";
import { useTranslation } from "react-i18next";
import MainLayout from "@/Layouts/MainLayout";
import { useEffect, useState } from "react";
import Rating from "@/Components/Rating";

export default function Portfolio({projects}) {
    const {t} = useTranslation();
    const [projectDoms, setProjectDoms] = useState([]);

    useEffect(() => {
        const projectElements = projects.map((project, index) => (
            <div className="col-lg-3" key={index}>
                <Link href={route('project.view', [project.slug, project.id])} className="card mb-3 project-card" as="div" style={{cursor: 'pointer'}}>
                    <img className="card-img-top" src={(project.images.length > 0 ? '/storage/images/project_images/'+project.images[0].src : '/storage/images/alpagu.webp')} alt={(project.images.length > 0 ? (project.images[0].alt != null ? project.images[0].alt : 'Project') : 'Project')} />
                    <div className="card-body">
                        <h5 className="card-title">{project.name}</h5>
                        <div className="rate"><span className="rate-amount">{project.total_rate.rate.toFixed(1)}</span><Rating rate={project.total_rate.rate/5} starSize={20} starCount={1} /><span className="rate-count">({project.total_rate.count})</span></div>
                        <div className="card-text" style={{color: project.status.color}}>{project.status.name}</div>
                        
                    </div>
                    <div className="card-footer d-flex justify-content-between">
                        <small className="text-secondary"><i className="fa-solid fa-eye"></i> {project.view_count}</small>
                        <small className="text-secondary"><i className="fa-solid fa-messages"></i> {project.comments.length}</small>
                    </div>
                </Link>
            </div>
        ));

        setProjectDoms(projectElements);
    }, []);
    return (
        <>
            <Head title={t('Portfolio')} />
            <MainLayout>
                <h5 className="title">Projects</h5>
                <div className="row">
                    {projectDoms}
                </div>
            </MainLayout>
            
        </>
    );
}