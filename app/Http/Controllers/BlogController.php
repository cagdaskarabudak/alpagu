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
        $popularArticles = BlogArticle::all()->sortByDesc('total_rate')->take(5);
        $lastComments = BlogArticleComment::orderBy('created_at', 'desc')->with('article')->take(5);
        $categories = BlogCategory::orderBy('name', 'desc')->get();

        return Inertia::render('Blog/Blog', [
            'lastArticles' => $lastArticles,
            'popularArticles' => $popularArticles,
            'lastComments' => $lastComments,
            'categories' => $categories,
        ]);
    }
}
