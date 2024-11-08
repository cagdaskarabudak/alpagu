<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Project;
use Inertia\Inertia;

class ProjectController extends Controller
{

    public function get_all_projects(){
        $projects = Project::with(['status' => function($query) {
            $query->where('can_view', 1);
        }])->get();
    
        return response()->json($projects);
    }

    public function project_view($slug, $id){
        $project = Project::where('slug', '=', $slug)->where('id', '=', $id)->first();
        if($project){
            if($project->status->can_view == 1){
                return Inertia::render('Portfolio/Project', [
                    'project' => $project,
                ]);
            }
            else{
                abort(404);
            }
        }
        else{
            abort(404);
        }
    }
}
