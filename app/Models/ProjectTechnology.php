<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class ProjectTechnology extends Model
{
    protected $table = 'project_technologies';
    public $timestamps = false;
    protected $fillable = [
        'name',
        'image',
        'content',
        'sort',
        'project_id',
    ];

    public function project(){
        return $this->belongsTo(Project::class, 'project_id', 'id');
    }

    /*

        *technologies   //Kullanılan Teknolojiler
            .tehnology->name                    //string
            .technology->image                  //string
            .technology->project(project_id)    //foreign
            .technology->sort                   //integer
     */
}
