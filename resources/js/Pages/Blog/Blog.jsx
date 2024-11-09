import BlogLayout from "@/Layouts/BlogLayout";
import MainLayout from "@/Layouts/MainLayout";
import { Head, Link } from "@inertiajs/react";
import { useEffect, useRef, useState } from "react";
import Rating from "@/Components/Rating";

export default function Blog({lastArticles, popularArticles, lastComments, categories}){
    const blogArticleList = useRef(null);
    const [type, setType] = useState('list');
    const [articleDoms, setArticleDoms] = useState([]);

    useEffect(() => {
        let articleElements = lastArticles.map((article, index) => (
            <Link as="a" href={route('article', [article.slug, article.id])} className="article" key={index}>
                <div className="banner">
                    <img src="/storage/images/alpagu.webp" />
                </div>
                <div className="content">
                    <div className="title">{article.title}</div>
                    <div className="content">{article.content}</div>
                    <div className="rate"><span className="rate-amount">{article.total_rate.rate.toFixed(1)}</span> <Rating starCount={1} rate={article.total_rate.rate/5} starSize={20}/><span className="rate-count">({article.total_rate.count})</span></div>
                    <div className="author"><i className="fa-solid fa-user"></i> {article.author.name}</div>
                    <div className="date"><i className="fa-solid fa-calendar-days"></i> {new Date(article.created_at).toLocaleDateString()}</div>
                    <div className="comments"><i className="fa-solid fa-messages"></i> {article.comments.length}</div>
                    <div className="views"><i className="fa-solid fa-eye"></i> {article.view_count}</div>
                </div>
            </Link>
        ));

        setArticleDoms(articleElements);
    }, []);

    const toggleListView = (event) => {
          if (event.target.value === 'grid') {
            setType('grid');
          } else if (event.target.value === 'list') {
            setType('list');
          }
      }
    return (
        <MainLayout>
            <Head title="Blog"/>
            <BlogLayout popularArticles={popularArticles} lastComments={lastComments} categories={categories}>
                <div className="blog-header">
                    <h5 className="title">Last Articles</h5>
                    <div className="filter-tools">
                        <input 
                            type="radio" 
                            className="btn-check" 
                            name="list_type_selection" 
                            id="grid_mode" 
                            value={'grid'} 
                            autoComplete={"off"} 
                            defaultChecked={type == 'grid'} 
                            onChange={toggleListView} 
                        />
                        <label 
                            className="btn btn-outline-info" 
                            htmlFor="grid_mode"
                        >
                            <i className="fa-solid fa-grid-2"></i>
                        </label>
                        <input 
                            type="radio" 
                            className="btn-check" 
                            name="list_type_selection" 
                            id="list_mode" 
                            value={'list'} 
                            autoComplete={"off"} 
                            defaultChecked={type == 'list'} 
                            onChange={toggleListView} 
                        />
                        <label 
                            className="btn btn-outline-info" 
                            htmlFor="list_mode"
                        >
                            <i className="fa-solid fa-list"></i>
                        </label>
                    </div>
                </div>
                <div className={"blog-article-list "+type} ref={blogArticleList}>
                    {articleDoms}
                </div>
            </BlogLayout>
        </MainLayout>
    );
}