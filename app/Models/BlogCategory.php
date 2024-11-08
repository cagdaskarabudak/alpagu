<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class BlogCategory extends Model
{
    protected $table = 'blog_categories';
    public $timestamps = true;
    protected $fillable = [
        'name',
        'slug'
    ];

    public function articles(){
        return $this->hasManyThrough(BlogArticle::class, BlogCategoryBlogArticle::class, 'article_id', 'id', 'id', 'category_id');
    }
}
