<?php

namespace Database\Seeders;

use App\Models\User;
use App\Models\Project;
use App\Models\BlogArticle;
// use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     */
    public function run(): void
    {
        BlogArticle::factory(10)->create();
    }
}
