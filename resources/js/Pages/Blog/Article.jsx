import BlogLayout from "@/Layouts/BlogLayout";
import MainLayout from "@/Layouts/MainLayout";
import { Head, Link } from "@inertiajs/react";
import { useEffect, useRef, useState } from "react";

export default function Article({article, popularArticles, lastComments, categories}){
    const [commentDoms, setCommentDoms] = useState([]);

    useEffect(() => {
        if(article.comments.length > 0){
            let commentElements = article.comments.map((comment, index) => (
                <div className="comment" key={index}>
                    {comment.content}
                </div>
            ));
    
            setCommentDoms(commentElements);
        }
    }, []);

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
                    <div className="article-comments">
                        {commentDoms}
                    </div>
                </div>
            </BlogLayout>
        </MainLayout>
    );
}