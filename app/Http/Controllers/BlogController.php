<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\BlogArticle;
use App\Models\BlogCategory;
use App\Models\BlogArticleComment;
use Inertia\Inertia;

class BlogController extends Controller
{
    public function view(){
        $lastArticles = BlogArticle::orderBy('created_at', 'desc')->get();
        $popularArticles = BlogArticle::orderBy('view_count', 'desc')->limit(5)->get();
        $lastComments = BlogArticleComment::orderBy('created_at', 'desc')->with('article')->limit(5)->get();
        $categories = BlogCategory::orderBy('name', 'asc')->get();

        return Inertia::render('Blog/Blog', [
            'lastArticles' => $lastArticles,
            'popularArticles' => $popularArticles,
            'lastComments' => $lastComments,
            'categories' => $categories,
        ]);
    }
}
