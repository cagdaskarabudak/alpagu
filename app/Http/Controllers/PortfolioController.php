<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Project;
use Inertia\Inertia;

class PortfolioController extends Controller
{
    public function view(){
        $projects = Project::orderBy('created_at', 'desc')->get();

        return Inertia::render('Portfolio/Portfolio', [
            'projects' => $projects,
        ]);
    }


}
