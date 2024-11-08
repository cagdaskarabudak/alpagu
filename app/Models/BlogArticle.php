<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class BlogArticle extends Model
{
    protected $table = 'blog_articles';
    public $timestamps = true;
    protected $fillable = [
        'author_id',
        'title',
        'slug',
        'content',
        'view_count',
        'can_view',
    ];

    public function comments(){
        return $this->hasMany(BlogArticleComment::class, 'article_id', 'id');
    }

    public function categories(){
        return $this->belongsToMany(BlogCategory::class, BlogCategoryBlogArticle::class, 'category_id', 'id', 'id', 'article_id');
    }
}
