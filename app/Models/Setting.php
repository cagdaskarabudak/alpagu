<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Setting extends Model
{
    protected $table = 'settings';
    public $timestamps = false;
    protected $fillable = [
        'blog',
        'customizer',
        'chat',
        'project_comments',
        'view_project_comments',
        'article_comments',
        'view_article_comments',
        'registerable',
        'site_name',
        'logo_src',
        'search',
        'site_description',
        'site_keywords',
        'photo',
        'email',
        'phone',
        'name',
        'url',
        'facebook',
        'linkedin',
        'instagram',
        'x_twitter',
        'content',
        'discord',
        'youtube',
        'contact',
        'portfolio'
    ];
}
