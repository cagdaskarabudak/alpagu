<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class ProjectComment extends Model
{
    protected $table = 'project_comments';
    public $timestamps = true;
    protected $fillable = [
        'name',
        'email',
        'content',
        'rate',
        'ip_address',
        'project_id',
    ];

    public function project(){
        return $this->belongsTo(Project::class, 'project_id', 'id');
    }

/*
        *comments       //Yorumlar
            .comment->name                      //string
            .comment->email                     //string
            .comment->content                   //text
            .comment->rate                      //integer
            .comment->ip_address                //string
            .comment->project(project_id)       //foreign
            .comment->timestamps()              //timestamps
*/
}
