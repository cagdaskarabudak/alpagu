<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Project;
use App\Models\ProjectAttribute;
use App\Models\ProjectContributor;
use App\Models\ProjectImage;
use App\Models\ProjectTechnology;
use Inertia\Inertia;
use App\Http\Requests\ProjectRequest;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Auth;

class ProjectController extends Controller
{

    public function get_all_projects(){
        $projects = Project::orderBy('created_at', 'desc')->get();
    
        return response()->json($projects);
    }

    public function project_view($slug, $id){
        $project = Project::where('slug', '=', $slug)->where('id', '=', $id)->first();
        if($project){
                return Inertia::render('Portfolio/Project', [
                    'project' => $project,
                ]);
            }
    }

    public function create_project(ProjectRequest $request){
        try{
            DB::beginTransaction();

            $project = new Project();
            $project->name = $request->name;
            $project->slug = $request->slug;
            $project->open_source = $request->open_source;
            $project->content = $request->content;
            $project->price = $request->price;
            $project->github_link = $request->github_link;
            $project->demo_link = $request->demo_link;
            $project->view_count = $request->view_count;
            $project->status_id = $request->status_id;
            $project->save();

            foreach($request->technologies as $index => $technology){
                $projectTechnology = new ProjectTechnology();
                $projectTechnology->name = $technology['name'];
                $projectTechnology->image = $technology['image'];
                $projectTechnology->content = $technology['content'];
                $projectTechnology->sort = $index;
                $projectTechnology->project_id = $project->id;
                $projectTechnology->save();
            }
            
            foreach ($request->file('images') as $file) {
                $filePath = $file->store('images/project_images', 'public');
            
                $projectimage = new ProjectImage();
                $projectimage->src = basename($filePath);
                $projectimage->alt = basename($filePath);
                $projectimage->project_id = $project->id;
                $projectimage->save();
            }

            foreach($request->contributors as $index => $contributor){
                $projectContributor = new ProjectContributor();
                $projectContributor->name = $contributor['name'];
                $projectContributor->url = $contributor['url'];
                $projectContributor->content = $contributor['content'];
                $projectContributor->project_id = $project->id;
                $projectContributor->save();
            }

            foreach($request->attributes as $index => $attribute){
                $projectAttribute = new ProjectAttribute();
                $projectAttribute->content = $attribute['content'];
                $projectAttribute->sort = $index;
                $projectAttribute->project_id = $project->id;
                $projectAttribute->save();
            }

            DB::commit();

            return response()->json([
                'status' => true,
                'new_project' => $project
            ]);

        }
        catch(\Exception $e){
            DB::rollBack();
            return response()->json([
                'status' => false,
                'message' => $e->getMessage(),
                'line' => $e->getLine(),
                'file' => $e->getFile(),
                'request' => $request->file('images'),
            ]);
        }
    }
}
