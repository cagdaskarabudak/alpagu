import BlogLayout from "@/Layouts/BlogLayout";
import MainLayout from "@/Layouts/MainLayout";
import { Head, Link, useForm, usePage, router } from "@inertiajs/react";
import { useEffect, useRef, useState } from "react";
import CommentGroup from '@/Components/CommentGroup';
import Rating from "@/Components/Rating";

export default function Article({article, popularArticles, lastComments, categories}){
    const [commentGroupDoms, setCommentGroupDoms] = useState();
    const articleCommentsDom = useRef();

    useEffect(() => {
        let commentGroupElements = article.comment_groups.map((commentGroup, index) => (
            <CommentGroup commentGroup={commentGroup} commentDataType={'article'} commentData={article} key={index}/>
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
        type: 'article',
        data_id: article.id,
        reply_comment_id: 0,
    });

    const commentFormSubmit = async (e) => {
        e.preventDefault();
        let commentResponse = await axios.post(route('comment.create'), commentForm);
        if(commentResponse.data.status == true){
            commentFormReset();
            router.visit(route('article', [article.slug, article.id]), { preserveScroll: true });
        }
    }

    return (
        <MainLayout>
            <Head title={article.title}/>
            <BlogLayout article={article} popularArticles={popularArticles} lastComments={lastComments} categories={categories}>
                <div className="article-page">
                    <div className="article-banner">
                        <img src="/storage/images/alpagu.webp" alt="" />
                    </div>
                    <h5 className="article-title">{article.title}</h5>
                    <div className="article-content">
                        <div dangerouslySetInnerHTML={{ __html: article.content }} />
                    </div>
                </div>
                <div className="article-comments" ref={articleCommentsDom}>
                        <h5 className="title my-3">Comments</h5>
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
                            {
                                article.comment_groups.length > 0 &&
                                <>
                                    {commentGroupDoms}
                                </>
                            }
                    </div>
            </BlogLayout>
        </MainLayout>
    );
}