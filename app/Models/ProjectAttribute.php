<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class ProjectAttribute extends Model
{
    protected $table = 'project_attributes';
    public $timestamps = false;
    protected $fillable = [
        'content',
        'sort',
        'project_id',
    ];

    public function project(){
        return $this->belongsTo(Project::class, 'project_id', 'id');
    }

    /*
             *attributes     //Özellikler
            .attribute->content                 //text
            .attribute->sort                    //integer
            .attribute->project(project_id)     //foreign
     */
}
