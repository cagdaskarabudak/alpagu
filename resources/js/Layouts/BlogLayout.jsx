import Rating from "@/Components/Rating";
import { Link } from "@inertiajs/react";
import { useEffect, useState, useRef } from "react";
import { useTranslation } from "react-i18next";

export default function BlogLayout({children, article=null, popularArticles = null, lastComments = null, categories = null}){
    const {t} = useTranslation();
    const [popularArticleDoms, setPopularArticleDoms] = useState();
    const [categoryDoms, setCategoryDoms] = useState();
    const [lastCommentDoms, setLastCommentDoms] = useState();
    const popularArticleList = useRef(null);
    useEffect(() => {

        if(categories.length > 0){
            let categoryElements = categories.map((category, index) => (
                <Link as="a" href="#" className="category">{category.name}</Link>
            ));

            setCategoryDoms(categoryElements);
        }
        else{
            setCategoryDoms(
                <>
                    No Categories found!
                </>
            )
        }

        if(popularArticles.length > 0){
            let popularArticleElements = popularArticles.map((article, index) => (
                <Link href={route('article', [article.slug, article.id])} as="a" className="article" key={index}>
                    <div className="banner">
                        <img src="/storage/images/alpagu.webp" alt="banner" />
                    </div>
                    <div className="content">
                        <div className="title">{article.title}</div>
                        <div className="author"><i className="fa-solid fa-user"></i> {article.author.name}</div>
                        <div className="rate"><span className="rate-amount">{article.total_rate.rate.toFixed(1)}</span> <Rating starCount={5} rate={article.total_rate.rate} starSize={12}/><span className="rate-count">({article.total_rate.count})</span></div>
                        <div className="date"><i className="fa-solid fa-calendar-days"></i> {new Date(article.created_at).toLocaleDateString()}</div>
                        <div className="views"><i className="fa-solid fa-eye"></i> {article.view_count}</div>
                        <div className="comments"><i className="fa-solid fa-messages"></i> {article.comments.length}</div>
                    </div>
                </Link>
            ));

            setPopularArticleDoms(popularArticleElements);
        }
        else{
            setPopularArticleDoms(
                <>
                    No Articles found!
                </>
            )
        }

        if(lastComments.length > 0){
            let lastCommentElements = lastComments.map((comment, index) => (
                <Link href={route('article', [comment.article.slug, comment.article.id])} as="a" className="comment" key={index}>
                    <div className="content">{comment.content}</div>
                    <div className="title">{comment.article.title}</div>
                    <div className="name">{comment.user.name}</div>
                    <div className="date">{new Date(comment.created_at).toLocaleDateString()}</div>
                </Link>
            ));
    
            setLastCommentDoms(lastCommentElements);
        }
        else{
            setLastCommentDoms(
                <>
                    No comments found!
                </>
            )
        }
    }, []);
    return (
        <div className="row">
            <div className="col-lg-8">
                {children}
            </div>
            <div className="col-lg-4">
                <div className="blog-sidebar mb-3">
                    {
                        article != null &&
                        <div className="card blog-sidebar-card mb-3">
                            <div className="card-header">
                                <h5 className={'card-title'}>Article Information</h5>
                            </div>
                            <div className="card-body">
                                <div className="card-article-info">
                                    <div className="rate"><span className="rate-amount">{article.total_rate.rate.toFixed(1)}</span> <Rating starCount={1} rate={article.total_rate.rate/5} starSize={30}/><span className="rate-count">({article.total_rate.count})</span></div>
                                    <div className="name"><i className="fa-solid fa-user"></i> {article.author.name}</div>
                                    <div className="date"><i className="fa-solid fa-calendar-days"></i> {new Date(article.created_at).toLocaleDateString()}</div>
                                    <div className="views"><i className="fa-solid fa-eye"></i> {article.view_count}</div>
                                    <div className="comments"><i className="fa-solid fa-messages"></i> {article.comments.length}</div>
                                </div>
                            </div>
                        </div>
                    }
                    <div className="card blog-sidebar-card mb-3">
                        <div className="card-header" data-bs-toggle="collapse" href="#allCategoriesCollapse" role="button" aria-expanded="false">
                            <h5 className={'card-title'}>All Categories <i className="fa-solid fa-chevron-down"></i></h5>
                            <p className={'card-subtitle'}>Görüntülemek için buraya tıklayın.</p>
                        </div>
                        <div className="card-body">
                            <div className="collapse show" id="allCategoriesCollapse">
                                <div className="card-category-list">
                                    {categoryDoms}
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="card blog-sidebar-card mb-3">
                        <div className="card-header">
                            <h5 className={'card-title'}>Popular Articles</h5>
                        </div>
                        <div className="card-body">
                            <div className="card-article-list">
                                {popularArticleDoms}
                            </div>
                        </div>
                    </div>
                    <div className="card blog-sidebar-card mb-3">
                        <div className="card-header">
                            <h5 className={'card-title'}>Last Comments</h5>
                        </div>
                        <div className="card-body">
                            <div className="card-comment-list">
                                {lastCommentDoms}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}