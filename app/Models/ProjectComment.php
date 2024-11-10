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
        'reply_comment_id',
        'user_id',
    ];

    protected $with = [
        'reply_comments',
        'user',
    ];

    public function project(){
        return $this->belongsTo(Project::class, 'project_id', 'id');
    }

    public function reply_comments(){
        return $this->hasMany(ProjectComment::class, 'reply_comment_id', 'id');
    }

    public function user(){
        return $this->belongsTo(User::class, 'user_id', 'id');
    }
}
