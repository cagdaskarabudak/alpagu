<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\BlogArticle;
use App\Models\BlogCategory;
use App\Models\BlogArticleComment;
use Inertia\Inertia;

class ArticleController extends Controller
{
    public function view($slug, $id){
        $article = BlogArticle::where('slug', '=', $slug)->where('id', '=', $id)->first();

        $popularArticles = BlogArticle::all()->sortByDesc('total_rate')->take(5);
        $lastComments = BlogArticleComment::orderBy('created_at', 'desc')->with('article')->take(5);
        $categories = BlogCategory::orderBy('name', 'desc')->get();

        return Inertia::render('Blog/Article', [
            'article' => $article,
            'popularArticles' => $popularArticles,
            'lastComments' => $lastComments,
            'categories' => $categories,
        ]);
    }
}
