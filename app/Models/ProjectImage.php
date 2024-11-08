<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class ProjectImage extends Model
{
    protected $table = 'project_images';
    public $timestamps = true;
    protected $fillable = [
        'src',
        'alt',
        'sort',
        'project_id'
    ];

    public function project(){
        return $this->belongsTo(Project::class, 'project_id', 'id');
    }
/*
    *images         //Görüntüler
    .image->src                         //string
    .image->alt                         //string
    .image->sort                        //integer
    .image->project(project_id)         //foreign
    .image->timestamps()                //timestamps
    
*/
}
