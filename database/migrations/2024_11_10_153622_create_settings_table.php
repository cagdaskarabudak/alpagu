<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('settings', function (Blueprint $table) {
            $table->enum('blog', [1, 0]);
            $table->enum('customizer', [1, 0]);
            $table->enum('chat', [1, 0]);
            $table->enum('project_comments', [1, 0]);
            $table->enum('view_project_comments', [1, 0]);
            $table->enum('article_comments', [1, 0]);
            $table->enum('view_article_comments', [1, 0]);
            $table->enum('registerable', [1, 0]);
            $table->string('site_name');
            $table->string('logo_src');
            $table->enum('search', [1, 0]);
            $table->string('site_description');
            $table->string('site_keywords');
            $table->string('email');
            $table->string('phone');
            $table->string('name');
            $table->string('url');
            $table->string('facebook');
            $table->string('linkedin');
            $table->string('instagram');
            $table->string('x_twitter');
            $table->string('content');
            $table->string('discord');
            $table->enum('contact', [1, 0]);
            $table->enum('portfolio', [1, 0]);
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('settings');
    }
};
