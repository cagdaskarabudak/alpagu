<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Factories\HasFactory;

class BlogArticle extends Model
{
    use HasFactory;
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

    protected $with = [
        'comments',
        'author'
    ];

    protected $appends = [
        'total_rate',
    ];

    public function comments(){
        return $this->hasMany(BlogArticleComment::class, 'article_id', 'id');
    }

    public function author(){
        return $this->belongsTo(User::class, 'author_id', 'id');
    }

    public function categories(){
        return $this->belongsToMany(BlogCategory::class, BlogCategoryBlogArticle::class, 'category_id', 'id', 'id', 'article_id');
    }

    public function getTotalRateAttribute(){
        $rate_total = 0;
        $rate_count = 0;

        foreach($this->comments as $comment){
            if($comment->rate > 0){
                $rate_total += $comment->rate;
                $rate_count++;
            }
        }

        if($rate_count > 0){
            return [
                'rate' => $rate_total / $rate_count,
                'count' => $rate_count,
            ];
        }
        else{
            return [
                'rate' => 0,
                'count' => $rate_count,
            ];
        }
        
    }
}
