<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class BlogArticleComment extends Model
{
    protected $table = 'blog_article_comments';
    public $timestamps = true;
    protected $fillable = [
        'article_id',
        'rate',
        'name',
        'email',
        'user_id',
        'ip_address',
        'content',
    ];

    public function article(){
        return $this->belongsTo(BlogArticle::class, 'article_id', 'id');
    }

    public function user(){
        return $this->belongsTo(User::class, 'user_id', 'id');
    }
}
