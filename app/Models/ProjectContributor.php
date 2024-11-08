<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class ProjectContributor extends Model
{
    protected $table = 'project_contributors';
    public $timestamps = false;
    protected $fillable = [
        'name',
        'url',
        'content',
        'project_id',
    ];

    public function project(){
        return $this->belongsTo(Project::class, 'project_id', 'id');
    }

        /*

            *contributors   //Katkıda bulunanlar
            .contributor->name                  //string
            .contributor->url                   //string
            .contributor->content               //text
            .contributor->project(project_id)   //foreign
     */
}

