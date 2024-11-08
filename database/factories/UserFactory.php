<?php

namespace Database\Factories;

use App\Models\Project;
use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Project>
 */
class ProjectFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    protected $model = Project::class;

    public function definition(): array
    {
        return [
            'name' => fake()->name(),
            'slug' => fake()->slug(),
            'open_source' => 1,
            'content' => fake()->text(500), // 'longText' yok, bu yüzden 'text' kullandık
            'price' => fake()->numberBetween(100, 999), // 3 basamaklı rastgele sayı
            'github_link' => null,
            'demo_link' => null,
            'view_count' => fake()->numberBetween(10, 99), // 2 basamaklı rastgele sayı
            'status_id' => 2,
        ];
    }
}
