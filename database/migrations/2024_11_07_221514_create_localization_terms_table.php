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
        Schema::create('localization_terms', function (Blueprint $table) {
            $table->string('localization_code');
            $table->foreign('localization_code')->references('code')->on('localizations')->onDelete('cascade');
            $table->string('term');
            $table->string('content');
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('localization_terms');
    }
};
