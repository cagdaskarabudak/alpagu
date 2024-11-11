import { Head, Link, useForm, usePage, router } from "@inertiajs/react";
import { useTranslation } from "react-i18next";
import MainLayout from "@/Layouts/MainLayout";
import { useEffect, useState, useRef } from "react";
import LightBox from "@/Components/LightBox";
import ProjectAttributes from "./Partials/ProjectAttributes";
import ProjectContributors from "./Partials/ProjectContributors";
import ProjectTechnologies from "./Partials/ProjectTechnologies";
import CommentGroup from "@/Components/CommentGroup";
import Rating from "@/Components/Rating";

export default function Portfolio({project}) {
    const settings = usePage().props.settings;
    const {t} = useTranslation();
    const [commentGroupDoms, setCommentGroupDoms] = useState();
    const projectCommentsDom = useRef();
    useEffect(() => {
        let commentGroupElements = project.comment_groups.map((commentGroup, index) => (
            <CommentGroup commentGroup={commentGroup} commentDataType={'project'} commentData={project} key={index}/>
        ));

        setCommentGroupDoms(commentGroupElements);
    }, []);

    const { 
        data: commentForm, 
        setData: setCommentForm, 
        post: commentFormPost,
        errors: commentFormErrors, 
        processing: commentFormProcessing, 
        recentlySuccessful: commentFormSuccessful,
        reset: commentFormReset,
    } =
    useForm({
        user_id: usePage().props.auth.user ? usePage().props.auth.user.id : 0,
        name: usePage().props.auth.user ? usePage().props.auth.user.name : '',
        email: usePage().props.auth.user ? usePage().props.auth.user.email : '',
        message: '',
        rate: 0,
        type: 'project',
        data_id: project.id,
        reply_comment_id: 0,
    });

    const commentFormSubmit = async (e) => {
        e.preventDefault();
        let commentResponse = await axios.post(route('comment.create'), commentForm);
        if(commentResponse.data.status == true){
            commentFormReset();
            router.visit(route('project.view', [project.slug, project.id]), { preserveScroll: true });
        }
    }

    return (
        <>
            <Head title={t(project.name+' - '+settings.site_name)} />
            <MainLayout>
                <div className="row">
                    <div className="project mb-3">
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
                        </div>
                    </div>
                    {
                        (settings.project_comments == 1 || settings.view_project_comments == 1) &&
                        <div className="project-comments" ref={projectCommentsDom}>
                        <h5 className="title my-3">Comments</h5>
                        {
                            settings.project_comments == 1 &&
                            <form className="reply-form row mb-3" onSubmit={commentFormSubmit}>
                                <div className="title">Bir Yorum Yazın</div>
                                <div className="name col-lg-6 mb-3">
                                    <input type="text" placeholder="İsim" className="form-control" value={commentForm.name} onChange={(e) => setCommentForm('name', e.target.value)} required readOnly={usePage().props.auth.user} />
                                    {commentFormErrors.name}
                                </div>
                                <div className="email col-lg-6 mb-3">
                                    <input type="email" placeholder="Email" className="form-control" value={commentForm.email} onChange={(e) => setCommentForm('email', e.target.value)} required readOnly={usePage().props.auth.user}/>
                                    {commentFormErrors.email}
                                </div>
                                <div className="message col-lg-12 mb-3">
                                    <textarea placeholder="Yorum yazın" className="form-control" onChange={(e) => setCommentForm('message', e.target.value) } value={commentForm.message} required></textarea>
                                    {commentFormErrors.message}
                                </div>
                                <div className="name col-lg-12 mb-3">
                                    <Rating starCount={5} readOnly={false} starSize={20} onRateChange={(newRate) => {setCommentForm('rate', newRate);}}></Rating>
                                    {commentFormErrors.rate}
                                </div>
                                <div className="col-lg-12">
                                    <button type="submit" className="btn btn-outline-success" disabled={commentFormProcessing}>Yorum Gönder</button>
                                </div>
                            </form>
                        }
                            {
                                project.comment_groups.length > 0 && settings.view_project_comments == 1 &&
                                <>
                                    {commentGroupDoms}
                                </>
                            }
                    </div>
                    }

                </div>

            </MainLayout>
            
        </>
    );
}