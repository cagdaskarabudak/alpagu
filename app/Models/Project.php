<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Project extends Model
{
    use HasFactory;
    protected $table = 'projects';
    public $timestamps = true;
    protected $fillable = [
        'name',                             //string
        'slug',                             //string unique
        'open_source',                      //enum 0, 1
        'content',                          //bigtext
        'price',                            //decimal, 11, 2
        'github_link',                      //string
        'demo_link',                        //string
        'view_count',                       //integer
        'status_id',
    ];

    protected $with = [
        'status',
        'images',
        'attributes',
        'contributors',
        'technologies',
    ];

    protected $appends = [
        'total_rate',
        'comment_groups',
    ];

    public function images(){
        return $this->hasMany(ProjectImage::class, 'project_id', 'id');
    }

    public function comments(){
        return $this->hasMany(ProjectComment::class, 'project_id', 'id')->orderBy('created_at', 'desc');
    }

    public function attributes(){
        return $this->hasMany(ProjectAttribute::class, 'project_id', 'id');
    }

    public function contributors(){
        return $this->hasMany(ProjectContributor::class, 'project_id', 'id');
    }

    public function technologies(){
        return $this->hasMany(ProjectTechnology::class, 'project_id', 'id');
    }

    public function status(){
        return $this->hasOne(ProjectStatus::class, 'id', 'status_id');
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

    public function getCommentGroupsAttribute(){
        $comment_groups = [];

        foreach($this->comments as $comment){
            if($comment->reply_comment_id == null){
                $comment_groups[] = [$comment, ...$comment->reply_comments->all()];
            }
        }

        return $comment_groups;
    }

    /*

$table->unsignedBigInteger('project_id');
$table->foreign('project_id')->references('id')->on('projects')->onDelete('cascade');
        *images         //Görüntüler
            .image->src                         //string
            .image->alt                         //string
            .image->sort                        //integer
            .image->project(project_id)         //foreign
            .image->timestamps()                //timestamps

        *comments       //Yorumlar
            .comment->name                      //string
            .comment->email                     //string
            .comment->content                   //text
            .comment->rate                      //integer
            .comment->ip_address                //string
            .comment->project(project_id)       //foreign
            .comment->timestamps()              //timestamps

        *attributes     //Özellikler
            .attribute->content                 //text
            .attribute->sort                    //integer
            .attribute->project(project_id)     //foreign

        *contributors   //Katkıda bulunanlar
            .contributor->name                  //string
            .contributor->url                   //string
            .contributor->content               //text
            .contributor->project(project_id)   //foreign

        *technologies   //Kullanılan Teknolojiler
            .tehnology->name                    //string
            .technology->image                  //string
            .technology->project(project_id)    //foreign
            .technology->sort                   //integer

        **total_rate()
    */
}
