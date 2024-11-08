<?php

namespace Database\Factories;

use App\Models\Project;
use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Project>
 */
class ProjectFactory extends Factory
{
    protected $model = Project::class;
    
    public function definition(): array
    {
        $title = $this->faker->sentence(2);
        return [
            'name' => rtrim($title, '.'),
            'slug' => fake()->slug(),
            'open_source' => 1,
            'content' => fake()->text(),
            'price' => fake()->randomNumber(3),
            'github_link' => null,
            'demo_link' => null,
            'view_count' => fake()->randomNumber(2),
            'status_id' => 2,
        ];
    }
}
