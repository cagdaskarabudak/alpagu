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
        Schema::create('projects', function (Blueprint $table) {
            $table->id();
            $table->string('name');
            $table->enum('open_source', [0, 1])->default(0);
            $table->longText('content')->nullable();
            $table->decimal('price', 11, 2)->nullable();
            $table->string('github_link')->nullable();
            $table->string('demo_link')->nullable();
            $table->integer('view_count')->default(0);
            $table->unsignedBigInteger('status_id');
            $table->foreign('status_id')->references('id')->on('project_status')->onDelete('cascade');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('projects');
    }
};
