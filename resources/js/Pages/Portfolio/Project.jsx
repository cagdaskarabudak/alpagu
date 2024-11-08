import { Head, Link } from "@inertiajs/react";
import { useTranslation } from "react-i18next";
import MainLayout from "@/Layouts/MainLayout";
import { useEffect, useState } from "react";
import LightBox from "@/Components/LightBox";
import ProjectAttributes from "./Partials/ProjectAttributes";
import ProjectContributors from "./Partials/ProjectContributors";
import ProjectTechnologies from "./Partials/ProjectTechnologies";
import ProjectComments from "./Partials/ProjectComments";

export default function Portfolio({project}) {
    const {t} = useTranslation();
    return (
        <>
            <Head title={t('Portfolio')} />
            <MainLayout>
                <div className="row">
                    <div className="project">
                        <div className="project-header">
                            <div className="project-name">{project.name}
                                <span style={{color: project.status.color}}>{project.status.name}</span>
                            </div>
                            <div className="project-links">
                                {
                                    project.github_link != null &&
                                            <a href={project.github_link} target="_blank" className="project-github btn btn-primary"><i className="fa-brands fa-github"></i>Github</a>
                                }
                                {
                                    project.demo_link != null &&
                                            <a href={project.demo_link} target="_blank" className="project-demo btn btn-info"><i className="fa-solid fa-eye"></i>Demo Preview</a>
                                }
                            </div>
                        </div>
                        <div className="project-body row">
                            {
                                project.images.length > 0 &&
                                    <div className="project-images col-lg-8 mb-5">
                                        <h5 className="title">Images</h5>
                                        <LightBox images={project.images}></LightBox>
                                    </div>
                            }
                            {
                                project.attributes.length > 0 &&
                                    <div className="project-attributes col-lg-4 mb-5">
                                            <h5 className="title">Attributes</h5>
                                        <ProjectAttributes attributes={project.attributes}></ProjectAttributes>
                                    </div>
                            }

                            {
                                project.content.length > 0 &&
                                    <div className="project-content col-lg-6 mb-5">
                                        <h5 className="title">Details</h5>
                                        <p>{project.content}</p>
                                    </div>
                            }
                            <div className="project-info col-lg-6 mb-5">
                                {
                                    project.technologies.length > 0 &&
                                        <div className="project-technologies col-lg-12 mb-5">
                                            <h5 className="title">Technologies</h5>
                                            <ProjectTechnologies technologies={project.technologies}></ProjectTechnologies>
                                        </div>
                                }
                                {
                                    project.contributors.length > 0 &&
                                        <div className="project-contributors col-lg-12 mb-5">
                                            <h5 className="title">Contributors</h5>
                                            <ProjectContributors contributors={project.contributors}></ProjectContributors>
                                        </div>
                                }
                                {
                                    project.open_source == 1 || project.price > 0 ?
                                        <div className="project-end-info col-lg-12 mb-5">
                                            {
                                                project.open_source == 1 &&
                                                <div className="open-source">
                                                    OPEN SOURCE
                                                </div>
                                            }
                                            {
                                                project.price > 0 &&
                                                <div className="price">
                                                    {project.price} ₺
                                                </div>
                                            }
                                        </div>
                                        :
                                        ''
                                }
                            </div>
                            {
                                project.comments.length > 0 &&
                                    <div className="project-comments col-lg-12 mb-5">
                                        <h5 className="title">Comments</h5>
                                        <ProjectComments comments={project.comments}></ProjectComments>
                                    </div>
                            }
                        </div>
                    </div>
                </div>

            </MainLayout>
            
        </>
    );
}