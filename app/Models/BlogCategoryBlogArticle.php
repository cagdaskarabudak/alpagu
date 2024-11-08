<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class BlogCategoryBlogArticle extends Model
{
    protected $table = 'blog_category_blog_articles';
    public $timestamps = false;
    protected $fillable = [
        'category_id',
        'article_id',
    ];
}
