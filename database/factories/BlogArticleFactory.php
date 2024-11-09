<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;
use App\Models\BlogArticle;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\BlogArticle>
 */
class BlogArticleFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    protected $model = BlogArticle::class;
    public function definition(): array
    {
        $title = $this->faker->sentence(2);
        return [
            'author_id' => 1,
            'title' => rtrim($title, '.'),
            'slug' => fake()->slug(),
            'content' => fake()->text(),
            'view_count' => fake()->randomNumber(2),
            'can_view' => 1,
        ];
    }
}
