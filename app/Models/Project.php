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
        'comments',
        'attributes',
        'contributors',
        'technologies',
    ];

    protected $append = [
        'total_rate',
    ];

    public function images(){
        return $this->hasMany(ProjectImage::class, 'project_id', 'id');
    }

    public function comments(){
        return $this->hasMany(ProjectComment::class, 'project_id', 'id');
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
        return $this->belongsTo(ProjectStatus::class, 'status_id', 'id');
    }

    public function getTotalRateAttribute(){
        $total_rate = 0;
        $total_rate_count = 0;
        foreach($this->comments as $comment){
            if($comment->rate > 0){
                $total_rate += $comment->rate;
                $total_rate_count++;
            }
        }

        return $total_rate / $total_rate_count;
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
