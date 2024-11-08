<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Project;
use Inertia\Inertia;

class PortfolioController extends Controller
{
    public function view(){
        $projects = Project::with(['status' => function($query) {
            $query->where('can_view', 1);
        }])->get();

        return Inertia::render('Portfolio/Portfolio', [
            'projects' => $projects,
        ]);
    }


}
