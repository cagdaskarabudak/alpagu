<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;
use App\Models\Project;
use App\Models\ProjectStatus;
use App\Models\BlogArticle;

class DashboardController extends Controller
{
    public function view_main(){
        return Inertia::render('Dashboard/Dashboard');
    }

    public function view_projects(){
        $projects = Project::all();

        return Inertia::render('Dashboard/Portfolio/Projects', [
            'projects' => $projects,
        ]);
    }

    public function view_project_create(){
        $status = ProjectStatus::all();

        return Inertia::render('Dashboard/Portfolio/ProjectCreate', [
            'project_status' => $status,
        ]);
    }

    public function view_article_create(){
        return Inertia::render('Dashboard/Blog/ArticleCreate');
    }

    public function view_articles(){
        $articles = BlogArticle::all();

        return Inertia::render('Dashboard/Blog/Articles', [
            'articles' => $articles,
        ]);
    }

    public function view_settings(){
        return Inertia::render('Dashboard/Settings/MainSettings');
    }

    public function view_preferences(){
        return Inertia::render('Dashboard/Settings/Preferences');
    }

    public function view_social(){
        return Inertia::render('Dashboard/Settings/Social');
    }
}
