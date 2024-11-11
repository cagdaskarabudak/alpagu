<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\BlogArticle;
use App\Models\BlogCategory;
use App\Models\BlogArticleComment;
use Inertia\Inertia;
use App\Http\Requests\ArticleRequest;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Auth;

class ArticleController extends Controller
{
    public function view($slug, $id){
        $article = BlogArticle::where('slug', '=', $slug)->where('id', '=', $id)->first();

        $popularArticles = BlogArticle::orderBy('view_count', 'desc')->limit(5)->get();
        $lastComments = BlogArticleComment::orderBy('created_at', 'desc')->with('article')->limit(5)->get();
        $categories = BlogCategory::orderBy('name', 'asc')->get();

        return Inertia::render('Blog/Article', [
            'article' => $article,
            'popularArticles' => $popularArticles,
            'lastComments' => $lastComments,
            'categories' => $categories,
        ]);
    }

    public function create_article(ArticleRequest $request){
        try{
            DB::beginTransaction();
            $article = new BlogArticle();
            $article->author_id = Auth::user()->id;
            $article->title = $request->title;
            $article->slug = $request->slug;

            if($request->banner != null){
                $file = $request->file('banner');

                $filePath = $file->store('images/article_banners', 'public');
                
                $article->banner = basename($filePath);
            }
            else{
                $article->banner = null;
            }

            $article->content = $request->content;
            $article->view_count = $request->view_count;
            $article->can_view = 1;
            $article->save();

            DB::commit();

            return response()->json([
                'status' => true,
                'article' => $article,
            ]);
        }catch(\Exception $e){

            DB::rollBack();
            return response()->json([
                'status' => false,
                'message' => $e->getMessage(),
                'line' => $e->getLine(),
                'file' => $e->getFile(),
            ]);
        }
    }
}
