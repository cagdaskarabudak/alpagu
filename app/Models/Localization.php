<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Localization extends Model
{
    protected $table = 'localizations';
    public $timestamps = false;
    protected $fillable = [
        'code',
        'name',
        'local_name',
        'flag',
        'is_default',
    ];

    protected $with = [
        'terms',
    ];

    public function terms(){
        return $this->hasMany(LocalizationTerm::class, 'localization_code', 'code');
    }
}
